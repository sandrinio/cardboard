const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
		productName: String,
		layerQuantity: String,
		layer1: String,
		layer2: String,
		layer3: String,
		layer4: String,
		layer5: String,
		profile: String,
		boxHeight: String,
		boxWidth: String,
		boxThickness: String,
		mDividerHeight: String,
		mDividerWidth: String,
		mDividerThickness: String,
		fDividerHeight: String,
		fDividerWidth: String,
		fDividerThickness: String
})



module.exports = mongoose.model("Product", ProductSchema);