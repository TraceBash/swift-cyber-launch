import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Search, Users, ArrowRight, Shield, Lock, Zap } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const Services = () => {
  const services = [
    {
      icon: <Target className="h-12 w-12 text-accent" />,
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities in your applications, networks, and infrastructure.",
      features: ["Web Application Testing", "Network Infrastructure Testing", "Wireless Security Assessment", "Social Engineering Testing"],
      href: "/services/penetration-testing"
    },
    {
      icon: <Search className="h-12 w-12 text-accent" />,
      title: "VAPT Services",
      description: "Vulnerability Assessment and Penetration Testing combining automated scanning with manual validation.",
      features: ["Automated Vulnerability Scanning", "Manual Security Testing", "Risk Assessment", "Compliance Reporting"],
      href: "/services/vapt"
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Red Team Exercises",
      description: "Advanced adversary simulation to test your organization's detection and response capabilities.",
      features: ["Advanced Persistent Threats", "Multi-vector Attacks", "Blue Team Collaboration", "Security Awareness Training"],
      href: "/services/red-team"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Industry Standards",
      description: "NIST, OWASP, PTES frameworks"
    },
    {
      icon: <Lock className="h-8 w-8 text-accent" />,
      title: "Secure Testing",
      description: "Authorized and controlled assessments"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Fast Delivery",
      description: "Quick turnaround with quality results"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Cybersecurity Services | TraceBash Security"
        description="Professional penetration testing, VAPT services, and red team exercises. Comprehensive cybersecurity assessments to protect your organization."
        keywords="cybersecurity services, penetration testing, VAPT, red team, security assessment"
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 py-24 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Cybersecurity Services
            </h1>
            <p className="mb-8 text-xl leading-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Comprehensive security testing services to identify vulnerabilities and strengthen your defenses
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link to={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                Our Approach
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional, methodical, and results-driven
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us to discuss your security assessment needs
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link to="/contact">
                Get Started
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

export default Services;