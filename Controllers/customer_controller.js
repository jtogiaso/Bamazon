let db_connection = require("../Database/db_connection.js");
let inventory_stock_model = require("../Models/inventory_stock_model.js");
let customer_stock_view = require("../Views/customer_stock_view");



module.exports = {
	instantiated_stock_obj:{},
	customer_start: function(){
		let scope = this;
		this.instantiated_stock_obj = new inventory_stock_model.Inventory_Stock();
		this.instantiated_stock_obj.get_stock_status(db_connection.connection)
			.then(function(res){
				scope.customer_view();
			})
			.catch(function(err){
				console.log("Customer start error: " + err);
				db_connection.connection.end();
			})
		;
	},
	customer_view: function(){
		let scope = this;
		customer_stock_view.customer_entry_point(this.instantiated_stock_obj)
			.then(function(res){
				if(parseInt(res.quantity) <= parseInt(scope.instantiated_stock_obj.inventory[res.item_id].stock_quantity)){
					scope.stock_loss_update(res.item_id, res.quantity);
				}
				else{
					console.log("Your purchase request cannot be fulfilled for the following reason: Inventory does not meet your desired quantity!");
					db_connection.connection.end();
				}
			})
			.catch(function(err){
				console.log("Customer view error: " + err);
				db_connection.connection.end();
			})
		;
	},
	stock_loss_update: function(purchased_item_id , purchased_quantity){
		let scope = this;
		scope.instantiated_stock_obj.inventory[purchased_item_id].stock_update(purchased_quantity , db_connection.connection)
			.then(function(res){
				console.log("Your total is: $" + scope.instantiated_stock_obj.inventory[purchased_item_id].price_by_requested_quantity(purchased_quantity) + ". Thank you for shopping with Bamazon. Your item will NOT be shipped, ever!");
				db_connection.connection.end();
			})
			.catch(function(err){
				console.log("Stock loss update: " + err);
				db_connection.connection.end();
			})
		;
	}
}