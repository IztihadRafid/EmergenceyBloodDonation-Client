import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
 //import Sidebar from './Sidebar';

// Sample donor data for testing
const sampleDonors = [
  {
    id: 1,
    name: "Abidur Rahaman",
    bloodGroup: "A+",
    location: "Dhaka",
    imageUrl: "C:\Project\EmergencyBloodDonation-client\src\assets\profileImage.jpg"
  },
  {
    id: 2,
    name: "Rafika Hossain",
    bloodGroup: "O-",
    location: "Dhanmondi",
    imageUrl: "C:\Project\EmergencyBloodDonation-client\src\assets\profileImage.jpg"
  },
  {
    id: 3,
    name: "Fariha Ferdous",
    bloodGroup: "B+",
    location: "Chittagong",
    imageUrl: "C:\Project\EmergencyBloodDonation-client\src\assets\profileImage.jpg"
  },
  
];

const BloodDonationHistory = () => {
  const [donors, setDonors] = useState([]);

  
  useEffect(() => {
    setDonors(sampleDonors); 
  }, []);

  return (
    <div className="container mx-auto p-4 flex">
      {/* Header showing total number of donors */}
      <Sidebar></Sidebar>
      <h1 className="text-3xl font-bold mb-6">
        Total Number of Donors: {donors.length}
      </h1>

      {/* Displaying donor cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donors.map((donor) => (
          <div key={donor.id} className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={donor.imageUrl} alt={donor.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{donor.name}</h2>
              <p>Blood Group: {donor.bloodGroup}</p>
              <p>Location: {donor.location}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Contact Donor</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodDonationHistory;