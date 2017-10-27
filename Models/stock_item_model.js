let Stock_Item = function(item_stock_id, item_name, item_price, item_stock_quantity, item_department_name){
	this.id = item_stock_id;
	this.name = item_name;
	this.price = parseFloat(item_price);
	this.department = item_department_name;
	this.stock_quantity = item_stock_quantity;
}
Stock_Item.prototype.price_by_requested_quantity = function(quantity_requested) {
	return (this.price * quantity_requested).toFixed(2);
};



Stock_Item.prototype.stock_update = function(stock_loss , conncection) {
	let query_string = "UPDATE `Products`"
						+" SET `stock_quantity`=" + parseInt(this.stock_quantity - stock_loss)
						+" WHERE `item_id`=" + this.id.toString();
	return new Promise(function(resolve , reject){
				conncection.query(query_string, function(err , res){
					if (err){
						reject(err);
					}
					else {
						resolve(res);
					}
				});
			});	

};
module.exports = {
	Stock_Item: Stock_Item
}


