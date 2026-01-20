import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Clock, ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const articles = [
  {
    title: 'Zero Trust Architecture: A C-Suite Implementation Guide',
    date: 'Jan 10, 2026',
    readTime: '8 min read',
    categories: ['Cloud Policy', 'Zero Trust'],
    excerpt: 'How enterprise leaders can champion security transformation without disrupting business velocity.',
  },
  {
    title: 'AI Ethics in Enterprise Security: Navigating the 2026 Landscape',
    date: 'Jan 5, 2026',
    readTime: '12 min read',
    categories: ['AI Ethics', 'Governance'],
    excerpt: 'Balancing innovation and compliance when deploying AI-powered security tools across global operations.',
  },
  {
    title: 'The CISO-Board Communication Playbook',
    date: 'Dec 28, 2025',
    readTime: '6 min read',
    categories: ['Leadership', 'Strategy'],
    excerpt: 'Translating technical risk into business language that resonates with board members.',
  },
  {
    title: 'Multi-Cloud Security: Lessons from 50 Enterprise Migrations',
    date: 'Dec 20, 2025',
    readTime: '15 min read',
    categories: ['Cloud Policy', 'Architecture'],
    excerpt: 'Patterns, anti-patterns, and strategic frameworks for securing hybrid cloud environments.',
  },
  {
    title: 'Building a Security-First Culture in Enterprise Organizations',
    date: 'Dec 15, 2025',
    readTime: '10 min read',
    categories: ['Leadership', 'Culture'],
    excerpt: 'Strategies for embedding security awareness across all levels of your organization.',
  },
  {
    title: 'The Future of Identity: Passwordless Authentication at Scale',
    date: 'Dec 10, 2025',
    readTime: '9 min read',
    categories: ['Identity', 'Zero Trust'],
    excerpt: 'Implementing passwordless solutions across enterprise environments with minimal friction.',
  },
];

const BoardroomPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">The Boardroom</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Strategic Insights & Executive Briefs
              </h1>
              <p className="text-xl text-muted-foreground">
                Deep-dive analyses and thought leadership for security executives navigating 
                complex enterprise challenges. Each article is crafted to provide actionable 
                insights you can implement immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Articles Grid */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                  <article
                    key={index}
                    className="group card-elevated p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
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
                    
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Article <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </article>
                ))}
              </div>

              {/* Newsletter Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 card-elevated p-8 glow-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">Executive Briefing</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Weekly insights on enterprise security, cloud architecture, and leadership 
                    strategies delivered to your inbox.
                  </p>
                  
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                    <Button variant="glow" className="w-full">
                      Subscribe
                    </Button>
                  </form>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    Join 2,500+ security executives. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BoardroomPage;
