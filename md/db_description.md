# db_description.md

USING PostgreSQL

1. Food Table
- id SERIAL (Primary Key)
- name TEXT
- desc TEXT
- price

2. Drink Table
- id SERIAL (Primary Key)
- name TEXT
- desc DECIMAL
- price DECIMAL

3. OrderItem Table
- id SERIAL (Primary Key)
- orderId INT (Foreign Key references Order.OrderID)
- foodId INT (Foreign Key references Food.FoodID)
- drinkId INT (Foreign Key references Drink.DrinkID)
- quantity INT

4. Order Table
- id SERIAL (Primary Key)
- customer TEXT
- orderAt DATE (Default Now)
- price DECIMAL

The relations between the tables are as follows:

- The OrderItem table has a many-to-one relationship with the Food and Drink tables, since each OrderItem can be associated with only one food item or one drink item, but each food item or drink item can be associated with multiple OrderItems.
- The OrderItem table also has a many-to-one relationship with the Order table, since each OrderItem belongs to one Order, but each Order can have multiple OrderItems.

The foreign key constraints are:

- The OrderItem table's OrderID column references the Order table's id column, ensuring that every OrderItem belongs to an existing Order.
- The OrderItem table's FoodID column references the Food table's id column, ensuring that every OrderItem's FoodID matches an existing food item.
- The OrderItem table's DrinkID column references the Drink table's id column, ensuring that every OrderItem's DrinkID matches an existing drink item.

## SAMPLE DATA

