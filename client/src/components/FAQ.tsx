import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
    question: string;
    answer: string;
};

const faqData: FAQItem[] = [
    {
        question: "How do I book a flight?",
        answer: "You can book a flight by using our search engine to find available flights, selecting your preferred option, and following the booking process. We'll guide you through selecting seats, adding passenger information, and secure payment."
    },
    {
        question: "What's included in your tour packages?",
        answer: "Our tour packages typically include accommodation, transportation, guided tours, and some meals. Each package details what's included. Some packages also offer optional activities and experiences that can be added."
    },
    {
        question: "Can I modify or cancel my hotel booking?",
        answer: "Yes, most hotel bookings can be modified or cancelled. The specific cancellation policy varies by property and rate type. You can find these details in your booking confirmation."
    },
    {
        question: "Do you offer travel insurance?",
        answer: "Yes, we offer comprehensive travel insurance options to protect your trip. Coverage includes trip cancellation, medical emergencies, lost baggage, and more. We recommend reviewing the policy details before purchase."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-16 bg-gray-50" id="faq">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-medium text-gray-900">{item.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 bg-gray-50">
                                    <p className="text-gray-600">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;