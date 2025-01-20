import useAuth from "../Components/hooks/useAuth";


const MyProfile = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1 className="text-center font-semibold text-3xl my-10">Welcome Back <br />{user?.email}</h1>
        </div>
    );
};

export default MyProfile;