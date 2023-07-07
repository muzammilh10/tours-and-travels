import React from "react";
import { useEffect } from "react";
import './../styles/about.css'

import { Row, Col, Container } from 'reactstrap'
import Newsletter from "../shared/NewsLetter";
import Testimonial from "../component/Tesimonial/Testimonial";
import Subtitle from "../shared/Subtitle";
import experienceImg from './../assets/images/experience.png'
import CommonSection from "../shared/CommonSection";
import ServiceList from "../services/ServicesList";

const About = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }) 
    return (<>
        <CommonSection title={`Looking For Joy ?`} />
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">What we serve</h5>
                        <h2 className="services__title">We offer our best services</h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>
                    {/* experience section start */}
                    <section>
                <Container>
                    <Row>
                        <Col lg='6' >
                            <div className="experience__contenet">
                                <Subtitle subtitle={'Experience'}></Subtitle>

                                <h2>With our all expeerience <br /> We will serve you </h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    <br />
                                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                                </p>
                            </div>
                            <div className="counter__wrapper d-flex alignitems-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successful Trip</h6>
                                </div>
                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Regular client</h6>
                                </div>
                                <div className="counter__box">
                                    <span>15k+</span>
                                    <h6>Years experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' >
                            <div className="experience__img">
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* experience section  end*/}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h2 className="services__subtitle">Why Choose Us</h2>
                        <h3 className="testimonial__title">Overheard from travelers</h3>
                    </Col>
                    <Col lg='12'>
                        <Testimonial />
                    </Col>
                </Row>
            </Container>
        </section>
        <Newsletter />
    </>
    )
}

export default About; 