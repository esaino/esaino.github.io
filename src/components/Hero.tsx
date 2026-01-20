import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import DataFlowBackground from './DataFlowBackground';

const Hero = () => {
  const activeRegions = [
    { name: 'UKI', x: '48%', y: '25%' },
    { name: 'Europe', x: '52%', y: '28%' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <DataFlowBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Security Strategy Leader</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Security as an{' '}
              <span className="text-gradient">Enabler</span>,{' '}
              Not a Barrier
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Transforming how organizations think about security. Positive, strategic, 
              and business-aligned approaches that build trust and drive growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/boardroom">
                <Button variant="hero" size="lg">
                  Explore Insights
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/laboratory">
                <Button variant="outline" size="lg">
                  View Projects
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gradient">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gradient">3</div>
                <div className="text-sm text-muted-foreground">AWS Certifications</div>
              </div>
            </div>
          </div>
          
          {/* Right: Visual Elements */}
          <div className="relative hidden lg:block">
            {/* Profile Image Placeholder */}
            <div className="relative z-10 w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-transparent animate-pulse-glow" />
              <div className="absolute inset-2 rounded-xl bg-card border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-primary">The Security Positivist</p>
                  <p className="text-muted-foreground text-sm mt-1">Strategy • Leadership • Growth</p>
                </div>
              </div>
            </div>
            
            {/* Global Impact Map */}
            <div className="absolute -bottom-8 -left-8 right-8 p-6 rounded-xl card-elevated">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Global Impact</span>
              </div>
              <div className="relative h-32 bg-muted/30 rounded-lg overflow-hidden">
                {/* Simplified World Map Representation */}
                <svg viewBox="0 0 200 100" className="w-full h-full opacity-30">
                  <ellipse cx="100" cy="50" rx="90" ry="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                  <path d="M10,50 Q50,30 100,50 T190,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                  <path d="M10,50 Q50,70 100,50 T190,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                </svg>
                {/* Active Region Indicators */}
                {activeRegions.map((region) => (
                  <div
                    key={region.name}
                    className="absolute"
                    style={{ left: region.x, top: region.y }}
                  >
                    <div className="relative">
                      <span className="absolute w-3 h-3 rounded-full bg-primary animate-ping" />
                      <span className="relative w-3 h-3 rounded-full bg-primary flex" />
                    </div>
                    <span className="absolute left-4 -top-1 text-xs text-primary font-medium whitespace-nowrap">
                      {region.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* News Ticker */}
      <div className="absolute bottom-0 left-0 right-0 glass border-t border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4 overflow-hidden">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider shrink-0">
              Latest Insights
            </span>
            <div className="flex gap-8 animate-slide-in">
              <Link to="/boardroom" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                Reframing Risk: Why Positive Security Messaging Wins →
              </Link>
              <Link to="/boardroom" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                Strategic Security Planning for Executive Alignment →
              </Link>
              <Link to="/boardroom" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                Building Security Champions Across Your Organization →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
