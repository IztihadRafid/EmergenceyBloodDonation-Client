import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useAllDonors = () => {
    //tan stack query
    const axiosSecure = useAxiosSecure();
    const { refetch,data: alldonors = [] } = useQuery({
        queryKey: ['alldonors'],
        queryFn: async () => {
            const res = await axiosSecure.get('/donor')
            return res.data
            console.log(res.data);
        }
    })
    return [alldonors,refetch]
};

export default useAllDonors;