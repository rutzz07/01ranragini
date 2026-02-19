import { useState } from "react";

const faqsData = [
  {
    question: "How did my package ship?",
    answer:
      "We ship all orders using trusted courier partners. You will receive tracking details via SMS and email once dispatched.",
  },
  {
    question: "When do I receive my order?",
    answer:
      "Orders are usually delivered within 3–7 working days depending on your location.",
  },
  {
    question: "Returns, exchanges and complaints",
    answer:
      "You can request returns or exchanges within 7 days of delivery. Contact our support team for assistance.",
  },
  {
    question:
      "I now see the longer delivery time of my order. How can I cancel it?",
    answer:
      "If your order has not been shipped yet, you can cancel it by contacting customer support.",
  },
  {
    question: "When will I receive the invoice for my order?",
    answer:
      "Your invoice will be sent to your registered email once the order is confirmed.",
  },
  {
    question: "How long will my order take to be delivered?",
    answer:
      "Standard delivery time is 3–7 business days across India.",
  },
  {
    question: "Can I return an item?",
    answer:
      "Yes, unused and sealed products can be returned within 7 days.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Frequently Asked Questions (FAQ) – Ranragini
        </h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium hover:bg-gray-100 transition"
              >
                {faq.question}
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 p-6 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
