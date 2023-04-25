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
  UPDATE "Side"
  SET "name" = side_name, "desc" = side_desc, "price" = side_price, "isVegan" = side_isVegan
  WHERE "id" = side_id;
END;
$$ LANGUAGE plpgsql;