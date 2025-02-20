/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Advertisements` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `BrandsImages` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `CarouselImages` table. All the data in the column will be lost.
  - Added the required column `image` to the `Advertisements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageid` to the `Advertisements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `BrandsImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `BrandsImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageid` to the `BrandsImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `CarouselImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageid` to the `CarouselImages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Advertisements" DROP COLUMN "imageUrl",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "imageid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BrandsImages" DROP COLUMN "imageUrl",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "imageid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CarouselImages" DROP COLUMN "imageUrl",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "imageid" TEXT NOT NULL;
