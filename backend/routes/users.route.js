const express = require('express');
const { updateUser, deleteUser, getsingleUser, getAllUsers, creatUser } = require('../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router()


// authentucation
router.post('/signup',authController.signup)
router.post('/login',authController.login)
router.get('/logout', authController.logout)

router.post('/forgotPassword',authController.forgotPassword);
router.patch('/resetPassword:token',authController.resetPassword)

// Protect all routes after this middleware
router.use(authController.protect);
// router.use(authController.restrictTo('admin'));

// get all tour
router.get('/',getAllUsers)
router.post('/',creatUser)

// update new tour
router.put('/:id',updateUser)

// delete tour
router.delete('/:id',deleteUser)

// get single tour
router.get('/:id',getsingleUser)



module.exports = router;