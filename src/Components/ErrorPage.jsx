import React from 'react';
import errorPage from "../assets/errPage.jpg"
const ErrorPage = () => {
    return (
        // <div className='h-screen'>
        //     {/* <h1 className='text-5xl mb-3'>Error Page</h1>
        //     <p className='text-4xl'>Not Found!!</p> */}
        //     <img src={errorPage} alt="" />
        // </div>
        <div className="h-screen w-screen overflow-hidden">
            <img
                src={errorPage}
                alt="Error Page"
                className="h-full w-full object-cover"
            />
        </div>

    );
};

export default ErrorPage;