function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary-500 to-green-500 shadow-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-1/2 h-1/2 text-white/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4">
              <h2 className="section-title">About Our Mission</h2>
              <p className="text-lg text-gray-600">
                We are pioneers in developing sustainable solutions for
                agricultural pest control. Our pheromone-based technology offers
                an effective and ecological alternative to traditional
                pesticides.
              </p>
              <p className="text-lg text-gray-600">
                With years of research and development, we create products that
                protect your crops without harming the environment, ensuring
                healthier and more sustainable production.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Proven Experience
                  </h3>
                  <p className="text-gray-600">
                    Over 10 years developing innovative solutions for
                    agriculture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Environmental Commitment
                  </h3>
                  <p className="text-gray-600">
                    100% of our solutions are developed respecting the
                    ecosystem.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Specialized Support
                  </h3>
                  <p className="text-gray-600">
                    Technical team ready to assist in all implementation stages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
