const express = require('express');
const authController = require('../controllers/authController');
const { createBooking, getAllBooking, getsingleTour } = require('../controllers/bookingController');

const router = express.Router()

router.use(authController.protect);

router.post('/',createBooking)
router.get('/:id',getsingleTour)
router.get('/',getAllBooking)

module.exports = router;  