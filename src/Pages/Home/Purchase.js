import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Purchase your product</h2>
            <p>Alif complte it</p>
        </div>
    );
};

export default Purchase;