function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        {
          name: "Introduction",
          desc: "Learn about our platform and its benefits",
        },
        { name: "Installation", desc: "Step-by-step guide to get started" },
        { name: "First Steps", desc: "Set up your first application" },
      ],
    },
    {
      title: "Products",
      items: [
        { name: "Pheromones", desc: "Understand our pheromone products" },
        { name: "Application", desc: "How to apply correctly" },
        { name: "Monitoring", desc: "Track the results" },
      ],
    },
    {
      title: "Technical Support",
      items: [
        { name: "Maintenance", desc: "Necessary care and maintenance" },
        { name: "Troubleshooting", desc: "Solve common problems" },
        { name: "Contact", desc: "Talk to our team" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Documentation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know to use our solutions efficiently.
          </p>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is ready to assist you at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="/faq" className="btn-secondary">
                View FAQ
              </a>
            </div>
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

export default Documentation;
