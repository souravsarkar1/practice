import calculator from "../../../assets/landingpage/calculator.jpg"
import penPaper from "../../../assets/landingpage/penpaper.jpg";
import account from "../../../assets/landingpage/account.jpg";
const LandingPage4 = () => {
    const arr = [
        { id: 1, image: calculator, heading: "Taxes", text: "We do all the hard work and submit a watertight tax return that helps you keep as much of your earnings as possible." },
        { id: 2, image: penPaper, heading: "Bookkeeping", text: " Doing your own bookkeeping is a tedious, never ending task.Let us take it off your hands and save you precious time." },
        { id: 3, image: account, heading: "Accounting & advisory", text: "Need advice on how to grow your business with streamlined, efficient financials? We're here to help you make the right decisions." }
    ]
    return (
        <div className="min-h-screen py-8">
            <h1 className="text-[#224859] text-3xl md:text-4xl text-center mt-4 md:mt-[6vh] px-4">Our Accountancy Services</h1>
            <h2 className="text-[#224859] text-lg md:text-xl text-center mt-2 md:mt-[2vh] px-4">We're here to help you with all your accounting needs.</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 px-4 md:w-[90%] lg:w-[80%] mx-auto">
                {arr.map((item) => (
                    <div key={item.id} className="flex flex-col items-center">
                        <img
                            className="h-[200px] sm:h-[250px] md:h-[300px] w-full object-cover rounded-lg"
                            src={item.image}
                            alt={item.heading}
                        />
                        <h2 className="text-[#224859] text-xl md:text-2xl mt-3">{item.heading}</h2>
                        <p className="text-[#224859] text-sm md:text-base font-roboto mt-2 text-center px-2">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center mt-8 md:mt-[5vh]">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md text-sm md:text-base transition-colors">
                    Book My Free Consultation →
                </button>
                <div className="flex flex-wrap justify-center items-center mt-4 px-4 text-sm md:text-base">
                    <span className="text-yellow-500 text-xl">★★★★★</span>
                    <span className="ml-2">Rated XX /</span>
                    <span className="text-[#FF8450] mx-1 font-semibold">5 | Based</span>
                    <span className="text-gray-500">on XX client reviews</span>
                </div>
            </div>
        </div>
    )
}

export default LandingPage4
