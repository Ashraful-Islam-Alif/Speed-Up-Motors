import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin';
import { sendEmailVerification } from 'firebase/auth';
import { async } from '@firebase/util';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [token] = useToken(user)
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigateLogin = event => {
        navigate('/login')
    }
    if (token) {
        navigate(from, { replace: true });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }

    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                <h2 className='text-center text-info'>Please Register</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className={agree ? "text-info ps-2" : "ps-2 text-danger mb-3"}>Accept Electronics Bazzar Terms and Conditions</label>
                <br />
                <Button disabled={!agree} variant="warning" type="submit" className='w-50 mx-auto d-block mb-3'>
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='text-info text-decoration-none ' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;