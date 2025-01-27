import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import useAuth from "./Components/hooks/useAuth";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return(
         <div className="flex justify-center items-center mt-96"><MutatingDots visible={true} height="100" width="100" color="#FF0000" secondaryColor="#FF0000" radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        /></div>)
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;