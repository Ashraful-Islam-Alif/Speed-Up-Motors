import React from 'react';
import { RiUserFollowFill } from 'react-icons/ri';
import { FcFeedback } from 'react-icons/fc';
import { BsTools } from 'react-icons/bs';


const BusinessSummary = () => {
    return (
        <div className='container'>
            <h1 className='text-primary fw-bold fst-italic text-center m-5 '>Overall Views of us</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 mb-4 rounded-3 ">
                <div class="col d-flex justify-content-center align-items-center">
                    <div class="card h-100 border-0 shadow p-4">
                        <ul><li><RiUserFollowFill size={100} /></li></ul>
                        <div class="card-body text-center">
                            <h5 class="card-title">Followers</h5>
                            <p class="fw-bold text-3xl text-fuchsia-700">2000+</p>
                        </div>
                    </div>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <div class="card h-100 border-0 shadow p-4">
                        <ul><li><FcFeedback size={100} /></li></ul>
                        <div class="card-body text-center">
                            <h5 class="card-title">FeedBack</h5>
                            <p class="fw-bold text-3xl text-fuchsia-700">800+</p>
                        </div>
                    </div>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <div class="card h-100 border-0 shadow p-4">
                        <ul><li><BsTools size={100} /></li></ul>
                        <div class="card-body text-center">
                            <h5 class="card-title">Tools</h5>
                            <p class="fw-bold text-3xl text-fuchsia-700">1000+</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;