import React from 'react';

const AboutUs = () => {
    return (
        <div className='bg-gradient-to-r from-red-400 via-red-100 to-red-400 p-6'>
            <h1 className='text-center text-red-500 sm:text-xl md:text-4xl lg:text-5xl p-5 font-semibold'>About Us</h1>
            <p className='lg:text-xl md:text-xl font-normal text-center w-2/3 m-auto mb-10'>At Emergency Blood Donation, we are dedicated to saving lives by connecting those in urgent need of blood with willing donors. Our platform bridges the gap between donors and receivers, ensuring that life-saving blood reaches hospitals and patients quickly in times of crisis. <br></br>

                With a vision to build a reliable and accessible network, we work around the clock to support those in emergencies. Whether you are a donor, recipient, or simply looking to contribute to a life-saving cause, our mission is to make the blood donation process seamless, safe, and efficient.<br></br>

                Join us in making a difference, one donation at a time.</p>
        </div>
    );
};

export default AboutUs;