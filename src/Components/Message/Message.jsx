import { useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Message = () => {
    // State for checkbox, comment, and submission status
    const [isChecked, setIsChecked] = useState(false);
    const [comment, setComment] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const axiosPublic = useAxiosPublic();

    // Handle checkbox change
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // Handle comment input change
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const commentBox = { isChecked, comment };

        axiosPublic.post("/allmessage", commentBox)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Comment Sent`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // Set submission status to true
                    setIsSubmitted(true);
                    // Reset form fields
                    setIsChecked(false);
                    setComment('');
                }
            });
    };

    return (
        <div className='border-2 bg-red-50 border-red-500 m-2 rounded-lg p-3 w-[75%] mx-auto lg:mt-15 md:mt-8 mt-5'>
            {isSubmitted ? (
                <p className='text-center text-lg font-semibold text-green-600'>Thanks for your Response</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    {/* Checkbox field */}
                    <div className='flex items-center space-x-1'>
                        <input
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            checked={isChecked}
                            className="checkbox checkbox-error checkbox-md"
                        />
                        <label className='text-xl font-semibold'>
                            Have Your Request Been Completed? (only check if completed)
                        </label>
                    </div>

                    {/* Comment field */}
                    <div className='lg:mt-10 mt-8'>
                        <label className='text-red-500 text-lg font-semibold'>Comment: </label>
                        <textarea
                            className='border-1 w-full h-[100px] p-2'
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Write your comment here..."
                            style={{ display: 'block', margin: '10px 0' }}
                        />
                    </div>

                    {/* Submit button */}
                    <button className='btn btn-error text-white'>Submit</button>
                </form>
            )}
        </div>
    );
};

export default Message;