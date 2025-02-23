/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_sub_category_id_fkey";

-- DropForeignKey
ALTER TABLE "ItemDetail" DROP CONSTRAINT "ItemDetail_category_fkey";

-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_category_id_fkey";

-- AlterTable
ALTER TABLE "ItemDetail" ALTER COLUMN "category" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Item";

-- DropTable
DROP TABLE "SubCategory";
