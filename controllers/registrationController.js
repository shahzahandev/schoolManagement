const User = require("../models/registrationModel")
const bcrypt = require('bcrypt');

let registrationController = async (req, res) => {
    let { name, email, password } = req.body

    try {
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.json({
                success: false,
                message: "Student already existed."
            })
        }
        const hash = bcrypt.hashSync(password, 10);
        let createStudent = new User({
            name: name,
            email: email,
            password: hash
        })
        createStudent.save()
        return res.json({
            success: true,
            message: "Registration success.",
            user: createStudent.name,
            email: createStudent.email
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error."
        })
    }
}

let logInController = async (req, res) => {
    let { email, password } = req.body

    const existingUser = await User.findOne({ email: email })
    if (existingUser.isLogin == true) {
        return res.status(406).json({
            success: false,
            message: "Please, Logout from another device."
        })
    }
    if (!existingUser) {
        return res.status(404).json({
            success: false,
            message: "User not found."
        })
    }
    let pass = bcrypt.compareSync(password, existingUser.password)

    if (pass) {
        existingUser.isLogin = true
        existingUser.save()
        return res.status(200).json({
            success: true,
            message: "Login successfull."
        })
    } else {
        return res.status(404).json({
            success: false,
            message: "Invalid credential."
        })
    }
}

let logOutController = async (req, res) => {
    let { email } = req.body
    try {
        const existingUser = await User.findOne({ email: email })
        existingUser.isLogin = false
        existingUser.save()
        return res.status(200).json({
            success: true,
            message: "Logout success."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server err.",
            err: error
        })
    }
}


module.exports = { registrationController, logInController, logOutController }