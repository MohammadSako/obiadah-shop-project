-- CreateTable
CREATE TABLE "top_men_categories" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tshirts" TEXT NOT NULL,
    "shirts" TEXT NOT NULL,
    "woolblouse" TEXT NOT NULL,
    "hats" TEXT NOT NULL,
    "watches" TEXT NOT NULL,

    CONSTRAINT "top_men_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lower_men_categories" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "jeans" TEXT NOT NULL,
    "pants" TEXT NOT NULL,
    "socks" TEXT NOT NULL,
    "belts" TEXT NOT NULL,

    CONSTRAINT "lower_men_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "top_women_categories" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tshirts" TEXT NOT NULL,
    "shirts" TEXT NOT NULL,
    "woolblouse" TEXT NOT NULL,
    "hats" TEXT NOT NULL,
    "watches" TEXT NOT NULL,
    "bags" TEXT NOT NULL,

    CONSTRAINT "top_women_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lower_women_categories" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "jeans" TEXT NOT NULL,
    "pants" TEXT NOT NULL,
    "socks" TEXT NOT NULL,
    "belts" TEXT NOT NULL,

    CONSTRAINT "lower_women_categories_pkey" PRIMARY KEY ("id")
);
