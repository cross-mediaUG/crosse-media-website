import React from "react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - Cross Media",
  description: "Privacy Policy for Cross Media Android Applications",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "30. Januar 2026"
  const effectiveDate = "30. Januar 2026"

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-zinc-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="group">
            <span className="text-xl font-bold text-white tracking-tight">
              CROSS<span className="text-cyan-400">MEDIA</span>
            </span>
          </Link>
          <div className="text-xs text-zinc-500 font-mono">Privacy Policy</div>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="space-y-8">
          {/* Title Section */}
          <div className="space-y-4 pb-8 border-b border-zinc-800/50">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
            <p className="text-zinc-400">
              Last updated: {lastUpdated} | Effective: {effectiveDate}
            </p>
          </div>

          {/* Introduction */}
          <Section title="1. Introduction">
            <p>
              Welcome to Cross Media (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting
              your privacy and ensuring transparency about how we handle your data. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you use our Android applications
              (&quot;Apps&quot;) available on the Google Play Store.
            </p>
            <p>
              Our Apps are intended for users aged 16 and older. By using our Apps, you agree to the collection and use
              of information in accordance with this Privacy Policy.
            </p>
          </Section>

          {/* Data Collection */}
          <Section title="2. Information We Collect">
            <h4 className="text-lg font-semibold text-white mt-4 mb-2">2.1 Information You Provide</h4>
            <p>We may collect information that you voluntarily provide when using our Apps, including:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-4">
              <li>Account information (e.g., email address, username) if registration is required</li>
              <li>User-generated content you create within the App</li>
              <li>Communications when you contact us for support</li>
              <li>Feedback and survey responses</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-6 mb-2">2.2 Automatically Collected Information</h4>
            <p>When you use our Apps, we may automatically collect:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-4">
              <li>Device information (device type, operating system version, unique device identifiers)</li>
              <li>App usage data and analytics (features used, session duration, crash reports)</li>
              <li>IP address and general location data (country/region level only)</li>
              <li>Advertising identifiers (if applicable, with your consent)</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-6 mb-2">2.3 Information from Third Parties</h4>
            <p>
              We may receive information about you from third-party services you connect to our Apps, such as social
              media platforms or authentication providers, only with your explicit consent.
            </p>
          </Section>

          {/* Use of Information */}
          <Section title="3. How We Use Your Information">
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-4">
              <li>To provide, maintain, and improve our Apps</li>
              <li>To personalize your experience within the Apps</li>
              <li>To communicate with you about updates, support, and promotional materials (with your consent)</li>
              <li>To analyze usage patterns and optimize App performance</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To comply with legal obligations</li>
              <li>To enforce our Terms of Service</li>
            </ul>
          </Section>

          {/* Data Sharing */}
          <Section title="4. How We Share Your Information">
            <p>We do not sell your personal information. We may share your information only in the following cases:</p>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">4.1 Service Providers</h4>
            <p>
              We may share data with trusted third-party service providers who assist us in operating our Apps (e.g.,
              analytics, cloud hosting, crash reporting). These providers are bound by contractual obligations to keep
              your information confidential and use it only for the purposes we specify.
            </p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-2">4.2 Legal Requirements</h4>
            <p>We may disclose your information if required by law, regulation, or legal process, or if we believe:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-4">
              <li>It is necessary to protect the rights, property, or safety of Cross Media, our users, or others</li>
              <li>It is necessary to detect, prevent, or address fraud or security issues</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-6 mb-2">4.3 Business Transfers</h4>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the
              acquiring entity. We will notify you of any such change.
            </p>
          </Section>

          {/* Data Security */}
          <Section title="5. Data Security">
            <p>
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure data storage practices</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive
              to protect your information, we cannot guarantee absolute security.
            </p>
          </Section>

          {/* Data Retention */}
          <Section title="6. Data Retention">
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need
              your data, we will securely delete or anonymize it.
            </p>
            <p>Criteria for determining retention periods include:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-4">
              <li>The duration of your use of our Apps</li>
              <li>Legal, regulatory, or contractual obligations</li>
              <li>The need to resolve disputes or enforce agreements</li>
            </ul>
          </Section>

          {/* User Rights */}
          <Section title="7. Your Rights and Choices">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>

            <h4 className="text-lg font-semibold text-white mt-4 mb-2">7.1 Access and Portability</h4>
            <p>You can request a copy of the personal data we hold about you in a structured, machine-readable format.</p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-2">7.2 Correction</h4>
            <p>You can request correction of inaccurate or incomplete personal data.</p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-2">7.3 Deletion</h4>
            <p>
              You can request deletion of your personal data, subject to certain legal exceptions. To delete your
              account and associated data, please contact us at the email address provided below.
            </p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-2">7.4 Opt-Out</h4>
            <p>You can opt out of:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-4">
              <li>Marketing communications by following the unsubscribe instructions</li>
              <li>Personalized advertising through your device settings</li>
              <li>Analytics collection through App settings (where available)</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-6 mb-2">7.5 Withdraw Consent</h4>
            <p>
              Where we rely on your consent to process data, you can withdraw consent at any time without affecting the
              lawfulness of processing based on consent before withdrawal.
            </p>
          </Section>

          {/* Third-Party Services */}
          <Section title="8. Third-Party Services and Links">
            <p>
              Our Apps may contain links to third-party websites or integrate with third-party services. We are not
              responsible for the privacy practices of these third parties. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
            <p>Third-party services we may use include:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-4">
              <li>Google Analytics for Firebase (analytics and crash reporting)</li>
              <li>Google AdMob (advertising, if applicable)</li>
              <li>Cloud service providers for data storage</li>
            </ul>
          </Section>

          {/* International Transfers */}
          <Section title="9. International Data Transfers">
            <p>
              Your information may be transferred to and processed in countries other than your country of residence.
              These countries may have different data protection laws. We ensure appropriate safeguards are in place to
              protect your information, including standard contractual clauses approved by relevant authorities.
            </p>
          </Section>

          {/* Children's Privacy */}
          <Section title="10. Children&apos;s Privacy">
            <p>
              Our Apps are not intended for users under the age of 16. We do not knowingly collect personal information
              from children under 16. If we become aware that we have collected personal data from a child under 16
              without parental consent, we will take steps to delete that information promptly.
            </p>
            <p>
              If you are a parent or guardian and believe your child has provided us with personal information, please
              contact us immediately.
            </p>
          </Section>

          {/* Changes to Policy */}
          <Section title="11. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
              the new Privacy Policy in the App and updating the &quot;Last updated&quot; date. We encourage you to
              review this Privacy Policy periodically.
            </p>
            <p>
              For significant changes, we may also provide additional notice, such as an in-app notification or email
              (if you have provided your email address).
            </p>
          </Section>

          {/* Contact */}
          <Section title="12. Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <div className="mt-4 p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
              <p className="text-white font-semibold">Cross Media</p>
              <p className="text-zinc-400 mt-2">
                Email:{" "}
                <a href="mailto:privacy@crossmedia.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  crossmediaug@gmail.com
                </a>
              </p>
            </div>
            <p className="mt-4">
              We will respond to your request within a reasonable timeframe and in accordance with applicable laws.
            </p>
          </Section>

          {/* Compliance */}
          <Section title="13. Compliance">
            <p>This Privacy Policy is designed to comply with:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-4">
              <li>Google Play Developer Program Policies</li>
              <li>Google Play User Data Policy</li>
              <li>General Data Protection Regulation (GDPR) for EU users</li>
              <li>California Consumer Privacy Act (CCPA) for California residents</li>
              <li>Other applicable privacy laws and regulations</li>
            </ul>
          </Section>

          {/* Footer */}
          <div className="pt-12 mt-12 border-t border-zinc-800/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <Link
                href="/"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
              <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Cross Media. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="text-zinc-400 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}
