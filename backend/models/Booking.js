const {Schema,model} = require('mongoose')

const bookSchema = new Schema(
  {
    userId: {
      type: String,
      require: true
    },
    userEmail: {
      type: String,
      require: true
    },
    tourName:{
        type:String,
        required:true
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize:{
        type:Number,
        required:true
    },
    totalAmount:{
      type:Number,
      required:true
    },
    phone:{
        type:Number,
        required:true
    },
    bookAt:{
        type:String,
        // default: Date.now,
        required:true
    },
  },
  { timestamps: true }
);

const Review = model('Booking',bookSchema)

module.exports = Review;
