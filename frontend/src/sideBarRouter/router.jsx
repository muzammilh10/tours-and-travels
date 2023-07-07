import React from "react";
import { Navigate } from "react-router-dom";
import { Routes, Route, } from 'react-router-dom'


import Dashboard from "../pages/Dashboard";
import Tours from "../pages/Tours";
import Booking from "../pages/Booking";
import Users from '../pages/Users'

const SideBarRouters = () => {
    return (
        <Routes >
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/tours' element={<Tours />} />
            <Route path='/admin/booking' element={<Booking />} />
            <Route path='/admin/users' element={<Users />} />


            {/* for all routes */}
            <Route path="*" element={<Navigate to="/admin/dashboard" />} />

        </Routes>

    )
}


export default SideBarRouters   