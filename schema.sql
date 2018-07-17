-- create & assign database

DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

-- create product table and columns

CREATE TABLE products (
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,

    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES
    ("Long Claw", "Weapons", 199.99, 20),
    ("OathKeeper", "Weapons", 149.99, 15),
    ("Needle", "Weapons", 129.99, 25),
    ("Iron Throne", "Furniture", 9999.99, 19),
    ("Drogon", "Dragons", 19999.99, 1),
    ("Dire Wolf Chow", "Pets", 9.99, 50),
    ("Winterfell", "Real Estate", 9999999.99, 1),
    ("King's Landing", "Real Estate", 9999999.99, 1),
    ("Strangler", "Poison", 29.99, 40),
    ("Dragon Glass", "Materials", .50, 500),
    ("Valyrian Steel", "Materials", 99.99, 200);


