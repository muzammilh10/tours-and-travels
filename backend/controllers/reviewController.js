const Tour = require('../models/Tour')
const Review = require('../models/Review')
const catchAsync = require("../utils/catchAsync");
const AppError = require('./../utils/appError')




exports.createReview = catchAsync(async (req, res, next) => {

    const tourId = req.params.tourId
    // console.log(tourId)

    const userId = req.user._id;
    // console.log(userId)

    const newReview = new Review(
        {
            productId:tourId,
            userId: userId,
            ...req.body
        })


    
    const existReview = await Review.findOne({productId: tourId,userId})
    console.log(existReview)

    if (existReview) return next(new AppError("you already reviewed"))


    const savedReview = await newReview.save()
    console.log(newReview)
    console.log(savedReview)



    await Tour.findByIdAndUpdate(tourId, {
        $push: { reviews: savedReview._id }
    })


    res.status(200)
        .json({
            success: true,
            message: "review submitted",
            data: savedReview
        })

})