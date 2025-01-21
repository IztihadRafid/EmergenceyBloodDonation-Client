import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllRequests = () => {
const axiosSecure= useAxiosSecure();
const {refetch,data: allrequests=[]} = useQuery({
    queryKey: ['allrequests'],
    queryFn: async()=>{
        const res = await axiosSecure.get('/requestblood')
       return res.data;
    }
})
    return [allrequests,refetch]
};

export default useAllRequests;