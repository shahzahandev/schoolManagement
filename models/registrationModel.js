const mongoose = require('mongoose')
const { Schema } = mongoose

let registrationMondel = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowerCase: true,
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        min: [5, "Too low"],
        mix: [10, "Too high"],
        // match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Please fill a valid password']
    },
    photo: {
        type: String
    },
    address: {
        type: String
    },
    isLogin:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Student', registrationMondel)