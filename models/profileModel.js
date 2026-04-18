const mongoose = require("mongoose")
const { Schema } = mongoose

const profileSchema = new Schema({
    studentId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    parentInfo: {
        fatherName: {
            type: String,
            required: true
        },
        motherName: {
            type: String,
            required: true
        },
        parentsNumber: {
            type: String,
            required: true
        },
    },
    classInfo: {
        className: {
            type: String,
            required: true,
            enum: ["six", "seven", "eight", "nine", "ten"]
        },
        roll: {
            type: Number,
            required: true
        }
    },
    payDate: {
        type: Date,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        erum: ['male', 'female']
    },
    dob: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    isHold: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Profile", profileSchema)