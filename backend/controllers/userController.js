const User = require('./../models/User')
const factory = require('./handllerFactory')
const catchAsync = require('./../utils/catchAsync')


exports.creatUser = factory.createOne(User)
exports.updateUser = factory.updateOne(User)
exports.getsingleUser = factory.getOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.getAllUsers = catchAsync(async (req, res, next) => {
    console.log(req.user)
    const users = await User.find({})

    res.status(200).json({
        status: true,
        length: users.length,
        message:'succesfull',
        data: users,

    })
})