import { ClipboardCheck, MessageSquare, Sun } from "lucide-react";

const AccountingSteps = () => {
    const steps = [
        {
            number: "1",
            icon: <ClipboardCheck className="w-12 h-12 text-emerald-600" />,
            title: "Book Your Consultation",
            description: "Fill out our form with a few of your details. We'll contact you to arrange a time to talk."
        },
        {
            number: "2",
            icon: <MessageSquare className="w-12 h-12 text-emerald-600" />,
            title: "Let's Talk",
            description: "During the call, we'll discuss your needs, how we can help, and the next steps."
        },
        {
            number: "3",
            icon: <Sun className="w-12 h-12 text-emerald-600" />,
            title: "Enjoy Peace Of Mind",
            description: "You can rest assured we'll apply all our expertise and know-how to managing your accounts."
        }
    ];

    return (
        <div className="min-h-screen mx-auto px-4 py-16 bg-[#fffbfb] w-full">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-[#224859] mb-4">
                    3 Simple Steps To Effortless Accounting
                </h1>
                <p className="text-xl text-slate-600">
                    Getting Started Couldn't Be Any Easier
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {steps.map((step) => (
                    <div key={step.number} className="border-none">
                        <div className="pt-6">
                            <div className="relative mb-6">
                                <span className="absolute -left-4 -top-4 text-8xl font-bold text-slate-100">
                                    {step.number}
                                </span>
                                <div className="relative z-10 flex justify-center">
                                    {step.icon}
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-slate-800 mb-4 text-center">
                                {step.title}
                            </h2>
                            <p className="text-slate-600 text-center">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <button
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-md"
                >
                    Book My Free Consultation →
                </button>

                <div className="mt-6 flex items-center justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            className="w-5 h-5 text-orange-400 fill-current"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                    <span className="text-slate-700">
                        Rated XX / 5 | Based on XX client reviews
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AccountingSteps;