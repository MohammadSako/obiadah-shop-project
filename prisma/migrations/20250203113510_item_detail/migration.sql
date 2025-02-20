/*
  Warnings:

  - Added the required column `descriptionAr` to the `Advertisements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleAr` to the `Advertisements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionAr` to the `BrandsImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleAr` to the `BrandsImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionAr` to the `CarouselImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleAr` to the `CarouselImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorAr` to the `CustomersItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionAr` to the `CustomersItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detailsAr` to the `CustomersItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleAr` to the `CustomersItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorAr` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionAr` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detailsAr` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleAr` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Advertisements" ADD COLUMN     "descriptionAr" TEXT NOT NULL,
ADD COLUMN     "titleAr" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BrandsImages" ADD COLUMN     "descriptionAr" TEXT NOT NULL,
ADD COLUMN     "titleAr" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CarouselImages" ADD COLUMN     "descriptionAr" TEXT NOT NULL,
ADD COLUMN     "titleAr" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CustomersItem" ADD COLUMN     "colorAr" TEXT NOT NULL,
ADD COLUMN     "descriptionAr" TEXT NOT NULL,
ADD COLUMN     "detailsAr" TEXT NOT NULL,
ADD COLUMN     "titleAr" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ItemDetail" ADD COLUMN     "colorAr" TEXT NOT NULL,
ADD COLUMN     "descriptionAr" TEXT NOT NULL,
ADD COLUMN     "detailsAr" TEXT NOT NULL,
ADD COLUMN     "titleAr" TEXT NOT NULL;
