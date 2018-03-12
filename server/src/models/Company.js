const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
		company: {
				type: String,
				index: true,
				unique: true
		},
		regDate: String,
		products: [{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product'
		}],
		orders: String
})



module.exports = mongoose.model("Company", CompanySchema);