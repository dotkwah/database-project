CREATE OR REPLACE FUNCTION get_all_drink_items()
RETURNS JSON AS $$
DECLARE
  drink_items JSON;
BEGIN
  SELECT json_agg(t)
  FROM (SELECT * FROM "Drink") t
  INTO drink_items;
  
  RETURN drink_items;
END;
$$ LANGUAGE plpgsql;