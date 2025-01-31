import { FaTrash } from "react-icons/fa";
import profilePic from "../../../assets/profileDonor.png"
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";
import useAllDonors from "../../../Components/hooks/useAllDonors";
const AllDonors = () => {
    const [alldonors,refetch] = useAllDonors()
    const axiosSecure = useAxiosSecure()
    const handleDeleteDonor = (id) => {

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

                axiosSecure.delete(`/donor/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `donor has been deleted.`,
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
                <h2 className="text-center text-4xl font-bold  text-red-600">All Donors({alldonors.length})</h2>
            </div>

            <div className="overflow-x-auto rounded-xl m-2">
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
                            <th>Present Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alldonors.map((allSingleDonor, index) => <tr key={allSingleDonor._id}>
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
                                            <div className="font-semibold text-lg">{allSingleDonor?.name || "Unknown"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{allSingleDonor?.email || "unknown"}</td>
                                <td>{allSingleDonor?.contactNumber || "unknown"}</td>
                                <td>{allSingleDonor?.bloodGroup || "not found"}</td>
                                <td>{allSingleDonor?.age || "unknown"}</td>
                                <td>{allSingleDonor?.presentAddress || "unknown"}</td>
                                <th>
                                    <button onClick={() => handleDeleteDonor(allSingleDonor._id)} className="btn btn-ghost text-red-500 text-lg "><FaTrash></FaTrash> </button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllDonors;