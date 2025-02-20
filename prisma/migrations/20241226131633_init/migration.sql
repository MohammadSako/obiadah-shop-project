/*
  Warnings:

  - You are about to drop the column `imageId` on the `ItemDetail` table. All the data in the column will be lost.
  - You are about to drop the `Filter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FilterValues` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `color` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dashboardType` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Filter" DROP CONSTRAINT "Filter_id_fkey";

-- DropForeignKey
ALTER TABLE "FilterValues" DROP CONSTRAINT "FilterValues_id_fkey";

-- AlterTable
ALTER TABLE "ItemDetail" DROP COLUMN "imageId",
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "dashboardType" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- DropTable
DROP TABLE "Filter";

-- DropTable
DROP TABLE "FilterValues";
