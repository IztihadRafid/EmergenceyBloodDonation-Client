import Swal from "sweetalert2";
import Navbar from "../Home/Navbar";
import { useState } from "react";
import bloodanimation1 from "../../assets/bloodanimation.png"
import "../DonorForm/DonorForm.css"
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { format } from "date-fns";
const divisions = {
    // =====================================================  
    // Name of Division and Districts
    // =====================================================
    Dhaka: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi","Rajbari", "Shariatpur",  "Tangail"],
    Barisal: ["Barguna", "Barisal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"],
    Chattogram: ["Bandarban", "Brahmanbaria", "Chandpur", "Chittagong", "Comilla", "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati"],
    Khulna: ["Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
    Rajshahi: ["Bogra", "Joypurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Rajshahi", "Sirajgonj"],
    Rangpur: ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"],
    Sylhet: ["Habiganj", "Maulvibazar", "Sunamganj", "Sylhet"],
    Mymensingh:["Jamalpur","Mymensingh","Netrokona","Sherpur"]
};
const DonorForm = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedDivision, setSelectedDivision] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [districts, setDistricts] = useState([]);
    const axiosSecure = useAxiosSecure();
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
    const handleDonorInfoForm = (event) => {
        event.preventDefault();
        const form = event.target;
        //=================================
        // personal information
        //=================================
        const name = form.donorname.value;
        const patientName = form.patientName.value
        const age = form.age.value;
        const gender = form.gender.value;
        const email = form.email.value;
        const contactNumber = form.contactNumber.value;
        const photo = form.photo.value;
        //VALIDATION OF CONTACT NUMBER
        const regex = /^01\d{9}$/;
        if (!regex.test(contactNumber)) {
            return Swal.fire({
                icon: "error",
                text: "Invalid Contact number",
            });
        }

        const bloodGroup = form.bloodGroup.value;
        const occupation = form.occupation.value;
        const presentAddress = form.presentAddress.value;
        const division = form.division.value;
        const district = form.district.value;
        //const presentCondition = form.presentCondition.value;

        //=================================
        //Extra information
        //=================================
        const guardian = form.guardian.value
       

        //VALIDATION OF CONTACT NUMBER
        const guardianContact = form.guardianContact.value
        if (!regex.test(guardianContact)) {
            return Swal.fire({
                icon: "error",
                text: "Invalid Contact number",
            });
        }
          const formattedDate = selectedDate ? format(selectedDate, 'dd/MM/yyyy') : null;
        const donorInformation = { name, patientName, gender, age, email, contactNumber, bloodGroup, occupation, presentAddress, division, district, guardian, guardianContact, photo,formattedDate }

        //===============================================
        //send data to the server
        //===============================================
        // fetch('http://localhost:5000', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(donorInformation)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        axiosSecure.post("/donor", donorInformation)
            .then(res => {
                // console.log(res.data);
                //FORM SUCCESS TOAST
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name}, Your Form Submitted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

        if (donorInformation) {
            console.log(donorInformation);
            Swal.fire({

                icon: "success",
                title: "Donation Form Submitted Successfully",
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
                        <h1 className="text-5xl font-bold p-5">Donor Form</h1>
                    </div>
                    <div className="lg:flex">
                        <div className="animate-moveAndRotate"><img src={bloodanimation1} className="w-52" alt="animation" /></div>
                        <div className="p-10 border border-red-300 rounded-lg bg-gradient-to-r from-red-50 via-red-100 to-red-50">
                            <form onSubmit={handleDonorInfoForm} className="card-body">
                                <div className="lg:flex gap-10">
                                    {/* Personal Information */}
                                    <div className="lg:w-1/2">
                                        <h1 className="text-3xl">Personal Information</h1>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Donor Name</span>
                                                </label>
                                                <input type="text" name="donorname" placeholder="Donor" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Patient Name</span>
                                                </label>
                                                <input type="text" name="patientName" placeholder="patient name" className="input input-bordered" />
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
                                                    <span className="label-text font-semibold">Occupation</span>
                                                </label>
                                                <input type="text" name="occupation" placeholder="Occupation" className="input input-bordered" required />
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
                                                    <span className="label-text ml-2">Male</span>
                                                </label>
                                                <label className="cursor-pointer label">
                                                    <input type="radio" name="gender" value="Female" className="radio radio-bordered" />
                                                    <span className="label-text ml-2">Female</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Vertical Line */}
                                    <div className="lg:w-1 bg-gray-300"></div>

                                    {/* Extra Information */}
                                    <div className="lg:w-1/2">
                                        <h1 className="text-3xl">Extra Information</h1>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Guardian</span>
                                                </label>
                                                <input type="text" name="guardian" placeholder="guardian" className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Last Time Donated</span>
                                                </label>
                                                <DatePicker
                                                    required
                                                    className="input input-bordered"
                                                    selected={selectedDate}
                                                    onChange={(date) => setSelectedDate(date)}
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="dd/mm/yyyy"
                                                    // minDate={new Date()}
                                                    isClearable
                                                    
                                                />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Guardian Contact</span>
                                                </label>
                                                <input type="text" name="guardianContact" placeholder="guardianContact" required className="input input-bordered" />
                                            </div>
                                            <div className="form-control md:w-full">
                                                <label className="label">
                                                    <span className="label-text">Profile Photo</span>
                                                </label>
                                                <label className="input-group ">

                                                    <input type="file" name="photo" placeholder="Photo" className="file-input file-input-bordered file-input-error w-full" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-red-500 hover:bg-red-400 text-white">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default DonorForm;