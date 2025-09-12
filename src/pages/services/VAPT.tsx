import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, FileSearch, Users, CheckCircle, ArrowRight, Clock, Target } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const VAPT = () => {
  const methodology = [
    "Asset Discovery and Enumeration",
    "Automated Vulnerability Scanning",
    "Manual Security Validation",
    "Risk Assessment and Prioritization",
    "Detailed Reporting with Evidence"
  ];

  const deliverables = [
    "Comprehensive Vulnerability Report",
    "Risk-Based Prioritization Matrix",
    "Technical and Executive Summaries",
    "Remediation Roadmap with Timelines",
    "Compliance Mapping Documentation"
  ];

  const faqs = [
    {
      question: "What's the difference between VAPT and penetration testing?",
      answer: "VAPT combines automated vulnerability assessment with manual penetration testing. While penetration testing focuses on exploitation, VAPT provides broader coverage of potential vulnerabilities with validation of exploitability."
    },
    {
      question: "How often should we conduct VAPT assessments?",
      answer: "We recommend quarterly VAPT assessments for critical systems, with additional testing after major changes or new deployments. High-risk environments may benefit from monthly assessments."
    },
    {
      question: "Do you test production systems?",
      answer: "Yes, but with careful coordination and safety measures. We can also test staging environments or create isolated test environments that mirror production for safer assessment."
    },
    {
      question: "What compliance frameworks does VAPT support?",
      answer: "Our VAPT services align with PCI DSS, ISO 27001, SOX, HIPAA, and other major compliance frameworks. We provide documentation to support your audit requirements."
    },
    {
      question: "How do you handle false positives in automated scans?",
      answer: "Our experts manually validate all findings from automated tools to eliminate false positives. We provide verified vulnerabilities with proof-of-concept demonstrations where appropriate."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="VAPT Services - Vulnerability Assessment & Penetration Testing | TraceBash Security"
        description="Comprehensive VAPT services combining automated vulnerability scanning with manual security testing. Get detailed risk assessments and remediation guidance."
        keywords="VAPT, vulnerability assessment, penetration testing, security audit, compliance testing"
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 py-24 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
              ISO 27001 & PCI DSS Aligned
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              VAPT Services
            </h1>
            <p className="mb-8 text-xl leading-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Vulnerability Assessment and Penetration Testing with comprehensive coverage and detailed remediation guidance
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link to="/contact">
                Request VAPT Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Problem Framing */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">The VAPT Advantage</h2>
            <p className="text-xl text-muted-foreground mb-8">
              VAPT combines the broad coverage of automated vulnerability scanning with the depth of manual penetration testing, 
              providing comprehensive security validation for your critical assets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Search className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
                <p className="text-muted-foreground">Automated + manual testing for complete visibility</p>
              </div>
              <div className="text-center">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Risk Prioritization</h3>
                <p className="text-muted-foreground">Business impact-based vulnerability ranking</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compliance Ready</h3>
                <p className="text-muted-foreground">Aligned with industry regulations and standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our VAPT Methodology</h2>
              <p className="text-xl text-muted-foreground">
                Combining automated tools with expert manual validation
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Assessment Process</h3>
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

        {/* Testing Scope */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What We Test</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive security assessment across all technology layers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <FileSearch className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Web Applications</h3>
                  <p className="text-sm text-muted-foreground">
                    OWASP Top 10, custom business logic, authentication flaws
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Network Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">
                    Network services, firewalls, routers, switches
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">APIs & Services</h3>
                  <p className="text-sm text-muted-foreground">
                    REST/SOAP APIs, microservices, third-party integrations
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Cloud Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">
                    AWS, Azure, GCP configurations and access controls
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline & SLA */}
        <section className="py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-2xl font-semibold">Timeline & Process</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Scoping & Planning</span>
                      <span className="text-muted-foreground">1-2 days</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Automated Scanning</span>
                      <span className="text-muted-foreground">2-3 days</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Manual Validation</span>
                      <span className="text-muted-foreground">3-5 days</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Risk Analysis</span>
                      <span className="text-muted-foreground">1-2 days</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Total Duration</span>
                      <span className="text-accent font-semibold">1-2 weeks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-2xl font-semibold">Expected Outcomes</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Complete Vulnerability Inventory</h4>
                      <p className="text-muted-foreground text-sm">
                        Comprehensive list of all identified security weaknesses
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Risk-Based Prioritization</h4>
                      <p className="text-muted-foreground text-sm">
                        Vulnerabilities ranked by business impact and exploitability
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Remediation Roadmap</h4>
                      <p className="text-muted-foreground text-sm">
                        Clear steps and timelines for addressing identified issues
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Compliance Documentation</h4>
                      <p className="text-muted-foreground text-sm">
                        Reports aligned with regulatory requirements
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our VAPT services
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
              Secure Your Infrastructure Today
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get comprehensive vulnerability assessment with expert validation
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link to="/contact">
                Schedule VAPT Assessment
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

export default VAPT;