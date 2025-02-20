"use client";

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";

import { Input } from "@/components/UI/input";
import { useToast } from "@/hooks/use-toast";
import { PhotoIcon } from "@heroicons/react/24/outline";

import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

const formSchema = z.object({
  title: z.string().min(0, {
    message: "title must be at least 2 characters.",
  }),
  description: z.string().min(0, {
    message: "description must be at least 2 characters.",
  }),
  titleAr: z.string().min(0, {
    message: "title must be at least 2 characters.",
  }),
  descriptionAr: z.string().min(0, {
    message: "description must be at least 2 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;
interface AddFormProps {
  onAddCarousel: (data: FormValues) => void;
}

export function CarouselForm({ onAddCarousel }: AddFormProps) {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadedImageError, setUploadedImageError] = useState(false);
  const [image, setImage] = useState<File | null>(null); // Store the image file
  const [imagePreview, setImagePreview] = useState(""); // Store the preview of the image
  const [isUploading, setIsUploading] = useState(false); // Track upload state
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      titleAr: "",
      descriptionAr: "",
    },
  });

  useEffect(() => {
    if (imagePreview) {
      setUploadedImageError(false);
    }
  }, [imagePreview]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const removeImageHandler = () => {
    setImage(null);
    setImagePreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    const uuid = uuidv4();
    const imageUuid = `${uuid}_${image.name.replace(/\s+/g, "")}`;
    setUploadedImageUrl(imageUuid);
    setIsUploading(true);
    try {
      const { data } = await supabase.storage
        .from("shopimages/carousel_images")
        .upload(imageUuid, image, {
          cacheControl: "3600",
          upsert: false,
        });
      const imageUrls = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data?.fullPath}`;
      return { image: imageUrls, image_id: data?.path };
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const uploadResult = await handleUpload();

      if (!uploadResult || !uploadResult.image_id) {
        throw new Error("URL is missing from the upload response");
      }
      const { image, image_id } = uploadResult;
      const data = {
        title: values.title,
        titleAr: values.titleAr,
        description: values.description,
        descriptionAr: values.descriptionAr,
        image: image,
        imageid: image_id, //we usa this to delete the image
        alt: values.title,
      };
      if (!imagePreview && !uploadedImageUrl) {
        setUploadedImageError(true);
        return;
      } else {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(values, null, 2)}
              </code>
            </pre>
          ),
        });
        onAddCarousel(data);
        form.reset({
          title: "",
          description: "",
          titleAr: "",
          descriptionAr: "",
        });
        setUploadedImageUrl("");
        setImagePreview("");
        removeImageHandler();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="">
        {!uploadedImageUrl && (
          <div className="sm:col-span-2 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-4 py-4">
            <div className="text-center">
              <PhotoIcon
                aria-hidden="true"
                className="mx-auto size-12 text-gray-300"
              />
              <div className=" flex text-sm/6 text-gray-600">
                <div className="relative flex flex-col justify-center">
                  {isUploading && "Uploading..."}
                  {!isUploading &&
                    imagePreview &&
                    "Click to choose another image"}
                  {!isUploading && !imagePreview && (
                    <>
                      <div>
                        <p>Upload a Carousel Image</p>
                        <p>Image Size: w 640px - h 360px, approximately</p>
                      </div>

                      <Input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="my-2"
                      />
                    </>
                  )}
                  {imagePreview && !isUploading && (
                    <>
                      <p
                        onClick={removeImageHandler}
                        className="absolute top-[37px] z-50 cursor-pointer right-3 text-xl text-black bg-white rounded-full w-7 h-7"
                      >
                        X
                      </p>
                      <Image
                        src={imagePreview}
                        alt={imagePreview}
                        width="640"
                        height="360"
                        style={{ margin: "auto" }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {uploadedImageError && (
          <p className="bg-red-600 text-white text-lg mt-2 rounded shadow-lg px-2 text-center">
            Select the Carousel image!!
          </p>
        )}
      </div>
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left flex" dir="ltr">
                        Carousel Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="ltr"
                          placeholder="Carousel title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left flex" dir="ltr">
                        Carousel Description
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="ltr"
                          placeholder="Carousel description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="titleAr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-right flex" dir="rtl">
                        عنوان العرض التقديمي
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="rtl"
                          placeholder="عنوان العرض التقديمي باللغة العربية"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="descriptionAr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-right flex" dir="rtl">
                        وصف العرض التقديمي
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="rtl"
                          placeholder="وصف العرض التقديمي باللغة العربية"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Carousel
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}
