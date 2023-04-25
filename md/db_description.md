# db_description.md

USING PostgreSQL

1. Food Table
- id SERIAL (Primary Key)
- name TEXT
- desc TEXT
- price DECIMAL
- isGluten BOOLEAN

2. Drink Table
- id SERIAL (Primary Key)
- name TEXT
- desc DECIMAL
- price DECIMAL
- size TEXT

3. Sidess Table
- id SERIAL (Primary Key)
- name TEXT
- desc TEXT
- price DECIMAL
- isVegan BOOLEAN

4. Order Table
- id SERIAL (Primary Key)
- customer TEXT
- orderAt DATE (Default Now)
- orderId INT (Foreign Key references Order.OrderID)
- foodId INT (Foreign Key references Food.FoodID)
- drinkId INT (Foreign Key references Drink.DrinkID)

The relations between the tables are as follows:

- The Order table has a many-to-one relationship with the Food, Drink, and Side tables, since each Order can be associated with only one food, drink, and side item, but each food item or drink item or side item can be associated with multiple Orders.

The foreign key constraints are:

- The Order table's FoodID column references the Food table's id column, ensuring that every Order's FoodID matches an existing food item.
- The Order table's DrinkID column references the Drink table's id column, ensuring that every Order's DrinkID matches an existing drink item.
- The Order table's sidesId column references the Sides table's id column, ensuring that every Order's sidesId matches an existing side item.

## SAMPLE DATA

### FOOD TABLE

[food-table-image](food-table.png)
[drink-table-image](drink-table.png)
[sides-table-image](sides-table.png)
[order-table-image](order-table.png)

