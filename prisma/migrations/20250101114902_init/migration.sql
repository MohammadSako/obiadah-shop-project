/*
  Warnings:

  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `SubCategory` table. All the data in the column will be lost.
  - Added the required column `title` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `SubCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SubCategory" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;
