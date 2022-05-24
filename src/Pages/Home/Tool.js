import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css';

const Tool = ({ tool }) => {
    const navigate = useNavigate();
    const { _id, img, name, description, minOrder, available, price } = tool;
    const handleToPurchase = () => {
        navigate(`tool/${_id}`)
    }

    return (
        <div className=" col-sm-12 col-md-6 col-lg-4 g-4">

            <div className="card h-100">
                <div>
                    <img src={img} style={{ width: "350px", height: "250px" }} className="card-img-top img-fluid img-thumbnail rounded mx-auto d-block" alt="..." />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><span className='font-bold'>Minimum Order: </span>{minOrder}</p>
                    <p className="card-text"><span className='font-bold'>Available: </span>{available}</p>
                    <p className="card-text"><span className='font-bold'>Price: </span> {price} <span className='badge bg-dark text-wrap'>/ unit</span></p>
                    <button onClick={() => handleToPurchase(_id)} className="bg-cyan-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded butn"> Place Order </button>
                </div>
            </div>

        </div>

    );
};

export default Tool;