const mongoose = require("mongoose");

const WrapperSchema = new mongoose.Schema({
		price: String,
		qty: String,
		regDate: String,
})



module.exports = mongoose.model("WrapperSupply", WrapperSchema);