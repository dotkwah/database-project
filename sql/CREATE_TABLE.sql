CREATE TABLE "Food" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "desc" TEXT NOT NULL,
  "isGluten" BOOLEAN NOT NULL,
  "price" DECIMAL(65,30) NOT NULL
);

CREATE TABLE "Drink" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "desc" TEXT NOT NULL,
  "size" TEXT NOT NULL,
  "price" DECIMAL(65,30) NOT NULL
);

CREATE TABLE "Sides" {
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "desc" TEXT NOT NULL,
  "isVegan" BOOLEAN NOT NULL,
  "price" DECIMAL(65,30) NOT NULL
}

CREATE TABLE "Order" (
  "id" SERIAL PRIMARY KEY,
  "customer" TEXT NOT NULL,
  "orderAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "foodId" INTEGER NOT NULL,
  "drinkId" INTEGER NOT NULL,
  "sidesId" INTEGER NOT NULL,
  FOREIGN KEY ("foodId") REFERENCES "Food"("id"),
  FOREIGN KEY ("drinkId") REFERENCES "Drink"("id"),
  FOREIGN KEY ("sidesId") REFERENCES "Side"("id")
);