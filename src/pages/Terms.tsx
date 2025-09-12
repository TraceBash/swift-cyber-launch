import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Terms of Service | TraceBash Security"
        description="TraceBash Security's terms of service governing the use of our cybersecurity assessment services and website."
        keywords="terms of service, cybersecurity terms, legal agreement"
      />
      
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using TraceBash Security's services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                TraceBash Security provides cybersecurity assessment services including but not limited to:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Penetration testing services</li>
                <li>• Vulnerability assessment and penetration testing (VAPT)</li>
                <li>• Red team exercises</li>
                <li>• Security consulting and advisory services</li>
                <li>• Compliance assessment support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Authorization and Scope</h2>
              <p className="text-muted-foreground mb-4">
                All cybersecurity testing activities require explicit written authorization from the client. 
                Our services are conducted only within the agreed scope and with proper legal authorization.
              </p>
              <h3 className="text-xl font-semibold mb-3">Client Responsibilities:</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Provide written authorization for all testing activities</li>
                <li>• Clearly define the scope of testing</li>
                <li>• Ensure all necessary permissions are obtained</li>
                <li>• Notify relevant stakeholders of testing activities</li>
                <li>• Provide necessary access and information for testing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Engagement Process</h2>
              <p className="text-muted-foreground mb-4">
                Our engagement process follows industry best practices to ensure safe and effective testing:
              </p>
              <ol className="text-muted-foreground space-y-2">
                <li>1. Initial consultation and scoping</li>
                <li>2. Detailed proposal and statement of work</li>
                <li>3. Legal agreements and authorization documentation</li>
                <li>4. Testing execution within defined scope</li>
                <li>5. Reporting and remediation guidance</li>
                <li>6. Post-engagement support and follow-up</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Confidentiality and Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                We maintain strict confidentiality and data protection standards:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• All engagements are subject to comprehensive non-disclosure agreements</li>
                <li>• Client data and findings are treated with strict confidentiality</li>
                <li>• We do not retain or extract sensitive client data</li>
                <li>• Testing evidence is securely handled and destroyed post-engagement</li>
                <li>• Our team members undergo background checks and security training</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                TraceBash Security's liability is limited as follows:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Our services are provided on an "as is" basis</li>
                <li>• We make no warranties regarding the completeness of security assessments</li>
                <li>• Our liability is limited to the fees paid for services</li>
                <li>• We are not responsible for vulnerabilities not discovered during testing</li>
                <li>• Client remains responsible for implementing recommended security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Professional Standards</h2>
              <p className="text-muted-foreground mb-4">
                We adhere to the highest professional and ethical standards:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• All testing is conducted ethically and legally</li>
                <li>• We follow industry-standard methodologies and frameworks</li>
                <li>• Our team maintains relevant certifications and training</li>
                <li>• We provide honest and objective assessments</li>
                <li>• Critical findings are reported immediately</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms are specified in individual service agreements:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Invoices are typically due within 30 days</li>
                <li>• Late payment may result in service suspension</li>
                <li>• Expenses are billed separately unless otherwise agreed</li>
                <li>• Refunds are provided according to specific agreement terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate services under specific conditions:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Upon completion of the agreed scope of work</li>
                <li>• By mutual agreement of both parties</li>
                <li>• For breach of contract with appropriate notice</li>
                <li>• Immediately for safety or legal concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms are governed by the laws of California, United States. Any disputes will be 
                resolved through arbitration in San Francisco, California.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. Changes will be posted on our 
                website and take effect immediately upon posting. Continued use of our services 
                constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these terms or our services, please contact us:
              </p>
              <div className="text-muted-foreground">
                <p>Email: legal@tracebash.com</p>
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

export default Terms;