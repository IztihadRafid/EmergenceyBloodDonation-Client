import { FaTrash } from "react-icons/fa";
import profilePic from "../../assets/profileDonor.png"
import useAllRequests from "../../Components/hooks/useAllRequests";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AllRequests = () => {

    const [allrequests, refetch] = useAllRequests()
    const axiosSecure = useAxiosSecure()
    const handleDeleteRequest = (id)=>{
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
                                    refetch()
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: `Request has been deleted.`,
                                        icon: "success"
                                    });
                                }
                            })
                    }
                });
    }
    return (
        <div>
            <div className="my-10">
                <h2 className="text-center text-4xl font-bold  text-red-600">All Donors({allrequests.length})</h2>
            </div>

            <div className="overflow-x-auto rounded-xl">
                <table className="table w-full bg-red-50 ">
                    {/* head */}
                    <thead className="my-3">
                        <tr className="bg-red-500  text-lg font-semibold text-white">
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
                            <th>reason</th>
                            <th>Present Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allrequests.map((allSingleRequest, index) => <tr key={allSingleRequest._id}>
                                <th>
                                    {index + 1}
                                </th>
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
                                    <button onClick={() => handleDeleteRequest(allSingleRequest._id)} className="btn btn-ghost text-red-500 text-lg "><FaTrash></FaTrash> </button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllRequests;