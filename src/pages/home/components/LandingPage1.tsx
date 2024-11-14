import logo from "../../../assets/landingpage/logo.svg";
import cpa from "../../../assets/landingpage/cpaLogo.svg";
import ficpa from "../../../assets/landingpage/ficpa.svg";
import aicpa from "../../../assets/landingpage/aicpa.svg";
import landingpageBG from "../../../assets/landingpage/landingPage.png";
import { Star } from "lucide-react";

const LandingPage1 = () => {
    const imageArray = [cpa, ficpa, aicpa];
    return (
        <div className="h-[100vh]" style={{ border: "1px solid red" }}>
            <div className="flex justify-center items-center h-[5vh] bg-[#9D9863]">
                <h1 className="text-white">Get started today with a FREE consultation at a time that suits you</h1>
            </div>
            <div className="h-[10vh] flex flex-row justify-between items-center overflow-hidden w-[90%] mx-auto">
                <div>
                    <img className="h-[7vh]" src={logo} alt="logo" />
                </div>
                <div className="flex flex-row gap-2.5">
                    {imageArray?.map((image, index) => (
                        <div key={index}>
                            <img className="h-[7vh]" src={image} alt="image" />
                        </div>
                    ))}
                </div>
            </div>
            {/* Apply background image here */}
            <div
                className="h-[85vh] bg-no-repeat bg-cover bg-center flex flex-row justify-center items-center"
                style={{ backgroundImage: `url(${landingpageBG})` }}
            >
                {/* Content within the background */}
                <div className="flex flex-col justify-center items-center h-[80%] w-[50%]" style={{}}>
                    <div className="flex flex-row justify-center items-center gap-[10px]">
                        <div className="flex flex-row gap-[5px]">

                            {[...Array(5)].map((_, index) => (
                                <Star fill="#FF8450" key={index} size={20} color="#FF8450" />
                            ))}
                        </div>
                        <h1 className="text-white text-xl">Rated XX / <span className="text-[#FF8450]">5 | Based on  </span>XX client reviews</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-4xl text-white">Taking The Hassle</h1>
                        <h1 className="text-4xl text-white">Out Of Accounting</h1>
                    </div>
                    <div className="flex flex-col justify-center m-auto items-center text-white text-2xl w-[70%] font-light" >
                        <h2>For individuals or businesses, we expertly deal with all your tax, accounting & bookkeeping needs, saving you time and money.</h2>
                    </div>
                    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-row w-[70%] m-auto">
                        <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0 mr-4">
                            <img src="profile-image.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col justify-start items-start mb-4">

                            <div>
                                <h3 className="text-lg font-bold">Judit Rumley</h3>
                                <div className="flex items-center text-orange-400">
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-300">"I've been a client of Fleishman & Associates for several years now, and I can confidently say that they are exceptional. Phil genuinely cares about his clients and goes above and beyond to provide expert guidance and advice."</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={{ border: "1px solid red", height: "90%", width: "50%" }}>

                </div>
            </div>
        </div>
    );
};

export default LandingPage1;
