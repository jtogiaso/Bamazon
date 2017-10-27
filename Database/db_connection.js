let mysql = require("mysql");

module.exports = { 
	connect_to_db: function(){
		this.connection.connect(function(err){
			if (err) {
				throw err;
			};
			// console.log("connected as id " + connection.threadId);
		});
	},
	connection:	mysql.createConnection({
		  host: "localhost",
		  port: 3306,

		  // Your username
		  user: "root",

		  // Your password
		  password: "UCSD0724",
		  database: "bamazon"
		})
}