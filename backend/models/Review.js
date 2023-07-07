const { Schema, model, Types } = require('mongoose');
const { ObjectId } = Types;

const reviewSchema = new Schema(
  {
    productId: {
      type: ObjectId,
      ref: "Tour",
      require:true,
    },
    userId: {
      type: ObjectId,
      ref:'User',
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

const Review = model('Review',reviewSchema)

module.exports = Review;
