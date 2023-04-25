CREATE OR REPLACE FUNCTION delete_side_item(
  side_id INTEGER
) RETURNS VOID AS $$
BEGIN
  DELETE FROM "Sides"
  WHERE "id" = side_id;
END;
$$ LANGUAGE plpgsql;