```
INSERT INTO "Food" ("name", "desc", "price")
VALUES ('Hamburger', 'A classic burger with cheese and lettuce', 8.99),
       ('Chicken Sandwich', 'A grilled chicken sandwich with avocado and tomato', 9.99),
       ('Fries', 'Crispy fries with ketchup', 2.99),
       ('Onion Rings', 'Battered onion rings with dipping sauce', 3.99);

INSERT INTO "Drink" ("name", "desc", "price")
VALUES ('Coca-Cola', 'Refreshing Coca-Cola soda', 1.99),
       ('Sprite', 'Lemon-lime soda', 1.99),
       ('Lemonade', 'Freshly squeezed lemonade', 2.99),
       ('Iced Tea', 'Sweet or unsweetened iced tea', 2.99);

INSERT INTO "Order" ("customer", "price")
VALUES ('John Doe', 12.98),
       ('Jane Smith', 18.97);

INSERT INTO "OrderItem" ("quantity", "foodId", "drinkId", "orderId")
VALUES (1, 1, 2, 1),
       (2, 2, 3, 1),
       (1, 3, 4, 2);
```