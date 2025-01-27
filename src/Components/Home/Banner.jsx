import { Link } from "react-router-dom";
import banner from "../../assets/DonateBloodBanner.jpg";

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <img className="lg:w-screen h-screen" src={banner} alt="" />
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-4xl">
                    <h1 className="mb-10 lg:text-6xl text-3xl font-bold text-white"> Your blood donation today could save someone's life tomorrow.</h1>
                    <p className="mb-10 text-xl lg:text-2xl text-white">
                        Donating blood can improve your cardiovascular health and reduce the
                        risk of heart disease.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-5">
                        <Link to='/donate' className="lg:px-8 py-3 lg:text-lg text-red-600 font-semibold rounded-lg hover:bg-red-700 border-2 hover:text-white bg-[#fff8f0]">Donate Now</Link>
                        <Link to='/requestbloodform' className="border-2 py-3 lg:px-8 hover:bg-white hover:text-red-700 lg:text-lg font-semibold rounded-lg ">Request Blood</Link>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Banner;