import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar'
const Deshboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="deshboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side w-full bg-base-200 shadow-md">
                    <label htmlFor="deshboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/deshboard/bookings">My Booking</Link></li>
                        <li><Link to="">Add Product</Link></li>
                        <li><Link to="/deshboard/users">All User</Link></li>
                        <li><Link to="">All Seller</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Deshboard;