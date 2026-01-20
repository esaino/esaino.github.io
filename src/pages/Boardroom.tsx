import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Clock, ArrowUpRight, Mail, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { getPublishedArticles, getAllCategories } from '@/data/articles';

const BoardroomPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const allArticles = getPublishedArticles();
  const categories = getAllCategories();
  
  const filteredArticles = selectedCategory 
    ? allArticles.filter(a => a.categories.includes(selectedCategory))
    : allArticles;

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
                Reframing security as a positive force. Articles crafted for leaders who 
                see security as a strategic enabler, not just a necessary cost.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-6 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                <Filter className="w-4 h-4" />
                <span>Filter:</span>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all shrink-0 ${
                  !selectedCategory 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Articles Grid */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
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
                  
                  <h3 className="text-xl font-semibold mb-2">The Positive Brief</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Weekly insights on security strategy, positive leadership, 
                    and building security as a business enabler.
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
                    Join 2,500+ security leaders. Unsubscribe anytime.
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
