require('dotenv').config()
const express = require('express')
const { registrationController, logInController, logOutController } = require('./controllers/registrationController')
const { dbConnection } = require('./config/mongodbConnection')
const {studentProfileController, allStudent, singleStudent, holdStudent, deleteStudent, updateStudent, allStudentWithoutHold, getHoldProfile} = require('./controllers/profileControllers')

const app = express()

app.use(express.json())

let port = process.env.PORT || 5000

//  ========== mongodb connection =========
dbConnection()

// ======================================
app.post("/registration", registrationController)
app.post("/login", logInController)
app.post("/logout", logOutController)

// =======================================
app.post("/profile", studentProfileController)
app.get("/allStudent", allStudent)
app.post('/singleProfile/:id', singleStudent)
app.post('/holdProfile', holdStudent)
app.delete('/deleteProfile', deleteStudent)
app.post("/updateProfile/:id", updateStudent)
app.get ("/allProfileWithoutHold", allStudentWithoutHold)
app.get("/allHoldProfile", getHoldProfile)

// ============ prot ======================
app.listen(port, (req, res) => {
    console.log(`This server running on prot ${port}.`)
})