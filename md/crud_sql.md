
## FOOD CRUD

```
CREATE OR REPLACE FUNCTION create_food_item(
  food_input JSON
) RETURNS VOID AS $$
DECLARE
  food_name TEXT := food_input ->> 'name';
  food_desc TEXT := food_input ->> 'desc';
  food_price DECIMAL := food_input ->> 'price';
BEGIN
  INSERT INTO "Food" ("name", "desc", "price")
  VALUES (food_name, food_desc, food_price);
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION update_food_item(
  food_id INTEGER,
  food_input JSON
) RETURNS VOID AS $$
DECLARE
  food_name TEXT := food_input ->> 'name';
  food_desc TEXT := food_input ->> 'desc';
  food_price DECIMAL := food_input ->> 'price';
BEGIN
  UPDATE "Food"
  SET "name" = food_name, "desc" = food_desc, "price" = food_price
  WHERE "id" = food_id;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION get_all_food_items() 
RETURNS JSON AS $$
DECLARE
  food_items JSON;
BEGIN
  SELECT json_agg(t)
  FROM (SELECT * FROM "Food") t
  INTO food_items;
  
  RETURN food_items;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION get_food_item(
  food_id INTEGER
) RETURNS JSON AS $$
DECLARE
  food_item JSON;
BEGIN
  SELECT row_to_json(t)
  FROM (SELECT * FROM "Food" WHERE "id" = food_id) t
  INTO food_item;
  
  RETURN food_item;
END;
$$ LANGUAGE plpgsql;
```

## DRINK CRUD

```
CREATE OR REPLACE FUNCTION create_drink_item(
  drink_input JSON
) RETURNS VOID AS $$
DECLARE
  drink_name TEXT := drink_input ->> 'name';
  drink_desc TEXT := drink_input ->> 'desc';
  drink_price DECIMAL := drink_input ->> 'price';
BEGIN
  INSERT INTO "Drink" ("name", "desc", "price")
  VALUES (drink_name, drink_desc, drink_price);
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION update_drink_item(
  drink_id INTEGER,
  drink_input JSON
) RETURNS VOID AS $$
DECLARE
  drink_name TEXT := drink_input ->> 'name';
  drink_desc TEXT := drink_input ->> 'desc';
  drink_price DECIMAL := drink_input ->> 'price';
BEGIN
  UPDATE "Drink"
  SET "name" = drink_name, "desc" = drink_desc, "price" = drink_price
  WHERE "id" = drink_id;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION delete_drink_item(
  drink_id INTEGER
) RETURNS VOID AS $$
BEGIN
  DELETE FROM "Drink"
  WHERE "id" = drink_id;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION delete_drink_item(
  drink_id INTEGER
) RETURNS VOID AS $$
BEGIN
  DELETE FROM "Drink"
  WHERE "id" = drink_id;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION get_drink_item(
  drink_id INTEGER
) RETURNS JSON AS $$
DECLARE
  drink_item JSON;
BEGIN
  SELECT row_to_json(t)
  FROM (SELECT * FROM "Drink" WHERE "id" = drink_id) t
  INTO drink_item;
  
  RETURN drink_item;
END;
$$ LANGUAGE plpgsql;
```

## ORDER CRUD

```
CREATE OR REPLACE FUNCTION create_order(
  order_input JSON
) RETURNS VOID AS $$
DECLARE
  customer_name TEXT := order_input ->> 'customer';
  order_price DECIMAL := order_input ->> 'price';
  order_time TIMESTAMP := order_input ->> 'orderAt';
BEGIN
  INSERT INTO "Order" ("customer", "price", "orderAt")
  VALUES (customer_name, order_price, order_time);
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION update_order(
  order_id INTEGER,
  order_input JSON
) RETURNS VOID AS $$
DECLARE
  customer_name TEXT := order_input ->> 'customer';
  order_price DECIMAL := order_input ->> 'price';
  order_time TIMESTAMP := order_input ->> 'orderAt';
BEGIN
  UPDATE "Order"
  SET "customer" = customer_name, "price" = order_price, "orderAt" = order_time
  WHERE "id" = order_id;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION delete_order(
  order_id INTEGER
) RETURNS VOID AS $$
BEGIN
  DELETE FROM "Order"
  WHERE "id" = order_id;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION get_all_orders() 
RETURNS JSON AS $$
DECLARE
  order_items JSON;
BEGIN
  SELECT json_agg(t)
  FROM (SELECT * FROM "Order") t
  INTO order_items;
  
  RETURN order_items;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION get_order(
  order_id INTEGER
) RETURNS JSON AS $$
DECLARE
  order_item JSON;
BEGIN
  SELECT row_to_json(t)
  FROM (SELECT * FROM "Order" WHERE "id" = order_id) t
  INTO order_item;
  
  RETURN order_item;
END;
$$ LANGUAGE plpgsql;
```

## ORDERITEM CRUD

```
CREATE OR REPLACE FUNCTION create_order_item(
  order_item_input JSON
) RETURNS VOID AS $$
DECLARE
  food_id INTEGER := order_item_input ->> 'foodId';
  drink_id INTEGER := order_item_input ->> 'drinkId';
  order_id INTEGER := order_item_input ->> 'orderId';
  quantity INTEGER := order_item_input ->> 'quantity';
BEGIN
  INSERT INTO "OrderItem" ("foodId", "drinkId", "orderId", "quantity")
  VALUES (food_id, drink_id, order_id, quantity);
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION update_order_item(
  order_item_id INTEGER,
  order_item_input JSON
) RETURNS VOID AS $$
DECLARE
  food_id INTEGER := order_item_input ->> 'foodId';
  drink_id INTEGER := order_item_input ->> 'drinkId';
  order_id INTEGER := order_item_input ->> 'orderId';
  quantity INTEGER := order_item_input ->> 'quantity';
BEGIN
  UPDATE "OrderItem"
  SET "foodId" = food_id, "drinkId" = drink_id, "orderId" = order_id, "quantity" = quantity
  WHERE "id" = order_item_id;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION delete_order_item(
  order_item_id INTEGER
) RETURNS VOID AS $$
BEGIN
  DELETE FROM "OrderItem"
  WHERE "id" = order_item_id;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION get_all_order_items() 
RETURNS JSON AS $$
DECLARE
  order_item_list JSON;
BEGIN
  SELECT json_agg(t)
  FROM (SELECT * FROM "OrderItem") t
  INTO order_item_list;
  
  RETURN order_item_list;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION get_order_item(
  order_item_id INTEGER
) RETURNS JSON AS $$
DECLARE
  order_item JSON;
BEGIN
  SELECT row_to_json(t)
  FROM (SELECT * FROM "OrderItem" WHERE "id" = order_item_id) t
  INTO order_item;
  
  RETURN order_item;
END;
$$ LANGUAGE plpgsql;
```