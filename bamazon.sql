-- DROP DATABASE bamazon
-- CREATE DATABASE bamazon

USE bamazon;
-- 
-- CREATE TABLE products (
-- 	item_id INT PRIMARY KEY  AUTO_INCREMENT,
-- 	product_name VARCHAR(200) NOT NULL,
-- 	department_name VARCHAR(200) NOT NULL,
-- 	price DECIMAL(10,2) NOT NULL,
-- 	stock_quantity INT NOT NULL
-- );

-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("A Playcentric Approach to Creating Innovative Games", "Art & Design", 25.95, 4);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("JavaScript: The Definitive Guide", "Computer Science", 21.92, 10);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Living with Art ", "Art & Design", 159.33, 5);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Web Design with HTML, CSS, JavaScript and jQuery Set", "Computer Science", 28, 8);
--
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Sprint: How To Solve Big Problems and Test New Ideas in Just Five Days", "Art & Design", 14.99, 4);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("CSS: The Missing Manual", "Computer Science", 29.99, 6);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Python Tricks: A Buffet of Awesome Python Features ", "Computer Science", 26.99, 5);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Mapping Experiences: A Complete Guide to Creating Value through Journeys, Blueprints, and Diagrams", "Art & Design", 20.98, 2);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Python Tricks: A Buffet of Awesome Python Features ", "History", 26.99, 5);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Command and Control: Nuclear Weapons, the Damascus Accident, and the Illusion of Safety", "History", 13.7, 1);

-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("The Story of Britain: From the Romans to the Present", "History", 17.96, 3);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Arduino Electronics Blueprints", "Computer Science", 46.99, 2);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Introduction to Algorithms", "Computer Science", 51, 4);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("C Programming Language", "Computer Science", 35.64, 12);

-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("The Elements of Typographic Style", "Art & Design", 37.95, 9);
-- 
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Emotionally Durable Design: Objects, Experiences and Empathy", "Art & Design", 51.95, 4);
-- 

-- SELECT COUNT(item_id)
-- FROM products;

-- UPDATE products
-- SET stock_quantity = 50
-- WHERE item_id BETWEEN 5 AND 16; 

SELECT * FROM products
