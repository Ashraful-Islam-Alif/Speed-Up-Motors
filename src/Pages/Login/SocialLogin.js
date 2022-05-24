import React from 'react';
import google from '../../images/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    let location = useLocation()

    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [token] = useToken(user)
    let errorElement;
    if (loading) {
        return <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='px-2 mb-1'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div >
                <button onClick={() => signInWithGoogle()} className='bg-sky-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded butn w-50 d-block mx-auto m-3 d-flex align-items-center justify-center'>
                    <img style={{ width: 30 }} src={google} alt="" />
                    <span className='p-2'>Google Sign In</span>
                </button>

            </div>
        </div>

    );
};

export default SocialLogin;