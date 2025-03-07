import { Link } from "react-router-dom";
import banner from "../../assets/DonateBloodBanner.jpg";

const Banner = () => {
    return (
        <div className="hero md:min-h-screen relative">
            <img className="w-full min-h-[50vh] sm:h-screen object-cover" src={banner} alt="Blood Donation" />
            <div className="hero-overlay bg-opacity-30 absolute inset-0"></div>
            <div className="hero-content text-neutral-content text-center px-5">
                <div className="max-w-4xl">
                    <h1 className="mb-6 text-2xl sm:text-3xl lg:text-6xl font-bold text-white">
                        Your blood donation today could save someone's life tomorrow.
                    </h1>
                    <p className="mb-6 text-lg sm:text-xl lg:text-2xl text-white">
                        Donating blood can improve your cardiovascular health and reduce the risk of heart disease.
                    </p>
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5">
                        <Link to='/donate' className="w-full lg:px-8 py-3 lg:text-lg text-red-600 font-semibold rounded-lg hover:bg-red-700 border-2 hover:text-white bg-[#fff8f0] text-center">
                            Donate Now
                        </Link>
                        <Link to='/requestbloodform' className="w-full border-2 py-3 lg:px-8 hover:bg-white hover:text-red-700 lg:text-lg font-semibold rounded-lg text-center">
                            Request Blood
                        </Link>
                    </div>
                </div>
            </div>
        </div>





    );
};

export default Banner;