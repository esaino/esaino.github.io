import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, GitBranch, Star, Loader2 } from 'lucide-react';
import { useGitHubRepos } from '@/hooks/useGitHubRepos';

const GITHUB_USERNAME = 'intriguedeviation';

const languageColors: Record<string, string> = {
  Python: 'bg-yellow-500',
  Go: 'bg-cyan-500',
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Java: 'bg-orange-500',
  Rust: 'bg-orange-600',
  Ruby: 'bg-red-500',
  PHP: 'bg-purple-500',
  'C++': 'bg-pink-500',
  C: 'bg-gray-500',
  Shell: 'bg-green-500',
  HTML: 'bg-orange-400',
  CSS: 'bg-blue-400',
  Dockerfile: 'bg-blue-600',
  HCL: 'bg-violet-500',
};

const LaboratoryPage = () => {
  const { repos, loading, error } = useGitHubRepos(GITHUB_USERNAME);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">The Laboratory</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Hands-On Labs & Code Library
              </h1>
              <p className="text-xl text-muted-foreground">
                Open-source tools, frameworks, and infrastructure-as-code templates 
                built from real enterprise implementations. Each project is battle-tested 
                and production-ready.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* VS Code-style Container */}
            <div className="card-elevated overflow-hidden">
              {/* Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono ml-2">~/projects</span>
                </div>
                <GitBranch className="w-4 h-4 text-muted-foreground" />
              </div>

              {/* Loading State */}
              {loading && (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  <span className="ml-3 text-muted-foreground">Loading repositories...</span>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="flex items-center justify-center py-20 text-destructive">
                  <p>Failed to load repositories. Please try again later.</p>
                </div>
              )}

              {/* Projects Table */}
              {!loading && !error && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/30 border-b border-border">
                        <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Repository
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                          Topics
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                          Language
                        </th>
                        <th className="text-right px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Stars
                        </th>
                        <th className="px-6 py-4"></th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                      {repos.map((repo) => (
                        <tr
                          key={repo.id}
                          className="border-b border-border/50 hover:bg-muted/20 transition-colors group"
                        >
                          <td className="px-6 py-5">
                            <div>
                              <a 
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-medium group-hover:underline"
                              >
                                {repo.name}
                              </a>
                              <div className="text-xs text-muted-foreground mt-1 font-sans max-w-xs">
                                {repo.description || 'No description available'}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 hidden md:table-cell">
                            <div className="flex flex-wrap gap-2">
                              {repo.topics.slice(0, 3).map((topic) => (
                                <span
                                  key={topic}
                                  className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground font-sans"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-5 hidden sm:table-cell">
                            {repo.language && (
                              <div className="flex items-center gap-2">
                                <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-gray-400'}`} />
                                <span className="text-muted-foreground font-sans">{repo.language}</span>
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-5 text-right">
                            <div className="flex items-center justify-end gap-1 text-muted-foreground">
                              <Star className="w-4 h-4" />
                              <span>{repo.stargazers_count}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Footer */}
              <div className="px-6 py-4 bg-muted/30 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {repos.length} repositories • Live from GitHub
                </span>
                <a 
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  View all on GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LaboratoryPage;
