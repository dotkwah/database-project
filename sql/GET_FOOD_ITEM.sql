CREATE OR REPLACE FUNCTION get_food_item(
  food_id INTEGER
) RETURNS JSON AS $$
DECLARE
  food_item JSON;
BEGIN
  SELECT row_to_json(t)
  FROM (SELECT * FROM "Food" WHERE "id" = food_id) t
  INTO food_item;
  
  RETURN food_item;
END;
$$ LANGUAGE plpgsql;