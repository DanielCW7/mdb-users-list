const mongoose = require("mongoose")

const userModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a username"]
        },
        age: {
            type: Number,
            required: true,
            default: 0
        },
        email: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("user", userModel)

module.exports = User