/*
  Warnings:

  - You are about to drop the `ItemDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ItemDetail" DROP CONSTRAINT "ItemDetail_category_fkey";

-- DropTable
DROP TABLE "ItemDetail";

-- DropTable
DROP TABLE "items";

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Filter" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "Filter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FilterValues" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" TEXT NOT NULL,

    CONSTRAINT "FilterValues_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_category_fkey" FOREIGN KEY ("category") REFERENCES "Item"("category") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Filter" ADD CONSTRAINT "Filter_id_fkey" FOREIGN KEY ("id") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FilterValues" ADD CONSTRAINT "FilterValues_id_fkey" FOREIGN KEY ("id") REFERENCES "Filter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
