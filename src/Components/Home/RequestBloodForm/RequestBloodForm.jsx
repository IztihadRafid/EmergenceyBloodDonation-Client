import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Navbar from '../Navbar';
import bloodanimation1 from "../../../assets/bloodanimation.png"
import "../../DonorForm/DonorForm.css"
const divisions = {
    // =====================================================  
    //                   Name of Division and Districts
    // =====================================================
    Dhaka: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Jamalpur", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Mymensingh", "Narayanganj", "Narsingdi", "Netrokona", "Rajbari", "Shariatpur", "Sherpur", "Tangail"],
    Barisal: ["Barguna", "Barisal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"],
    Chattogram: ["Bandarban", "Brahmanbaria", "Chandpur", "Chittagong", "Comilla", "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati"],
    Khulna: ["Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
    Rajshahi: ["Bogra", "Joypurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Rajshahi", "Sirajgonj"],
    Rangpur: ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"],
    Sylhet: ["Habiganj", "Maulvibazar", "Sunamganj", "Sylhet"]
  };
const RequestBloodForm = () => {
    const [selectedDivision, setSelectedDivision] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [districts, setDistricts] = useState([]);
  
    const handleDivisionChange = (e) => {
      const division = e.target.value;
      setSelectedDivision(division);
      setDistricts(divisions[division] || []); // Set districts based on selected division
      setSelectedDistrict(""); // Reset district selection when division changes
    };
  
    const handleDistrictChange = (e) => {
      const district = e.target.value;
      setSelectedDistrict(district);
    };
    const handleRequestBloodForm = (event) => {
        event.preventDefault();
        const form = event.target;
        //=================================
        // Patient information
        //=================================
        const name = form.patientname.value;
        const age = form.age.value;
        const gender = form.gender.value;
        const email = form.email.value;
        const contactNumber = form.contactNumber.value;

        //VALIDATION OF CONTACT NUMBER
        const regex = /^01\d{9}$/;
        if (!regex.test(contactNumber)) {
            return Swal.fire({
                icon: "error",
                text: "Invalid Contact number",
            });
        }

        const bloodGroup = form.bloodGroup.value;

        const presentAddress = form.presentAddress.value;
        const division = form.division.value;
        const district = form.district.value;
        //const presentCondition = form.presentCondition.value;

        //=================================
        //Extra information
        //=================================
        const bag = form.bag.value
        const relation = form.relation.value
        const reason = form.reason.value

        
        const requestPatientInformation = { name,  gender, age, email, contactNumber, bloodGroup, presentAddress, division,district, bag, relation,reason }
        fetch('http://localhost:5000/requestblood',{
            method: 'POST',
            headers :{
                'content-type': 'application/json',
            },
            body: JSON.stringify(requestPatientInformation)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        if (requestPatientInformation) {
            console.log(requestPatientInformation);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Requested Successfully",
                showConfirmButton: false,
                timer: 1500,

            });
        }


    }
    return (
       <div>
         <Navbar></Navbar>
         
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold p-5">Patient Information</h1>
                </div>
                <div className='lg:flex'>
                <div className=" animate-moveAndRotate"><img src={bloodanimation1} alt="animation" />
                </div>
                <div className="p-10 border border-red-300 rounded-lg bg-gradient-to-r from-red-50 via-red-100 to-red-50">
                    <form onSubmit={handleRequestBloodForm} className="card-body">
                        <div className="lg:flex gap-10">
                            {/* Personal Information */}
                            <div className="lg:w-1/2">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Patient Name</span>
                                        </label>
                                        <input type="text" name="patientname" placeholder="Patient name" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Age</span>
                                        </label>
                                        <input type="text" name="age" placeholder="Age" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Contact Number</span>
                                        </label>
                                        <input type="text" name="contactNumber" placeholder="Contact" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Division</span>
        </label>
        <select
          name="division"
          className="select select-bordered w-full max-w-xs"
          value={selectedDivision}
          onChange={handleDivisionChange}
        >
          <option value="">Select Division</option>
          {Object.keys(divisions).map((division) => (
            <option key={division} value={division}>
              {division}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text font-semibold">District</span>
        </label>
        <select
          name="district"
          className="select select-bordered w-full max-w-xs"
          disabled={!selectedDivision} // Disable if no division is selected
          value={selectedDistrict}
          onChange={handleDistrictChange}
        >
          <option value="">Select District</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Blood Group</span>
                                        </label>
                                        <select name="bloodGroup" className="select select-bordered w-full max-w-xs">
                                            <option>A+</option>
                                            <option>B+</option>
                                            <option>AB+</option>
                                            <option>O+</option>
                                            <option>A-</option>
                                            <option>B-</option>
                                            <option>AB-</option>
                                            <option>O-</option>
                                        </select>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Present Address</span>
                                        </label>
                                        <input type="text" name="presentAddress" placeholder="Present Address" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Gender</span>
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="cursor-pointer label">
                                            <input type="radio" name="gender" value="Male" className="radio radio-bordered" />
                                            <span className="label-text">Male</span>
                                        </label>
                                        <label className="cursor-pointer label">
                                            <input type="radio" name="gender" value="Female" className="radio radio-bordered" />
                                            <span className="label-text">Female</span>
                                        </label>
                                        <label className="cursor-pointer label">
                                            <input type="radio" name="gender" value="other" className="radio radio-bordered" />
                                            <span className="label-text">Other</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Number of Bags</span>
                                    </label>
                                    <input type="text" name="bag" placeholder="number of bag" className="input input-bordered" required />
                                </div>
                            </div>

                            {/* Vertical Line */}
                            <div className="lg:w-1 bg-gray-300"></div>

                            {/* Extra Information */}
                            <div className="lg:w-1/2">
                               
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Medical Reason</span>
                                        </label>
                                        <input type="text" name="reason" placeholder="Medical Reason" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Relation</span>
                                        </label>
                                        <input type="text" name="relation" placeholder="relation with guardian" className="input input-bordered" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-500 hover:bg-red-400 text-white">Submit</button>
                        </div>
                    </form>
                </div>
                </div>
                
            </div>
        </div>
       </div>


    );
};


export default RequestBloodForm;