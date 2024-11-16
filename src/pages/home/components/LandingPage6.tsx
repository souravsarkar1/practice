import firstGraph from "../../../assets/landingpage/graph1.png"
import firstGraphIcon from "../../../assets/landingpage/firstGraphIcon.svg"
import { CircleCheck } from "lucide-react"
import secodnGraph from "../../../assets/landingpage/graph2.png"
import secondGarphIcon from "../../../assets/landingpage/secondGraphIcon.svg"
import thirdGrap from "../../../assets/landingpage/graph3.png";
const LandingPage6 = () => {
    const firstCard = {
        image: firstGraph,
        icon: firstGraphIcon,
        title: "Count On Our Expertise",
        description: "Our accounting experts stay updated on the latest financial regulations, software, and best practices. We immerse ourselves in the intricacies of the tax code so you can feel confident entrusting your finances and taxes to our extremely capable hands.",
        features: ["Fully Certified", "Highly Experienced", "Free Consultations"],
        imageAlt: "Data Analysis",
        reverse: false
    }
    const secondCard = {
        image: secodnGraph,
        icon: secondGarphIcon,
        title: "Transparency & Communication",
        description: "We build relationships with clients based on trust and open communication. From the initial consultation to ongoing support, we clearly explain our customized solutions and processes so you know exactly where you stand.",
        features: [],
        imageAlt: "Communication Graph",
        reverse: true
    }
    const thirdCard = {
        image: thirdGrap,
        icon: secondGarphIcon,
        title: "We Go The Extra Mile",
        description: "Each client receives our dedicated focus and care. We get to know your specific business needs inside and out to simplify day-to-day finances and tax season. No request is too big or small. We also take a proactive approach in recommending potential deductions or savings specific to your unique situation.",
        features: [],
        imageAlt: "Communication Graph",
        reverse: false
    }
    const forthdCard = {
        image: secodnGraph,
        icon: secondGarphIcon,
        title: "Transparency & Communication",
        description: "We build relationships with clients based on trust and open communication. From the initial consultation to ongoing support, we clearly explain our customized solutions and processes so you know exactly where you stand.",
        features: [],
        imageAlt: "Communication Graph",
        reverse: true
    }
    return (
        <div>
            <div className="p-8">
                <h1 className="text-3xl font-700 text-[#224859]  text-center">Trust Us For Exceptional Accounting Services</h1>
                <h1 className="text-lg mt-2 text-center">We put your needs at the heart of everything we do.</h1>
            </div>

            <div>
                <ExpertiseSection {...firstCard} />
                <ExpertiseSection {...secondCard} />
                <ExpertiseSection {...thirdCard} />
                <ExpertiseSection {...forthdCard} />
            </div>
            <div className="flex flex-row justify-center aligin-center">

                <button className="bg-green-500  text-white font-bold py-3 mb-5 px-[100px] rounded hover:bg-green-600 transition duration-300">
                    Book My Free Consultation →
                </button>
            </div>

        </div>
    )
}

export default LandingPage6




const ExpertiseSection = ({
    image,
    icon,
    title,
    description,
    features,
    imageAlt,
    reverse
}: {
    image: string,
    icon: string,
    title: string,
    description: string,
    features: string[],
    imageAlt: string,
    reverse: boolean
}) => {
    const contentOrder = reverse ? "md:flex-row-reverse" : "md:flex-row";

    return (
        <div className={`flex flex-col ${contentOrder} w-full md:w-[80%] py-3 items-center justify-around m-auto bg-white`}>
            <div className="md:w-1/2 mt-6 md:mt-0 flex items-start justify-center">
                <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="md:w-[40%] min-h-[400px] flex flex-col justify-center">

                <img src={icon} className="h-[40px] w-[10%] mb-4 mt-4" alt="Section Icon" />
                <h2 className="text-2xl font-bold text-[#224859] mb-4">{title}</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <CircleCheck color="#fff" fill="#FF8450" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
