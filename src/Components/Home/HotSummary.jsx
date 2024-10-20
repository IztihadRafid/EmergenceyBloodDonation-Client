import { MdPeopleAlt } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { GiGroupedDrops } from "react-icons/gi";
import { Link } from "react-router-dom";
const HotSummary = () => {
    return (
        <div className="mb-8 p-10">
            <h1 className="text-red-600 text-center text-2xl md:text-3xl lg:text-5xl lg:w-1/2 mx-auto font-medium mt-10 mb-10 p-5">We're Connecting in a Unified Mission to Save Lives</h1>
            <div className="lg:flex justify-center items-center gap-24">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-red-800 text-6xl"><MdPeopleAlt /></p>
                    <p className="text-4xl font-medium">300 Donors</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-red-800 text-6xl"><IoLocationSharp /></p>
                    <p className="text-4xl font-medium">64 Districts</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link to='/donationinfo' className="font-bold text-red-800 text-6xl"><GiGroupedDrops /></Link>
                    <p className="text-4xl font-medium">8 Blood Groups</p>
                </div>
            </div>
        </div>
    );
};

export default HotSummary;