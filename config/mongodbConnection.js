const mongoose = require('mongoose')

let dbContent = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
    console.log("database connected");
    })
}

module.exports = {dbContent}