const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('./../controllers/authController')

const router = express.Router()



// get tour by search
router.get('/search/tourBySearch',tourController.getTourBySearch)
router.get('/search/getFeaturedTours',tourController.getFeaturedTours)
router.get('/search/getTourCount',tourController.getTourCount)




// router.use(authController.restrictTo('admin','lead-guide'));

// get all tour
router
    .route('/')
    .get(tourController.getAllTours)
    .post(
        authController.protect,
        authController.restrictTo('admin','lead-guide'),
        tourController.creatTour
    );
    

router
    .route('/:id')
    .get(tourController.getsingleTour)
    .patch(
        authController.protect,
        authController.restrictTo('admin', 'lead-guide'),
        // tourController.uploadTourImages,
        // tourController.resizeTourImages,
        tourController.updateTour
    )
    .delete(
        authController.protect,
        authController.restrictTo('admin', 'lead-guide'),
        tourController.deleteTour
    )


// update new tour
// router.put('/:id',updateTour)

// get single tour
// router.get('/:id',getsingleTour)

// delete tour
// router.delete('/:id',deleteTour)

   


module.exports = router;