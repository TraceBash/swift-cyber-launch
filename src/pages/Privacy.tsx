import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Privacy Policy | TraceBash Security"
        description="TraceBash Security's privacy policy outlining how we collect, use, and protect your personal information during security assessments."
        keywords="privacy policy, data protection, cybersecurity privacy"
      />
      
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you request a security assessment, 
                contact us, or engage our services.
              </p>
              <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Contact information (name, email, phone number)</li>
                <li>• Company information and job title</li>
                <li>• Assessment requirements and technical details</li>
                <li>• Communications with our team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to provide, maintain, and improve our cybersecurity services.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Provide and deliver our cybersecurity services</li>
                <li>• Communicate with you about our services</li>
                <li>• Respond to your requests and inquiries</li>
                <li>• Improve our services and develop new offerings</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except 
                as described in this privacy policy.
              </p>
              <h3 className="text-xl font-semibold mb-3">We may share information:</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• With your consent</li>
                <li>• To comply with legal obligations</li>
                <li>• To protect our rights and safety</li>
                <li>• In connection with a business transaction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security During Assessments</h2>
              <p className="text-muted-foreground mb-4">
                During cybersecurity assessments, we implement strict protocols to protect your data:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• All testing activities are conducted under signed legal agreements</li>
                <li>• We do not extract or retain sensitive data from your systems</li>
                <li>• Any data encountered during testing is handled with strict confidentiality</li>
                <li>• Testing evidence is securely stored and destroyed after reporting</li>
                <li>• Our team members sign comprehensive non-disclosure agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal information for as long as necessary to provide our services 
                and comply with legal obligations.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Contact information: Retained while you remain a client or prospect</li>
                <li>• Assessment reports: Retained for 7 years for legal and compliance purposes</li>
                <li>• Testing evidence: Securely destroyed within 30 days of report delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Access: Request a copy of your personal information</li>
                <li>• Correction: Request correction of inaccurate information</li>
                <li>• Deletion: Request deletion of your personal information</li>
                <li>• Portability: Request transfer of your information</li>
                <li>• Objection: Object to processing of your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. International Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this privacy policy from time to time. We will notify you of material 
                changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <div className="text-muted-foreground">
                <p>Email: privacy@tracebash.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: San Francisco, CA</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;