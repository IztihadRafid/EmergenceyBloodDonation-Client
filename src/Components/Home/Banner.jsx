import { Link } from "react-router-dom";
import banner from "../../assets/DonateBloodBanner.jpg";

const Banner = () => {
    return (
        <div className="relative">
            <div className="">
                <div className="relative">
                    <img className="md:w-[80%]  mx-auto" src={banner} alt="Donation Banner" />
                    <div className="absolute md:w-[80%] mx-auto inset-0 bg-black bg-opacity-20"></div>
                </div>
                <div className="absolute inset-y-0 flex items-center md:w-[50%] p-8 md:m-12">
                    <div className="md:text-right text-white md:ml-20">
                        <p className="md:text-2xl lg:text-4xl font-bold">
                            "Your blood donation today could save someone's life tomorrow."
                        </p>
                        <br />
                        <p className="md:text-xl lg:text-3xl">
                            Donating blood can improve your cardiovascular health and reduce the
                            risk of heart disease.
                        </p>
                        <div className="flex lg:justify-end lg:items-center lg:mt-10 ">
                            <div className="mr-5">
                                <Link to='/donate' className=" lg:px-8 py-3 lg:text-lg text-red-600 font-semibold rounded-lg hover:bg-red-700 border-2 hover:text-white bg-[#fff8f0]">Donate Now</Link>
                            </div>
                            <div className="">
                                <Link to='/requestbloodform' className="border-2 py-3 lg:px-8 hover:bg-white hover:text-red-700 lg:text-lg font-semibold rounded-lg ">Request Blood</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;