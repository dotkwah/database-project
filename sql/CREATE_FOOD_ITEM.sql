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