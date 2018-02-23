var mongoose = require('mongoose')
var chocolateSchema = new mongoose.Schema({
	company: String,
	name: String,
	beanOrigin: String,
	ingredients: String,
	percentage: Number,
	variety: String,
	rating: Number,
	notes: String,
	img: String
})

module.exports = mongoose.model("Chocolate", chocolateSchema)