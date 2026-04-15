const Profile = require("../models/profileModel")

let studentProfileController = (req, res) => {
    let{name, fatherName, motherName, className,  roll, payDate, bloodGroup, gender, parentsNumber, dob, result} = req.body

    let profile = new Profile({
        name,
        fatherName,
        motherName,
        className,
        roll,
        payDate,
        bloodGroup,
        gender,
        parentsNumber,
        dob,
        result
    })
    profile.save()
    res.status(201).json({
        success: true,
        message: "Profile created",
        data: `${profile.name}s profile.`,
        profile: profile
    })
}

let allStudent = async(req, res) => {
    let data = await Profile.find({})
    res.status(200).json({
        succes: true,
        message: "All student info",
        data: data
    })
}


module.exports = { studentProfileController, allStudent }