CREATE OR REPLACE FUNCTION create_order(
  order_input JSON
) RETURNS VOID AS $$
DECLARE
  order_customer TEXT := order_input ->> 'customer';
  order_food_id INTEGER := order_input ->> 'food_id';
  order_drink_id INTEGER := order_input ->> 'drink_id';
  order_side_id INTEGER := order_input ->> 'side_id';
  order_order_at DECIMAL := order_input ->> 'order_at';
BEGIN
  INSERT INTO "Order" ("customer", "foodId", "drinkId", "sideId", "orderAt")
  VALUES (order_customer, order_food_id, order_drink_id, order_side_id, order_order_at);
END;
$$ LANGUAGE plpgsql;