import useAdmin from "../Components/hooks/useAdmin";
import useAllDonors from "../Components/hooks/useAllDonors";
import useAllRequests from "../Components/hooks/useAllRequests";
import useAllUsers from "../Components/hooks/useAllUsers";
import useAuth from "../Components/hooks/useAuth";


const MyProfile = () => {
    const { user } = useAuth()
    const [allusers] = useAllUsers()
    const [alldonors] = useAllDonors()
    const [allrequests] = useAllRequests()
    const [isAdmin] = useAdmin()
    return (
        <div>
            <h1 className="text-center font-semibold text-3xl my-10">Welcome Back <br />{user?.email}</h1>
            {
                isAdmin ? <div className="md:m-10 m-4 lg:flex justify-around items-center">
                <div className="card bg-orange-500 text-white w-full m-2">
                    <div className="card-body">
                        <h2 className="card-title text-4xl">All Users</h2>
                        <p className="text-3xl">{allusers?.length}</p>
                      
                    </div>
                </div>
                <div className="card bg-lime-500 text-white w-full m-2">
                    <div className="card-body">
                        <h2 className="card-title text-4xl">All Donors</h2>
                        <p className="text-3xl">{alldonors?.length}</p>
                      
                    </div>
                </div>
                <div className="card bg-sky-400 text-white w-full m-2">
                    <div className="card-body">
                        <h2 className="card-title text-4xl">All Requests</h2>
                        <p className="text-3xl">{allrequests?.length}</p>
                      
                    </div>
                </div>
            </div> : <div className="m-2 md:flex space-x-2">
                
                <div className="card bg-lime-500 text-white w-full m-2">
                    <div className="card-body">
                        <h2 className="card-title text-4xl">All Donors</h2>
                        <p className="text-3xl">{alldonors?.length}</p>
                      
                    </div>
                </div>
                <div className="card bg-sky-400 text-white w-full m-2">
                    <div className="card-body">
                        <h2 className="card-title text-4xl">All Requests</h2>
                        <p className="text-3xl">{allrequests?.length}</p>
                      
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default MyProfile;