/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Item` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to drop the column `category` on the `ItemDetail` table. All the data in the column will be lost.
  - You are about to alter the column `alt` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `color` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `dashboardType` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `gender` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `price` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `size` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `type` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sub_category_id` to the `Item` table without a default value. This is not possible if the table is not empty.
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
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id");

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "category",
DROP COLUMN "id",
DROP COLUMN "typeId",
ADD COLUMN     "item_id" SERIAL NOT NULL,
ADD COLUMN     "sub_category_id" INTEGER NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("item_id");

-- AlterTable
ALTER TABLE "ItemDetail" DROP COLUMN "category",
ADD COLUMN     "item_id" INTEGER NOT NULL,
ALTER COLUMN "alt" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "color" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "dashboardType" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "gender" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "price" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "size" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "type" SET DATA TYPE VARCHAR(100);

-- DropTable
DROP TABLE "Type";

-- CreateTable
CREATE TABLE "SubCategory" (
    "sub_category_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" TEXT,
    "url" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("sub_category_id")
);

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "SubCategory"("sub_category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDetail" ADD CONSTRAINT "ItemDetail_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("item_id") ON DELETE CASCADE ON UPDATE CASCADE;
