import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is AgroTech?",
          a: "AgroTech is a platform that offers sustainable solutions for agriculture, using biological control technology through pheromones for pest management.",
        },
        {
          q: "How does biological control work?",
          a: "Biological control uses natural pheromones that confuse pest insects, preventing their reproduction without using chemical pesticides harmful to the environment.",
        },
        {
          q: "Which crops can benefit?",
          a: "Our technology can be applied to various crops, including corn, soybeans, sugarcane, vegetables and fruit trees.",
        },
      ],
    },
    {
      category: "Implementation",
      questions: [
        {
          q: "How long does it take to implement?",
          a: "Implementation is quick and can be done in 1-2 days, depending on the area size. Our technical team offers complete support throughout the entire process.",
        },
        {
          q: "Is special training required?",
          a: "No. Our system is easy to use. We provide basic training and instructional materials to ensure correct use.",
        },
        {
          q: "What is the durability of the products?",
          a: "Our devices have a durability of 90 to 120 days, depending on weather conditions and type of crop.",
        },
      ],
    },
    {
      category: "Results",
      questions: [
        {
          q: "When will I see results?",
          a: "The first results can be observed 2-3 weeks after installation. Complete control is achieved in 4-6 weeks.",
        },
        {
          q: "What is the efficacy rate?",
          a: "Our products show an efficacy rate of up to 98% in controlling target pests when applied correctly.",
        },
        {
          q: "Is there a results guarantee?",
          a: "Yes. We offer a satisfaction guarantee and our team monitors results to ensure successful implementation.",
        },
      ],
    },
    {
      category: "Costs and Support",
      questions: [
        {
          q: "What is the cost of the service?",
          a: "Costs vary according to the area size and type of crop. Contact us for a personalized quote.",
        },
        {
          q: "Are there savings compared to traditional methods?",
          a: "Yes. Producers report savings of up to 40% compared to traditional pest control methods.",
        },
        {
          q: "What support is offered?",
          a: "We offer complete 24/7 technical support, including monitoring, maintenance and specialized agronomic advisory.",
        },
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Find quick answers to the most common questions about our solutions.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = `${catIndex}-${faqIndex}`;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={faqIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.q}
                        </span>
                        <svg
                          className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-gray-600 bg-gray-50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Didn't Find Your Answer?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is ready to clarify all your questions.
            </p>
            <a href="/#contact" className="btn-primary inline-block">
              Get in Touch
            </a>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
