import { FaTrash, FaUsers } from "react-icons/fa";
import { useState } from "react";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import profilePIc from "../../assets/profileDonor.png";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [filter, setFilter] = useState("all");

    const { data: allusers = [], refetch } = useQuery({
        queryKey: ["allusers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/user");
            return res.data;
        },
    });

    const handleMakeAdmin = (allSingleUser) => {
        axiosSecure.patch(`/user/admin/${allSingleUser._id}`).then((res) => {
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${allSingleUser.name} is Admin Now`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                refetch();
            }
        });
    };

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `User has been deleted.`,
                            icon: "success",
                        });
                    }
                });
            }
        });
    };

    const filteredUsers = allusers.filter((user) => {
        if (filter === "admin") return user.role === "admin";
        if (filter === "user") return user.role !== "admin";
        return true;
    });

    return (
        <div>
            <div className="flex justify-center items-center gap-4 p-5">
                <h2 className="text-4xl font-bold text-red-600">All Users</h2>
                <p className="text-3xl text-red-500 font-semibold">
                    Number of Users: {filteredUsers.length}
                </p>
                <select
                    className="p-2 border rounded text-lg"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="admin">Admins</option>
                    <option value="user">Users</option>
                </select>
            </div>

            <div className="overflow-x-auto m-2 rounded-xl">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-red-500 text-lg font-semibold text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={profilePIc} alt="Profile" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-lg">{user?.name || "Unknown"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user?.email || "unknown"}</td>
                                <td>{user?.contactNumber || "unknown"}</td>
                                <td>
                                    {user.role === "admin" ? (
                                        "Admin"
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn text-red-700 text-xl bg-red-200"
                                        >
                                            <FaUsers />
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user._id)}
                                        className="btn btn-ghost text-red-500 text-lg"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
