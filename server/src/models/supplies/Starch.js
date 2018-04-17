const mongoose = require("mongoose");

const StarchSchema = new mongoose.Schema({
		price: String,
		weight: String,
		regDate: String,
})



module.exports = mongoose.model("StarchSupply", StarchSchema);