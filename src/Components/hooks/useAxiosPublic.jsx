import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://emergency-blood-donation-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;