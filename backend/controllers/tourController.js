const Tour = require('../models/Tour');
const catchAsync = require('../utils/catchAsync');

const factory = require('./handllerFactory')


exports.creatTour = factory.createOne(Tour)
exports.updateTour = factory.updateOne(Tour)

exports.getsingleTour = factory.getOne(Tour,'reviews');

exports.deleteTour = factory.deleteOne(Tour);

exports.getAllTours = catchAsync(async (req, res, next) => {

    const page = parseInt(req.query.page); //pagination
    // console.log(page)

    const tours = await Tour.find({})
        .populate('reviews')
        .skip(page * 8)
        .limit(8)

    res.status(200).json({
        status: true,
        length: tours.length,
        message: 'succesfull',
        data: tours,
    })
})

exports.getTourBySearch = catchAsync(async (req, res, next) => {

    const city = new RegExp(req.query.city, 'i') //case sensitive
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    const tours = await Tour.find({ 
        city, 
        distance: { $gte: distance }, 
        maxGroupSize: { $gte: maxGroupSize }, 
    })

    res.status(200).json({
        status: true,
        message: 'succesfull',
        data: tours,
    })
})

exports.getFeaturedTours = catchAsync(async (req, res, next) => {


    const tours = await Tour.find({ featured: true })
    .populate("reviews")
    .limit(8)

    res.status(200).json({
        status: true,
        message: 'succesfull',
        data: tours,
    })
})



// get tour counts
exports.getTourCount = catchAsync(async (req, res, next) => {

    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
        status: true,
        message: 'succesfull',
        data: tourCount,
    })

})