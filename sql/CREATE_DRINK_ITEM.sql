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