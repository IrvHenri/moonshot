const mongoose = require("mongoose")

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
    portfolio: {
      name: {
        type: String,
        default: "My Portfolio"
      },  
      coins: {
        type: Array,
        default: []
      }
    }
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema);