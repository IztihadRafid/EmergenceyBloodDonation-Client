import useAllFeedBack from "../hooks/useAllFeedBack";

const Feedbacks = () => {
    const [allfeedback] = useAllFeedBack();

    return (
        <div>
            <h2 className="card-title text-4xl text-center m-4">All Feedbacks({allfeedback.length})</h2>
            <div className="flex flex-col gap-4 w-[70%] mx-auto">
                {allfeedback.map((feedback) => (
                    <div key={feedback._id} className="card bg-red-100 text-black shadow-md">
                        <div className="card-body">
                            <p className="text-lg font-medium">{feedback.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feedbacks;
