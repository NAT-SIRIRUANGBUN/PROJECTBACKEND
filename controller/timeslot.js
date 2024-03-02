const Timeslot = require('../models/TimeSlot')

exports.getTimeslots = async (req , res , next) => {
    try {
        const timeslot = await Timeslot.find().populate({
            path: 'company',
            select: 'name tel contact_email'
        });
        res.status(200).json({success : true , timeslot})
    }
    catch(err) {
        console.error(err)
        res.status(400).json({success : false , msg : "Something Wrong"})
    }
}

exports.getTimeslot = async (req , res , next) => {
    try {
        const timeslot = await Timeslot.findById(req.params.id).populate({
            path: 'company',
            select: 'name tel contact_email'
        });
        res.status(200).json({success : true , timeslot})
    }
    catch(err) {
        console.error(err)
        res.status(400).json({success : false , msg : "Something Wrong"})
    }
}