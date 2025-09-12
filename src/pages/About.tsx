import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Award, Target, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Integrity First",
      description: "We conduct all testing with the highest ethical standards and complete transparency."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Results Driven",
      description: "Our focus is on delivering actionable insights that improve your security posture."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Partnership Approach",
      description: "We work as an extension of your team, providing ongoing support and guidance."
    }
  ];

  const certifications = [
    "Certified Information Systems Security Professional (CISSP)",
    "Certified Ethical Hacker (CEH)",
    "Offensive Security Certified Professional (OSCP)",
    "GIAC Penetration Tester (GPEN)",
    "Certified Information Security Manager (CISM)",
    "ISO 27001 Lead Auditor"
  ];

  const methodology = [
    {
      title: "Comprehensive Planning",
      description: "Every engagement begins with detailed scoping and risk assessment to ensure safe, effective testing."
    },
    {
      title: "Industry Standards",
      description: "We follow NIST, OWASP, PTES, and MITRE ATT&CK frameworks for consistent, thorough assessments."
    },
    {
      title: "Continuous Communication",
      description: "Regular updates and immediate notification of critical findings ensure you're always informed."
    },
    {
      title: "Actionable Reporting",
      description: "Our reports provide clear remediation guidance with business context and risk prioritization."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="About CyberShield | Cybersecurity Experts & Methodology"
        description="Learn about CyberShield's mission, expert team, and proven methodology for cybersecurity assessments. Trusted by 500+ organizations worldwide."
        keywords="cybersecurity experts, penetration testing team, security methodology, certified professionals"
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 py-24 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              About CyberShield
            </h1>
            <p className="mb-8 text-xl leading-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Protecting organizations through expert cybersecurity testing and strategic security guidance
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              CyberShield exists to help organizations understand and improve their security posture through 
              comprehensive, ethical security testing. We believe that effective cybersecurity requires both 
              technical expertise and clear communication, enabling our clients to make informed decisions 
              about their security investments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-xl text-muted-foreground">
                Methodology-driven testing with a focus on business impact
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {methodology.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-accent text-accent-foreground rounded-full text-sm font-semibold mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team & Certifications */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Expert Leadership</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our team consists of seasoned cybersecurity professionals with decades of combined experience 
                  in both offensive and defensive security. We bring expertise from enterprise environments, 
                  government agencies, and specialized security firms to provide comprehensive assessments.
                </p>
                
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Award className="h-8 w-8 text-accent mr-3" />
                      <h3 className="text-xl font-semibold">Leadership Placeholder</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Our leadership team brings together expertise from Fortune 500 companies, government agencies, 
                      and specialized security consulting firms. With a combined 50+ years of cybersecurity experience, 
                      we understand both the technical and business aspects of effective security programs.
                    </p>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      Executive profiles available upon request
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Team Certifications</h2>
                <p className="text-muted-foreground mb-8">
                  Our team maintains industry-leading certifications to ensure we stay current with 
                  the latest threats, techniques, and defensive strategies.
                </p>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span className="text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
                
                <Card className="mt-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Continuous Learning</h3>
                    <p className="text-muted-foreground text-sm">
                      We invest heavily in ongoing training and professional development. Our team regularly 
                      attends security conferences, participates in advanced training programs, and contributes 
                      to the security community through research and publications.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Why Organizations Choose CyberShield</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    500+ successful security assessments
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    Zero security incidents during testing
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    98% client satisfaction rate
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    Trusted by Fortune 500 companies
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Comprehensive Support</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    24/7 emergency response support
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    Post-assessment remediation guidance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    Ongoing security consulting
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    Compliance documentation support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Partner with Security Experts
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join 500+ organizations that trust CyberShield for their security assessments
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link to="/contact">
                Start Your Assessment
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

export default About;