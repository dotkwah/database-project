CREATE OR REPLACE FUNCTION get_all_food_items() 
RETURNS JSON AS $$
DECLARE
  food_items JSON;
BEGIN
  SELECT json_agg(t)
  FROM (SELECT * FROM "Food") t
  INTO food_items;
  
  RETURN food_items;
END;
$$ LANGUAGE plpgsql;