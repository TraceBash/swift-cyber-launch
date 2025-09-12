import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Zap, Target, CheckCircle, ArrowRight, Clock, Eye } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const RedTeam = () => {
  const methodology = [
    "Reconnaissance and Target Profiling",
    "Initial Access and Persistence",
    "Lateral Movement and Privilege Escalation",
    "Objective Achievement and Data Exfiltration",
    "Blue Team Coordination and Knowledge Transfer"
  ];

  const deliverables = [
    "Attack Path Documentation",
    "Blue Team Collaboration Report",
    "Detection Gap Analysis",
    "Incident Response Evaluation",
    "Security Awareness Recommendations"
  ];

  const faqs = [
    {
      question: "How is red teaming different from penetration testing?",
      answer: "Red teaming is a comprehensive adversarial simulation that tests your entire security program including people, processes, and technology. Unlike penetration testing which focuses on finding vulnerabilities, red teaming evaluates your detection and response capabilities."
    },
    {
      question: "How long does a red team engagement take?",
      answer: "Red team exercises typically run 4-8 weeks depending on scope and objectives. This includes planning (1 week), active operations (2-4 weeks), and reporting/knowledge transfer (1-2 weeks)."
    },
    {
      question: "Will our security team know about the exercise?",
      answer: "We offer both announced and unannounced exercises. Unannounced tests provide realistic assessment of detection capabilities, while announced exercises focus on controlled collaboration and learning."
    },
    {
      question: "What if you gain access to sensitive systems?",
      answer: "We follow strict rules of engagement and immediately notify designated contacts if critical systems are compromised. All activities are logged and documented for post-exercise analysis."
    },
    {
      question: "How do you coordinate with our blue team?",
      answer: "We work closely with your security team throughout the exercise, providing real-time feedback on detection capabilities and conducting joint analysis sessions to maximize learning outcomes."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Red Team Exercises | Advanced Adversary Simulation | TraceBash Security"
        description="Professional red team exercises to test your organization's detection and response capabilities. Advanced adversary simulation with blue team collaboration."
        keywords="red team, adversary simulation, purple team, security testing, detection testing"
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 py-24 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
              MITRE ATT&CK Framework
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Red Team Exercises
            </h1>
            <p className="mb-8 text-xl leading-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Advanced adversary simulation to test your organization's detection and response capabilities
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link to="/contact">
                Schedule Red Team Exercise
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Problem Framing */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Why Red Team Exercises Matter</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Modern attackers use sophisticated techniques that bypass traditional security controls. 
              Red team exercises simulate real-world adversary tactics to test your complete security program.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">People Testing</h3>
                <p className="text-muted-foreground">Social engineering and security awareness evaluation</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Process Validation</h3>
                <p className="text-muted-foreground">Incident response and security procedure testing</p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Technology Assessment</h3>
                <p className="text-muted-foreground">Security tool effectiveness and detection capabilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Red Team Approach</h2>
              <p className="text-xl text-muted-foreground">
                Following MITRE ATT&CK framework and industry best practices
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Exercise Phases</h3>
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

        {/* Exercise Types */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Exercise Types</h2>
              <p className="text-xl text-muted-foreground">
                Tailored scenarios to match your threat landscape
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Objective-Based Testing</h3>
                  <p className="text-muted-foreground mb-4">
                    Simulate specific threat scenarios relevant to your industry and threat model.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      Ransomware simulation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      Data exfiltration scenarios
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      Insider threat modeling
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      Supply chain attacks
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Eye className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Purple Team Collaboration</h3>
                  <p className="text-muted-foreground mb-4">
                    Joint red and blue team exercises focused on improving detection and response.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      Real-time feedback loops
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      Detection tuning
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      Response playbook testing
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      Knowledge transfer sessions
                    </li>
                  </ul>
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
                      <span className="font-medium">Planning & Scoping</span>
                      <span className="text-muted-foreground">1 week</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Initial Access</span>
                      <span className="text-muted-foreground">3-5 days</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Active Operations</span>
                      <span className="text-muted-foreground">2-4 weeks</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Analysis & Reporting</span>
                      <span className="text-muted-foreground">1-2 weeks</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Total Duration</span>
                      <span className="text-accent font-semibold">4-8 weeks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-2xl font-semibold">Expected Outcomes</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Enhanced Detection</h4>
                      <p className="text-muted-foreground text-sm">
                        Improved security monitoring and threat detection capabilities
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Response Readiness</h4>
                      <p className="text-muted-foreground text-sm">
                        Validated incident response procedures and team preparedness
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Security Awareness</h4>
                      <p className="text-muted-foreground text-sm">
                        Increased employee awareness of social engineering tactics
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Control Validation</h4>
                      <p className="text-muted-foreground text-sm">
                        Real-world testing of security controls and processes
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
                Common questions about red team exercises
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
              Test Your Security Program
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Validate your defenses with realistic adversary simulation
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link to="/contact">
                Plan Red Team Exercise
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

export default RedTeam;