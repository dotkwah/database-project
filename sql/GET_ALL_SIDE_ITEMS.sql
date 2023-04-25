CREATE OR REPLACE FUNCTION get_all_side_items()
RETURNS JSON AS $$
DECLARE
  side_items JSON;
BEGIN
  SELECT json_agg(t)
  FROM (SELECT * FROM "Side") t
  INTO side_items;
  
  RETURN side_items;
END;
$$ LANGUAGE plpgsql;