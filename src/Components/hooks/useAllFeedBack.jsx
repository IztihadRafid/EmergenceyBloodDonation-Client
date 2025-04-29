import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllFeedBack = () => {
    //tan stack query
    const axiosSecure = useAxiosSecure();
    const { refetch, data: allfeedback = [] } = useQuery({
        queryKey: ['allfeedback'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allmessage')
            return res.data
            console.log(res.data);
        }
    })
    return [allfeedback, refetch];
}
export default useAllFeedBack;