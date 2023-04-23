```
CREATE TABLE "Food" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "desc" TEXT NOT NULL,
  "price" DECIMAL(65,30) NOT NULL
);

CREATE TABLE "Drink" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "desc" TEXT NOT NULL,
  "price" DECIMAL(65,30) NOT NULL
);

CREATE TABLE "OrderItem" (
  "id" SERIAL PRIMARY KEY,
  "quantity" INTEGER NOT NULL,
  "foodId" INTEGER NOT NULL,
  "drinkId" INTEGER NOT NULL,
  "orderId" INTEGER NOT NULL,
  FOREIGN KEY ("foodId") REFERENCES "Food"("id"),
  FOREIGN KEY ("drinkId") REFERENCES "Drink"("id"),
  FOREIGN KEY ("orderId") REFERENCES "Order"("id")
);

CREATE TABLE "Order" (
  "id" SERIAL PRIMARY KEY,
  "customer" TEXT NOT NULL,
  "orderAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "price" DECIMAL NOT NULL
);

```