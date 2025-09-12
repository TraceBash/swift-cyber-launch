import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Clock, FileText, Shield, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const PenetrationTesting = () => {
  const methodology = [
    "Reconnaissance and Information Gathering",
    "Vulnerability Assessment and Scanning",
    "Manual Security Testing and Exploitation",
    "Post-Exploitation and Lateral Movement",
    "Reporting and Risk Assessment"
  ];

  const deliverables = [
    "Executive Summary with Business Risk Analysis",
    "Detailed Technical Findings Report",
    "Proof-of-Concept Demonstrations",
    "Remediation Guidance and Best Practices",
    "Risk Rating and Prioritization Matrix"
  ];

  const faqs = [
    {
      question: "What authorization is required for penetration testing?",
      answer: "All penetration testing activities require written authorization from the system owner. We provide a comprehensive engagement letter that clearly defines scope, timelines, and authorized activities to ensure legal compliance."
    },
    {
      question: "How long does a typical penetration test take?",
      answer: "Most penetration tests take 1-3 weeks depending on scope. This includes planning (2-3 days), active testing (5-10 days), and reporting (3-5 days). We'll provide a detailed timeline during scoping."
    },
    {
      question: "Will testing disrupt our business operations?",
      answer: "We design our tests to minimize business impact. Testing is typically performed during off-hours, and we implement safeguards to prevent service disruption. Any potential risks are discussed and approved beforehand."
    },
    {
      question: "What types of systems can you test?",
      answer: "We test web applications, mobile apps, networks, cloud infrastructure, APIs, and wireless systems. Our team has expertise across all major platforms and technologies."
    },
    {
      question: "How do you handle sensitive data during testing?",
      answer: "We follow strict data handling protocols. Any sensitive data encountered during testing is immediately documented and reported without extraction. We sign NDAs and maintain the highest confidentiality standards."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Penetration Testing Services | CyberShield"
        description="Professional penetration testing services to identify vulnerabilities in your applications, networks, and infrastructure. Comprehensive security assessments with detailed reporting."
        keywords="penetration testing, pentesting, security assessment, vulnerability testing, ethical hacking"
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 py-24 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
              OWASP & NIST Compliant
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Penetration Testing Services
            </h1>
            <p className="mb-8 text-xl leading-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Identify vulnerabilities before attackers do with comprehensive, authorized security testing
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link to="/contact">
                Request Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Problem Framing */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Why Penetration Testing Matters</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Organizations face an average of 4,000 cyberattacks daily. Regular penetration testing helps identify vulnerabilities 
              in your security posture before malicious actors can exploit them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-World Testing</h3>
                <p className="text-muted-foreground">Simulated attacks using actual attacker techniques</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Risk Validation</h3>
                <p className="text-muted-foreground">Confirm the exploitability of identified vulnerabilities</p>
              </div>
              <div className="text-center">
                <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compliance Support</h3>
                <p className="text-muted-foreground">Meet regulatory requirements and industry standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Testing Methodology</h2>
              <p className="text-xl text-muted-foreground">
                Following industry-standard frameworks including OWASP, NIST, and PTES
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Testing Process</h3>
                <div className="space-y-4">
                  {methodology.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Key Deliverables</h3>
                <div className="space-y-4">
                  {deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                      <p className="text-muted-foreground">{deliverable}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & SLA */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-2xl font-semibold">Timeline & SLA</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Planning & Scoping</span>
                      <span className="text-muted-foreground">2-3 days</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Active Testing</span>
                      <span className="text-muted-foreground">5-10 days</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Report Generation</span>
                      <span className="text-muted-foreground">3-5 days</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Total Duration</span>
                      <span className="text-accent font-semibold">1-3 weeks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-2xl font-semibold">Expected Outcomes</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Comprehensive Risk Assessment</h4>
                      <p className="text-muted-foreground text-sm">
                        Complete understanding of your security posture with prioritized vulnerabilities
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Actionable Remediation Plan</h4>
                      <p className="text-muted-foreground text-sm">
                        Step-by-step guidance to fix identified issues and strengthen defenses
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Compliance Documentation</h4>
                      <p className="text-muted-foreground text-sm">
                        Reports formatted to meet regulatory and auditing requirements
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Security Awareness</h4>
                      <p className="text-muted-foreground text-sm">
                        Enhanced team understanding of real-world attack scenarios
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our penetration testing services
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Test Your Defenses?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Schedule a consultation to discuss your penetration testing needs
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PenetrationTesting;