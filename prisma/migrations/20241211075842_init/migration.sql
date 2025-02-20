/*
  Warnings:

  - A unique constraint covering the columns `[category]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemDetail" DROP CONSTRAINT "ItemDetail_category_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ItemDetail" ALTER COLUMN "category" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Item_category_key" ON "Item"("category");

-- AddForeignKey
ALTER TABLE "ItemDetail" ADD CONSTRAINT "ItemDetail_category_fkey" FOREIGN KEY ("category") REFERENCES "Item"("category") ON DELETE CASCADE ON UPDATE CASCADE;
