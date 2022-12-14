import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const { handleSubmit, register } = useForm()
    const { loginUser, googleSignIn } = useContext(AuthContext)
    const [logInError, setLogInError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathName || '/'

    const handleLoginSubmit = data => {
        setLogInError('')
        const { email, password } = data
        loginUser(email, password)
            .then(() => {

                console.log('successfully log in user')
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLogInError(err.message)

            })

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }

    useTitle('Login')
    return (
        <form onSubmit={handleSubmit(handleLoginSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-36 mx-auto pt-12">
            <h3 className='text-center text-xl'>Please Log in</h3>
            <div className='w-12 h-[3px] bg-primary mx-auto mt-4'></div>
            <div className="card-body py-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register('email')} type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register('password')} placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                    <label className="label">
                        <p className="label-text-alt text-sm">You have to new this website please <Link className='link-hover text-yellow-600' to="/signup">Create an account</Link>  </p>
                    </label>
                </div>
                <label className="label">
                    <p className='text-red-500'>{logInError}</p>
                </label>
                <div className="form-control mt-2">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div className="form-control">
                    <button onClick={handleGoogleSignIn} className="btn btn-accent text-white">Sign in with Google</button>
                </div>
            </div>
        </form>
    );
};

export default Login;