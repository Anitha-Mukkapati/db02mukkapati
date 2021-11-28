const mongoose = require("mongoose")
const startbucksSchema = mongoose.Schema({
    coffee_type: String,
    quantity: { type: String, required: true },
    cost: { type: Number, min: 0, max: 1000, default: 0 }
})

module.exports = mongoose.model("Startbucks",
    startbucksSchema)