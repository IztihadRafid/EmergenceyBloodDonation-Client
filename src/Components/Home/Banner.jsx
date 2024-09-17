import banner from "../../assets/DonateBloodBanner.jpg";

const Banner = () => {
    return (
        <div className="relative">
            <div className="">
                <img className="md:w-[80%] mx-auto" src={banner} alt="Donation Banner" />
                <div className="absolute inset-y-0 flex items-center md:w-[45%] p-8 md:m-12">
                    <div className="md:text-right text-white md:ml-20">
                        <p className="md:text-3xl lg:text-4xl font-bold">
                            "Your blood donation today could save someone's life tomorrow."
                        </p>
                        <br />
                        <p className="md:text-2xl lg:text-3xl">
                            Donating blood can improve your cardiovascular health and reduce the
                            risk of heart disease.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;