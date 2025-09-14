import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, Search, Users, CheckCircle, ArrowRight, Award, Lock, Zap } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import AnimatedHero from "@/components/ui/animated-hero";

const Index = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
      href: "/services/penetration-testing"
    },
    {
      icon: <Search className="h-8 w-8 text-accent" />,
      title: "VAPT Services",
      description: "Vulnerability Assessment and Penetration Testing with detailed remediation guidance.",
      href: "/services/vapt"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Red Team Exercises",
      description: "Advanced adversary simulation to test your organization's detection and response capabilities.",
      href: "/services/red-team"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
      title: "Methodology-driven",
      description: "NIST, OWASP, and PTES frameworks ensure comprehensive coverage"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
      title: "Actionable reports",
      description: "Clear findings with step-by-step remediation guidance"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
      title: "Remediation partnership",
      description: "Ongoing support to help you fix vulnerabilities effectively"
    }
  ];

  const trustSignals = [
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Certified Team",
      description: "CISSP, CEH, OSCP certified professionals"
    },
    {
      icon: <Lock className="h-8 w-8 text-accent" />,
      title: "Compliance Ready",
      description: "SOC 2, ISO 27001, PCI DSS aligned testing"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "500+ Assessments",
      description: "Proven track record across industries"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="TraceBash Security: Authorized Penetration Testing & Red Teaming"
        description="We help organizations validate controls, find real risks, and ship fixes—fast and repeatably. Professional cybersecurity services you can trust."
        keywords="penetration testing, red team, cybersecurity, vulnerability assessment, VAPT, security audit"
        canonical={window.location.href}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-6 py-24 lg:px-8 overflow-hidden min-h-[80vh]">
          <div 
            className="absolute inset-0 -z-10"
            style={{ background: 'var(--hero-gradient)' }}
          />
          <div className="absolute inset-0 -z-10 opacity-50">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }} />
          </div>
          
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="text-left space-y-8">
                <Badge variant="secondary" className="w-fit animate-fade-in">
                  Trusted by 100+ Organizations
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-slide-up max-w-4xl">
                  <span className="whitespace-nowrap">TraceBash Security:</span><br />
                  Authorized Penetration Testing & Red Teaming
                </h1>
                <p className="text-xl leading-8 text-white/90 max-w-xl animate-fade-in">
                  We help organizations validate controls, find real risks, and ship fixes—fast and repeatably.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
                  <Button asChild variant="professional" size="lg" className="text-lg px-8 py-6">
                    <Link to="/contact">
                      Request an Assessment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6">
                    <Link to="/services">
                      View Services
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Right side - Animated Illustration */}
              <div className="relative h-96 lg:h-[500px]">
                <AnimatedHero />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  {benefit.icon}
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-foreground/80">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 animate-fade-in">
                Our Services
              </h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto animate-slide-up">
                Comprehensive cybersecurity testing services to protect your organization
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50 hover:scale-105 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-8">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80 mb-6">
                      {service.description}
                    </p>
                    <Button asChild variant="outline" className="group-hover:border-accent group-hover:text-accent hover:bg-accent/10">
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

        {/* Trust Signals */}
        <section className="py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 animate-fade-in">
                Why Choose TraceBash Security
              </h2>
              <p className="text-xl text-foreground/80 animate-slide-up">
                Trusted expertise with proven results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trustSignals.map((signal, index) => (
                <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${index * 0.15}s`}}>
                  <div className="flex justify-center mb-4">
                    {signal.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {signal.title}
                  </h3>
                  <p className="text-foreground/80">
                    {signal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Strengthen Your Security?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a comprehensive security assessment from our certified team
            </p>
            <Button asChild variant="accent" size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Request Assessment
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

export default Index;
