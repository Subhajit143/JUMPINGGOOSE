import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a variety of services, including photography, videography, concept development, campaign production, and more.",
  },
  {
    question: "What is your pricing model?",
    answer: "Our pricing model is tailored to each project. Contact us for a customized quote based on your requirements.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer: "Yes, we offer post-delivery support to ensure client satisfaction and seamless operations.",
  },
  {
    question: "Can you handle international projects?",
    answer: "Absolutely! We are equipped to work on projects globally with effective communication and collaboration.",
  },
  {
    question: "How long does a typical project take?",
    answer: "The timeline varies depending on the scope of the project. Most projects are completed within 2-4 weeks.",
  },
  {
    question: "Do you offer content revisions?",
    answer: "Yes, we provide a set number of revisions based on the project agreement.",
  },
];

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center p-6  mb-12">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6">FAQ's</h1>
      <div className="w-full max-w-3xl h-96 overflow-y-auto bg-white shadow-md rounded-lg p-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              <span className="text-lg text-gray-500">
                {expandedIndex === index ? "-" : "+"}
              </span>
            </button>
            {expandedIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
