import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUser, googleSignIn } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    useTitle('Signup')
    const navigate = useNavigate()
    const handleSignupFrom = data => {
        setSignUpError('')
        const { email, password, name, isSeller } = data
        console.log(isSeller)
        registerUser(email, password)
            .then(creadentialUSer => {
                console.log(creadentialUSer)
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        toast.success('Successfully created!');
                        navigate('/')
                        saveUser(email, name, isSeller)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err)
                setSignUpError(err.message)
            })

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => { })
            .catch(err => console.error(err.message))
    }

    const saveUser = (email, name, isSeller) => {
        let seller = '';
        if (isSeller === 'seller') {
            seller = 'seller'
        } else {
            seller = 'user'
        }
        const user = {
            email,
            name,
            seller: seller
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleSubmit(handleSignupFrom)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-36 mx-auto pt-12">
            <h3 className='text-center text-xl'>Please Sign Up</h3>
            <div className='w-12 h-[3px] bg-primary mx-auto mt-4'></div>
            <div className="card-body py-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register('name')} type="text" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register('email', { required: "Email is required" })} className="input input-bordered" placeholder='email' />
                    {errors.email && <p role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register('password', { required: true, maxLength: 6 })} placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <p className="label-text-alt text-sm">Already you have an account please <Link className='link-hover text-yellow-600' to="/login">Log in</Link>  </p>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Are you create seller Account</span>
                        <input type="checkbox" value="seller" {...register('isSeller')} className="checkbox checkbox-primary" />
                    </label>
                </div>
                <label className="label">
                    <p>{signUpError}</p>
                </label>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                <div className="form-control">
                    <button onClick={handleGoogleSignIn} className="btn btn-accent text-white">Sign in with Google</button>
                </div>
            </div>
        </form>
    );
};

export default SignUp;