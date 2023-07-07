import React from "react";
import './../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from './../shared/Subtitle'
import experienceImg from './../assets/images/experience.png'
import worldImg from '../assets/images/world.png'

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServicesList";
import FeaturedTourList from "../component/Featured-tours/FeaturedTourLIst";
import MasonaryGallryImages from "../component/image-gallery/MasnoryGallryImages";
import Testimonial from "./../component/Tesimonial/Testimonial";
import NewsLetter from "../shared/NewsLetter";
import { useEffect } from 'react';
import TravelTheme from "../component/travelTheme/travelTheme";

const Home = () => {

    useEffect(() => {
        window.scroll(0, 0)
    })
    return (
        <>

            {/* hero section start  */}
            <section className="main_display">
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle={'know before you go'} />
                                    <img src={worldImg} alt="" />
                                </div>
                                <h1>Traveling opens the door to creating
                                    <span className="highlight"> memories</span></h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Ipsa ratione nemo natus repudiandae saepe eum modi odio omnis
                                    quasi fuga quos eius ducimus, tenetur ea earum delectus
                                    accusantium error.</p>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-4">
                                <video src={heroVideo} authoplay loop alt="" controls />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-5">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>
                        <SearchBar />
                    </Row>
                </Container>
            </section>
            {/* hero setction start */}
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


            {/* featured tour section */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-2">
                            <h2 className="featured__tour-title">Our featured tours</h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>
            {/* Featured end */}
            {/* travel thems start*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-2">
                            <h2 className="featured__tour-title">Travel Themes</h2>
                        </Col>
                        <TravelTheme />
                    </Row>
                </Container>
            </section>
            {/* travel thems end */}

            {/* testimoonial section start */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={'Look Inside'} />
                            <h2 className="testimonial__title">Our Experiences</h2>
                        </Col>
                        <Col lg='12'>
                            <Testimonial />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* testimoonial section end */}


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

            {/* gallary section start */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={'Gallery'} />
                            <h2 className="gallery__title">Visit our customer tour gallary</h2>
                        </Col>
                        <Col lg='12'>
                            <MasonaryGallryImages />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* galary section end */}




            <NewsLetter />
        </>
    )
}

export default Home