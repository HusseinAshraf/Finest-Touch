import React from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is this service about?",
      answer:
        "Our service provides a seamless experience for users to manage their preferences and access important information efficiently.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team via email at support@example.com or through our contact form on the website.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we prioritize your data security and follow industry best practices to protect your personal information.",
    },
    {
      question: "Can I change my preferences later?",
      answer:
        "Absolutely! You can update your preferences anytime in the settings section of your account.",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  {faq.question}
                </h2>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
