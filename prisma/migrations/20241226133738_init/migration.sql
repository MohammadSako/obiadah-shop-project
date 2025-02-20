/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `ItemDetail` table. All the data in the column will be lost.
  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `image` on table `Category` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `sub_category_id` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Made the column `image` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `item_id` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_typeId_fkey";

-- DropForeignKey
ALTER TABLE "ItemDetail" DROP CONSTRAINT "ItemDetail_category_fkey";

-- DropForeignKey
ALTER TABLE "Type" DROP CONSTRAINT "Type_categoryId_fkey";

-- DropIndex
DROP INDEX "Item_category_key";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD COLUMN     "category_id" SERIAL NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id");

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "category",
DROP COLUMN "id",
DROP COLUMN "typeId",
ADD COLUMN     "item_id" SERIAL NOT NULL,
ADD COLUMN     "sub_category_id" INTEGER NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("item_id");

-- AlterTable
ALTER TABLE "ItemDetail" DROP COLUMN "category",
ADD COLUMN     "item_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Type";

-- CreateTable
CREATE TABLE "SubCategory" (
    "sub_category_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("sub_category_id")
);

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "SubCategory"("sub_category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDetail" ADD CONSTRAINT "ItemDetail_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("item_id") ON DELETE CASCADE ON UPDATE CASCADE;
