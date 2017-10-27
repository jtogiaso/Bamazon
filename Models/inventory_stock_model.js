let stock_item_model = require("../Models/stock_item_model.js");
let	Inventory_Stock = function(){
	this.stock_name = "Products";
	this.inventory = {};
	this.number_of_items = 0;
};

Inventory_Stock.prototype.get_stock_status = function(conncection) {
	let scope = this;
	let query_string = "SELECT * FROM `Products`";
	return new Promise(function(resolve , reject){
				conncection.query(query_string, function(err , res){
					for (let i in res){
						scope.inventory[parseInt(i) + 1] = new stock_item_model.Stock_Item(res[i].item_id, res[i].product_name,  res[i].customer_price, res[i].stock_quantity, res[i].department_name);
						scope.number_of_items++;
					}
					if (err){
						reject(err);
					}
					else {
						resolve(scope);
					}
				});
			});	
};
module.exports = {
	Inventory_Stock: Inventory_Stock
}