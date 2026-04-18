// ========= schema model
const Profile = require("../models/profileModel")

// ========= create studnet profile
let studentProfileController = async(req, res) => {
    let{name, parentInfo, classInfo, payDate, bloodGroup, gender, dob, result} = req.body

  try {
   let firstThreeletter = name.slice(0, 3)
    let rnadomNumber = Date.now().toString()
    let id = firstThreeletter + rnadomNumber.slice(-3)

    let profile = new Profile({
        studentId: id,
        name, parentInfo, classInfo, payDate, bloodGroup, gender, dob, result
    })
    profile.save()
    res.status(201).json({
        success: true,
        message: "Profile created",
        data: `${profile.name}s profile.`,
        profile: profile
    })
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: "Server error."
    })
  }
}
// ========= get all studnet profile
let allStudent = async(req, res) => {
  try {
    let data = await Profile.find({})
    res.status(200).json({
        succes: true,
        message: "All student info",
        data: data
    })
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: "Server error."
    })
  }
}
// ========= single student profile
let singleStudent = async(req, res) => {
    let {id} = req.params
  try {
    let studentData = await Profile.findOne({_id : id})
    return res.status(200).json({
        success: true,
        message: `Student name ${studentData.name}'.Profile details blow.`,
        data: studentData
    })
  } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Server error."
    })
  }
}
// ========= set hold student profile
let holdStudent = async(req, res) => {
    let {id} = req.body
  try {
    let holdItems = await Profile.findOne({_id: id})
    holdItems.isHold = true
    holdItems.save()
    return res.status(200).json({
        success: true,
        message: `${holdItems.name}'s profile holded successfuly.`
    })
  } catch (error) {
     return res.status(500).json({
        success: false,
        message: "Server error."
    })
  }
}
// ========= delete student profile
let deleteStudent = async(req, res) => {
    let {id} = req.body
    try {
    let deleteItems = await Profile.findByIdAndDelete({_id : id})
    return res.status(200).json({
        success: true,
        message: `${deleteItems.name}'s Profile deleted successfuly.`
    }) 
    } catch (error) {
     return res.status(500).json({
        success: false,
        message: "Server error."
    }) 
    }
}
// ========= update student profile
let updateStudent = async(req, res) => {
    let {id} = req.params
   try {
     let updateItems = await Profile.findByIdAndUpdate({_id: id}, req.body, {new: true})
    return res.status(200).json({
        success: true,
        message: `${updateItems.name}'s profile updated successfuly.`,
        data: updateItems
    })
   } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Server error."
    }) 
   }
}
// ========= get all data without hold
let allStudentWithoutHold = async(req, res) => {
   try {
    let data = await Profile.find({isHold:{$ne: true}})
    return res.status(200).json({
        success: true,
        message: "All student without hold.",
        data: data
    })
   } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Server error."
    }) 
   }
}
// ========= get only hold student profile
let getHoldProfile = async (req, res) => {
  try {
    let data = await Profile.find({isHold:{$eq : true}})
    return res.status(200).json({
        success: true,
        message: "All hold profile.",
        data: data
    })
  } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Server error."
    }) 
  }
}

module.exports = { studentProfileController, allStudent, singleStudent, holdStudent, deleteStudent, updateStudent, allStudentWithoutHold, getHoldProfile }