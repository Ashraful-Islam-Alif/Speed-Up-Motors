import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ width: "100%", height: "" }} className=''>
            <div className=' mx-auto mt-5  bg-cyan-400 text-black text-center p-4'>
                <div className='row d-flex justify-content-between align-items-center '>
                    <h2 className='py-4 mb-4  font-extrabold'>SPEEDUP MOTORS</h2>
                    <div className='col-sm-6 col-md-4  p-4'>

                        <h4>Support</h4>
                        <p>+8801671627637</p>
                    </div>
                    <div className='col-sm-6 col-md-4  p-4'>
                        <h4>Stay Connected</h4>
                        <p>House: 65, Hilali king, Bangladesh</p>
                    </div>
                    <div className='col-sm-6 col-md-4 p-4 '>
                        <h4>Customer Services</h4>
                        <ul>

                            <li>Help Center</li>
                            <li>Report Abuse</li>
                            <li>Submit a Dispute</li>
                            <li>Polices & Rules</li>
                            <li>Get Paid for Your Feedback</li>
                        </ul>

                    </div>
                    <hr />
                    <p>Copyright Ashraful Islam Alif @2022</p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;