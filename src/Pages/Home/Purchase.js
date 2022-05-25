import React from 'react';
import { useParams } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
const Purchase = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Purchase your product</h2>
            <p >Alif complte it </p>
            <p className='bg-yellow-500'>< BsStarFill /></p>


        </div >
    );
};

export default Purchase;