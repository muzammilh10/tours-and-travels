import React from "react";

import {Container,Col,Row, Button} from 'reactstrap'
import { Link} from "react-router-dom";

import './../styles/thankyou.css'


const ThankYou = () => {
    return(
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="pt-5 text-center">
                     <div className="thank__you">
                        <span><i class="ri-checkbox-circle-line"></i></span>
                        <h1>Thank You</h1>
                        <h3>Your Tour is booked</h3>
                        <Button className="btn primary__btn w-25"><Link to='/home'>Back To Home</Link></Button>
                     </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ThankYou;