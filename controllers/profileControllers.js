const Profile = require("../models/profileModel")

let studentProfileController = (req, res) => {
    let{name, fatherName, motherName, className,  roll, payDate, bloodGroup, gender, parentsNumber, dob, result} = req.body

    let profile = new Profile({
        name, fatherName, motherName, className, roll, payDate, bloodGroup, gender,
        parentsNumber, dob, result
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

let singleStudent = async(req, res) => {
    let {id} = req.params
    let studentData = await Profile.findOne({_id : id})

    return res.status(200).json({
        success: true,
        message: `Student name ${studentData.name}'.Profile details blow.`,
        data: studentData
    })
}

let holdStudent = async(req, res) => {
    let {id} = req.body
    let holdItems = await Profile.findOne({_id: id})
    holdItems.isHold = true
    holdItems.save()
    return res.status(200).json({
        success: true,
        message: `${holdItems.name}'s profile holded successfuly.`
    })
}

let deleteStudent = async(req, res) => {
    let {id} = req.body
    let deleteItems = await Profile.findByIdAndDelete({_id : id})
    return res.status(200).json({
        success: true,
        message: `${deleteItems.name}'s Profile deleted successfuly.`
    })
}

let updateStudent = async(req, res) => {
    let {id} = req.params
    let updateItems = await Profile.findByIdAndUpdate({_id: id}, req.body, {new: true})
    return res.status(200).json({
        success: true,
        message: `${updateItems.name}'s profile updated successfuly.`,
        data: updateItems
    })
}


module.exports = { studentProfileController, allStudent, singleStudent, holdStudent, deleteStudent, updateStudent }