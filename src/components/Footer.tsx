import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">JT</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">John Turis Enterprises</h3>
                <p className="text-xs text-primary-foreground/70">Since 1994</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Trusted financial services in Brooklyn for over 30 years. 
              Your success is our commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Tax Preparation</li>
              <li>Mortgage Services</li>
              <li>Financial Planning</li>
              <li>Business Services</li>
              <li>Tax Resolution</li>
              <li>Personal Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+17185551234" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  (718) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:info@johnturisenterprises.com" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  info@johnturisenterprises.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Main Street<br />
                  Brooklyn, NY 11201
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold mt-0.5" />
                <div className="text-primary-foreground/80">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 10:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} John Turis Enterprises. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <span className="text-primary-foreground/60">Licensed & Insured</span>
              <span className="text-primary-foreground/60">•</span>
              <span className="text-primary-foreground/60">IRS Certified</span>
              <span className="text-primary-foreground/60">•</span>
              <span className="text-primary-foreground/60">NMLS Registered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};