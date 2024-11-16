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
        <div className="container mx-auto px-4">
            <div className="py-8 md:py-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#224859] text-center">Trust Us For Exceptional Accounting Services</h1>
                <h2 className="text-base md:text-lg mt-2 text-center">We put your needs at the heart of everything we do.</h2>
            </div>

            <div className="space-y-16 md:space-y-24">
                <ExpertiseSection {...firstCard} />
                <ExpertiseSection {...secondCard} />
                <ExpertiseSection {...thirdCard} />
                <ExpertiseSection {...forthdCard} />
            </div>

            <div className="flex justify-center py-12">
                <button className="bg-green-500 text-white font-bold py-3 px-8 md:px-[100px] rounded hover:bg-green-600 transition duration-300">
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
        <div className={`flex flex-col ${contentOrder} gap-8 md:gap-12 items-center max-w-7xl mx-auto`}>
            <div className="w-full md:w-1/2">
                <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="w-full md:w-[45%] flex flex-col">
                <img src={icon} className="h-[40px] w-auto mb-4" alt="Section Icon" />
                <h2 className="text-xl md:text-2xl font-bold text-[#224859] mb-4">{title}</h2>
                <p className="mb-6 text-gray-700 leading-relaxed text-base md:text-lg">
                    {description}
                </p>
                {features.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <CircleCheck color="#fff" fill="#FF8450" className="w-5 h-5" />
                                <span className="text-sm md:text-base">{feature}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
