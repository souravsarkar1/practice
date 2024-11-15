import { Play } from "lucide-react"
import backgroundImage from "../../../assets/landingpage/Rectangle12.jpg"
const LandingPage5 = () => {
    return (
        <div
            className="h-[100vh] bg-no-repeat bg-cover bg-center flex flex-col md:flex-row justify-start md:justify-center items-center overflow-y-auto md:overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="h-[70vh] w-full md:w-[40%]">
                <div className="text-white p-8">
                    <h1 className="text-4xl font-bold mb-4">
                        Fleishman & Associates: Dedicated To Making Your Life Easier
                    </h1>
                    <p className="text-lg mb-4">
                        Our priority is making accountancy and bookkeeping less hassle for individuals and businesses.
                    </p>
                    <p className="text-lg mb-4">
                        Our CPAs stay ahead of the latest tax codes and accounting practices so you can focus on growing your business or enjoying life, not balancing books.
                    </p>
                    <p className="text-lg">
                        Working with us, you’ll have peace of mind knowing our solutions proactively adhere to IRS regulations, avoiding stressful audits or penalties down the road. Our knowledgeable team aims to streamline processes, maximize deductions, and provide attentive ongoing service, year after year.
                    </p>
                </div>

            </div>
            <div className="h-[70vh] w-full md:w-[40%] flex items-center justify-center">
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                    <Play />
                </div>
            </div>
        </div>
    )
}

export default LandingPage5
