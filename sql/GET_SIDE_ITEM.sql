CREATE OR REPLACE FUNCTION get_side_item(
  side_id INTEGER
) RETURNS JSON AS $$
DECLARE
  side_item JSON;
BEGIN
  SELECT row_to_json(t)
  FROM (SELECT * FROM "Sides" WHERE "id" = side_id) t
  INTO side_item;
  
  RETURN side_item;
END;
$$ LANGUAGE plpgsql;