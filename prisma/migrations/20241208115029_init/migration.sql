/*
  Warnings:

  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `itemId` on the `ItemDetail` table. All the data in the column will be lost.
  - Added the required column `category` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dashboardType` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemDetail" DROP CONSTRAINT "ItemDetail_itemId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Item_id_seq";

-- AlterTable
ALTER TABLE "ItemDetail" DROP COLUMN "itemId",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "dashboardType" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ItemDetail" ADD CONSTRAINT "ItemDetail_category_fkey" FOREIGN KEY ("category") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
