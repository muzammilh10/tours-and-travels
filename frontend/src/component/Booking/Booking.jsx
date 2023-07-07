import axios from 'axios';
import React, {  useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
// import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from './../../config';


const Booking = ({ props, avgRating }) => {
    const { price, reviews, title } = props || {}
    const navigate = useNavigate()

    // const { user, token } = useContext(AuthContext)
    const {user, token} = useSelector(state => state.auth) || {}

    const serviceFee = 10; 


    const [booking, setBookings] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: '',
        totalAmount:0
    })

    // const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)
    useEffect(() => {
        const calculateTotalAmount = () => {
          const totalPrice = Number(price) * Number(booking.guestSize);
          const totalAmount = totalPrice + Number(serviceFee);
          setBookings((prevState) => ({
            ...prevState,
            totalAmount: totalAmount,
          }));
        };
      
        calculateTotalAmount();
      }, [price, booking.guestSize]);



    const handleChange = event => {
        setBookings(prev => ({ ...prev, [event.target.id]: event.target.value }))
    }





    const initPayment = (data) => {
        const options = {
            key: 'rzp_test_t85s42ghyD8DIN',
            amount: data.amount,
            currency: data.currency,
            tourName: booking.tourName,
            bookingCustomer: booking.fullName,
            description: 'Test Transaction',
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = 'http://localhost:5000/api/payment/verify';
                    const { data } = await axios.post(verifyUrl, response);
                    alert(data.message)

           


                    //   booking database after payment
                    const res = await fetch(`${BASE_URL}/booking`, {
                        method: 'post',
                        body: JSON.stringify(booking),
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        }
                    })
                    const result = await res.json()
                    if (!res.ok) {
                        return alert(result.message)
                    }
         
                    navigate('/thank-you')
                    //ending booking database after payment

                } catch (error) {
                    console.log(error)
                }
            },
            theme: {
                color: '#3399c',
            }
        }
        const rzpl = new window.Razorpay(options)
        rzpl.open();
    }

    // send data to server
    const handleClick = async event => {
        event.preventDefault();

        console.log(booking)

        try {

            if (booking.fullName.trim() === '' || booking.phone === '' || booking.bookAt.trim() === '') {
                return alert(`All fields are required`)
            }

            if (!user || user === undefined || user === null) {
                return alert('Please sign in')
            }

            const orderUrl = 'http://localhost:5000/api/payment/orders';
            const { data } = await axios.post(orderUrl, { amount: booking.totalAmount });
            console.log(data.data)
            initPayment(data.data)

        } catch (err) {
            alert(err.message)
        }



    }

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center 
            justify-content-between">
                <h3>${price}<span>/per person</span></h3>
                <span className="tour__ratingd-flex align-items-center">
                    <i class='ri-star-s-fill' >
                    </i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            {/*  =================  boookng form ================= */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text"
                            placeholder="Full Name"
                            id="fullName"
                            required
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number"
                            placeholder="Phone"
                            id="phone"
                            required
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input type="date"
                            placeholder=""
                            id="bookAt"
                            required
                            onChange={handleChange} />
                        <input type="number"
                            placeholder='person'
                            id="guestSize"
                            required
                            onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            {/*  =================  boookng end ================= */}

            {/*  =================  boookng bottom ================= */}
            <div className="booking__bottom">
                <ListGroup className="mt-4">
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-item-center gap-1">
                            ${price} <i class="ri-close-line"> </i>1 persion
                        </h5>

                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>{serviceFee}</h5>
                        <span>$10</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <span>${booking.totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
                    Book Now</Button>
            </div>


        </div>
    )
}

export default Booking;