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

export default mongoose.model("Chocolate", chocolateSchema)