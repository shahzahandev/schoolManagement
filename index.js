require('dotenv').config()
const express = require('express')
const { registrationController, logInController, logOutController } = require('./controllers/registrationController')
const { dbContent } = require('./config/mongodbConnection')
const app = express()
app.use(express.json())
let prot = process.env.PORT || 5000

 // mongodb connection----
dbContent()

app.post("/registration", registrationController)
app.post("/login", logInController)
app.post("/logout", logOutController)

// prot---------- 
app.listen(prot, (req, res) => {
    console.log(`This surver running on prot ${prot}`)
})