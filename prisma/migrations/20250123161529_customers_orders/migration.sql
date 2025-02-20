-- CreateTable
CREATE TABLE "CustomersOrders" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phonenumber" TEXT NOT NULL,
    "firstline" TEXT NOT NULL,
    "secondline" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "additional" TEXT NOT NULL,

    CONSTRAINT "CustomersOrders_pkey" PRIMARY KEY ("id")
);
