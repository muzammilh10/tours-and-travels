const http = require('http')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const globalErrorHandler = require('./utils/global.middleware')

const tourRouter = require('./routes/tours.routes')
const userRouter = require('./routes/users.route')
const reviewRouter = require('./routes/reviews.routes')
const bookingRouter = require('./routes/booking.route') 
const paymentRoute = require('./controllers/payment')

const app = express()

const corsOption = {
    origin:true,
    Credentials:true
} 


// middleware
app.use(express.json())
app.use(cors(corsOption))
app.use(cookieParser());

app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/review',reviewRouter)
app.use('/api/v1/booking',bookingRouter)
app.use('/api/payment/',paymentRoute)
app.use('/',(req,res) => {
  res.json('hellloooooooo')
})

app.use(globalErrorHandler)


module.exports = app
