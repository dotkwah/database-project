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