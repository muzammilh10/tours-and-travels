import React from "react";
import ServiceCard from "./Service.Card";
import { Col } from "reactstrap";


import weatherImg from './../assets/images/weather.png'
import guideImg from './../assets/images/guide.png'
import customizationImg from './../assets/images/customization.png'


const serviceData= [
    {
        imgUrl:weatherImg,
        title:"Calculating Weather",
        desc: "lorem wfb efweb =ew nownewf",
    },
    {
        imgUrl:guideImg,
        title:"Best Tour GUIDE",
        desc: "lorem wfb efweb =ew nownewf",
    },
    {
        imgUrl:customizationImg,
        title:"customization",
        desc: "lorem wfb efweb =ew nownewf",
    }
]


const ServiceList =()=> {
    return (
        <>
        {
            serviceData.map((item,index) => (
            <Col lg='3' key = {index} >
                <ServiceCard item={item} />
            </Col>))
        }
        </>
    )
}

export default ServiceList