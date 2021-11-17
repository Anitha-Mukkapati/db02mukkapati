const mongoose = require("mongoose")
const startbucksSchema = mongoose.Schema({
    coffee_type: String,
    quantity: String,
    cost: Number
})

module.exports = mongoose.model("Startbucks",
    startbucksSchema)

    