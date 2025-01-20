import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Home/Navbar";
import profile from "../../assets/profileDonor.png"
import Footer from "../Home/Footer";
import Swal from "sweetalert2";

const DonorDetails = () => {
    const donor = useLoaderData()
    const { _id, name, patientName, gender, age, email, contactNumber, bloodGroup, occupation, presentAddress, division, district, guardian, relation, guardianContact, photo } = donor


    //handle contact
    const handleContact =(_id)=>{
        console.log(_id);
        Swal.fire({
            title: "Contact Donor",
            text: "Are you sure you want to contact this donor?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Contact!",
            cancelButtonText: "Cancel",
          }).then((result) => {
            if (result.isConfirmed) {
              // Show contact information
              Swal.fire({
                title: "Donor Contact Details",
                html: `
                  <p>Email: <a href="mailto:${donor.email}" class="text-blue-600">${donor.email}</a></p>
                  <p>Phone: <a href="tel:${donor.phone}" class="text-blue-600">${donor.phone}</a></p>
                `,
                icon: "info",
              });
            }
          });
    }

    return (
        <div className="bg-red-50">
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-semibold p-5">Donor Information</h1>
                <div className=" bg-white shadow-xl border-2 border-red-400 shadow-slate-200  m-12 lg:p-10 md:p-8 p-2 rounded-2xl">
                    <div className="lg:flex    lg:justify-start  lg:items-end ">
                         <img className="w-52 ml-10"src={profile} alt="Movie" />
                        <h2 className="card-title ml-16 lg:ml-0  lg:text-4xl text-2xl "> {name}</h2>
                    </div>

                    <div className="card-body">
                        <div className="card-body space-y-3">


                            <hr className="border-t border-gray-300 w-full" />
                            <p className="lg:text-2xl text-xl">Gender: <span className="lg:text-2xl text-xl ml-2">{gender}</span></p>
                            <hr className="border-t border-gray-300 w-full" />

                            <p className="lg:text-2xl text-xl">Age: <span className="lg:text-2xl text-xl ml-2">{age}</span></p>
                            <hr className="border-t border-gray-300 w-full" />

                            <p className="lg:text-2xl text-xl">Blood Group: <span className="lg:text-2xl text-xl ml-2">{bloodGroup}</span></p>
                            <hr className="border-t border-gray-300 w-full" />

                            <p className="lg:text-2xl text-xl">Occupation: <span className="lg:text-2xl text-xl ml-2">{occupation}</span></p>
                            <hr className="border-t border-gray-300 w-full" />

                            <p className="lg:text-2xl text-xl">Present Address: <span className="lg:text-2xl text-xl ml-2">{presentAddress}</span></p>
                            <hr className="border-t border-gray-300 w-full" />

                            <p className="lg:text-2xl text-xl">Division: <span className="lg:text-2xl text-xl ml-2">{division}</span></p>
                            <hr className="border-t border-gray-300 w-full" />

                            <p className="lg:text-2xl text-xl">District: <span className="lg:text-2xl text-xl ml-2">{district}</span></p>
                            <hr className="border-t border-gray-300 w-full" />

                            <p className="lg:text-2xl text-xl">Email: <span className="lg:text-2xl text-xl ml-2">{email}</span></p>
                            <hr className="border-t border-gray-300 w-full" />

                            <p className="lg:text-2xl text-xl">Contact: <span className="lg:text-2xl text-xl ml-2">{contactNumber}</span></p>
                            <hr className="border-t border-gray-300 w-full" />
                        </div>

                        <div className="card-actions justify-center">
                            <button onClick={()=>handleContact(_id)} className="btn btn-block btn-error text-white font-semibold text-lg">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default DonorDetails;