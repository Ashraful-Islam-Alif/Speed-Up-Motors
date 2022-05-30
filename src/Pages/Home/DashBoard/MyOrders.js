import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import ConfirmModal from './ConfirmModal';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {

        if (user) {
            fetch(`https://evening-headland-64226.herokuapp.com/myOrder?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user])
    const handleToDelete = id => {

        const url = `https://evening-headland-64226.herokuapp.com/myOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = orders.filter(product => product._id !== id)
                    setOrders(remaining)
                }
            })

    }

    return (
        <>

            <div className='container'>
                <h2 className='text-center fw-bold text-blue-700 mb-4 '>Your Total Orders: {orders.length}</h2>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Total Price</th>
                                <th>Quantity</th>
                                <th>Mobile No.</th>
                                <th>Payment</th>
                                <th>Cancel Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((a, index) => <tr key={a._id}>
                                    <th>{index + 1}</th>
                                    <td>{a.displayName}</td>
                                    <td>{a.price}</td>
                                    <td>{a.quantity}</td>
                                    <td>{a.number}</td>
                                    <td>
                                        {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-success '>pay</button></Link>}
                                        {(a.price && a.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                        </div>}
                                    </td>
                                    <td>
                                        {(a.price && !a.paid) && <button onClick={() => handleToDelete(a._id)} className='btn btn-danger '>Cancel</button>}

                                        {(a.price && a.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>

                                        </div>}
                                    </td>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyOrders;