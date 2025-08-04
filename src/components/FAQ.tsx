import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to prepare my tax return?",
      answer: "Most individual tax returns are completed within 3-5 business days. Complex returns may take up to a week. Business returns typically require 5-7 business days depending on complexity. We'll provide you with a timeline during your initial consultation."
    },
    {
      question: "What documents do I need for tax preparation?",
      answer: "You'll need your W-2s, 1099s, previous year's tax return, receipts for deductions, bank statements, and any other relevant financial documents. We'll provide you with a complete checklist when you schedule your appointment."
    },
    {
      question: "Can you help if I owe money to the IRS?",
      answer: "Absolutely. We specialize in tax resolution services including payment plans, offers in compromise, penalty abatement, and IRS negotiations. Our experienced team has successfully resolved thousands of tax problems over the past 30 years."
    },
    {
      question: "What types of mortgages do you offer?",
      answer: "We offer conventional mortgages, FHA loans, VA loans, jumbo mortgages, refinancing options, and specialized programs for first-time buyers. Our mortgage specialists will help you find the best option for your financial situation."
    },
    {
      question: "How much do your services cost?",
      answer: "Our fees vary depending on the complexity of your needs. We offer transparent, competitive pricing with no hidden fees. Individual tax returns start at $150, and we'll provide you with a clear quote before beginning any work."
    },
    {
      question: "Do you offer year-round tax planning?",
      answer: "Yes! Tax planning is most effective when done throughout the year, not just at tax time. We offer quarterly check-ins and strategic planning sessions to help minimize your tax liability and maximize your savings."
    },
    {
      question: "Can you represent me in an IRS audit?",
      answer: "Yes, we provide full IRS representation services. As licensed tax professionals, we can represent you before the IRS, handle all communications, and work to achieve the best possible outcome for your situation."
    },
    {
      question: "What makes John Turis Enterprises different from other firms?",
      answer: "Our 30+ years of experience, personal attention to each client, deep knowledge of Brooklyn's financial landscape, and comprehensive service offerings set us apart. We're not just service providers—we're your long-term financial partners."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We provide comprehensive business services including formation, bookkeeping, payroll, tax preparation, and financial planning. Many of our business clients have been with us for decades as they've grown and succeeded."
    },
    {
      question: "How do I get started?",
      answer: "Simply call us or fill out our contact form to schedule a free consultation. We'll discuss your needs, explain our services, and create a plan that works for your situation and budget. There's no obligation, and we're here to help."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get answers to common questions about our financial services. 
              Can't find what you're looking for? Give us a call!
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-gold transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+17185551234" 
                className="text-primary hover:text-gold font-semibold transition-colors"
              >
                📞 (718) 555-1234
              </a>
              <a 
                href="mailto:info@johnturisenterprises.com" 
                className="text-primary hover:text-gold font-semibold transition-colors"
              >
                ✉️ info@johnturisenterprises.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};