import React from 'react';
import { Carousel } from 'react-bootstrap';


const FlashSale = () => {
    return (
        <div className='container mb-4'>
            <h1 className='text-primary fw-bold fst-italic text-center m-5 '>Flash Offers</h1>
            <Carousel variant="white">
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="https://i.ibb.co/G3YC0mp/brakes.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-4xl font-extrabold text-white'>Upto 30% Discount</h2>
                        <h5 className=' font-bold text-white'>Brakes</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="https://i.ibb.co/b1kq7yV/engine.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-4xl font-extrabold text-white'>Upto 20% Discount</h2>
                        <h5 className=' font-bold text-white'>Engine</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="https://i.ibb.co/SJ6ythB/Footpegs.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-4xl font-extrabold text-white'>Upto 30% Discount</h2>
                        <h5 className=' font-bold text-white'>Footpegs</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="https://i.ibb.co/rkKx4G8/Headlight.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-4xl font-extrabold text-white'>Upto 20% Discount</h2>
                        <h5 className=' font-bold text-white'>HeadLight</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="https://i.ibb.co/qYLNjmS/Suspension.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-4xl font-extrabold text-white'>Upto 40% Discount</h2>
                        <h5 className=' font-bold text-white'>Suspension</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default FlashSale;