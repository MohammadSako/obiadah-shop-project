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
} from "./products-size";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

const formSchema = z.object({
  dashboardtype: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  color: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  titleAr: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  colorAr: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z.string().min(1, {
    message: "Username must be at least 1 characters.",
  }),
  qty: z.string().min(1, {
    message: "Username must be at least 1 characters.",
  }),
  size: z.string().min(1, { message: "Please select the product size." }),
  gender: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  type: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  category: z.string().min(1, {
    message: "Username must be at least 2 characters.",
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
interface EditData {
  title: string;
  titleAr: string;
  color: string;
  colorAr: string;
  price: string;
  qty: string;
  image: string;
  url: string;
  size: string;
  gender: string;
  type: string;
  category: string;
  description: string;
  descriptionAr: string;
  details: string;
  detailsAr: string;
  dashboardType: string;
}
interface AddFormProps {
  onUpdateProduct: (data: FormValues) => void;
  editData: Partial<EditData>;
}

export function UpdateForm({ editData, onUpdateProduct }: AddFormProps) {
  const [productType, setProductType] = useState("");
  const [genderType, setGenderType] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState(editData.url || "");
  const [uploadedImageError, setUploadedImageError] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(editData.image || "");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: editData.title || "",
      titleAr: editData.titleAr || "",
      color: editData.color || "",
      colorAr: editData.colorAr || "",
      price: editData.price || "",
      qty: editData.qty || "",
      size: editData.size || "",
      gender: editData.gender || "",
      type: editData.type || "",
      category: String(editData.category) || "",
      description: editData.description || "",
      descriptionAr: editData.descriptionAr || "",
      details: editData.details || "",
      detailsAr: editData.detailsAr || "",
      dashboardtype: editData.dashboardType || "",
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
    setUploadedImageUrl("");
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
      return { image: imageUrls, url: data?.path };
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsUploading(true);

    try {
      if (!imagePreview) {
        setUploadedImageError(true);
        console.warn("Uploaded image URL is missing.");
        return;
      }

      const uploadResult = image
        ? await handleUpload()
        : { image: imagePreview, url: uploadedImageUrl };

      if (!uploadResult || !uploadResult.image) {
        throw new Error(
          "Missing data from the upload response. Check the handleUpload function!"
        );
      }

      const { image: uploadedImage } = uploadResult;

      const data = {
        category: values.category,
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
        image: uploadedImage,
        alt: values.title,
        qty: values.qty,
      };
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
      onUpdateProduct(data);
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
      setIsUploading(false);
    } catch (error) {
      console.error("Error on submitting:", error);
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
              {productCategory === "mwatches" ||
              productCategory === "wwatches" ? (
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
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
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
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Product name" {...field} />
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
                      <FormLabel>Name Ar</FormLabel>
                      <FormControl>
                        <Input placeholder="Product name Ar" {...field} />
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
                      <FormLabel>Color</FormLabel>
                      <FormControl>
                        <Input placeholder="Product color" {...field} />
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
                      <FormLabel>Color Ar</FormLabel>
                      <FormControl>
                        <Input placeholder="Product color Ar" {...field} />
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
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="Product description" {...field} />
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
                      <FormLabel>Description Ar</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Product description Ar"
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
                      <FormLabel>Details</FormLabel>
                      <FormControl>
                        <Textarea
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
                      <FormLabel>Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Product details Ar"
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
              disabled={isUploading}
              type="submit"
              className={
                isUploading
                  ? "bg-blue-400 text-white font-bold py-2 px-4 rounded"
                  : "bg-blue-500 hover:bg-blue-600 text-white shadow-md font-bold py-2 px-4 rounded"
              }
            >
              {isUploading ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="inline w-4 h-4 mr-2 text-white animate-spin dark:text-gray-600 fill-blue-900"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Processing...
                </>
              ) : (
                "Update Product"
              )}
            </button>
          </form>
        </Form>
      </div>

      <div className="lg:basis-1/4 basis-2/4 mt-8">
        <div className="sm:col-span-2 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-4 py-4">
          <div className="text-center">
            <PhotoIcon
              aria-hidden="true"
              className="mx-auto size-12 text-gray-300"
            />
            <div className=" flex text-sm/6 text-gray-600">
              <div className="relative flex flex-col justify-center">
                {isUploading && "Uploading..."}
                {!isUploading && imagePreview && "You can choose another image"}
                {!isUploading && !imagePreview && "Upload an Image"}
                {!imagePreview && (
                  <Input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="my-2"
                  />
                )}
                {imagePreview && !isUploading && (
                  <>
                    <p
                      onClick={removeImageHandler}
                      className="absolute top-[35px] z-50 cursor-pointer right-3 text-xl text-black bg-white rounded-full w-7 h-7"
                    >
                      X
                    </p>
                    <Image
                      src={imagePreview}
                      alt={imagePreview}
                      width="250"
                      height="300"
                      style={{ margin: "auto" }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {uploadedImageError && (
          <p className="bg-red-600 text-white text-lg mt-2 rounded shadow-lg px-2 text-center">
            Select the product image!!
          </p>
        )}
      </div>
    </div>
  );
}
