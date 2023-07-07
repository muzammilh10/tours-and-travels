import React from "react"; 
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from "../pages/Home";
import Tour from "../pages/Tour";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import ThankYou from '../pages/ThankYou'
import About from "../pages/About";
import MasonaryGallryImages from "../component/image-gallery/MasnoryGallryImages";


const Routers =()=> {
    return (
        <Routes >
            <Route path='/' exact element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/tours' element={<Tour />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<MasonaryGallryImages />} />
            <Route path='/tours/:id' element={<TourDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path='/tours/search/' element={<SearchResultList />} />

            {/* for all routes */}
            <Route path="*" element={<Navigate to="/home" />} />


        </Routes>
    )
}


export default Routers   