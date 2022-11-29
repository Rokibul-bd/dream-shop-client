import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const { email, displayName } = user;
    const { register, handleSubmit, resetField } = useForm()

    // this query only for stutas find
    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers', email],
        queryFn: async () => {
            const res = await fetch(`https://dream-shop-server.vercel.app/sellers/${email}`)
            const data = res.json()
            return data
        }
    })
    const stutas = sellers[0]?.stutas
    const addProduct = data => {
        const { name, catagoray, resellPrice, orginalPrice, ram, rom, address, usedYear } = data
        const service = {
            name,
            resellPrice,
            orginalPrice,
            ram,
            rom,
            address,
            usedYear,
            email: email,
            seller: displayName,
            stutas
        }
        fetch(`https://dream-shop-server.vercel.app/services/${catagoray}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Your Product succesfully created!')
                console.log(data)
                resetField()
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='mx-24 my-28'>
            <h3 className='text-center text-2xl'>Add Product</h3>
            <form onSubmit={handleSubmit(addProduct)} className='mx-24 mt-16 shadow-md rounded-md px-12 py-8'>
                <div className="form-control mt-4">
                    <input type="text" {...register('name')} placeholder="Product Name" className="input input-bordered" required />
                </div>
                <div className="form-control mt-4">
                    <input type="text" {...register('orginalPrice')} placeholder="Orginal Price" className="input input-bordered" required />
                </div>
                <di className="form-control mt-4">
                    <input type="text" {...register('resellPrice')} placeholder="Resell Price" className="input input-bordered" />
                </di>
                <div className="form-control mt-4">
                    <input type="text" {...register('ram')} placeholder="Ram" className="input input-bordered" required />
                </div>
                <div className="form-control mt-4">
                    <input type="text" {...register('rom')} placeholder="Rom" className="input input-bordered" required />
                </div>
                <div className="form-control mt-4">
                    <input type="text" {...register('address')} placeholder="Address" className="input input-bordered" required />
                </div>
                <div className="form-control mt-4">
                    <input type="text" {...register('usedYear')} placeholder="Used year" className="input input-bordered" required />
                </div>
                <div className="form-control mt-4">
                    <input type="text" {...register('img')} placeholder="image link" className="input input-bordered" required />
                </div>
                <select {...register('catagoray', 'have must selected catagoray')} className="select select-warning w-full mt-4" required>
                    <option value="catagoray" disabled selected>Cataghoray</option>
                    <option value="iphone">iphone</option>
                    <option value="samsung">samsung</option>
                    <option value="onePlus">one plus</option>
                </select>
                <button type='submit' className='btn btn-accent w-full text-white mt-4'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProducts;