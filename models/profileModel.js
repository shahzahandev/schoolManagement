const mongoose = require("mongoose")
const { Schema } = mongoose

const profileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true
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
    parentsNumber: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    isHold:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Profile", profileSchema)