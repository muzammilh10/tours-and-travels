const express = require('express');
const { createReview } = require('../controllers/reviewController');
const authController = require('./../controllers/authController')

const router = express.Router()

router.use(authController.protect);
router.post('/:tourId',createReview)

module.exports = router; 