```
INSERT INTO "Food" ("name", "desc", "price", "isGluten")
VALUES ('Hamburger', 'A classic burger with cheese and lettuce', 8.99, TRUE),
       ('Cheeseburger', 'A classic burger with cheese and lettuce', 9.99, TRUE),
       ('Veggie Burger', 'A veggie burger with lettuce and tomato', 7.99, TRUE),
       ('Chicken Sandwich', 'A grilled chicken sandwich with avocado and tomato', 9.99, FALSE),
       ('Fries', 'Crispy fries with ketchup', 2.99, FALSE),
       ('Onion Rings', 'Battered onion rings with dipping sauce', 3.99, FALSE);

INSERT INTO "Drink" ("name", "desc", "price", "size")
VALUES ('Coca-Cola', 'Refreshing Coca-Cola soda', 1.99, '12 oz'),
       ('Diet Coke', 'Refreshing Diet Coke soda', 1.99, '12 oz'),
       ('Sprite', 'Lemon-lime soda', 1.99, '12 oz'),
       ('Lemonade', 'Freshly squeezed lemonade', 2.99, '12 oz'),
       ('Iced Tea', 'Sweet or unsweetened iced tea', 2.99, '12 oz');

INSERT INTO "Side" ("name", "desc", "price", "isVegan")
VALUES ('Mashed Potatoes', 'Creamy mashed potatoes', 3.99, TRUE),
       ('Macaroni and Cheese', 'Creamy macaroni and cheese', 3.99, FALSE),
       ('Corn', 'Sweet corn', 2.99, TRUE),
       ('Green Beans', 'Fresh green beans', 2.99, TRUE);

INSERT INTO "Order" ("customer", "foodId", "drinkId", "sideId")
VALUES ('John Doe', 1, 1, 1),
       ('Jane Doe', 2, 2, 2),
       ('John Doe', 3, 3, 3),
       ('Jane Doe', 4, 4, 4),
       ('John Doe', 5, 5, 1),
       ('Jane Doe', 6, 1, 2),
       ('John Doe', 1, 2, 3),
       ('Jane Doe', 2, 3, 4),
       ('John Doe', 3, 4, 1),
       ('Jane Doe', 4, 5, 2),
       ('John Doe', 5, 1, 3),
       ('Jane Doe', 6, 2, 4);

```