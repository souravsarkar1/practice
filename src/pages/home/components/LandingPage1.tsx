import logo from "../../../assets/landingpage/logo.svg";
import cpa from "../../../assets/landingpage/cpaLogo.svg";
import ficpa from "../../../assets/landingpage/ficpa.svg";
import aicpa from "../../../assets/landingpage/aicpa.svg";
import landingpageBG from "../../../assets/landingpage/landingPage.png";
import { Star } from "lucide-react";

// import { Star } from "lucide-react";

const LandingPage1 = () => {
    const imageArray = [cpa, ficpa, aicpa];
    return (
        <div className="h-[100vh]">
            <div className="flex justify-center items-center h-[5vh] bg-[#9D9863] px-4">
                <h1 className="text-white text-center text-sm md:text-base">Get started today with a FREE consultation at a time that suits you</h1>
            </div>
            <div className="h-[10vh] flex flex-col md:flex-row justify-center md:justify-between items-center overflow-hidden w-[90%] mx-auto gap-2">
                <div>
                    <img className="h-[5vh] md:h-[7vh]" src={logo} alt="logo" />
                </div>
                <div className="flex flex-row gap-2">
                    {imageArray?.map((image, index) => (
                        <div key={index}>
                            <img className="h-[4vh] md:h-[7vh]" src={image} alt="image" />
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="h-[85vh] bg-no-repeat bg-cover bg-center flex flex-col md:flex-row justify-start md:justify-center items-center overflow-y-auto md:overflow-hidden"
                style={{ backgroundImage: `url(${landingpageBG})` }}
            >
                <div className="flex flex-col justify-center items-center h-auto md:h-[80%] w-full md:w-[50%] px-4 py-6 md:py-0">
                    <div className="flex flex-row justify-center items-center gap-[10px] flex-wrap">
                        <div className="flex flex-row gap-[5px]">
                            {[...Array(5)].map((_, index) => (
                                <Star fill="#FF8450" key={index} size={16} color="#FF8450" />
                            ))}
                        </div>
                        <h1 className="text-white text-sm md:text-xl text-center">Rated XX / <span className="text-[#FF8450]">5 | Based on </span>XX client reviews</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-4">
                        <h1 className="text-2xl md:text-4xl text-white text-center">Taking The Hassle</h1>
                        <h1 className="text-2xl md:text-4xl text-white text-center">Out Of Accounting</h1>
                    </div>
                    <div className="flex flex-col justify-center m-auto items-center text-white text-lg md:text-2xl w-full md:w-[70%] font-light mt-4">
                        <h2 className="text-center">For individuals or businesses, we expertly deal with all your tax, accounting & bookkeeping needs, saving you time and money.</h2>
                    </div>
                    <div className="bg-gray-800 text-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col md:flex-row w-full md:w-[70%] m-auto mt-4">
                        <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0 mb-4 md:mb-0 md:mr-4 mx-auto md:mx-0">
                            <img src="profile-image.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col justify-start items-center md:items-start">
                            <div className="text-center md:text-left">
                                <h3 className="text-lg font-bold">Judit Rumley</h3>
                                <div className="flex items-center justify-center md:justify-start text-orange-400">
                                    {[...Array(5)].map((_, index) => (
                                        <Star fill="#FF8450" size={16} key={index} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-300 text-sm md:text-base text-center md:text-left">"I've been a client of Fleishman & Associates for several years now, and I can confidently say that they are exceptional. Phil genuinely cares about his clients and goes above and beyond to provide expert guidance and advice."</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[50%] px-4 md:px-0 pb-6 md:pb-0">
                    <FreeConsultationForm />
                </div>
            </div>
        </div>
    );
};

const FreeConsultationForm = () => {
    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-center text-[#FF8450]">Claim Your Free Consultation</h2>
            <p className="text-gray-600 text-center text-xs md:text-sm">
                Serving businesses and individuals in our
            </p>
            <p className="text-green-600 text-center text-sm md:text-base"> {`Vibrant Orlando Community.`.toUpperCase()}</p>
            <form className="mt-4 md:mt-6">
                <div className="mb-3 md:mb-4 flex flex-row items-center justify-center border border-black h-[5vh] rounded-lg p-2 gap-0">
                    <p className="w-[25%] md:w-[20%] text-sm md:text-base">Full Name:</p>
                    <input type="text" placeholder="John Doe" className="px-2 w-[75%] md:w-[80%] py-0 overflow-hidden text-sm md:text-base" />
                </div>
                <div className="mb-3 md:mb-4 flex flex-row items-center justify-center border border-black h-[5vh] rounded-lg p-2 gap-0">
                    <p className="w-[25%] md:w-[20%] text-sm md:text-base">Phone:</p>
                    <input type="text" placeholder="+987654321" className="px-2 w-[75%] md:w-[80%] py-0 overflow-hidden text-sm md:text-base" />
                </div>
                <div className="mb-3 md:mb-4 flex flex-row items-center justify-center border border-black h-[5vh] rounded-lg p-2 gap-0">
                    <p className="w-[40%] text-sm md:text-base">Enter Your Email:</p>
                    <input type="text" placeholder="John@Deo.Gmail.Com" className="px-2 w-[60%] py-0 overflow-hidden text-sm md:text-base" />
                </div>

                <div className="mb-3 md:mb-4 flex flex-row items-start">
                    <input type="checkbox" className="form-checkbox mt-1" />
                    <span className="ml-2 text-gray-700 text-xs md:text-sm">
                        I agree to receive appointment confirmation and reminders via Email & SMS*
                    </span>
                </div>

                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-4 rounded-md w-full text-sm md:text-base"
                >
                    Get My Consultation →
                </button>
            </form>

            <p className="text-[#224859] text-xs md:text-sm mt-3 md:mt-4 text-center">
                You'll get <span className="font-bold text-[#FF8450]">FREE ADVICE</span> and learn how we can help you. We'll
            </p>
            <p className="text-[#224859] text-xs md:text-sm text-center">talk over the phone with no pressure or obligations.</p>
        </div>
    );
};

export default LandingPage1;
