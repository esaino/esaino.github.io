export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  categories: string[];
  featured: boolean;
  published: boolean;
  author: string;
}

// This is a file-based CMS. Articles are stored here and can be 
// easily migrated to a database later. Edit this file to manage content.
export const articles: Article[] = [
  {
    id: '1',
    title: 'Reframing Risk: Why Positive Security Messaging Wins Hearts and Budgets',
    slug: 'reframing-risk-positive-security-messaging',
    excerpt: 'Fear-based security narratives are losing effectiveness. Learn how reframing security as a business enabler transforms stakeholder buy-in.',
    content: `
# Reframing Risk: Why Positive Security Messaging Wins Hearts and Budgets

The traditional security narrative has been built on fear: breaches, threats, and worst-case scenarios. While these concerns are valid, leading with negativity often backfires when seeking executive support.

## The Problem with Fear-Based Messaging

When we constantly warn about what could go wrong, stakeholders become desensitized. Worse, they start to see security as a cost center that only delivers bad news.

## A Positive Alternative

Instead of "we need this to prevent breaches," try "this investment enables us to move faster with confidence." The shift from prevention to enablement changes the entire conversation.

## Key Strategies

1. **Frame security as a competitive advantage**
2. **Quantify the business value of trust**
3. **Celebrate security wins publicly**
4. **Connect security investments to revenue protection**

The most successful security leaders I've worked with have mastered this positive framing while maintaining rigorous standards.
    `,
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    categories: ['Leadership', 'Strategy'],
    featured: true,
    published: true,
    author: 'The Security Positivist',
  },
  {
    id: '2',
    title: 'Strategic Security Planning: A Framework for Executive Alignment',
    slug: 'strategic-security-planning-framework',
    excerpt: 'How to build security strategies that resonate with business objectives and secure lasting executive support.',
    content: `
# Strategic Security Planning: A Framework for Executive Alignment

Security strategy shouldn't exist in isolation. The most effective security programs are deeply integrated with business objectives.

## The Alignment Framework

1. **Understand business priorities first**
2. **Map security initiatives to revenue streams**
3. **Speak the language of the boardroom**
4. **Deliver measurable outcomes**

## Building Executive Relationships

Regular touchpoints with business leaders help security become a trusted partner rather than a gatekeeper.
    `,
    date: 'Jan 10, 2026',
    readTime: '10 min read',
    categories: ['Strategy', 'Governance'],
    featured: true,
    published: true,
    author: 'The Security Positivist',
  },
  {
    id: '3',
    title: 'The CISO-Board Communication Playbook',
    slug: 'ciso-board-communication-playbook',
    excerpt: 'Translating technical risk into business language that resonates with board members and drives action.',
    content: `
# The CISO-Board Communication Playbook

Board members don't need to understand the technical details—they need to understand the business impact and their role in managing risk.

## Principles for Effective Board Communication

1. **Lead with business context, not technical jargon**
2. **Use comparatives and benchmarks**
3. **Present options, not just problems**
4. **Be concise—aim for 3-5 key points**

## The 3-Slide Framework

- Slide 1: Current risk posture (simple visual)
- Slide 2: Key initiatives and progress
- Slide 3: Decisions needed from the board
    `,
    date: 'Jan 5, 2026',
    readTime: '6 min read',
    categories: ['Leadership', 'Communication'],
    featured: false,
    published: true,
    author: 'The Security Positivist',
  },
  {
    id: '4',
    title: 'Building Security Champions: A Cultural Transformation Guide',
    slug: 'building-security-champions',
    excerpt: 'How to cultivate security advocates across your organization and scale your security culture.',
    content: `
# Building Security Champions: A Cultural Transformation Guide

You can't be everywhere at once. Security champions extend your reach and embed security thinking across the organization.

## What Makes a Great Security Champion?

- Genuine interest in security topics
- Respected by their peers
- Good communication skills
- Willingness to learn and teach

## Building the Program

1. **Start with volunteers, not conscripts**
2. **Provide meaningful training and recognition**
3. **Create a community, not just a responsibility**
4. **Measure impact and celebrate wins**
    `,
    date: 'Dec 28, 2025',
    readTime: '12 min read',
    categories: ['Culture', 'Strategy'],
    featured: false,
    published: true,
    author: 'The Security Positivist',
  },
  {
    id: '5',
    title: 'Multi-Cloud Strategy: Security Considerations for Enterprise Leaders',
    slug: 'multi-cloud-security-strategy',
    excerpt: 'Patterns, anti-patterns, and strategic frameworks for securing hybrid cloud environments at scale.',
    content: `
# Multi-Cloud Strategy: Security Considerations for Enterprise Leaders

Multi-cloud isn't just a technical decision—it's a strategic one with significant security implications.

## Key Strategic Considerations

1. **Consistent policy enforcement across clouds**
2. **Identity as the new perimeter**
3. **Data sovereignty and compliance**
4. **Vendor relationship management**

## Common Pitfalls

- Treating each cloud as an island
- Underinvesting in cloud-native security skills
- Ignoring the complexity cost
    `,
    date: 'Dec 20, 2025',
    readTime: '15 min read',
    categories: ['Cloud', 'Strategy'],
    featured: false,
    published: true,
    author: 'The Security Positivist',
  },
  {
    id: '6',
    title: 'AI in Security: Strategic Opportunities Beyond the Hype',
    slug: 'ai-security-strategic-opportunities',
    excerpt: 'A pragmatic look at where AI delivers real security value and where caution is warranted.',
    content: `
# AI in Security: Strategic Opportunities Beyond the Hype

AI is transforming security, but not always in the ways vendors promise. Here's a realistic view of the opportunities.

## Where AI Delivers Value Today

1. **Anomaly detection at scale**
2. **Automating routine analysis**
3. **Accelerating incident response**
4. **Improving phishing detection**

## Where to Be Cautious

- Over-relying on AI for critical decisions
- Ignoring the data quality problem
- Underestimating adversarial AI threats
    `,
    date: 'Dec 15, 2025',
    readTime: '9 min read',
    categories: ['AI', 'Strategy'],
    featured: false,
    published: true,
    author: 'The Security Positivist',
  },
];

// Helper functions for the CMS
export const getPublishedArticles = () => 
  articles.filter(a => a.published).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export const getFeaturedArticles = () => 
  articles.filter(a => a.featured && a.published);

export const getArticleBySlug = (slug: string) => 
  articles.find(a => a.slug === slug);

export const getArticlesByCategory = (category: string) =>
  articles.filter(a => a.categories.includes(category) && a.published);

export const getAllCategories = () => {
  const categories = new Set<string>();
  articles.forEach(a => a.categories.forEach(c => categories.add(c)));
  return Array.from(categories).sort();
};
