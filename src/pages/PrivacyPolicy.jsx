export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">

        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Privacy Policy – Ranragini
        </h1>

        <p className="text-gray-600 mb-6">
          At Ranragini, your privacy is very important to us. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you visit our website or purchase our products.
        </p>

        {/* 1 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Information We Collect
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li><strong>Personal Information:</strong> Name, email, phone number, billing/shipping address.</li>
          <li><strong>Payment Information:</strong> Processed securely through third-party gateways. We do not store card details.</li>
          <li><strong>Usage Data:</strong> IP address, browser type, and pages visited.</li>
          <li><strong>Cookies:</strong> Used to improve user experience and website performance.</li>
        </ul>

        {/* 2 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. How We Use Your Information
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>To process and deliver your orders.</li>
          <li>To communicate order updates and offers.</li>
          <li>To improve website performance.</li>
          <li>To comply with legal requirements.</li>
        </ul>

        {/* 3 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          3. Sharing of Information
        </h2>

        <p className="text-gray-600">
          We respect your privacy and do not sell or rent your personal information.
          However, we may share data with shipping partners, payment gateways,
          or government authorities when legally required.
        </p>

        {/* 4 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Data Protection
        </h2>

        <p className="text-gray-600">
          We use secure servers, encryption, and SSL certificates to protect your
          personal data. While we take reasonable measures, no online transmission
          is 100% secure.
        </p>

        {/* 5 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          5. Your Rights
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Access your personal information.</li>
          <li>Request corrections to inaccurate data.</li>
          <li>Request deletion (subject to legal requirements).</li>
          <li>Opt-out of marketing emails anytime.</li>
        </ul>

        {/* 6 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          6. Contact Us
        </h2>

        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please contact us:
        </p>

        <p className="text-gray-700 mt-3">
          Email: info@ranragini.in <br />
          Phone: +91 7020023262 <br />
          Address: Ranragini Enterprises, Sector 24, Nigdi, Pune, India
        </p>

      </div>
    </div>
  );
}
