import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Components/hooks/useAdmin";
import useAuth from "../Components/hooks/useAuth";
import { MutatingDots } from "react-loader-spinner";

const AdminRoute = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return (
            <div className="flex justify-center items-center mt-96"><MutatingDots visible={true} height="100" width="100" color="#FF0000" secondaryColor="#FF0000" radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /></div>)
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;