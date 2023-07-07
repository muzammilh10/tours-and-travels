import React, {  useRef, useState} from "react";
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'

import { useParams } from "react-router-dom";
import calculateRating from "../utils/avgRating";
import avatar from './../assets/images/avatar.jpg'
import Booking from "../component/Booking/Booking";
import NewsLetter from './../shared/NewsLetter'
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../config";
import { useSelector } from "react-redux";


const TourDetails = () => {

    const { id } = useParams()
    const reviewMsgRef = useRef('')
    const [tourRating, setTourRating] = useState(null)

    const {user,token} = useSelector((state) => state.auth);

    // static data
    // const tour = tourData.find(tour => tour.id === id)

    // dynamic data
    const { data: tour,loading, error } = useFetch(`${BASE_URL}/tours/${id}`)

    // destructure
    const {
        photo,
        title, 
        desc,
        price, 
        address,
        reviews,
        city,
        distance,
        maxGroupSize
    } = tour.data || {}

    // console.log(price)

    // console.log(tour)

    const { totalRating, avgRating } = calculateRating(reviews)

    // formate date
    const options = { day: 'numeric', month: 'long', year: 'numeric' }

    const submitHandler = async event => {
        event.preventDefault()

        const reviewText = reviewMsgRef.current.value;

        // call  api
        try{
            if(!user || user === undefined || user===null){
                alert('please sign in')
            }

            if(tourRating===null){
                return alert('rating is not select')
            }

            const revObj = {

                reviewText,
                rating:tourRating,
            }

            const res = await fetch(`${BASE_URL}/review/${id}`,{
                method:'POST',
                body:JSON.stringify(revObj),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                
            })
            const result = await res.json()
            console.log(result)

            if(!res.ok){
                return alert(result.message)
            }

            alert(result.message)
            

        }catch(err){
            alert(err.message)
        }
    }



    return (
        <>
            <section>
                <Container>
                    {
                        loading && <h4 className="text-center pt-5">Loading.....</h4>
                    }
                                        {
                        error && <h4 className="text-center pt-5">Error.....</h4>
                    }
                    {!loading && !error && <Row>
                        <Col lg='8'>
                            <div className="tour__content">
                                <img src={photo} alt="" />
                                <div className="tour__info">
                                    <h2>{title}</h2>
                                    <div className="d_flex 
                                align-items-center gap-5">

                                        <span className="tour__location d-flex align-items-center gap-1">
                                            <i class='ri-map-pin-line'></i>{city}
                                        </span>
                                        <span className="tour__ratingd-flex align-items-center gap-1">
                                            <i class='ri-star-s-fill' style={{ 'color': 'var(--secondary-color' }}>
                                            </i>
                                            {avgRating === 0 ? null : avgRating}
                                            {totalRating === 0 ? (
                                                'Not rated'
                                            ) : (
                                                <span>{reviews?.length}</span> 
                                            )}
                                        </span>
                                        <span>
                                            <i className="ri-map-pin-user-fill"></i>{address}
                                        </span>
                                    </div>
                                    <div className="tour__extra-details">
                                        <span><i className="ri-map-pin-2-line"></i>{city}</span>
                                        <span><i className="ri-money-dollar-circle-line">${price}</i> per persion</span>
                                        <span><i className="ri-map-pin-time-line">{distance}</i>k/m</span>
                                        <span><i className="ri-group-line"></i>{maxGroupSize} people
                                        </span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>


                                {/* ======================================== tour review section ================================  */}

                                <div className="tour__reviews mt-4">
                                    <h4>Reviews({reviews?.length}reviews )</h4>
                                    <Form onSubmit={submitHandler}>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            <span onClick={() => setTourRating(1)}>1<i class="ri-star-s-fill"></i></span>
                                            <span onClick={() => setTourRating(2)}>2<i class="ri-star-s-fill"></i></span>
                                            <span onClick={() => setTourRating(3)}>3<i class="ri-star-s-fill"></i></span>
                                            <span onClick={() => setTourRating(4)}>4<i class="ri-star-s-fill"></i></span>
                                            <span onClick={() => setTourRating(5)}>5<i class="ri-star-s-fill"></i></span>
                                        </div>

                                        <div className="review__input">
                                            <input type='text'
                                                ref={reviewMsgRef}
                                                placeholder="share your thoughts"
                                                required />
                                            <button className="btn primary__btn text-white" type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </Form >

                                    <ListGroup className="user__reviews">
                                        {
                                            reviews?.map(review => (
                                                <div className="review__item">
                                                    <img src={avatar} alt="avatar" />

                                                    <div className="w-100">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5>{review.username}</h5>
                                                                <p>
                                                                    {new Date(review.createdAt).toLocaleDateString('en-US', options)}
                                                                </p>
                                                            </div>
                                                            <span className="d-flex align-items-center">
                                                                {review.rating}<i class='ri-star-s-fill'></i>
                                                            </span>
                                                        </div>
                                                        <h6>{review.reviewText}</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </ListGroup>
                                </div>
                                {/* ======================================== tour review section end ================================  */}

                            </div>
                        </Col>
                        <Col lg='4'>
                            <Booking props={tour.data} avgRating={avgRating} />

                        </Col>
                    </Row>}
                </Container>
            </section>
            <NewsLetter />
        </>
    )

}

export default TourDetails