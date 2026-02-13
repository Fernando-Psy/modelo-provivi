function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: February 13, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the AgroTech platform, you agree to
                comply with and be bound by these Terms of Use. If you do not
                agree with any part of these terms, you should not use our
                platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Service Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                AgroTech provides a platform for sustainable agricultural
                solutions, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
                <li>Access to biological control products</li>
                <li>Specialized technical consulting</li>
                <li>Results monitoring and analysis</li>
                <li>Continuous technical support</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Registration and User Account
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To use our services, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Provide true and updated information</li>
                <li>Maintain confidentiality of your credentials</li>
                <li>Be responsible for all activities on your account</li>
                <li>Notify immediately about unauthorized use</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Acceptable Use
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Use the platform for illegal purposes</li>
                <li>Attempt to access restricted areas of the system</li>
                <li>Interfere with the platform's operation</li>
                <li>Copy or distribute content without authorization</li>
                <li>Use other users' data improperly</li>
                <li>Send spam or malicious content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All platform content, including texts, graphics, logos, images
                and software, is the property of AgroTech or its licensors and
                is protected by intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Payments and Refunds
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Service prices are subject to change. Payment must be made
                according to the accepted methods on the platform. Refund
                policies are applied as specified at the time of contracting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Warranties and Limitations
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We offer quality warranty for our products as specified in the
                contracts. However, results may vary depending on specific
                conditions of each property. We do not guarantee specific
                results without prior technical evaluation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                AgroTech shall not be liable for indirect, incidental or
                consequential damages resulting from the use or inability to use
                the platform, except when required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Modifications to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time.
                Significant changes will be communicated in advance. Continued
                use of the platform after changes constitutes acceptance of the
                new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may suspend or terminate your access to the platform for
                violation of these Terms. You may cancel your account at any
                time through the settings or by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Applicable Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms are governed by Brazilian laws. Any dispute will be
                resolved in the competent courts of Brazil.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Contact
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms, please contact:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> juridico@agrotech.com.br
                  <br />
                  <strong>Phone:</strong> (11) 9999-9999
                  <br />
                  <strong>Address:</strong> São Paulo, SP - Brazil
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
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

export default Terms;
