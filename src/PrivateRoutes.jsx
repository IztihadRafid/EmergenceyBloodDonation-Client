import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import loadingVideo from "../src/assets/dropper.mp4"

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return(
         <div className="flex justify-center items-center mt-96">
            {/* <MutatingDots visible={true} height="100" width="100" color="#FF0000" secondaryColor="#FF0000" radius="12.5"
            ariaLabel="mutating-dots-loading" wrapperStyle={{}} wrapperClass="" /> */}
            <video src={loadingVideo}></video>
        </div>)
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;