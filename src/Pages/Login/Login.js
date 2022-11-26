import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-36 mx-auto pt-12">
            <h3 className='text-center text-xl'>Please Log in</h3>
            <div className='w-12 h-[3px] bg-primary mx-auto mt-4'></div>
            <div className="card-body py-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <label className="label">
                        <Link className="label-text-alt text-sm">You have to new this website please <Link className='link-hover text-yellow-600' to="/signup">Create an account</Link>  </Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;