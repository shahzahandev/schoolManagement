require('dotenv').config()
const express = require('express')
const { registrationController, logInController, logOutController } = require('./controllers/registrationController')
const { dbContent } = require('./config/mongodbConnection')
const {studentProfileController, allStudent} = require('./controllers/profileControllers')
const app = express()
app.use(express.json())
let port = process.env.PORT || 5000

 // mongodb connection----
dbContent()

app.post("/registration", registrationController)
app.post("/login", logInController)
app.post("/logout", logOutController)
//=======================================

app.post("/profile", studentProfileController)
app.get("/allStudent", allStudent)

// prot---------- 
app.listen(port, (req, res) => {
    console.log(`This surver running on prot ${port}`)
})


////fdkjafs