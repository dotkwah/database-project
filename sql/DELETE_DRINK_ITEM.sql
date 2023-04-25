CREATE OR REPLACE FUNCTION delete_drink_item(
  drink_id INTEGER
) RETURNS VOID AS $$
BEGIN
  DELETE FROM "Drink"
  WHERE "id" = drink_id;
END;
$$ LANGUAGE plpgsql;