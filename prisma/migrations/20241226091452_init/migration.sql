/*
  Warnings:

  - You are about to drop the `Items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Filter" DROP CONSTRAINT "Filter_id_fkey";

-- DropForeignKey
ALTER TABLE "Items" DROP CONSTRAINT "Items_category_fkey";

-- DropTable
DROP TABLE "Items";

-- CreateTable
CREATE TABLE "ItemDetail" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "ItemDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ItemDetail" ADD CONSTRAINT "ItemDetail_category_fkey" FOREIGN KEY ("category") REFERENCES "Item"("category") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Filter" ADD CONSTRAINT "Filter_id_fkey" FOREIGN KEY ("id") REFERENCES "ItemDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
