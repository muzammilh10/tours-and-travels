import React from "react";
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        responsive: [
            {
                breakPoints: 992,
                settings: {
                    slidesToShow: 2,
                    slidesTosScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakPoints: 576,
                settings: {
                    slidesToShow: 1,
                    slidesTosScroll: 1,
                },
            }
        ]
    }


    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <p>
                            The place is in a great ocation in Gumbet. The area is safe and
                            beautiful. The apartment was comfortable and the host was king
                            and responsive to our request.<br />Really a nice place.
                        </p>
                        <p>
                        <h5 className="mb-0 mt-3">john wick</h5>
                        <p>Customer</p>
                    </p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <p>
                            The place is in a great ocation in Gumbet. The area is safe and
                            beautiful. The apartment was comfortable and the host was king
                            and responsive to our request.<br />Really a nice place.
                        </p>
                        <p>
                        <h5 className="mb-0 mt-3">Lucy</h5>
                        <p>Customer</p>
                    </p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <p>
                            The place is in a great ocation in Gumbet. The area is safe and
                            beautiful. The apartment was comfortable and the host was king
                            and responsive to our request.<br />Really a nice place.
                        </p>
                        <p>
                        <h5 className="mb-0 mt-3">john wick</h5>
                        <p>Customer</p>
                    </p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <p>
                            The place is in a great ocation in Gumbet. The area is safe and
                            beautiful. The apartment was comfortable and the host was king
                            and responsive to our request.<br />Really a nice place.
                        </p>
                        <p >
                        <h5 className="mb-0 mt-9">Lucy</h5>
                        <p>Customer</p>
                    </p>
                    </div>
                </div>
            </div>

        </Slider>
    )
}


export default Testimonial; 