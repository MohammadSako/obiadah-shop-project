"use client";
import { deleteCarouselImage, deleteCarouselById } from "@/lib/db/products";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const ImagesList = ({ data }) => {
  async function carouselDeleteHandler(id, imageid) {
    try {
      await deleteCarouselImage(imageid);
      await deleteCarouselById(id);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <div className="mt-20">
      <h2 className="text-2xl text-gray-700 my-4">Carousel Images</h2>
      <div className="">
        <div className="flex flex-col h-auto gap-2">
          {data.map((image) => (
            <div key={image.id}>
              <div
                key={image.id}
                className="flex flex-row justify-between items-center border-2 border-gray-200 rounded-lg p-4"
              >
                <div className="flex md:flex-row flex-col gap-4 md:h-20">
                  <Image
                    alt={image.image}
                    src={image.image}
                    width={200}
                    height={30}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col w-60 items-center justify-center">
                    <p className="text-2xl text-gray-500">{image.title}</p>
                    <p className="text-md text-gray-500">{image.description}</p>
                  </div>
                  <div className="border-r-2 border-gray-200" />
                  <div className="flex flex-col w-60 items-center justify-center">
                    <p className="text-2xl text-gray-500">{image.titleAr}</p>
                    <p className="text-md text-gray-500">
                      {image.descriptionAr}
                    </p>
                  </div>
                </div>

                <div className="">
                  <MdDelete
                    size={50}
                    className="cursor-pointer hover:*:text-red-600"
                    onClick={() =>
                      carouselDeleteHandler(image.id, image.imageid)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesList;
