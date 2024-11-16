import { CircleCheck } from "lucide-react"
import backGround from "../../../assets/landingpage/Rectangle11.png"

const LandingPage3 = () => {
    const arr = [
        { id: 1, text: "Orlando area experts" },
        { id: 2, text: "25+ years experience" },
        { id: 3, text: "1-250 employee businesses" },
        { id: 4, text: "Secure cloud access" },
        { id: 5, text: "Monthly/quarterly/annual services" },
        { id: 6, text: "Free consultations" }
    ]

    return (
        <div
            className="min-h-screen py-8 md:py-0 bg-no-repeat bg-cover bg-center flex flex-col md:flex-row justify-start md:justify-center items-center"
            style={{ backgroundImage: `url(${backGround})` }}
        >
            <div className="w-[90%] md:w-[40%] px-4 md:px-0 mb-8 md:mb-0">
                <div>
                    <h1 className="font-bold text-white text-3xl md:text-5xl">About Fleishman & Associates CPA</h1>
                </div>
                <div className="overflow-hidden text-white mt-5 space-y-5">
                    <p className="font-roboto text-sm md:text-base font-light leading-6 text-left">
                        With over 25 years of experience, Fleishman & Associates will expertly handle all your accountancy requirements. We work closely with each client to understand their unique needs and preferences. Then, we deliver customized solutions, whether the work is done locally or via our secure cloud-based portal.
                    </p>
                    <p className="font-roboto text-sm md:text-base font-light leading-6 text-left">
                        Our team stays current on the latest accounting practices and software to best serve our clients, with our remote access portal utilizing encryption to keep sensitive information private and secure.
                    </p>
                    <p className="font-roboto text-sm md:text-base font-light leading-6 text-left">
                        We service businesses with 1 to 250 employees, assisting with monthly, quarterly, or annual bookkeeping or accountancy needs.
                    </p>
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-y-3 mt-6">
                    {arr.map((item) => (
                        <div className="flex flex-row items-center gap-2 text-white" key={item.id}>
                            <CircleCheck className="w-5 h-5 md:w-6 md:h-6" color="#0f74ae" fill="#FF8450" />
                            <p className="text-sm md:text-base">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-[90%] md:w-[40%] h-[300px] md:h-[70vh]"></div>
        </div>
    )
}

export default LandingPage3