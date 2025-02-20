/*
  Warnings:

  - You are about to drop the column `itemid` on the `ItemDetail` table. All the data in the column will be lost.
  - Added the required column `category` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemDetail" DROP CONSTRAINT "ItemDetail_itemid_fkey";

-- AlterTable
ALTER TABLE "ItemDetail" DROP COLUMN "itemid",
ADD COLUMN     "category" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ItemDetail" ADD CONSTRAINT "ItemDetail_category_fkey" FOREIGN KEY ("category") REFERENCES "Item"("item_id") ON DELETE CASCADE ON UPDATE CASCADE;
