
## FOOD CRUD

```
CREATE OR REPLACE FUNCTION create_food_item(
  food_input JSON
) RETURNS VOID AS $$
DECLARE
  food_name TEXT := food_input ->> 'name';
  food_desc TEXT := food_input ->> 'desc';
  food_price DECIMAL := food_input ->> 'price';
  food_isGluten BOOLEAN := food_input ->> 'isGluten';
BEGIN
  INSERT INTO "Food" ("name", "desc", "price", "isGluten")
  VALUES (food_name, food_desc, food_price, food_isGluten);
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
  food_isGluten BOOLEAN := food_input ->> 'isGluten';
BEGIN
  UPDATE "Food"
  SET "name" = food_name, "desc" = food_desc, "price" = food_price, "isGluten" = food_isGluten
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

```
CREATE OR REPLACE FUNCTION delete_food_item(
  food_id INTEGER
) RETURNS VOID AS $$
BEGIN
  DELETE FROM "Food"
  WHERE "id" = food_id;
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
  drink_size TEXT := drink_input ->> 'size';
BEGIN
  INSERT INTO "Drink" ("name", "desc", "price", "size")
  VALUES (drink_name, drink_desc, drink_price, drink_size);
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
  drink_size TEXT := drink_input ->> 'size';
BEGIN
  UPDATE "Drink"
  SET "name" = drink_name, "desc" = drink_desc, "price" = drink_price, "size" = drink_size
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
CREATE OR REPLACE FUNCTION get_all_drink_items()
RETURNS JSON AS $$
DECLARE
  drink_items JSON;
BEGIN
  SELECT json_agg(t)
  FROM (SELECT * FROM "Drink") t
  INTO drink_items;
  
  RETURN drink_items;
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

## SIDE CRUD
  
  ```
CREATE OR REPLACE FUNCTION create_side_item(
  side_input JSON
) RETURNS VOID AS $$
DECLARE
  side_name TEXT := side_input ->> 'name';
  side_desc TEXT := side_input ->> 'desc';
  side_price DECIMAL := side_input ->> 'price';
  side_isVegan BOOLEAN := side_input ->> 'isVegan';
BEGIN
  INSERT INTO "Sides" ("name", "desc", "price", "isVegan")
  VALUES (side_name, side_desc, side_price, side_isVegan);
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION update_side_item(
  side_id INTEGER,
  side_input JSON
) RETURNS VOID AS $$
DECLARE
  side_name TEXT := side_input ->> 'name';
  side_desc TEXT := side_input ->> 'desc';
  side_price DECIMAL := side_input ->> 'price';
  side_isVegan BOOLEAN := side_input ->> 'isVegan';
BEGIN
  UPDATE "Sides"
  SET "name" = side_name, "desc" = side_desc, "price" = side_price, "isVegan" = side_isVegan
  WHERE "id" = side_id;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION delete_side_item(
  side_id INTEGER
) RETURNS VOID AS $$
BEGIN
  DELETE FROM "Sides"
  WHERE "id" = side_id;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION get_all_side_items()
RETURNS JSON AS $$
DECLARE
  side_items JSON;
BEGIN
  SELECT json_agg(t)
  FROM (SELECT * FROM "Sides") t
  INTO side_items;
  
  RETURN side_items;
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION get_side_item(
  side_id INTEGER
) RETURNS JSON AS $$
DECLARE
  side_item JSON;
BEGIN
  SELECT row_to_json(t)
  FROM (SELECT * FROM "Sides" WHERE "id" = side_id) t
  INTO side_item;
  
  RETURN side_item;
END;
$$ LANGUAGE plpgsql;
```

## ORDER CRUD

```
CREATE OR REPLACE FUNCTION create_order(
  order_input JSON
) RETURNS VOID AS $$
DECLARE
  order_customer TEXT := order_input ->> 'customer';
  order_food_id INTEGER := order_input ->> 'food_id';
  order_drink_id INTEGER := order_input ->> 'drink_id';
  order_side_id INTEGER := order_input ->> 'side_id';
  order_order_at DECIMAL := order_input ->> 'order_at';
BEGIN
  INSERT INTO "Order" ("customer", "foodId", "drinkId", "sideId", "orderAt")
  VALUES (order_customer, order_food_id, order_drink_id, order_side_id, order_order_at);
END;
$$ LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION get_all_orders()
RETURNS JSON AS $$
DECLARE
  orders JSON;
BEGIN
  SELECT json_agg(t)
  FROM (SELECT * FROM "Order") t
  INTO orders;
  
  RETURN orders;
END;
$$ LANGUAGE plpgsql;
```
