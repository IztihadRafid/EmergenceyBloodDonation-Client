import androidViewPic from "../../assets/androidView.jpg"
import { FaSearch } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
const PhoneDesign = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center text-red-600 text-2xl md:text-3xl lg:text-5xl  font-semibold p-10 mb-5">Why Emergency Blood Donation?</h1>
            <div className="lg:flex ">
                <div className=" mx-auto">
                    <div className="hero bg-red-200 mb-5 rounded-3xl p-8">
                        <div className="hero-content flex-col lg:flex-row">
                            <p className="text-3xl text-red-700"><FaSearch></FaSearch></p>
                            <div className="">
                                <h2 className="card-title font-bold text-3xl">Search By Location</h2>
                                <p className="text-xl">Finding blood donors has never been simpler with our geo-search feature. Just input your location, and you'll instantly see donors located nearest to you.</p>

                            </div>
                        </div>
                    </div>
                    <div className="hero  bg-red-200 mb-5 rounded-3xl p-8">
                        <div className="hero-content flex-col lg:flex-row ">
                            <p className="text-3xl text-red-700"><FaHandsHelping></FaHandsHelping></p>
                            <div>
                                <h2 className="card-title font-bold text-3xl">Efficient Donor and Recipient Support</h2>
                                <p className="text-xl"> Instantly connect with donors and recipients in real time ensuring faster and more efficient support when it matters most.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-fit mx-auto mb-10">
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone"><img src={androidViewPic} alt="" /></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneDesign;