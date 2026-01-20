import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Mic, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const offerings = [
  {
    icon: Users,
    title: '1:1 Mentoring',
    description: 'Personalized guidance for security architects and aspiring CISOs on career growth and technical leadership.',
    cta: 'Book Session',
    highlight: true,
    features: [
      '60-minute video sessions',
      'Career roadmap planning',
      'Technical deep-dives',
      'Resume & interview prep',
    ],
  },
  {
    icon: Mic,
    title: 'Speaking Engagements',
    description: 'Keynotes and workshops on enterprise security architecture, zero trust, and AI governance.',
    cta: 'Inquire Now',
    highlight: false,
    features: [
      'Keynote presentations',
      'Half-day workshops',
      'Panel discussions',
      'Executive briefings',
    ],
  },
  {
    icon: Calendar,
    title: 'Advisory Retainer',
    description: 'Ongoing strategic counsel for organizations navigating complex security transformations.',
    cta: 'Learn More',
    highlight: false,
    features: [
      'Monthly strategy calls',
      'Architecture reviews',
      'Vendor evaluation',
      'Board presentation support',
    ],
  },
];

const MentorshipPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Mentorship & Growth</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Accelerate Your Security Leadership Journey
              </h1>
              <p className="text-xl text-muted-foreground">
                Whether you're stepping into your first architect role or preparing for the C-suite, 
                I offer tailored guidance drawn from 15+ years of enterprise experience.
              </p>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {offerings.map((offering, index) => (
                <div
                  key={index}
                  className={`relative group ${
                    offering.highlight ? 'md:-mt-4 md:mb-4' : ''
                  }`}
                >
                  <div
                    className={`h-full card-elevated p-8 transition-all duration-300 ${
                      offering.highlight
                        ? 'border-primary/50 glow-border'
                        : 'hover:border-primary/30'
                    }`}
                  >
                    {offering.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      offering.highlight ? 'bg-primary/20' : 'bg-muted'
                    }`}>
                      <offering.icon className={`w-7 h-7 ${
                        offering.highlight ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{offering.title}</h3>
                    <p className="text-muted-foreground mb-6">{offering.description}</p>

                    <ul className="space-y-3 mb-8">
                      {offering.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={offering.highlight ? 'hero' : 'outline'}
                      className="w-full group/btn"
                    >
                      {offering.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by security professionals from
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {['Fortune 500', 'FTSE 100', 'Global Banks', 'Tech Giants', 'Gov Agencies'].map((org) => (
                <span key={org} className="text-sm font-medium text-muted-foreground">
                  {org}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
              <p className="text-muted-foreground mb-8">
                Schedule a free 15-minute discovery call to discuss your goals and 
                find the right engagement model for your needs.
              </p>
              <Button variant="glow" size="xl">
                Schedule Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MentorshipPage;
