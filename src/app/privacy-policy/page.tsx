import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | vxglobal',
  description: 'Privacy Policy and Data Retention Policy for vxglobal - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D2F5B] to-[#1a1a2e] text-white">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-[#D4AF37] mb-8 text-center">
          Privacy Policy & Data Retention
        </h1>
        
        <p className="text-gray-300 mb-8 font-lato">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">1. Introduction</h2>
          <p className="font-lato text-gray-300 leading-relaxed mb-4">
            vxglobal (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including our Facebook application integration.
          </p>
          <p className="font-lato text-gray-300 leading-relaxed">
            This policy applies to all users of our services and is specifically designed to comply with Meta Platform&apos;s Developer Policies and Facebook&apos;s data protection requirements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-poppins font-semibold text-[#D4AF37] mb-3">2.1 Information from Facebook</h3>
          <p className="font-lato text-gray-300 leading-relaxed mb-4">
            If you use Facebook Login or interact with our Facebook application, we may collect:
          </p>
          <ul className="font-lato text-gray-300 list-disc list-inside mb-6 space-y-2">
            <li>Public profile information (name, profile picture)</li>
            <li>Email address (if you grant permission)</li>
            <li>Basic demographic information</li>
          </ul>

          <h3 className="text-xl font-poppins font-semibold text-[#D4AF37] mb-3">2.2 Information You Provide</h3>
          <p className="font-lato text-gray-300 leading-relaxed mb-4">
            When you contact us or use our consultation services, we collect:
          </p>
          <ul className="font-lato text-gray-300 list-disc list-inside mb-6 space-y-2">
            <li>Full name and contact information (email, phone number)</li>
            <li>Country of interest and travel details</li>
            <li>Visa-related information</li>
            <li>Any additional information you choose to share</li>
          </ul>

          <h3 className="text-xl font-poppins font-semibold text-[#D4AF37] mb-3">2.3 Automatically Collected Information</h3>
          <p className="font-lato text-gray-300 leading-relaxed mb-4">
            We automatically collect:
          </p>
          <ul className="font-lato text-gray-300 list-disc list-inside mb-6 space-y-2">
            <li>Device information (browser type, operating system)</li>
            <li>Usage data (pages visited, time spent on site)</li>
            <li>IP address and location data</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">3. How We Use Your Information</h2>
          <p className="font-lato text-gray-300 leading-relaxed mb-4">
            We use the collected information for:
          </p>
          <ul className="font-lato text-gray-300 list-disc list-inside space-y-2">
            <li>Providing visa consultation services</li>
            <li>Communicating with you about our services</li>
            <li>Improving our website and user experience</li>
            <li>Sending promotional materials (with your consent)</li>
            <li>Complying with legal obligations</li>
            <li>Preventing fraud and ensuring security</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">4. Data Retention Policy</h2>
          <p className="font-lato text-gray-300 leading-relaxed mb-4">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy:
          </p>
          
          <div className="bg-[#1a1a2e] border border-[#D4AF37]/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-poppins font-semibold text-[#D4AF37] mb-3">Retention Periods:</h3>
            <ul className="font-lato text-gray-300 space-y-3">
              <li>
                <strong className="text-white">Facebook User Data:</strong> 90 days after you disconnect or delete your account, or as required by applicable law.
              </li>
              <li>
                <strong className="text-white">Contact Form Submissions:</strong> 2 years from submission, unless you request deletion earlier.
              </li>
              <li>
                <strong className="text-white">Consultation Records:</strong> 5 years to comply with business record-keeping requirements.
              </li>
              <li>
                <strong className="text-white">Analytics Data:</strong> 26 months for trend analysis and service improvement.
              </li>
              <li>
                <strong className="text-white">Legal Hold Data:</strong> Indefinitely when required for legal proceedings or regulatory investigations.
              </li>
            </ul>
          </div>

          <p className="font-lato text-gray-300 leading-relaxed">
            After the retention period expires, we securely delete or anonymize your data in accordance with data protection regulations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">5. Data Sharing and Disclosure</h2>
          <p className="font-lato text-gray-300 leading-relaxed mb-4">
            We do not sell your personal information. We may share your data with:
          </p>
          <ul className="font-lato text-gray-300 list-disc list-inside space-y-2">
            <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist our operations (hosting, analytics, email services)</li>
            <li><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or government regulation</li>
            <li><strong className="text-white">Business Transfers:</strong> In connection with merger, acquisition, or sale of assets</li>
            <li><strong className="text-white">With Your Consent:</strong> When you explicitly authorize sharing</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">6. Your Rights</h2>
          <p className="font-lato text-gray-300 leading-relaxed mb-4">
            Under applicable data protection laws, you have the right to:
          </p>
          <ul className="font-lato text-gray-300 list-disc list-inside space-y-2 mb-4">
            <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
            <li><strong className="text-white">Correction:</strong> Request correction of inaccurate data</li>
            <li><strong className="text-white">Deletion:</strong> Request deletion of your personal data</li>
            <li><strong className="text-white">Portability:</strong> Receive your data in a portable format</li>
            <li><strong className="text-white">Objection:</strong> Object to processing of your data</li>
            <li><strong className="text-white">Withdrawal of Consent:</strong> Withdraw consent at any time</li>
          </ul>
          <p className="font-lato text-gray-300 leading-relaxed">
            For Facebook-connected data, you can also manage permissions through your Facebook Settings → Apps and Websites.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">7. Data Security</h2>
          <p className="font-lato text-gray-300 leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal information, including encryption in transit and at rest, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">8. Third-Party Links</h2>
          <p className="font-lato text-gray-300 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">9. Children&apos;s Privacy</h2>
          <p className="font-lato text-gray-300 leading-relaxed">
            Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a minor, please contact us immediately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">10. International Data Transfers</h2>
          <p className="font-lato text-gray-300 leading-relaxed">
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">11. Changes to This Policy</h2>
          <p className="font-lato text-gray-300 leading-relaxed">
            We may update this privacy policy periodically. We will notify you of any material changes by posting the new policy on this page with an updated &quot;Last Updated&quot; date. Continued use of our services after changes constitutes acceptance.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">12. Contact Information</h2>
          <p className="font-lato text-gray-300 leading-relaxed mb-4">
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
          </p>
          <div className="bg-[#1a1a2e] border border-[#D4AF37]/30 rounded-lg p-6">
            <p className="font-lato text-white font-semibold mb-2">vxglobal</p>
            <p className="font-lato text-gray-300 mb-1">
              <strong className="text-white">Email:</strong> privacy@vxglobal.com
            </p>
            <p className="font-lato text-gray-300 mb-1">
              <strong className="text-white">Location:</strong> Dubai, United Arab Emirates
            </p>
            <p className="font-lato text-gray-300">
              <strong className="text-white">Data Protection Officer:</strong> Available upon request
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-poppins font-semibold text-white mb-4">13. Facebook Platform Compliance</h2>
          <p className="font-lato text-gray-300 leading-relaxed mb-4">
            In compliance with Meta Platform Policies, we confirm:
          </p>
          <ul className="font-lato text-gray-300 list-disc list-inside space-y-2">
            <li>We only request data necessary for our services</li>
            <li>We do not transfer Facebook data to third parties without consent</li>
            <li>We provide users with control over their Facebook data</li>
            <li>We delete Facebook user data within 90 days of account deletion</li>
            <li>We use Facebook data only for the stated purpose in this policy</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <Link 
            href="/"
            className="inline-flex items-center text-[#D4AF37] hover:text-[#c0a030] transition-colors font-lato"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}