import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { ArrowRight, Clock, ExternalLink, Star, Users, Mic, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFeaturedArticles } from '@/data/articles';

const featuredProjects = [
  { name: 'security-culture-toolkit', language: 'Python', stars: 234 },
  { name: 'positive-security-metrics', language: 'Python', stars: 312 },
  { name: 'executive-risk-dashboard', language: 'TypeScript', stars: 421 },
];

const languageColors: Record<string, string> = {
  Python: 'bg-yellow-500',
  Go: 'bg-cyan-500',
  TypeScript: 'bg-blue-500',
};

const Index = () => {
  const featuredArticles = getFeaturedArticles();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        
        {/* Boardroom Preview */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">The Boardroom</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3">
                  Strategic Insights
                </h2>
              </div>
              <Link to="/boardroom" className="hidden sm:flex items-center gap-2 text-primary hover:underline">
                View all articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {featuredArticles.slice(0, 2).map((article) => (
                <article
                  key={article.id}
                  className="group card-elevated p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.categories.map((cat) => (
                      <span key={cat} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Link to="/boardroom" className="sm:hidden flex items-center gap-2 text-primary">
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Laboratory Preview */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">The Laboratory</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3">
                  Open Source Projects
                </h2>
              </div>
              <Link to="/laboratory" className="hidden sm:flex items-center gap-2 text-primary hover:underline">
                View all projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="card-elevated p-6 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${languageColors[project.language]}`} />
                      <span className="text-sm text-muted-foreground">{project.language}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                  </div>
                  <h3 className="font-mono text-primary group-hover:underline">{project.name}</h3>
                  <ExternalLink className="w-4 h-4 mt-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>

            <Link to="/laboratory" className="sm:hidden flex items-center gap-2 text-primary">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Mentorship Preview */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Mentorship & Growth</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                Accelerate Your Journey
              </h2>
              <p className="text-muted-foreground">
                Tailored guidance for security leaders who want to drive positive change in their organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {[
                { icon: Users, title: '1:1 Mentoring', desc: 'Strategic leadership coaching' },
                { icon: Mic, title: 'Speaking', desc: 'Keynotes & workshops' },
                { icon: Calendar, title: 'Advisory', desc: 'Executive counsel' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/mentorship">
                <Button variant="glow" size="lg">
                  Explore Mentorship Options
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
