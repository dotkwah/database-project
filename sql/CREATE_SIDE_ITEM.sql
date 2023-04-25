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