import React from 'react';
import { IconContext } from 'react-icons';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

import { FiStar } from 'react-icons/fi';
import person1 from '../../images/Review/person1.png'
import person2 from '../../images/Review/person2.png'
import person3 from '../../images/Review/person3.png'
const Reviews = () => {
    return (
        <div className=' m-2 '>
            <h1 className='text-primary fw-bold fst-italic text-center m-5'>Reviews</h1>
            <div class=" container d-flex align-items-center border mb-4 h-100 p-4 shadow">
                <div class="flex-shrink-0 p-4 ">
                    <img width={50} src={person1} alt="..." />
                </div>
                <div class="flex-grow-1 ms-3">
                    <IconContext.Provider
                        value={{ color: 'orange' }}
                    >
                        <div>

                            <div>
                                <ul className='d-flex align-items-center'>
                                    <span className='mx-2'>4.0</span>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><FiStar /></li>

                                </ul>

                            </div>
                            <div>
                                <p>Perfect! Thanks for waiting on delivery while I was out of town, didn't want stuff sitting on my porch. Devious!</p>
                            </div>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
            <div class="container d-flex align-items-center border mb-4 h-100 p-4 shadow">
                <div class="flex-shrink-0 p-4">
                    <img width={50} src={person2} alt="..." />
                </div>
                <div class="flex-grow-1 ms-3">
                    <IconContext.Provider
                        value={{ color: 'orange' }}
                    >
                        <div>

                            <div>
                                <ul className='d-flex align-items-center'>
                                    <span className='mx-2'>4.5</span>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarHalf /></li>


                                </ul>
                                <p>Perfect! Thanks for waiting on delivery while I was out of town, didn't want stuff sitting on my porch. Devious!</p>
                            </div>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
            <div class="container d-flex align-items-center border mb-4 h-100 p-4 shadow">
                <div class="flex-shrink-0 p-4">
                    <img width={100} src={person3} alt="..." />
                </div>
                <div class="flex-grow-1">
                    <IconContext.Provider
                        value={{ color: 'orange' }}
                    >
                        <div>

                            <div>
                                <ul className='d-flex align-items-center'>
                                    <span className='mx-2'>4.0</span>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><FiStar /></li>

                                </ul>
                                <p>Packaged well and shipped on time. Everything as expected, thank you.</p>
                            </div>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default Reviews;