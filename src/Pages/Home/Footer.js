import React from 'react';

const Footer = () => {
    return (
        <footer style={{ width: "100%", height: "" }} className=''>
            <div className=' mx-auto mt-5  bg-dark text-white text-center p-4'>
                <div className='row d-flex justify-content-between align-items-center '>
                    <h2>Electronics Bazar</h2>
                    <div className='col-sm-6'>

                        <h4>Support</h4>
                        <p>+8801671627637</p>
                    </div>
                    <div className='col-sm-6'>
                        <h4>Stay Connected</h4>
                        <p>House: 65, Hilali king, Bangladesh</p>
                    </div>
                    <hr />
                    <p>Copyright Ashraful Islam Alif @2022</p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;