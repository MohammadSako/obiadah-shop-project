/*
  Warnings:

  - You are about to alter the column `name` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `alt` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `color` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `dashboardType` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `gender` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `price` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `size` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `type` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `name` on the `SubCategory` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_category_id_fkey";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "ItemDetail" ALTER COLUMN "alt" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "color" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "dashboardType" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "gender" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "price" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "size" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "type" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "SubCategory" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE CASCADE ON UPDATE CASCADE;
