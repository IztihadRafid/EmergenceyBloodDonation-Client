import { useLoaderData } from "react-router-dom";
import RequestPatientCard from "./RequestPatientCard";
import Marquee from "react-fast-marquee";


const RequestBloodCards = () => {
    const requestBlood  = useLoaderData()
    return (
       <Marquee >
         <div className="max-w-7xl mt-8 mx-auto grid lg:grid-cols-2 gap-8 ">
            {
                requestBlood.map(requestBlood=><RequestPatientCard key={requestBlood._id} requestBlood={requestBlood} ></RequestPatientCard>)
            }
        </div>
       </Marquee>
    );
};

export default RequestBloodCards;