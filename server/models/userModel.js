const mongoose = require("mongoose")

const portfolioSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5
  },
  coins: {
    type: Array,
    required: true
  },
  money: {
    type: Number,
    default: 0
  }
}, {timestamps: true})

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    portfolios: [portfolioSchema]
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema);