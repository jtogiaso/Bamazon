let customer_controller = require("./Controllers/customer_controller.js");
let db_connection = require("./Database/db_connection.js");

db_connection.connect_to_db();
customer_controller.customer_start();



