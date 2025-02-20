/*
  Warnings:

  - The primary key for the `ItemDetail` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ItemDetail" DROP CONSTRAINT "ItemDetail_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ItemDetail_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ItemDetail_id_seq";
