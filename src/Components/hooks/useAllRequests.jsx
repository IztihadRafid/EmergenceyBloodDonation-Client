import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllRequests = () => {
const axiosSecure= useAxiosSecure();
const {data: allrequests=[]} = useQuery({
    queryKey: ['allrequests'],
    queryFn: async()=>{
        const res = await axiosSecure.get('/requestblood')
       return res.data;
    }
})
    return [allrequests]
};

export default useAllRequests;