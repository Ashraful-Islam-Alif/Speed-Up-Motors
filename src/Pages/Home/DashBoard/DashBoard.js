import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import useAdmin from '../../../hooks/useAdmin';
const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (


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
                        {admin && <li><Link to="/dashboard/users" className='text-decoration-none'> All Users</Link></li>}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default DashBoard;