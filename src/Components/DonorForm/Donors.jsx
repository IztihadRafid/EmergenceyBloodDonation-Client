import { useLoaderData } from "react-router-dom";
import DonorCard from "./DonorCard";
import Navbar from "../Home/Navbar";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";

const Donors = () => {
    const donors = useLoaderData()
    //state to store selected blood groups
    const [selectedBloodGroups, setSelectedBloodGroups] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');


    // State to track if "See All" is clicked
    const [showAll, setShowAll] = useState(false);

         
    //Blood Group Filter Checkbox
    const handleCheckBoxChannge = (bloodGroup => {
        setSelectedBloodGroups(prevSelected => {
            if (prevSelected.includes(bloodGroup)) {
                //remove blood group if already exists
                return prevSelected.filter(group => group !== bloodGroup);
            }
            else {
                //add blood group if not selected
                return [...prevSelected, bloodGroup]
            }
        })
    })
    // Function to handle dropdown change for district
    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };


    // Filter donors based on selected blood groups
    //By default show all donors card
    // Filter donors based on selected blood groups and district
    const filteredDonors = donors.filter(donor => {
        const matchesBloodGroup = selectedBloodGroups.length === 0 || selectedBloodGroups.includes(donor.bloodGroup);
        const matchesDistrict = !selectedDistrict || donor.district === selectedDistrict;
        return matchesBloodGroup && matchesDistrict;


    });


    // Display limited or full filtered donors based on "showAll" state
    const donorsToDisplay = showAll ? filteredDonors : filteredDonors.slice(0, 4);
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:flex justify-between items-center w-1/2 mx-auto">
                <h1 className="md:text-3xl text-2xl lg:text-5xl text-red-500 font-semibold text-center p-8">All Donors</h1>
                <div className="lg:flex">
                    <div className="navbar-center ">
                        <div className="form-control">
                            <div className="">
                                <input type="text" placeholder="Search" className="input input-bordered input-error w-full max-w-xs" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-[90%] mx-auto lg:flex '>
                <div className="w-1/4   mt-8">
                    <div className="card w-80 bg-red-100 ">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Filter</h2>
                            <hr className="border-2 border-red-500 " />
                            <p className="text-xl ">Blood Group</p>
                            {/* Filter By BLOOD groups */}
                            <ul className="menu  bg-red-100 text-lg text-black rounded-box p-2 mt-2">
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="">A+</span>
                                        <input type="checkbox" className="checkbox checkbox-error" onChange={() => handleCheckBoxChannge('A+')} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="">B+</span>
                                        <input type="checkbox" className="checkbox checkbox-error" onChange={() => handleCheckBoxChannge('B+')} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="">AB+</span>
                                        <input type="checkbox" className="checkbox checkbox-error" onChange={() => handleCheckBoxChannge('AB+')} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="">O+</span>
                                        <input type="checkbox" className="checkbox checkbox-error" onChange={() => handleCheckBoxChannge('O+')} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="">A-</span>
                                        <input type="checkbox" className="checkbox checkbox-error" onChange={() => handleCheckBoxChannge('A-')} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="">B-</span>
                                        <input type="checkbox" className="checkbox checkbox-error" onChange={() => handleCheckBoxChannge('B-')} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="">AB-</span>
                                        <input type="checkbox" className="checkbox checkbox-error" onChange={() => handleCheckBoxChannge('AB-')} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="">O-</span>
                                        <input type="checkbox" className="checkbox checkbox-error" onChange={() => handleCheckBoxChannge('O-')} />
                                    </label>
                                </div>
                            </ul>
                            <hr className="border-1 border-red-500 " />
                            <div className="form-control">
                                {/* Filter by Distritcs */}
                                <label className="label text-xl">District</label>
                                <select className="select select-error" value={selectedDistrict} onChange={handleDistrictChange}>
                                    <option value="">All Districts</option>
                                    {/* Dhaka Division  */}
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Faridpur">Faridpur</option>
                                    <option value="Gazipur">Gazipur</option>
                                    <option value="Gopalganj">Gopalganj</option>
                                    <option value="Jamalpur">Jamalpur</option>
                                    <option value="Kishoreganj">Kishoreganj</option>
                                    <option value="Madaripur">Madaripur</option>
                                    <option value="Manikganj">Manikganj</option>
                                    <option value="Munshiganj">Munshiganj</option>
                                    <option value="Mymensingh">Mymensingh</option>
                                    <option value="Narayanganj">Narayanganj</option>
                                    <option value="Narsingdi">Narsingdi</option>
                                    <option value="Netrokona">Netrokona</option>
                                    <option value="Rajbari">Rajbari</option>
                                    <option value="Shariatpur">Shariatpur</option>
                                    <option value="Sherpur">Sherpur</option>
                                    <option value="Tangail">Tangail</option>

                                    {/* Barisal Division */}
                                    <option value="Barguna">Barguna</option>
                                    <option value="Barisal">Barisal</option>
                                    <option value="Bhola">Bhola</option>
                                    <option value="Jhalokati">Jhalokati</option>
                                    <option value="Patuakhali">Patuakhali</option>
                                    <option value="Pirojpur">Pirojpur</option>

                                    {/* Chattogram Division */}
                                    <option value="Bandarban">Bandarban</option>
                                    <option value="Brahmanbaria">Brahmanbaria</option>
                                    <option value="Chandpur">Chandpur</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Comilla">Comilla</option>
                                    <option value="Cox's Bazar">Cox's Bazar</option>
                                    <option value="Feni">Feni</option>
                                    <option value="Khagrachari">Khagrachari</option>
                                    <option value="Lakshmipur">Lakshmipur</option>
                                    <option value="Noakhali">Noakhali</option>
                                    <option value="Rangamati">Rangamati</option>

                                    {/* Khulna Division  */}
                                    <option value="Bagerhat">Bagerhat</option>
                                    <option value="Chuadanga">Chuadanga</option>
                                    <option value="Jessore">Jessore</option>
                                    <option value="Jhenaidah">Jhenaidah</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Kushtia">Kushtia</option>
                                    <option value="Magura">Magura</option>
                                    <option value="Meherpur">Meherpur</option>
                                    <option value="Narail">Narail</option>
                                    <option value="Satkhira">Satkhira</option>

                                    {/* Rajshahi Division  */}
                                    <option value="Bogra">Bogra</option>
                                    <option value="Joypurhat">Joypurhat</option>
                                    <option value="Naogaon">Naogaon</option>
                                    <option value="Natore">Natore</option>
                                    <option value="Nawabganj">Nawabganj</option>
                                    <option value="Pabna">Pabna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Sirajgonj">Sirajgonj</option>

                                    {/* Rangpur Division  */}
                                    <option value="Dinajpur">Dinajpur</option>
                                    <option value="Gaibandha">Gaibandha</option>
                                    <option value="Kurigram">Kurigram</option>
                                    <option value="Lalmonirhat">Lalmonirhat</option>
                                    <option value="Nilphamari">Nilphamari</option>
                                    <option value="Panchagarh">Panchagarh</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Thakurgaon">Thakurgaon</option>

                                    {/* Sylhet Division */}
                                    <option value="Habiganj">Habiganj</option>
                                    <option value="Maulvibazar">Maulvibazar</option>
                                    <option value="Sunamganj">Sunamganj</option>
                                    <option value="Sylhet">Sylhet</option>
                                    {/* Add other 62 districts here */}
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-3/4 mt-8 mx-auto grid lg:grid-cols-2 gap-8 ">
                    {
                        donorsToDisplay.map(donor => <DonorCard key={donor._id} donor={donor}></DonorCard>)
                    }
                </div>
            </div>
             {/* Show "See All" button only if not showing all donors */}
             {!showAll && (
                <div className="flex justify-center m-4">
                    <button className="rounded-xl bg-red-600 font-semibold hover:bg-red-700 text-lg text-white px-8 py-4" onClick={() => setShowAll(true)}>
                        See All
                    </button>
                </div>
            )}
           
        </div>

    );
};

export default Donors;