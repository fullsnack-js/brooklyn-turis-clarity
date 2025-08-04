import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Home, 
  TrendingUp, 
  FileText, 
  Shield, 
  Users,
  CheckCircle,
  Phone
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Return Preparation",
      description: "Expert tax preparation for individuals and businesses. Maximize your deductions and ensure compliance.",
      features: [
        "Individual & Business Returns",
        "Tax Planning & Strategy",
        "IRS Representation",
        "Quarterly Estimates",
        "Multi-State Filings"
      ]
    },
    {
      icon: Home,
      title: "Mortgage Services",
      description: "Complete mortgage solutions from pre-approval to closing. Find the best rates and terms for your situation.",
      features: [
        "Purchase Mortgages",
        "Refinancing",
        "FHA/VA Loans",
        "Jumbo Mortgages",
        "First-Time Buyer Programs"
      ]
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Comprehensive financial planning to secure your future. Investment advice and retirement planning.",
      features: [
        "Retirement Planning",
        "Investment Strategies",
        "Insurance Planning",
        "Estate Planning",
        "College Savings Plans"
      ]
    },
    {
      icon: FileText,
      title: "Business Services",
      description: "Complete business financial services including bookkeeping, payroll, and business formation.",
      features: [
        "Business Formation",
        "Bookkeeping Services",
        "Payroll Processing",
        "Financial Statements",
        "Business Tax Planning"
      ]
    },
    {
      icon: Shield,
      title: "Tax Resolution",
      description: "Resolve tax problems with the IRS. Payment plans, offers in compromise, and penalty relief.",
      features: [
        "IRS Negotiations",
        "Payment Plans",
        "Penalty Abatement",
        "Offers in Compromise",
        "Audit Representation"
      ]
    },
    {
      icon: Users,
      title: "Personal Consulting",
      description: "One-on-one financial consulting tailored to your unique situation and goals.",
      features: [
        "Financial Health Checkup",
        "Debt Management",
        "Budget Planning",
        "Goal Setting",
        "Regular Reviews"
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From tax preparation to mortgage services and financial planning, 
            we provide the complete range of financial services you need to succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                    onClick={scrollToContact}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground shadow-elegant">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how our 30 years of experience 
            can help you achieve your financial goals.
          </p>
          <Button 
            variant="gold" 
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-6"
          >
            <Phone className="w-5 h-5" />
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};