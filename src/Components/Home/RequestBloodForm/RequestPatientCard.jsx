import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';


const RequestPatientCard = ({ requestBlood }) => {
    const { _id, name, gender, age, email, contactNumber, bloodGroup, presentAddress, division, district, bag, relation, reason, formattedDate } = requestBlood;
    const {user} = useAuth()
    const navigate = useNavigate();

    const handlePatientContact = (_id, email, formattedDate) => {
        if (!user) {
            Swal.fire({
                title: "Not Logged In",
                text: "You must be logged in to contact the patient.",
                icon: "warning",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
            return;
        }

        Swal.fire({
            title: "Contact with Patient",
            text: "Are you sure you want to contact the patient?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Contact!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '<span style="color: red; font-weight: bold;">Terms and Policy</span>',
                    html: `
                        <div class="text-left">
                            <p><strong>1. No Payment Policy:</strong> The website is free, but donors may request travel cost reimbursement. Contact the patient directly for this.</p>
                            <p><strong>2. Serious Use Only:</strong> Do not contact the patient for fun or non-emergencies. Misuse may result in penalties.</p>
                            <p><strong>3. Respectful Behavior:</strong> Communicate politely with donors and patients. Rude behavior is not tolerated.</p>
                            <p><strong>4. Fraud Disclaimer:</strong> The website is not responsible for fraud or illegal acts. Those involved will face legal consequences.</p>
                            <p><strong>5. Accurate Information:</strong> Provide truthful details when signing up or donating blood. False information may lead to account suspension.</p>
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
                        if (requestBlood && requestBlood.email && requestBlood.contactNumber) {
                            const formatPhoneNumber = (number) => {
                                if (number.startsWith("0")) {
                                    number = number.substring(1);
                                }
                                return `+880${number}`;
                            };
                            const callNumber = formatPhoneNumber(contactNumber);
                            Swal.fire({
                                title: "Patient Contact Details",
                                html: `
                                    <p>Email: <a href="mailto:${requestBlood.email}" class="text-blue-600">${requestBlood.email}</a></p>
                                    <p>Phone: <a href="tel:${callNumber}" class="text-blue-600">${requestBlood.contactNumber}</a></p>
                                `,
                                icon: "info",
                            });
                        } else {
                            Swal.fire({
                                title: "Error",
                                text: "Patient information is unavailable.",
                                icon: "error",
                            });
                        }
                    }
                });
            }
        });
    };

    return (
        <div className="card lg:card-side bg-red-100 border-2 px-3 border-red-600">
            <div className="card-body">
                <h1 className="text-2xl font-bold">{name}</h1>
                <div className="text-lg">
                    <p><span className="font-semibold">Blood group:</span> {bloodGroup}</p>
                    <p><span className="font-semibold">Gender:</span> {gender}</p>
                    <p><span className="font-semibold">Age:</span> {age}</p>
                </div>
                <div>
                    <p className="text-lg"><span className="font-semibold">Email:</span> ---------.com</p>
                    <p className="text-lg"><span className="font-semibold">Contact:</span> +880 ---------</p>
                    <p className="text-lg"><span className="font-semibold">Address:</span> {presentAddress}</p>
                    <p className="text-lg"><span className="font-semibold">Division:</span> {division}</p>
                    <p className="text-lg"><span className="font-semibold">District:</span> {district}</p>
                    <p className="text-lg"><span className="font-semibold">No. Bags:</span> {bag}</p>
                    <p className='text-lg'><span className='font-semibold'>Date:</span> {formattedDate}</p>
                </div>
                <button onClick={() => handlePatientContact(_id, email, formattedDate)} className="btn bg-red-500 hover:bg-red-400 text-white">Contact</button>
            </div>
        </div>
    );
};

export default RequestPatientCard;