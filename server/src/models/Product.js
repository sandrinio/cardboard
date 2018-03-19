const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
		productName: String,
		layerQuantity: String,
		layers: [],
		profile: String,
		boxHeight: String,
		boxWidth: String,
		boxThickness: String,
		mDividerHeight: String,
		mDividerWidth: String,
		mDividerThickness: String,
		fDividerHeight: String,
		fDividerWidth: String,
		fDividerThickness: String,
		dividersPerBox: String
})



module.exports = mongoose.model("Product", ProductSchema);