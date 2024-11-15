import calculator from "../../../assets/landingpage/calculator.jpg"
import penPaper from "../../../assets/landingpage/penpaper.jpg";
import account from "../../../assets/landingpage/account.jpg";
const LandingPage4 = () => {
    const arr = [
        { id: 1, image: calculator, heading: "Taxes", text: "We do all the hard work and submit a watertight tax return that helps you keep as much of your earnings as possible." },
        { id: 2, image: penPaper, heading: "Bookkeeping", text: " Doing your own bookkeeping is a tedious, never ending task.Let us take it off your hands and save you precious time." },
        { id: 3, image: account, heading: "Accounting & advisory", text: "Need advice on how to grow your business with streamlined, efficient financials? We’re here to help you make the right decisions." }
    ]
    return (
        <div className="h-[100vh]">

            <h1 className="text-[#224859] text-4xl text-center mt-[6vh]">Our Accountancy Services</h1>

            <h1 className="text-[#224859] text-xl text-center mt-[2vh]">We’re here to help you with all your accounting needs.</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 px-4 w-[70%] m-auto">
                {arr.map((item) => (
                    <div key={item.id}>
                        <img className="h-[300px] w-[400px]" src={item.image} />
                        <h1 className="text-[#224859] text-2xl  mt-[1vh]">{item.heading}</h1>
                        <p className="text-[#224859] text-sm font-500 font-roboto mt-[1vh]">{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center mt-[5vh]">
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                    Book My Free Consultation →
                </button>
                <div className="flex items-center mt-2">
                    <span className="text-yellow-500 text-xl">★★★★★</span>
                    <span className="ml-2 ">Rated XX / </span>
                    <span className="text-[#FF8450] mx-1 font-600">5 | Based </span>
                    <span className="text-gray-500"> on XX client reviews</span>
                </div>
            </div>
        </div>
    )
}

export default LandingPage4
