-- CreateTable
CREATE TABLE "CarouselImages" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "CarouselImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandsImages" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "BrandsImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advertisements" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Advertisements_pkey" PRIMARY KEY ("id")
);
