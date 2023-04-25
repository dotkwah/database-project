CREATE OR REPLACE FUNCTION delete_food_item(
  food_id INTEGER
) RETURNS VOID AS $$
BEGIN
  DELETE FROM "Food"
  WHERE "id" = food_id;
END;
$$ LANGUAGE plpgsql;