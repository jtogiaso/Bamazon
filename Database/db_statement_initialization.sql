CREATE SCHEMA `bamazon`;
USE `bamazon`;

CREATE TABLE `Products` (
	item_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(50),
	customer_price FLOAT(15,2) NOT NULL,
	stock_quantity INT
);

SELECT * FROM `Products`;