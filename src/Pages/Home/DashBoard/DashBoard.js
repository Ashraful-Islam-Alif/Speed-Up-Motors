import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
const DashBoard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        // <div class="drawer drawer-mobile">
        //     <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        //     <div class="drawer-content">
        //         <h2 className='text-3xl font-bold text-blue-500 text-center'>Welcome to Dashboard</h2>
        //         <Outlet></Outlet>
        //     </div>
        //     <div class="drawer-side">
        //         <label for="dashboard-sidebar" class="drawer-overlay"></label>
        //         <ul class="menu p-4 overflow-x-auto w-48 text-base-content">

        //             <li><Link to="/dashboard" className='text-decoration-none'>My Orders</Link></li>
        //             <li><Link to="/dashboard/review" className='text-decoration-none'>My Reviews</Link></li>
        //             <li><Link to="/dashboard/myProfile" className='text-decoration-none'>My Profile</Link></li>

        //         </ul>

        //     </div>
        // </div >
        // <div>

        <div>
            <Button variant="link" onClick={handleShow}>
                <ul>
                    <li><AiOutlineMenuFold /></li>
                </ul>

            </Button>
            <Outlet></Outlet>
            <Offcanvas show={show} onHide={handleClose}>

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='text-center'>DashBoard</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>

                    <ul >
                        <li><Link to="/dashboard" className='text-decoration-none text-center'>My Order</Link></li>
                        <li><Link to="/dashboard/review" className='text-decoration-none'>My Reviews</Link></li>
                        <li><Link to="/dashboard/myProfile" className='text-decoration-none'> My Profile</Link></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default DashBoard;