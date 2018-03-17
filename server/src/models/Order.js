const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
		regDate: String,
		company: String,
		product: String,
		boxQuantity: String,
		dividerQuantity: String,
		deadline: String,
		comment: String
})



module.exports = mongoose.model("Order", OrderSchema);