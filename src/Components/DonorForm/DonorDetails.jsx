import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Home/Navbar";
import profile from "../../assets/profileDonor.png"
import Footer from "../Home/Footer";
import Swal from "sweetalert2";

const DonorDetails = () => {
    const donor = useLoaderData()
    const { _id, name, patientName, gender, age, email, contactNumber, bloodGroup, occupation, presentAddress, division, district, guardian, relation, guardianContact, photo } = donor

    const handleContact = (_id, donor) => {
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
                // Show Terms and Policy
                Swal.fire({
                    title: '<span style="color: red; font-weight: bold;">Terms and Policy</span>',
                    html: `
                  <div class="text-left">
                    <p><strong>1. No Payment Policy:</strong> The website is free, but donors may request travel cost reimbursement. Contact donors directly for this.</p>
                    <p class="mt-2"><strong>2. Serious Use Only:</strong> Do not contact donors for fun or non-emergencies. Misuse may result in penalties.</p>
                    <p class="mt-2"><strong>3. Respectful Behavior:</strong> Communicate politely with donors and patients. Rude behavior is not tolerated.</p>
                    <p class="mt-2"><strong>4. Fraud Disclaimer:</strong> The website is not responsible for fraud or illegal acts. Those involved will face legal consequences.</p>
                    <p class="mt-2"><strong>5. Accurate Information:</strong> Provide truthful details when signing up or requesting blood. False information may lead to account suspension.</p>
                  </div>
                  <div class="mt-4">
                    <input type="checkbox" id="acceptTerms" />
                    <label for="acceptTerms"> I agree to the Terms and Policy.</label>
                  </div>
                `,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "I Accept",
                    preConfirm: () => {
                        const checkbox = Swal.getPopup().querySelector("#acceptTerms");
                        if (!checkbox.checked) {
                            Swal.showValidationMessage(
                                "You must accept the Terms and Policy to proceed."
                            );
                        }
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Check if donor object is valid
                        if (donor && donor.email && donor.contactNumber) {
                            const formatPhoneNumber = (number) => {
                                if (number.startsWith("0")) {
                                    number = number.substring(1); // Remove leading 0
                                }
                                return `+880${number}`;
                            };
                            const callNumber = formatPhoneNumber(contactNumber);
                            // Show contact information
                            Swal.fire({
                                title: "Donor Contact Details",
                                html: `
                              <p>Email: <a href="mailto:${donor?.email}" class="text-blue-600">${donor.email}</a></p>
                              <p>Phone: <a href="tel:${callNumber}" class="text-blue-600">${donor.contactNumber}</a></p>
                            `,
                                icon: "info",
                            });
                        } else {
                            // Handle missing donor information
                            Swal.fire({
                                title: "Error",
                                text: "Donor information is unavailable.",
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
    };
    return (
        <div className="bg-red-50">
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-semibold p-5">Donor Information</h1>
                <div className=" bg-white shadow-xl border-2 border-red-400 shadow-slate-200  m-12 lg:p-10 md:p-8 p-2 rounded-2xl">
                    <div className="lg:flex    lg:justify-start  lg:items-end ">
                        <img className="w-52 ml-10" src={profile} alt="Movie" />
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

                            <p className="lg:text-2xl text-xl">Email: <span className="lg:text-2xl text-xl ml-2">{"---------.com"}</span></p>
                            <hr className="border-t border-gray-300 w-full" />

                            <p className="lg:text-2xl text-xl">Contact: <span className="lg:text-2xl text-xl ml-2">{"+880 xxxxxxxxxx"}</span></p>
                            <hr className="border-t border-gray-300 w-full" />
                        </div>

                        <div className="card-actions justify-center">
                            <button onClick={() => handleContact(_id,donor)} className="btn btn-block btn-error text-white font-semibold text-lg">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default DonorDetails;