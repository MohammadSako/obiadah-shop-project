/*
  Warnings:

  - Added the required column `description` to the `CarouselImages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarouselImages" ADD COLUMN     "description" TEXT NOT NULL;
