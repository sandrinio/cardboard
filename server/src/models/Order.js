const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
	company: String,
	product: String,
	boxQuantity: String,
	dividerQuantity: String,
	boxHeight: String,
	boxWidth: String,
	boxThickness: String,
	mDividerHeight: String,
	mDividerWidth: String,
	mDividerThickness: String,
	fDividerHeight: String,
	fDividerWidth: String,
	fDividerThickness: String,
	deadline: String,
	comment: String,
	regDate: Date,
	status: String
})



module.exports = mongoose.model("Order", OrderSchema);