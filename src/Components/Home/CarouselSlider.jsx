
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
const CarouselSlider = () => {

    const slides = [
        {
            img: slide1,
            text: "Every Drop Counts: Unveiling the Lifesaving Power of Blood Donation",
        },
        {
            img: slide2,
            text: "Give Blood Save Life - Your Donation Gives Others a Chance to Live",
        },
        {
            img: slide3,
            text: "Be Grateful and Donate Blood - Give Blood, Save Lives",
        },
    ];
    return (
        <div className="w-full max-w-7xl  mx-auto my-8">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="rounded-lg overflow-hidden"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                            <img
                                src={slide.img}
                                alt={`Slide ${index + 1}`}
                                className="w-full  object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-4">
                                <p className="text-lg font-semibold">{slide.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselSlider;