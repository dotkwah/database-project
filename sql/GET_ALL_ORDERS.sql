CREATE OR REPLACE FUNCTION get_all_orders()
RETURNS JSON AS $$
DECLARE
  orders JSON;
BEGIN
  SELECT json_agg(t)
  FROM (SELECT * FROM "Order") t
  INTO orders;
  
  RETURN orders;
END;
$$ LANGUAGE plpgsql;