import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../firebase/firebase.config';
const auth = getAuth(app);
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [signInError, setSignInError] = useState('')
    const [signInSuccess, setSignInSuccess] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        // console.log(user);
        //reset validation
        setSignInError('')
        setSignInSuccess('')
        signIn(email, password)
            .then(result => {
                const user = result.user;
                if (result.user.emailVerified) {

                    setSignInSuccess("Loggin Successfully")
                    console.log(user);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Logged in successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate(from, { replace: true })
                }
                else {
                   
                    setSignInError('Please Verify Your Email')
                }


            })
            .catch(error => {
                console.error(error);
                setSignInError("Wrong Password")
                setSignInSuccess('')
            })
    }
    const handleForgetPassword = () => {
        // console.log('asdasd',emailRef.current.value);
        const email = emailRef.current.value
        if (!email) {
            setSignInError("Please Provide a valid Email")
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    Swal.fire('Password Reset email sent, please check your email');
                   
                })
        }
    }
    return (
        <div className="hero mt-5  ">
            <div className="hero-content w-full flex-col mb-10 ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-6 text-red-500">Login now!</h1>
                </div>
                <div className="card border border-red-300 p-10">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" name='email' placeholder="email" className="input input-bordered md:w-96 lg:w-96 w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered md:w-96 lg:w-96 w-full" required />
                            <label onClick={handleForgetPassword} className="label">
                                <a className="label-text-alt link link-hover text-blue-700 text-base">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-500 hover:bg-red-400 text-white">Login</button>
                        </div>
                        {
                            // Viewing authentication error in SignUp
                            signInError && <p className="text-red-500 text-lg font-medium  md:w-2/3 w-full">{signInError}</p>
                        }
                        {
                            signInSuccess && <p className="text-green-600 text-lg font-medium  md:w-2/3 w-full">{signInSuccess}</p>
                        }
                        <div className='flex justify-center items-center my-4'>
                            <SocialLogin></SocialLogin>
                        </div>
                        <p className='text-center'>Don`t have Account? Please <Link className="text-blue-500" to='/signup'>Sign UP</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;