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
import { Textarea } from "@/components/UI/textarea";
import {
  ItemType,
  PantsSize,
  MenLowerClothes,
  MenShoes,
  MenTopClothes,
  ProductGender,
  ProductSize,
  ProductType,
  ShoesSize,
  WatcheSize,
  WomenLowerClothes,
  WomenShoes,
  WomenTopClothes,
  BagTypes,
} from "./products-size";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

const formSchema = z.object({
  dashboardtype: z.string().min(1, {
    message: "Please select the product dashboard type.",
  }),
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  titleAr: z.string().min(2, {
    message: "titleAr must be at least 2 characters.",
  }),
  color: z.string().min(2, {
    message: "color must be at least 2 characters.",
  }),
  colorAr: z.string().min(2, {
    message: "colorAr must be at least 2 characters.",
  }),
  price: z.string().min(1, {
    message: "price must be at least 1 characters.",
  }),
  qty: z.string().min(1, {
    message: "qty must be at least 1 characters.",
  }),
  size: z.string().min(1, { message: "Please select the product size." }),
  gender: z.string().min(1, {
    message: "Please select the product gender.",
  }),
  type: z.string().min(1, {
    message: "Please select the product type.",
  }),
  category: z.string().min(1, {
    message: "Please select the product category.",
  }),
  description: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  descriptionAr: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  details: z
    .string()
    .min(2, {
      message: "Details must be at least 10 characters.",
    })
    .max(160, {
      message: "Details must not be longer than 30 characters.",
    }),
  detailsAr: z
    .string()
    .min(2, {
      message: "Details must be at least 10 characters.",
    })
    .max(160, {
      message: "Details must not be longer than 30 characters.",
    }),
});

type FormValues = z.infer<typeof formSchema>;
interface AddFormProps {
  onAddProduct: (data: FormValues) => void;
}

export function DashForm({ onAddProduct }: AddFormProps) {
  const [productType, setProductType] = useState("");
  const [genderType, setGenderType] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadedImageError, setUploadedImageError] = useState(true);
  const [image, setImage] = useState<File | null>(null); // Store the image file
  const [imagePreview, setImagePreview] = useState(""); // Store the preview of the image
  const [isUploading, setIsUploading] = useState(false); // Track upload state
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      titleAr: "",
      color: "",
      colorAr: "",
      price: "",
      size: "",
      gender: "",
      type: "",
      category: "",
      description: "",
      descriptionAr: "",
      details: "",
      detailsAr: "",
      dashboardtype: "",
      qty: "",
    },
  });

  const watchedProduct = form.watch("type");
  const watchedGender = form.watch("gender");
  const watchedCategory = form.watch("category");

  useEffect(() => {
    setProductType(watchedProduct);
    setGenderType(watchedGender);
    setProductCategory(watchedCategory);
  }, [watchedProduct, watchedGender, watchedCategory]);

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
    setUploadedImageError(true);
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
        .from("shopimages")
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
        throw new Error("image data is missing from the upload response");
      }
      const { image, image_id } = uploadResult;
      const data = {
        color: values.color,
        colorAr: values.colorAr,
        description: values.description,
        descriptionAr: values.descriptionAr,
        details: values.details,
        detailsAr: values.detailsAr,
        gender: values.gender,
        price: values.price,
        size: values.size,
        title: values.title,
        titleAr: values.titleAr,
        type: values.type,
        dashboardtype: values.dashboardtype,
        image: image,
        imageid: image_id,
        category: values.category,
        qty: values.qty,
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
        onAddProduct(data);
        form.reset({
          title: "",
          titleAr: "",
          color: "",
          colorAr: "",
          price: "",
          size: "",
          gender: "",
          type: "",
          category: "",
          description: "",
          descriptionAr: "",
          details: "",
          detailsAr: "",
          dashboardtype: "",
          qty: "",
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
    <div className="flex sm:flex-row gap-8 flex-col-reverse">
      <div className="basis-3/4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="dashboardtype"
                  render={({ field }) => (
                    <ItemType
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <ProductGender
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <ProductType
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    />
                  )}
                />
              </div>

              {/* category */}
              {productType === "top" && genderType === "men" && (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <MenTopClothes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              )}
              {productType === "top" && genderType === "women" && (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <WomenTopClothes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              )}
              {productType === "lower" && genderType === "men" && (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <MenLowerClothes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              )}
              {productType === "lower" && genderType === "women" && (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <WomenLowerClothes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              )}
              {productType === "shoes" && genderType === "men" && (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <MenShoes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              )}
              {productType === "shoes" && genderType === "women" && (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <WomenShoes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              )}

              {/* size */}
              {productCategory === "9" || productCategory === "10" ? (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <WatcheSize
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              ) : productType === "shoes" ? (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <ShoesSize
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              ) : productCategory === "11" || productCategory === "12" ? (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <BagTypes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              ) : productCategory === "13" ||
                productCategory === "14" ||
                productCategory === "15" ||
                productCategory === "16" ? (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <PantsSize
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              ) : (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <ProductSize
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              )}
              <div className="sm:col-span-6 md:col-span-3 mt-2.5">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left flex" dir="ltr">
                        Price
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="ltr"
                          placeholder="Product price"
                          type="number"
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
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-left flex" dir="ltr">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="ltr"
                          placeholder="Product name"
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
                        الاسم
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="rtl"
                          placeholder="اسم المنتج باللغة العربية"
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
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-left flex" dir="ltr">
                        Color
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="ltr"
                          placeholder="Product color"
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
                  name="colorAr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-right flex" dir="rtl">
                        اللون
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="rtl"
                          placeholder="لون المنتج باللغة العربية"
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
                      <FormLabel className="text-lg text-left flex" dir="ltr">
                        Description
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="ltr"
                          placeholder="Product description"
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
                        الوصف
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="rtl"
                          placeholder="وصف المنتج باللغة العربية"
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
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-left flex" dir="ltr">
                        Details
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          dir="ltr"
                          placeholder="Product details"
                          className="resize-none"
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
                  name="detailsAr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-right flex" dir="rtl">
                        التفاصيل
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          dir="rtl"
                          placeholder="تفاصيل المنتج باللغة العربية"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3 mt-2.5">
                <FormField
                  control={form.control}
                  name="qty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left flex" dir="ltr">
                        Amount of Product or Quantity Available
                      </FormLabel>
                      <FormControl>
                        <Input
                          dir="ltr"
                          placeholder="Product Quantity"
                          type="number"
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
              disabled={uploadedImageError}
              type="submit"
              className={`font-bold py-2 px-4 rounded ${
                uploadedImageError
                  ? "bg-blue-300 text-white cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
              }`}
            >
              Add Product
            </button>
          </form>
        </Form>
      </div>

      <div className="lg:basis-1/4 basis-2/4 mt-8">
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
                  {!isUploading && !imagePreview && "Upload an Image"}
                  <Input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="my-2"
                  />
                  {imagePreview && !isUploading && (
                    <>
                      <p
                        onClick={removeImageHandler}
                        className="absolute top-[90px] z-50 cursor-pointer right-3 text-xl text-black bg-white rounded-full w-7 h-7"
                      >
                        X
                      </p>
                      <Image
                        src={imagePreview}
                        alt={imagePreview}
                        width="230"
                        height="300"
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
            Select the product image!!
          </p>
        )}
      </div>
    </div>
  );
}
