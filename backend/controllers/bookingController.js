const Booking = require('./../models/Booking')
const catchAsync = require("../utils/catchAsync");
const factory = require('./handllerFactory')


exports.createBooking = catchAsync(async(req,res,next) => {
    // console.log(req.user)
    const newBooking = new Booking({
        userId:req.user.id,
        userEmail:req.user.email,
        ...req.body,
    })

    const savedBooking = await newBooking.save()
    
    res.status(200)
    .json({
        success: true,
        message: "your tour is booked",
        data: savedBooking
    })
}) 

// get single booking
exports.getsingleTour = factory.getOne(Booking);

// get all booking
exports.getAllBooking = factory.getAll(Booking);