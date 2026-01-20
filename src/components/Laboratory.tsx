import { ExternalLink, GitBranch, Star } from 'lucide-react';

const projects = [
  {
    name: 'zero-trust-blueprint',
    description: 'Infrastructure-as-code templates for deploying Zero Trust architecture on AWS',
    tech: ['Python', 'AWS CDK', 'Terraform'],
    stars: 234,
    language: 'Python',
  },
  {
    name: 'cloud-policy-engine',
    description: 'Automated policy enforcement engine for multi-cloud environments',
    tech: ['Go', 'Kubernetes', 'OPA'],
    stars: 189,
    language: 'Go',
  },
  {
    name: 'security-metrics-dashboard',
    description: 'Real-time security KPI visualization for executive reporting',
    tech: ['TypeScript', 'React', 'D3.js'],
    stars: 156,
    language: 'TypeScript',
  },
  {
    name: 'iam-analyzer',
    description: 'Least-privilege analysis tool for AWS IAM policies',
    tech: ['Python', 'boto3', 'AWS'],
    stars: 312,
    language: 'Python',
  },
  {
    name: 'compliance-automator',
    description: 'Automated compliance checking for SOC2, ISO27001, and GDPR',
    tech: ['Python', 'Terraform', 'Azure'],
    stars: 98,
    language: 'Python',
  },
];

const languageColors: Record<string, string> = {
  Python: 'bg-yellow-500',
  Go: 'bg-cyan-500',
  TypeScript: 'bg-blue-500',
};

const Laboratory = () => {
  return (
    <section id="laboratory" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">The Laboratory</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Hands-On Labs & Code Library
          </h2>
          <p className="text-muted-foreground">
            Open-source tools, frameworks, and infrastructure-as-code templates 
            built from real enterprise implementations.
          </p>
        </div>

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

          {/* Projects Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/30 border-b border-border">
                  <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Repository
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Tech Stack
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
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className="border-b border-border/50 hover:bg-muted/20 transition-colors group"
                  >
                    <td className="px-6 py-5">
                      <div>
                        <div className="text-primary font-medium group-hover:underline">
                          {project.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 font-sans max-w-xs">
                          {project.description}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 hidden md:table-cell">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground font-sans"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-5 hidden sm:table-cell">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${languageColors[project.language]}`} />
                        <span className="text-muted-foreground font-sans">{project.language}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-1 text-muted-foreground">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <a
                        href="#"
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

          {/* Footer */}
          <div className="px-6 py-4 bg-muted/30 border-t border-border flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {projects.length} repositories • Updated today
            </span>
            <a href="#" className="text-xs text-primary hover:underline flex items-center gap-1">
              View all on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Laboratory;
