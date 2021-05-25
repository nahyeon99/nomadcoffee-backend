-- CreateTable
CREATE TABLE "Coffee" (
    "id" SERIAL NOT NULL,
    "menu" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "genre" TEXT,

    PRIMARY KEY ("id")
);
