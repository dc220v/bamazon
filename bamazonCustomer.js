
require('dotenv').config();

const mysql = require('mysql');
const inquirer = require('inquirer');

const password = process.env.PASSWORD;

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: password,
	database: "bamazon"
});

var itemNum = 0;

connection.connect(function(err){
	if (err) {
		console.log(err);
	} else {
		connection.query('SELECT item_id FROM products', function (err, data) {
			if (err) {
				console.log(err);
			} else {
				itemNum = data.length;
				list_item();
			}
		});
	}
});

function list_item(){
	connection.query('SELECT item_id, product_name, department_name, price, stock_quantity FROM products', function (err, data) {
		if (err) {
			console.log(err);
		} else {
			for (var i = 0; i < data.length; i++) {
				console.log('\x1b[33m%s\x1b[0m', data[i].item_id + '. ' + data[i].product_name + '\n Department: ' + data[i].department_name + '\n Price: ' + data[i].price + '\n Stock: ' + data[i].stock_quantity);
			}
			add_item();
		}
	});
}

function add_item(){
	inquirer.prompt([
		// question 1: select item -------------------------------/
		{
			type: "input",
			message: "Enter the item id of the book you would like to buy",
			name: "item_id",
			validate: function(value){
				if(isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= itemNum){
					return true
				} else {
					console.log('\x1b[33m%s\x1b[0m', '\n Input item id between 1-' + itemNum + '.');
					return false;
				}
			}
		},
		// question 2: quantity -------------------------------/
		{
			type: "input",
			message: "How many do you need?",
			name: "quantity",
			validate: function(value){
				if (!isNaN(value) && parseInt(value) > 0) {
					return true;
				} else {
					console.log('\x1b[33m%s\x1b[0m', 'Please enter a valid number.');
				}
			}
		}
	]).then(function(value){
		connection.query('SELECT item_id, department_name, price, stock_quantity, product_sales FROM products WHERE item_id = ' + value.item_id, function(err, data) {
			if (err) {
				console.log(err);
			} else {
				if (value.quantity > data[0].stock_quantity) {
					console.log('\x1b[33m%s\x1b[0m', '\n Insufficient quantity. Only ' + data[0].stock_quantity + ' available.');
					add_item();
				} else {
					var total = parseFloat(data[0].price) * parseFloat(value.quantity);
					var quantity_update = data[0].stock_quantity - value.quantity;
					var sales_update = parseFloat(data[0].product_sales) + total;

					// update stock
					connection.query('UPDATE products SET stock_quantity = ' + quantity_update + ' WHERE item_id = ' + value.item_id);

					// update sales
					connection.query('UPDATE products SET product_sales = ' + sales_update + ' WHERE item_id = ' + value.item_id);

					console.log('\x1b[33m%s\x1b[0m', 'Your total: $' + total);
					continue_shopping();

					// update department sales
					connection.query('SELECT department_name, product_sales FROM departments WHERE department_name = "' + data[0].department_name + '"', function(err, data){
						if (err) {
							console.log(err);
						} else {
							var department_sales = data[0].product_sales + total;
							connection.query('UPDATE departments SET product_sales = ' + department_sales + ' WHERE department_name = "' + data[0].department_name + '"');
						}
					});
				}
			}
		});
	});
}

function continue_shopping(){
	inquirer.prompt([
		{
			type: "list",
			message: "Continue Shopping?",
			choices: ['Yes, please.', 'No, thanks'],
			name: "next"
		}
	]).then(function(value){
		if (value.next === 'Yes, please.') {
			list_item();
		} else {
			console.log('\x1b[33m%s\x1b[0m', 'Thank you for shopping with us!');
		}
	});
}
