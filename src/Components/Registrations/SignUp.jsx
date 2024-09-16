

const SignUp = () => {
    const handleSignUp =event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const age = form.age.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name,age,address,phone,email,password}
        console.log(user);
    }
    return (
        <div className="hero mt-5 bg-gradient-to-r from-white via-red-100 to-red-50 ...">
        <div className="hero-content max-w-6xl flex-col">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold mb-8 text-red-500">Register now!</h1> 
            </div>
            <div className="card border border-red-300 p-10">
                <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="username" className="input input-bordered md:w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age</span>
                        </label>
                        <input type="text" name='age' placeholder="age" className="input input-bordered md:w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name='address' placeholder="Present address" className="input input-bordered md:w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" name='phone' placeholder="phone number" className="input input-bordered md:w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered md:w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered md:w-96" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-500 hover:bg-red-400 text-white">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;