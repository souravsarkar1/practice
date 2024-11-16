import { CircleCheck, Star, ChevronLeft, ChevronRight } from "lucide-react"
import user from "../../../assets/landingpage/user.png"
import { useState } from "react"

const LandingPage7 = () => {
    const reviews = [
        {
            name: "Judit Rumley",
            image: user,
            rating: 5,
            comment: "I've been working with this accounting firm for over 2 years now and they have been absolutely fantastic. Their attention to detail, professionalism, and expertise have made managing my business finances so much easier. They're always available to answer questions and provide guidance. Highly recommend their services!",
            verified: true,
        },
        {
            name: "Judit Rumley",
            image: user,
            rating: 5,
            comment: "I've been working with this accounting firm for over 2 years now and they have been absolutely fantastic. Their attention to detail, professionalism, and expertise have made managing my business finances so much easier. They're always available to answer questions and provide guidance. Highly recommend their services!",
            verified: true,
        },
        {
            name: "Judit Rumley",
            image: user,
            rating: 5,
            comment: "I've been working with this accounting firm for over 2 years now and they have been absolutely fantastic. Their attention to detail, professionalism, and expertise have made managing my business finances so much easier. They're always available to answer questions and provide guidance. Highly recommend their services!",
            verified: true,
        },
        {
            name: "Judit Rumley",
            image: user,
            rating: 5,
            comment: "I've been working with this accounting firm for over 2 years now and they have been absolutely fantastic. Their attention to detail, professionalism, and expertise have made managing my business finances so much easier. They're always available to answer questions and provide guidance. Highly recommend their services!",
            verified: true,
        },
        {
            name: "Judit Rumley",
            image: user,
            rating: 5,
            comment: "I've been working with this accounting firm for over 2 years now and they have been absolutely fantastic. Their attention to detail, professionalism, and expertise have made managing my business finances so much easier. They're always available to answer questions and provide guidance. Highly recommend their services!",
            verified: true,
        },
        {
            name: "Judit Rumley",
            image: user,
            rating: 5,
            comment: "I've been working with this accounting firm for over 2 years now and they have been absolutely fantastic. Their attention to detail, professionalism, and expertise have made managing my business finances so much easier. They're always available to answer questions and provide guidance. Highly recommend their services!",
            verified: true,
        },
        {
            name: "Judit Rumley",
            image: user,
            rating: 5,
            comment: "I've been working with this accounting firm for over 2 years now and they have been absolutely fantastic. Their attention to detail, professionalism, and expertise have made managing my business finances so much easier. They're always available to answer questions and provide guidance. Highly recommend their services!",
            verified: true,
        },
        {
            name: "Judit Rumley",
            image: user,
            rating: 5,
            comment: "I've been working with this accounting firm for over 2 years now and they have been absolutely fantastic. Their attention to detail, professionalism, and expertise have made managing my business finances so much easier. They're always available to answer questions and provide guidance. Highly recommend their services!",
            verified: true,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 3 < 0 ? reviews.length - 3 : prevIndex - 3
        );
    };

    const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

    return (
        <div className="min-h-screen py-12 flex flex-col items-center relative">
            <h1 className="text-[#224859] text-sm md:text-xl text-center">
                Rated XX / <span className="text-[#FF8450]">5 | Based on </span>XX client reviews
            </h1>
            <h1 className="text-4xl font-bold text-[#224859] text-center mt-4">
                Our Clients Trust Us To Deliver
            </h1>
            <h1 className="text-[#224859] text-sm md:text-xl text-center mt-2 mb-8">
                Here's what they have to say about our services
            </h1>

            <div className="relative w-full max-w-6xl px-12">
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#ffffff] p-2 rounded-full hover:bg-[#1a3744] transition-colors"
                >
                    <ChevronLeft color="#224859" size={24} className="text-white" />
                </button>

                <div className="flex justify-center gap-6">
                    {visibleReviews.map((review, index) => (
                        <div key={currentIndex + index} className="w-[350px] transition-all duration-300">
                            <div className="bg-[#224859] p-6 rounded-lg shadow-lg h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={review.image}
                                        className="h-[60px] w-[60px] rounded-full object-cover border-2 border-[#FF8450]"
                                        alt="User avatar"
                                    />
                                    <div className="flex flex-col">
                                        <h1 className="text-white font-semibold text-lg">{review.name}</h1>
                                        <div className="flex gap-1">
                                            {[...Array(review.rating)].map((_, starIndex) => (
                                                <Star size={16} fill="#FF8450" stroke="#FF8450" key={starIndex} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-white leading-relaxed mb-4">{review.comment}</p>
                                <div className="flex items-center gap-2">
                                    {review.verified && <CircleCheck size={16} fill="#4CAF50" color="white" />}
                                    <p className="text-white text-sm">{review.verified ? "Verified customer" : "Unverified customer"}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ffffff] p-2 rounded-full hover:bg-[#1a3744] transition-colors"
                >
                    <ChevronRight color="#224859" size={24} className="text-white" />
                </button>
            </div>
        </div>
    )
}

export default LandingPage7
