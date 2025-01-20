import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useAllDonors = () => {
    //tan stack query
    const axiosSecure = useAxiosSecure();
    const { data: alldonors = [] } = useQuery({
        queryKey: ['alldonors'],
        queryFn: async () => {
            const res = await axiosSecure.get('/donor')
            return res.data
        }
    })
    return [alldonors]
};

export default useAllDonors;