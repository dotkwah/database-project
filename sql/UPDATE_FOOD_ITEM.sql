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