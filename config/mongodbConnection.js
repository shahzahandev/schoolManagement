const mongoose = require('mongoose')

let dbConnection = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
    console.log("database connected");
    })
}

module.exports = {dbConnection}