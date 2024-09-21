-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "ratingCount" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "images" JSONB NOT NULL,
    "priceRange" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Featured" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,

    CONSTRAINT "Featured_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Featured_restaurantId_key" ON "Featured"("restaurantId");

-- AddForeignKey
ALTER TABLE "Featured" ADD CONSTRAINT "Featured_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
