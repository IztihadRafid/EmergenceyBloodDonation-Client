import { useLoaderData } from "react-router-dom";
import RequestPatientCard from "./RequestPatientCard";
import Marquee from "react-fast-marquee";
import Navbar from "../Navbar";
import { FaFilter } from "react-icons/fa";

const RequestBloodCards = () => {
    const requestBlood  = useLoaderData()
    return (
    //    
         <div>
            <Navbar></Navbar>
            <div className="lg:flex justify-between items-center w-1/2 mx-auto">
                <h1 className="md:text-3xl text-2xl lg:text-5xl text-red-500 font-semibold text-center p-8">All Requests</h1>
                <div className="lg:flex">
                    <div className="navbar-center ">
                        <div className="form-control">
                            <div className="">
                                <input type="text" placeholder="Search" className="input input-bordered input-error w-full max-w-xs" />
                            </div>
                        </div>
                    </div>


                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 text-xl "><span>Filter</span><FaFilter className="text-red-500" /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-red-100 text-lg rounded-box z-[1] w-60 p-4 shadow">
                            <li><a>By Group</a></li>
                            <li><a>Division</a></li>
                            <li><a>District</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="max-w-7xl mt-8 mx-auto grid lg:grid-cols-2 gap-8 ">
            {
                requestBlood.map(requestBlood=><RequestPatientCard key={requestBlood._id} requestBlood={requestBlood} ></RequestPatientCard>)
            }
        </div>
         </div>
      
    );
};

export default RequestBloodCards;