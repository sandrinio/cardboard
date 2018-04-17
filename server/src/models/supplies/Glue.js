const mongoose = require("mongoose");

const GlueSchema = new mongoose.Schema({
		price: String,
		weight: String,
		regDate: String,
})



module.exports = mongoose.model("GlueSupply", GlueSchema);