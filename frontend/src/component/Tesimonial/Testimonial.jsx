import React, { useRef } from "react";
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import { Button } from "reactstrap";

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
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
                    slidesToShow: 2,
                    slidesTosScroll: 1,
                },
            }
        ]
    }

    let slider;

    const goToPrev = () => {
      slider.slickPrev(); // Corrected from "slickPrev"
    };
  
    const goToNext = () => {
      slider.slickNext(); // Corrected from "slickNext"
    };
    return (
        <>
        <Slider ref={c => (slider = c)} {...settings}>
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
        <Button onClick={goToPrev} className="btn primary__btn">Previous</Button>
        <Button onClick={goToNext} className="btn primary__btn">Next</Button>
        </>
        
    )
}


export default Testimonial; 