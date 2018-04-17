const mongoose = require("mongoose");

const DyeSchema = new mongoose.Schema({
		price: String,
		color: String,
		qty: String,
		regDate: String
})



module.exports = mongoose.model("DyeSupply", DyeSchema);