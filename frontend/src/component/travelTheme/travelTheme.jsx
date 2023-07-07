import React, { Fragment } from "react";

import { Col,  Card} from "reactstrap";
import { Link } from 'react-router-dom'
import clgImg from './../../assets/images/clg.jpeg'
import wImg from './../../assets/images/tour-img05.jpg'
import MotorbikeImg from './../../assets/images/Motorbike.webp'
import Family from './../../assets/images/family.jpg'
import './themes.css'

const Themes = [
    {
        path: '/family',
        display: 'Family Tours',
        img: Family
    },
    {
        path: '/college',
        display: 'College Tours',
        img:clgImg
    },
    {
        path: '/women',
        display: 'Women Tours',
        img:wImg
    },
    {
        path: '/Motorbike Tours',
        display: 'Motorbiking',
        img:MotorbikeImg
    }
]



const TravelTheme = () => {


    return (
        <Fragment className='container'>
            {Themes?.map((item, index) => (
                <Col lg='3'  key={index} >
                    <section className="pt-0">
                    <Link to={`/tours`}>
                    <Card className="mb-9">
                        <div className="theme__img">
                            <img src={item.img}  className="theme_img" alt="dsf" />
                            <h2 className="text_block">{item.display}</h2>
                        </div>
                    </Card>
                    </Link>
                    </section>



                </Col>
            ))}
        </Fragment>
    )
}

export default TravelTheme;     