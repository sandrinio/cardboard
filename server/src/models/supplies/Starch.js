const mongoose = require("mongoose");

const StarchSchema = new mongoose.Schema({
		price: String,
		pack: String,
		regDate: String,
})



module.exports = mongoose.model("StarchSupply", StarchSchema);