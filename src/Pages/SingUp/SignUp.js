import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('Signup')
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-36 mx-auto pt-12">
            <h3 className='text-center text-xl'>Please Sign Up</h3>
            <div className='w-12 h-[3px] bg-primary mx-auto mt-4'></div>
            <div className="card-body py-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <Link className="label-text-alt text-sm">Already you have an account please <Link className='link-hover text-yellow-600' to="/login">Log in</Link>  </Link>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Are you create seller Account</span>
                        <input type="checkbox" className="checkbox checkbox-primary" />
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;