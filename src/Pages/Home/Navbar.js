import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import logo from '../../images/logo1.png'
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect sticky='top' expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/"><img
                        src={logo}
                        width="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/manageItems">Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to="/addItems">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
                                </>

                            }
                            {user ?
                                <button className='btn btn-link text-black text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;