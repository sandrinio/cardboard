const mongoose = require("mongoose");

const PaperSchema = new mongoose.Schema({
		price: String,
		weight: String,
		width: String,
		grm: String,
		material: String,
		regDate: String,
})



module.exports = mongoose.model("PaperSupply", PaperSchema);