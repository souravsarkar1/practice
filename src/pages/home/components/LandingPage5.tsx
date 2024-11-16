import { Play } from "lucide-react"
import backgroundImage from "../../../assets/landingpage/Rectangle12.jpg"
const LandingPage5 = () => {
    return (
        <div
            className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col md:flex-row justify-center items-center px-4 py-8 md:py-16"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="w-full md:w-[45%] lg:w-[40%] mb-8 md:mb-0">
                <div className="text-white">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                        Fleishman & Associates: Dedicated To Making Your Life Easier
                    </h1>
                    <p className="text-base md:text-lg mb-4">
                        Our priority is making accountancy and bookkeeping less hassle for individuals and businesses.
                    </p>
                    <p className="text-base md:text-lg mb-4">
                        Our CPAs stay ahead of the latest tax codes and accounting practices so you can focus on growing your business or enjoying life, not balancing books.
                    </p>
                    <p className="text-base md:text-lg">
                        Working with us, you'll have peace of mind knowing our solutions proactively adhere to IRS regulations, avoiding stressful audits or penalties down the road. Our knowledgeable team aims to streamline processes, maximize deductions, and provide attentive ongoing service, year after year.
                    </p>
                </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[40%] flex items-center justify-center">
                <div className="w-12 h-12 md:w-[50px] md:h-[50px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                    <Play className="w-6 h-6 md:w-7 md:h-7" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage5
