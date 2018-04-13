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
	fDividerHeight: String,
	fDividerWidth: String,
	deadline: String,
	comment: String,
	regDate: Date,
	status: String
})



module.exports = mongoose.model("Order", OrderSchema);