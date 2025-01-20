import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useAllUsers = () => {
    //tan stack query
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
    
    const { data: allusers = [] } = useQuery({
        queryKey: ['allusers', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${user.email}`)
            return res.data;
        }
    })
    return [allusers]
};

export default useAllUsers;