let inquirer = require("inquirer");
let Table = require('cli-table');


let table = new Table({
    head: ['Item ID', 'Item Name' , 'Price' ]
  , colWidths: [9, 75, 9]
});

module.exports = {
	table_view: function(stock_obj){
		for (let i in stock_obj.inventory){
			table.push(
			    [stock_obj.inventory[i].id, stock_obj.inventory[i].name , stock_obj.inventory[i].price]
			);
		}
		console.log(table.toString());

	},
	customer_entry_point: function(stock_obj){
		this.table_view(stock_obj);
		return new inquirer.prompt([
		    {
		      type: "input",
		      message: "Enter the id number of the item you would like to purchase: ",
		      name: "item_id"
		    },
		    {
		      type: "input",
		      message: "How many would you like to purchase? ",
		      name: "quantity"
		    }
		]);
	}
}