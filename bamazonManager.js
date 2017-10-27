let manager_controller = require("./Controllers/manager_controller.js");
let db_connection = require("./Database/db_connection.js");

db_connection.connect_to_db();
manager_controller.customer_start();



