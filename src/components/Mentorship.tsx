import { Calendar, Mic, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const offerings = [
  {
    icon: Users,
    title: '1:1 Mentoring',
    description: 'Personalized guidance for security architects and aspiring CISOs on career growth and technical leadership.',
    cta: 'Book Session',
    highlight: true,
  },
  {
    icon: Mic,
    title: 'Speaking Engagements',
    description: 'Keynotes and workshops on enterprise security architecture, zero trust, and AI governance.',
    cta: 'Inquire Now',
    highlight: false,
  },
  {
    icon: Calendar,
    title: 'Advisory Retainer',
    description: 'Ongoing strategic counsel for organizations navigating complex security transformations.',
    cta: 'Learn More',
    highlight: false,
  },
];

const Mentorship = () => {
  return (
    <section id="mentorship" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Mentorship & Growth</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Accelerate Your Security Leadership Journey
          </h2>
          <p className="text-muted-foreground">
            Whether you're stepping into your first architect role or preparing for the C-suite, 
            I offer tailored guidance drawn from 15+ years of enterprise experience.
          </p>
        </div>

        {/* Offerings Grid */}
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

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
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
      </div>
    </section>
  );
};

export default Mentorship;
