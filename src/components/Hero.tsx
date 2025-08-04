import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-financial.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-8">
            <span className="text-gold font-semibold">Serving Brooklyn for 30+ Years</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Expert Financial Services
            <span className="block text-gold">You Can Trust</span>
          </h1>

          {/* Value Proposition */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl">
            Tax preparation, mortgage services, and comprehensive financial solutions 
            backed by three decades of expertise in Brooklyn, New York.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span className="text-lg">Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span className="text-lg">30+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span className="text-lg">Brooklyn Local</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="gold" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              <Phone className="w-5 h-5" />
              Get Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={scrollToContact}
            >
              <Mail className="w-5 h-5" />
              Contact Us Today
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60 mb-4">Trusted by thousands of Brooklyn families and businesses</p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">30+</div>
                <div className="text-sm text-primary-foreground/60">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">5000+</div>
                <div className="text-sm text-primary-foreground/60">Tax Returns Filed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">100%</div>
                <div className="text-sm text-primary-foreground/60">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};