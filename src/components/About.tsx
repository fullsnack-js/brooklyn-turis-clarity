import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Three Decades of Financial Excellence
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Since 1992, John Turis Enterprises has been Brooklyn's trusted partner for 
            comprehensive financial services. Our commitment to excellence and personal 
            attention has made us the go-to choice for individuals and businesses alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Why Choose John Turis Enterprises?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Proven Expertise</h4>
                  <p className="text-muted-foreground">
                    Three decades of experience handling complex tax situations, mortgage applications, 
                    and financial planning for Brooklyn residents.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Personal Service</h4>
                  <p className="text-muted-foreground">
                    We know our clients by name. Every consultation is personal, 
                    ensuring your unique financial needs are understood and addressed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Brooklyn Local</h4>
                  <p className="text-muted-foreground">
                    Born and raised in Brooklyn, we understand the unique financial landscape 
                    and challenges facing our community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-8 h-8 text-gold" />
                  <div>
                    <h4 className="text-xl font-semibold text-primary">30+ Years</h4>
                    <p className="text-muted-foreground">In Business</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Established in 1994, we've weathered multiple economic cycles and 
                  helped thousands of clients achieve their financial goals.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-primary mb-2">Licensed & Certified</h4>
                  <p className="text-sm text-muted-foreground">
                    Fully licensed tax preparers and mortgage professionals. 
                    We stay current with all regulations and continuing education requirements.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">IRS Certified</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">NYS Licensed</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">NMLS Registered</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-primary mb-2">Community Focused</h4>
                <p className="text-sm text-muted-foreground">
                  We're not just service providers—we're your neighbors. 
                  Active members of the Brooklyn business community, supporting local growth and prosperity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};