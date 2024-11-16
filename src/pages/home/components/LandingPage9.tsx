import landingpageBG from "../../../assets/landingpage/lastimage.png";

const LandingPage1 = () => {
    return (
        <div className="min-h-screen">
            <div
                className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col md:flex-row justify-start md:justify-center items-center md:overflow-hidden"
                style={{ backgroundImage: `url(${landingpageBG})` }}
            >
                <div className="flex flex-col justify-center items-start w-full md:w-[50%] px-4 py-6 md:py-0 order-1 md:order-1">
                    <div className="text-white p-4 md:p-8">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Feeling Overwhelmed?
                        </h1>
                        <p className="text-base md:text-lg mb-4">
                            We Understand.
                        </p>
                        <p className="text-base md:text-lg mb-4">
                            Staying on top of accounting and taxes only gets more complicated from year to year. What if you miss an obscure regulation or complex new requirement? The penalties and stress can pile up quickly.
                        </p>
                        <p className="text-base md:text-lg">
                            The good news is you don't have to figure it all out alone. Place your trust in our team to get your books organized, taxes filed properly, and finances simplified.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-[50%] px-4 md:px-0 py-6 md:py-0 order-2 md:order-2">
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
                <div className="mb-3 md:mb-4 flex flex-row items-center justify-center border border-black h-[40px] md:h-[5vh] rounded-lg p-2 gap-0">
                    <p className="w-[25%] md:w-[20%] text-sm md:text-base">Full Name:</p>
                    <input type="text" placeholder="John Doe" className="px-2 w-[75%] md:w-[80%] py-0 overflow-hidden text-sm md:text-base" />
                </div>
                <div className="mb-3 md:mb-4 flex flex-row items-center justify-center border border-black h-[40px] md:h-[5vh] rounded-lg p-2 gap-0">
                    <p className="w-[25%] md:w-[20%] text-sm md:text-base">Phone:</p>
                    <input type="text" placeholder="+987654321" className="px-2 w-[75%] md:w-[80%] py-0 overflow-hidden text-sm md:text-base" />
                </div>
                <div className="mb-3 md:mb-4 flex flex-row items-center justify-center border border-black h-[40px] md:h-[5vh] rounded-lg p-2 gap-0">
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
