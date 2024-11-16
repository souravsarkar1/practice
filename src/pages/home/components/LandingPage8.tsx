import { Plus } from "lucide-react";
import { useState } from "react";

const LandingPage8 = () => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const faqs = [
        {
            question: "What Do You Charge For Your Services?",
            answer: "We believe in clear and straightforward pricing, but the cost varies depending on the services you need. Let's have a free, no-obligation consultation to discuss your specific requirements. We'll provide you with a detailed quote that outlines our simple and comprehensive advice. It's also an excellent opportunity to experience our approach and understand why our clients rely on us for their tax and accounting needs."
        },
        {
            question: "How Do You Decide What To Charge?",
            answer: "Our pricing is based on the complexity of your needs, the scope of services required, and the time investment needed to deliver excellent results. We provide transparent, value-based pricing with no hidden fees."
        },
        {
            question: "Do You Offer Online Or In-Person Services?",
            answer: "We offer both online and in-person services to accommodate your preferences. Our digital solutions allow for convenient remote collaboration, while we're also available for face-to-face meetings when needed."
        },
        {
            question: "Do I Need To Sign A Long-Term Contract?",
            answer: "While we offer flexible engagement options, we typically recommend ongoing partnerships to provide the most value. However, we can also accommodate project-based work without long-term commitments."
        },
        {
            question: "Are There Any Extra Costs I Should Know About?",
            answer: "We believe in complete transparency. All costs will be clearly outlined in your service agreement. Any additional services or requirements will be discussed and agreed upon before any work begins."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#224859] mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-600">Need To Know More? Find All Your Answers Here</p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                        <button
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                            onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                        >
                            <span className="font-medium text-[#224859]">{faq.question}</span>
                            <Plus
                                className={`transform transition-transform ${openQuestion === index ? "rotate-45" : ""
                                    }`}
                                size={20}
                                color="#224859"
                            />
                        </button>
                        {openQuestion === index && (
                            <div className="px-6 py-4 text-gray-600 border-t">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingPage8
