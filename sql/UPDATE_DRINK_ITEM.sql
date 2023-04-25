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