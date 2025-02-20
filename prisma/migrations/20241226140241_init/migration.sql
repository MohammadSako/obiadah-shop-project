/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `item_id` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `sub_category_id` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `item_id` on the `ItemDetail` table. All the data in the column will be lost.
  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[category]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_sub_category_id_fkey";

-- DropForeignKey
ALTER TABLE "ItemDetail" DROP CONSTRAINT "ItemDetail_item_id_fkey";

-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_category_id_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "category_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "image" DROP NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "item_id",
DROP COLUMN "sub_category_id",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "typeId" INTEGER NOT NULL,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "image" DROP NOT NULL,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ItemDetail" DROP COLUMN "item_id",
ADD COLUMN     "category" TEXT NOT NULL,
ALTER COLUMN "alt" SET DATA TYPE TEXT,
ALTER COLUMN "color" SET DATA TYPE TEXT,
ALTER COLUMN "dashboardType" SET DATA TYPE TEXT,
ALTER COLUMN "gender" SET DATA TYPE TEXT,
ALTER COLUMN "price" SET DATA TYPE TEXT,
ALTER COLUMN "size" SET DATA TYPE TEXT,
ALTER COLUMN "type" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "SubCategory";

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "categoryId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_category_key" ON "Item"("category");

-- AddForeignKey
ALTER TABLE "Type" ADD CONSTRAINT "Type_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDetail" ADD CONSTRAINT "ItemDetail_category_fkey" FOREIGN KEY ("category") REFERENCES "Item"("category") ON DELETE CASCADE ON UPDATE CASCADE;
