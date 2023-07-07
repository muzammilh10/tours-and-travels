import React from "react";
import TourCard from "../../shared/TourCard";

import { Col } from "reactstrap";

import useFetch from "../../hooks/useFetch";
import { BASE_URL } from './../../config';

import './features.css'




const FeaturedTourList = () => {

    const { data: featuredTour, loading, error } = useFetch(
        `${BASE_URL}/tours/search/getFeaturedTours`
    )
    // console.log(featuredTour)

    return (
        <>
            {
                loading && <h4>loading..............</h4>
            }
            {
                error && <h4>{error}</h4>
            }
            {!loading && !error && featuredTour?.map(tour => (
                <Col lg='3' className="mb-4" key={tour.id}>
                    <TourCard tour={tour} />
                </Col>
            ))}
        </>
    )
}

export default FeaturedTourList      