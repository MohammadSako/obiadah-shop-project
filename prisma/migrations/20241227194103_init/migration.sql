/*
  Warnings:

  - You are about to drop the column `item_id` on the `ItemDetail` table. All the data in the column will be lost.
  - Added the required column `itemid` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemDetail" DROP CONSTRAINT "ItemDetail_item_id_fkey";

-- AlterTable
ALTER TABLE "ItemDetail" DROP COLUMN "item_id",
ADD COLUMN     "itemid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ItemDetail" ADD CONSTRAINT "ItemDetail_itemid_fkey" FOREIGN KEY ("itemid") REFERENCES "Item"("item_id") ON DELETE CASCADE ON UPDATE CASCADE;
