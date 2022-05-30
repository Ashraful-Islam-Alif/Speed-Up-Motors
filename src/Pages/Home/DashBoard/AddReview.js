import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = 'https://evening-headland-64226.herokuapp.com/addOrder';
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
        toast('New Product added successfully')
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary text-center m-4 fw-bold'>Add Products</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Photo URL' className='mb-2' type="text" {...register("img")} />
                {/* <input type="text" name="email" className='mb-2' {...register("name", { required: true, maxLength: 20 })} /> */}
                <input placeholder='Email Address' className='mb-2' {...register("email")} />
                <input placeholder='Product Name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />

                <textarea placeholder='Tell about us' className='mb-2' {...register("details")} />
                <input className='btn btn-success' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;