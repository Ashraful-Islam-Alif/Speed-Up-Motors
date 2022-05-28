import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Stack } from 'react-bootstrap';

const Brands = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    })
    return (
        <div className='container'>
            <h1 className='text-primary fw-bold fst-italic text-center m-5 '>Brands</h1>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    brands.map(brand =>

                        <div class="col ">
                            <div class="card h-100 shadow">
                                <img src={brand.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">{brand.name}</h5>

                                </div>
                            </div>
                        </div>


                    )
                }
            </div>
        </div>
    );
};

export default Brands;