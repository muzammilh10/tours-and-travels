import React from "react";
import './newsletter.css'

import { Container, Row, Col } from "reactstrap";
import maleTourist from '../assets/images/male-tourist.png'


const NewsLetter = () => {
    const submitHandler = (event) => {
        event.preventDefault()
        alert('submitted')
    }
    return (
        <section className="newsletter">
            <Container >
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe now to get useful Traveling Information</h2>

                            <div className="newsletter__input">
                                <input type="text" placeholder="Eneter your email" />
                                <button className="btn newsletter__btn" onClick={submitHandler}>Subscribe</button>
                            </div>

                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
                                velit est corrupti? Aliquam mollitia ex aperiam id inventore vero.
                            </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewsLetter
