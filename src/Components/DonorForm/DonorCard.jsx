
import { Link } from "react-router-dom";
import profilePicDonor from "../../assets/profileDonor.png";
const DonorCard = ({ donor }) => {
    const { _id,name, patientName, gender, age, email, contactNumber, bloodGroup, occupation, presentAddress, division, district, guardian, relation, guardianContact, photo } = donor
   
    return (
        <div className="card lg:card-side bg-red-100 border-2 px-3 border-red-600 ">
            <figure>
                <img className="w-36" src={profilePicDonor} />
            </figure>
           
            <div className="card-body">
                <h1 className="text-2xl font-bold">{name}</h1>
                <div className="text-lg">
                    <p><span  className="font-semibold ">Blood group: </span> {bloodGroup}</p>
                    <p><span  className="font-semibold ">Gender: </span> {gender}</p>
                    <p><span  className="font-semibold ">Age: </span> {age}</p>
                </div>
                {/* <p className="text-lg "><span className="font-semibold">Email: </span>{email}</p>
                <p className="text-lg"><span className="font-semibold">Contact: </span>{contactNumber}</p> */}
                <p className="text-lg"><span className="font-semibold">Address: </span>{presentAddress}</p>
                <p className="text-lg"><span className="font-semibold">District: </span>{district}</p>
                <Link to={`/donorDetails/${_id}`}><button className="btn bg-red-500 hover:bg-red-400 text-white">Details For Contact</button></Link>
                
            </div>

        </div>
    );
};

export default DonorCard;