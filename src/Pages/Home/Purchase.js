import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { MdOutlineAdd } from 'react-icons/md';
import { GrFormSubtract } from 'react-icons/gr';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth)
    const [tool, setTool] = useState({})
    const { _id, name, img, description, available, price, minOrder } = tool;
    useEffect(() => {
        const url = `https://evening-headland-64226.herokuapp.com/tool/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])

    let MinOrder = Number(minOrder);

    let MaxOrder = Number(available)

    let [num, setNum] = useState(0);
    // console.log(Number(num));
    let handleChange = (e) => {
        setNum(e.target.value);
    };
    let incNum = () => {
        if (num > MaxOrder) {
            toast("max value crossed")
            return
        }
        else {
            setNum(Number(num) + 1);
        }

    };
    let decNum = () => {
        if (num < MinOrder) {
            toast("min value crossed")
            return
        }
        else {
            setNum(num - 1);
        }

    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = 'https://evening-headland-64226.herokuapp.com/myOrder';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        console.log(data);
        toast('Order added successfully')
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-primary text-center m-4 fw-bold'>Product Information</h2>

            <div class="card card-side bg-base-100 shadow-md">
                <figure><img src={img} alt="" /></figure>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><span className='font-bold'>Minimum Order: </span>{minOrder}</p>
                    <p className="card-text"><span className='font-bold'>Available: </span>{available}</p>
                    <p className="card-text"><span className='font-bold'>Price: </span> {price} <span className='badge bg-dark text-wrap'>/ unit</span></p>
                </div>
            </div>

            <form className='d-flex flex-column border p-4 mt-4' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-primary text-center m-4 fw-bold'>Provide Information</h2>
                <input type="text" name="name" className='mb-2 p-2' readOnly value={user?.displayName || ''} {...register("displayName")} />
                <input type="text" name="email" className='mb-2 p-2' readOnly value={user?.email || ''} {...register("email")} />
                <input placeholder='Address' className='mb-2 p-2' {...register("address")} />
                <input placeholder='Mobile Number' className='mb-2 p-2' {...register("number")} />
                <input placeholder='Calculate Total Price' className='mb-2 p-2'  {...register("price")} />
                <div className="col mb-2">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button
                                class="btn btn-outline-primary"
                                type="button"
                                onClick={decNum}
                            >
                                <GrFormSubtract />
                            </button>
                        </div>
                        <input {...register("quantity")}
                            type="text"
                            class="form-control"
                            value={num}
                            onChange={handleChange}
                        />
                        <div class="input-group-prepend">
                            <button
                                class="btn btn-outline-primary"
                                type="button"
                                onClick={incNum}
                            >
                                <MdOutlineAdd />
                            </button>
                        </div>
                    </div>
                </div>
                {num > MaxOrder || num < MinOrder ?
                    <button type="submit" class="btn btn-primary disabled fw-bold" data-bs-toggle="button" autocomplete="off">PURCHASE</button>

                    :
                    <button type="submit" class="btn btn-primary fw-bold" data-bs-toggle="button" autocomplete="off">PURCHASE</button>

                }

            </form>
        </div >
    );
};

export default Purchase;