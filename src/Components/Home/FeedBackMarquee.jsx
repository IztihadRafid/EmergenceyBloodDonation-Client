import useAllFeedBack from "../hooks/useAllFeedBack";
import useAuth from "../hooks/useAuth";

const FeedBackMarquee = () => {
    const [allfeedback] = useAllFeedBack();
   
    return (
        <div>
            <div className="flex  gap-60 mx-auto">
                {allfeedback.map((feedback) => (
                    <div key={feedback._id} className=" bg-red-100 text-black shadow-md  rounded-3xl border-2 border-red-500">
                        <div className="w-[100%] px-20 py-10">
                            <p className="text-2xl text-red-700 font-medium w-52">{feedback.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedBackMarquee;