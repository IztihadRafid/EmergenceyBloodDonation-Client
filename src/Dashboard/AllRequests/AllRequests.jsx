import { FaTrash } from "react-icons/fa";
import profilePic from "../../assets/profileDonor.png";
import useAllRequests from "../../Components/hooks/useAllRequests";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const AllRequests = () => {
    const [allrequests, refetch] = useAllRequests();
    const axiosSecure = useAxiosSecure();
    const [bloodGroupFilter, setBloodGroupFilter] = useState("");
    const [divisionFilter, setDivisionFilter] = useState("");
    const [phoneSearch, setPhoneSearch] = useState("");

    const handleDeleteRequest = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/requestblood/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `Request has been deleted.`,
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    // Filter requests based on blood group, division, and phone number
    const filteredRequests = allrequests.filter(request => {
        const matchesBloodGroup = bloodGroupFilter ? request.bloodGroup === bloodGroupFilter : true;
        const matchesDivision = divisionFilter ? request.division === divisionFilter : true;
        const matchesPhone = phoneSearch ? request.contactNumber?.includes(phoneSearch) : true;
        return matchesBloodGroup && matchesDivision && matchesPhone;
    });

    // Available blood groups for filter
    const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

    // Unique divisions for filter (dynamically generated from data)
    const divisions = [...new Set(allrequests.map(request => request.division).filter(division => division && division !== "unknown"))].sort();

    return (
        <div>
            <div className="my-10">
                <h2 className="text-center text-4xl font-bold text-red-600">All Requests({filteredRequests.length})</h2>
            </div>

            {/* Filter and Search Controls */}
            <div className="flex flex-col md:flex-row justify-center items-center mb-6 mx-2 gap-4 md:gap-8">
                <div className="w-full md:w-auto">
                    <label className="block text-lg font-semibold text-red-600 mb-2">Filter by Blood Group</label>
                    <select
                        className="select select-bordered w-full max-w-xs bg-red-50"
                        value={bloodGroupFilter}
                        onChange={(e) => setBloodGroupFilter(e.target.value)}
                    >
                        <option value="">All Blood Groups</option>
                        {bloodGroups.map(group => (
                            <option key={group} value={group}>{group}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full md:w-auto">
                    <label className="block text-lg font-semibold text-red-600 mb-2">Filter by Division</label>
                    <select
                        className="select select-bordered w-full max-w-xs bg-red-50"
                        value={divisionFilter}
                        onChange={(e) => setDivisionFilter(e.target.value)}
                    >
                        <option value="">All Divisions</option>
                        {divisions.map(division => (
                            <option key={division} value={division}>{division}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full md:w-auto">
                    <label className="block text-lg font-semibold text-red-600 mb-2">Search by Phone Number</label>
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        className="input input-bordered w-full max-w-xs bg-red-50"
                        value={phoneSearch}
                        onChange={(e) => setPhoneSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="overflow-x-auto rounded-xl m-2">
                <table className="table w-full bg-red-50">
                    {/* head */}
                    <thead className="my-3">
                        <tr className="bg-red-500 text-lg font-semibold text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Blood Group</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>No. Bags</th>
                            <th>Division</th>
                            <th>District</th>
                            <th>Reason</th>
                            <th>Present Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRequests.map((allSingleRequest, index) => (
                            <tr key={allSingleRequest._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={profilePic} alt="image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-lg">{allSingleRequest?.name || "Unknown"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{allSingleRequest?.email || "unknown"}</td>
                                <td>{allSingleRequest?.contactNumber || "unknown"}</td>
                                <td>{allSingleRequest?.bloodGroup || "not found"}</td>
                                <td>{allSingleRequest?.age || "unknown"}</td>
                                <td>{allSingleRequest?.gender || "unknown"}</td>
                                <td className="text-center">{allSingleRequest?.bag || "unknown"}</td>
                                <td>{allSingleRequest?.division || "unknown"}</td>
                                <td>{allSingleRequest?.district || "unknown"}</td>
                                <td>{allSingleRequest?.reason || "unknown"}</td>
                                <td>{allSingleRequest?.presentAddress || "unknown"}</td>
                                <th>
                                    <button
                                        onClick={() => handleDeleteRequest(allSingleRequest._id)}
                                        className="btn btn-ghost text-red-500 text-lg"
                                    >
                                        <FaTrash />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllRequests;