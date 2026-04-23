require('dotenv').config()
const express = require('express')
const { registrationController, logInController, logOutController } = require('./controllers/registrationController')
const { dbConnection } = require('./config/mongodbConnection')
const {studentProfileController, allStudent, singleStudent, holdStudent, deleteStudent, updateStudent, allStudentWithoutHold, getHoldProfile} = require('./controllers/profileControllers')
let cors = require('cors')


const app = express()

app.use(express.json())

app.use(cors())

let port = process.env.PORT || 5000

//  ========== mongodb connection =========
dbConnection()

// ======================================
app.post("/registration", registrationController)
app.post("/login", logInController)
app.post("/logout", logOutController)

// =======================================
app.get("/allStudent", allStudent)
app.get ("/allProfileWithoutHold", allStudentWithoutHold)
app.get("/allHoldProfile", getHoldProfile)
app.post('/singleProfile/:id', singleStudent)
app.post('/holdProfile', holdStudent)
app.post("/updateProfile/:id", updateStudent)
app.post("/profile", studentProfileController)
app.delete('/deleteProfile', deleteStudent)

// ============ prot ======================
app.listen(port, (req, res) => {
    console.log(`This server running on prot ${port}.`)
})