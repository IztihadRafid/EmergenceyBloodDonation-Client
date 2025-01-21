import { FaTrash } from "react-icons/fa";
import useAllUsers from "../../Components/hooks/useAllUsers";
import profilePIc from "../../assets/profileDonor.png"
import Swal from "sweetalert2";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
const AllUsers = () => {
    const [allusers,refetch] = useAllUsers() //getting all users from all user hook
    const axiosSecure = useAxiosSecure()
    const handleDeleteUser = (id) => {
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

                axiosSecure.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                              Swal.fire({
                                title: "Deleted!",
                                text: `user has been deleted.`,
                                icon: "success"
                              });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div>
                <h2 className="text-center text-4xl font-bold p-1 lg:m-8 m-5 text-red-600">All Users</h2>
                <p className="text-center text-3xl text-red-500 font-semibold mb-5">Number of Users: {allusers.length}</p>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="my-3">
                        <tr className="bg-red-500  text-lg font-semibold text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers.map((allSingleUser, index) => <tr key={allSingleUser._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={profilePIc} alt="image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-lg">{allSingleUser?.name || "Unknown"}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>{allSingleUser?.email || "unknown"}</td>
                                <td>{allSingleUser?.contactNumber || "unknown"}</td>
                                <th>
                                    <button onClick={() => handleDeleteUser(allSingleUser._id)} className="btn btn-ghost text-red-500 text-lg "><FaTrash></FaTrash> </button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;