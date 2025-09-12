import { Link } from "react-router-dom";
import { Shield, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">CyberShield</span>
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-sm">
              Authorized penetration testing and red teaming services to help organizations validate controls and find real risks.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/services/penetration-testing" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/vapt" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  VAPT Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/red-team" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Red Team Exercises
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">info@cybershield.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2024 CyberShield. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/60 max-w-md text-center">
              Engagements are scoped, authorized, and compliant. No unapproved activity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;