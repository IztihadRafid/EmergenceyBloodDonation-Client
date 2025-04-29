import React from 'react';
import { FaHistory, FaPeopleCarry, FaUser, FaUsers } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { IoIosChatbubbles } from 'react-icons/io';
import { MdBloodtype } from 'react-icons/md';
import { RiUserHeartFill } from 'react-icons/ri';

import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Components/Home/Navbar';
import { GiMedicines } from 'react-icons/gi';
import useAllUsers from '../Components/hooks/useAllUsers';
import useAllDonors from '../Components/hooks/useAllDonors';
import useAllRequests from '../Components/hooks/useAllRequests';
import useAdmin from '../Components/hooks/useAdmin';
import { FaRegMessage } from 'react-icons/fa6';

const Dashboard = () => {
    const [allusers] = useAllUsers()
    const [alldonors] = useAllDonors()
    const [allrequests] = useAllRequests()
    const [isAdmin] = useAdmin()
    // console.log(isAdmin);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Button to open drawer for small screens */}
                    <label htmlFor="dashboard-drawer" className="btn bg-red-500 hover:bg-red-400 text-white drawer-button lg:hidden m-4">Open Dashboard</label>
                    <Outlet />
                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <div className='w-64 min-h-screen text-white bg-red-700 overflow-hidden'>
                        <h1 className='text-3xl font-semibold text-center mx-4 my-5'>DashBoard</h1>
                        <ul className="menu p-5 text-lg">
                            {isAdmin ? (
                                <>
                                    <li><NavLink to={'/dashboard/profile'}><FaUser />Admin Profile</NavLink></li>
                                    <li><NavLink to={'/dashboard/allusers'}><FaUsers /> All Users <span>{allusers.length}</span></NavLink></li>
                                    <li><NavLink to={'/dashboard/alldonors'}><FaPeopleCarry />All Donors <span>{alldonors.length}</span></NavLink></li>
                                    <li><NavLink to={'/dashboard/allrequests'}><GiMedicines />All Requests <span>{allrequests.length}</span></NavLink></li>
                                    <li><NavLink to={'/dashboard/donationhistory'}><FaHistory />Donation History</NavLink></li>
                                    <li><NavLink to={'/requestbloodform'}><MdBloodtype />Request Blood</NavLink></li>
                                    <li><NavLink to={'/donate'}><RiUserHeartFill />Donate Blood</NavLink></li>
                                    {/* <li><NavLink to={'/dashboard/tracker'}><GoGraph />Blood Tracker</NavLink></li> */}
                                    <li><NavLink to={'/dashboard/tracker'}><GoGraph />Overview</NavLink></li>
                                    <li><NavLink to={'/dashboard/livechat'}><IoIosChatbubbles />Chat</NavLink></li>
                                    <li><NavLink to={'/dashboard/feedbacks'}><FaRegMessage />Feedbacks</NavLink></li>
                                </>
                            ) : (
                                <>
                                    <li><NavLink to={'/dashboard/profile'}><FaUser />User Profile</NavLink></li>
                                    <li><NavLink to={'/donors'}><FaPeopleCarry />All Donors <span>{alldonors.length}</span></NavLink></li>
                                    <li><NavLink to={'/requestBlood'}><GiMedicines />All Requests <span>{allrequests.length}</span></NavLink></li>
                                    <li><NavLink to={'/dashboard/myhistory'}><FaHistory />Donation History</NavLink></li>
                                    <li><NavLink to={'/requestbloodform'}><MdBloodtype />Request Blood</NavLink></li>
                                    <li><NavLink to={'/donate'}><RiUserHeartFill />Donate Blood</NavLink></li>
                                    <li><NavLink to={'/dashboard/tracker'}><GoGraph />Blood Tracker</NavLink></li>
                                    <li><NavLink to={'/dashboard/message'}><FaRegMessage />Message</NavLink></li>
                                    <li><NavLink to={'/dashboard/livechat'}><IoIosChatbubbles />Chat</NavLink></li>
                                    
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;