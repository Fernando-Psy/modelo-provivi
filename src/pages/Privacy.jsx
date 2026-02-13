function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
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
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                AgroTech is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose and protect your
                information when you use our platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect different types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Personal identification information (name, email, phone)
                </li>
                <li>Agricultural property information</li>
                <li>Platform usage data</li>
                <li>Payment information (processed securely)</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Provide and improve our services</li>
                <li>Process your requests and transactions</li>
                <li>Send important communications about the service</li>
                <li>Perform analysis and research</li>
                <li>Personalize your experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Information Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell your personal information. We share data only
                with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
                <li>Service providers who assist us in operations</li>
                <li>Authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement technical and organizational security measures to
                protect your information against unauthorized access,
                alteration, disclosure or destruction. We use encryption,
                firewalls and strict access controls.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                According to LGPD, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Access your personal data</li>
                <li>Correct incomplete or outdated data</li>
                <li>Request deletion of your data</li>
                <li>Revoke consent</li>
                <li>Request data portability</li>
                <li>Obtain information about sharing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies to improve your experience. You can configure
                your browser to refuse cookies, but this may affect some
                platform functionalities. See our{" "}
                <a
                  href="/cookies"
                  className="text-primary-600 hover:text-primary-700"
                >
                  Cookie Policy
                </a>{" "}
                for more information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Changes to this Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Policy periodically. We will notify about
                significant changes through the platform or by email.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Contact
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For privacy questions, please contact:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacidade@agrotech.com.br
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

export default Privacy;
