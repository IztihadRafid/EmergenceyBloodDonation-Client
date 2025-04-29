import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "./SocialLogin";
import { getAuth, sendEmailVerification } from "firebase/auth";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;


        //VALIDATION OF CONTACT NUMBER
        const regex = /^01\d{9}$/;
        if (!regex.test(phone)) {
            return Swal.fire({
                icon: "error",
                text: "Invalid Contact number",
            });
        }




        setSignUpError("")
        //reset validation


        //Creating user by signing Up
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                sendEmailVerification(auth.currentUser)
                .then(()=>{
                    console.log("verification email sent");
                    alert("Verification Email Sent. Please Verify the Email")
                })
                const user = { email, name, phone }
                axiosPublic.post('/user', user)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire("Registered Successfully");
                            form.reset();
                            navigate('/')
                            // console.log("Signed Up and send to database",res.data);
                        }
                    })
                // fetch('http://localhost:5000/user',{
                //     method: "POST",
                //     headers :{
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(user)
                // })
                // .then(res=>res.json())
                // .then(data=>{
                //     console.log(data);
                //     if(data.insertedId){
                //         Swal.fire("Registered Successfully");
                //         form.reset();
                //         navigate('/')
                //     }
                // })


            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            })

    }
    return (
        <div className="hero mt-5 bg-gradient-to-r from-white via-red-100 to-red-50 ...">
            <div className="hero-content  flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-8 text-red-500">Register now!</h1>
                </div>
                <div className="card  border border-red-300 md:p-8 p-3">
                    <form onSubmit={handleSignUp} className="card-body mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="username" className="input input-bordered md:w-96 lg:w-96 w-full" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name='phone' placeholder="phone number" className="input input-bordered md:w-96  lg:w-96  w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered md:w-96  lg:w-96  w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered md:w-96  lg:w-96  w-full" required />

                        </div>
                        {
                            // Viewing authentication error in SignUp
                            signUpError && <p className="text-red-500 text-lg font-medium md:w-2/3 w-full">{signUpError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn bg-red-500 hover:bg-red-400 text-white">Sign Up</button>
                        </div>
                        <p>Already have an Account? Please <Link className="text-blue-500" to='/login'>Login</Link></p>
                        <div className='flex justify-center items-center my-4'>
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;