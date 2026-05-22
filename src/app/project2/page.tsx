import React from 'react';
import Image from 'next/image';

// 35 Unique Projects Data Array for 2026 Clients
const projectsData = [
  {
    id: 1,
    title: "AI-Powered Autonomous Chat Agent",
    category: "Next.js & API Integration",
    description: "Built a custom chat interface utilizing Google Generative AI SDK with real-time streaming, advanced error handling for 404s, and automated settings dialogs for personalized user experiences.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Google Gemini API", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Automated Gold (XAU/USD) Trading Bot",
    category: "FinTech & Automation",
    description: "Developed an AI-driven trading system integrated with custom TradingView Pine Script indicators focusing on market trend, momentum, and volatility confirmation for precision trading.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    tags: ["Pine Script", "Python", "TradingView API"],
  },
  {
    id: 3,
    title: "Enterprise DR 70+ Link Building Campaign",
    category: "SEO & GEO",
    description: "Executed a high-authority white-hat backlink strategy for SaaS clients, successfully scaling their Ahrefs Domain Rating (DR) to 70+ within a strict 2-month guaranteed timeline.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["SEO", "Link Building", "Ahrefs Analytics"],
  },
  {
    id: 4,
    title: "Generative Engine Optimization (GEO) Framework",
    category: "Digital Marketing",
    description: "Designed a next-generation marketing optimization approach tailored for AI search engines like Perplexity and Gemini, boosting brand visibility in AI-generated answers.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    tags: ["GEO", "Content Strategy", "AI Optimization"],
  },
  {
    id: 5,
    title: "Fiverr Rank Accelerator Engine",
    category: "Freelance Marketing",
    description: "Developed a data-driven visual marketing and CTR optimization funnel that scaled freelance gig visibility, utilizing clean, high-impact imagery without watermarks.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["CTR Optimization", "Conversion Funnels", "Data Analytics"],
  },
  {
    id: 6,
    title: "Cinematic Nature Channel Strategy",
    category: "Social Media Strategy",
    description: "Curated end-to-end scriptwriting and algorithmic optimization for 'Wild Wonders', a premium TikTok and YouTube channel specializing in high-definition atmospheric content.",
    image: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=800&q=80",
    tags: ["TikTok Ads", "YouTube Growth", "Scriptwriting"],
  },
  {
    id: 7,
    title: "International Ads Manager Framework",
    category: "Digital Marketing",
    description: "Configured highly secure international billing frameworks on TikTok Ads Manager, successfully bypassing complex geo-location detection barriers for global targeting.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    tags: ["TikTok Ads", "Global Billing", "Proxy Routing"],
  },
  {
    id: 8,
    title: "Microscopic Biology Visual Rendering",
    category: "AI Media Generation",
    description: "Generated 8K atmospheric microscopic animations detailing high-fidelity tardigrade (water bear) locomotion, engineered specifically for science communication channels.",
    image: "data:image/jpeg;base64,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",
    tags: ["Midjourney", "8K Rendering", "Biomedical Visuals"],
  },
  {
    id: 9,
    title: "High-Performance Next.js E-Commerce Engine",
    category: "Next.js & API Integration",
    description: "Engineered a headless commerce platform with dynamic server-side rendering (SSR), sub-second page load times, and instantaneous secure checkout API systems.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Stripe API", "GraphQL"],
  },
  {
    id: 10,
    title: "Real-Time Volatility Confirmation Index",
    category: "FinTech & Automation",
    description: "Developed a custom mathematical indicator for multi-timeframe market analysis, drastically reducing false breakouts for high-volume gold market day-traders.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    tags: ["TradingView", "Technical Analysis", "PineScript"],
  },
  {
    id: 11,
    title: "SaaS Organic Traffic Explosion Scheme",
    category: "SEO & GEO",
    description: "Architected a comprehensive content velocity campaign that generated over 250k monthly organic visitors within 90 days via strategic high-DR backlink deployment.",
    image: "data:image/jpeg;base64,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",
    tags: ["SEO Metrics", "Backlinks", "Growth Hacking"],
  },
  {
    id: 12,
    title: "Atmospheric Horror Narrative Engine",
    category: "AI Media Generation",
    description: "Produced a viral cinematic video series using generative tools, maintaining flawless character composition and high visual consistency across intense plotlines.",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80",
    tags: ["Video Editing", "AI Generation", "Creative Direction"],
  },
  {
    id: 13,
    title: "Serverless Dashboard for Prop Firm Analytics",
    category: "Next.js & API Integration",
    description: "Designed a secure web portal for tracking prop firm evaluation rules, drawdowns, and scaling targets with automatic webhook alerts for live risk management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Serverless", "Webhooks"],
  },
  {
    id: 14,
    title: "Global Link-Building Marketplace",
    category: "SEO & GEO",
    description: "Built a curated platform linking premium publishers directly with digital agencies, automating quality control checks for spam scores and organic traffic metrics.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    tags: ["Marketplace", "SEO Services", "Link Building"],
  },
  {
    id: 15,
    title: "Hyper-Targeted TikTok Conversion Funnels",
    category: "Digital Marketing",
    description: "Implemented custom lookalike audience algorithms on TikTok Ads Manager, reducing CPA by 42% for multi-national digital service storefronts.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    tags: ["Paid Ads", "Conversion Rate", "TikTok Marketing"],
  },
  {
    id: 16,
    title: "Full-Stack AI Markdown Documentation Generator",
    category: "Next.js & API Integration",
    description: "A fast Next.js static site generator that auto-documents codebases by parsing repositories through LLM context windows with zero deployment lag.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Markdown", "LLM Integration"],
  },
  {
    id: 17,
    title: "Context-Aware Semantic Search Integration",
    category: "Next.js & API Integration",
    description: "Upgraded legacy site search modules to vector-based neural search architectures, drastically improving relevance scores and cross-selling capabilities.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    tags: ["Vector Search", "API Development", "Next.js"],
  },
  {
    id: 18,
    title: "Macro-Niche Domain Authority Scaler",
    category: "SEO & GEO",
    description: "Executed continuous anchor-text optimization matrices across a portfolio of 50 tech blogs, solidifying defensive search ranks against core engine updates.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["SEO Strategy", "Domain Ranking", "Core Web Vitals"],
  },
  {
    id: 19,
    title: "Automated CTR Banner Optimizer",
    category: "Digital Marketing",
    description: "A Python script that generates multi-variant service advertising images, ensuring clear typography, proper contrast metrics, and complete absence of watermarks.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    tags: ["Automation", "Visual Optimization", "A/B Testing"],
  },
  {
    id: 20,
    title: "Dynamic Multi-Tenant Blog Architecture",
    category: "Next.js & API Integration",
    description: "Developed a modern, lightning-fast CMS platform built on Next.js capable of running thousands of dynamic subdomains from a single unified codebase.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "CMS", "Multi-Tenancy"],
  },
  {
    id: 21,
    title: "AI Response Visibility Auditor (GEO)",
    category: "SEO & GEO",
    description: "An innovative diagnostic tool mapping how frequently brand names appear inside natural language model recommendations across specific high-value keywords.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    tags: ["GEO", "AI Auditing", "Data Science"],
  },
  {
    id: 22,
    title: "Trend-Following Momentum Oscillator",
    category: "FinTech & Automation",
    description: "Engineered an overlay script tracking asset strength in institutional trade blocks, optimized exclusively for precision scalping on XAU/USD gold markets.",
    image: "https://www.t4trade.com/wp-content/uploads/2023/04/technical-indcators-trend-momentum.png",
    tags: ["PineScript", "Gold Trading", "Market Indicators"],
  },
  {
    id: 23,
    title: "Immersive Space Transition Render Sequences",
    category: "AI Media Generation",
    description: "Produced high-resolution multi-dimensional spatial visual packages utilized in international science documentary editing workflows.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["VFX Rendering", "Space Media", "AI Generation"],
  },
  {
    id: 24,
    title: "Secure Enterprise Webhook Router",
    category: "Next.js & API Integration",
    description: "An ultra-secure, low-latency API proxy server routing millions of financial and transactional user event logs per second with zero message loss.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["API Routing", "Security", "Backend Systems"],
  },
  {
    id: 25,
    title: "Freelance Agency Scale Kit",
    category: "Digital Marketing",
    description: "Designed a systemic operational blueprint that helped automated outreach structures scale high-paying corporate SEO and development consultation contracts.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    tags: ["Agency Scaling", "B2B Marketing", "Lead Generation"],
  },
  {
    id: 26,
    title: "Automated Schema Markup Injector",
    category: "SEO & GEO",
    description: "An automated plugin injecting complex structured rich snippets directly into application code, helping search platforms process web nodes instantly.",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=800&q=80",
    tags: ["Structured Data", "SEO Automation", "JavaScript"],
  },
  {
    id: 27,
    title: "Next-Gen Chatbot Dialog Component",
    category: "Next.js & API Integration",
    description: "A highly reusable Tailwind CSS modular UI package built for modern web frameworks, facilitating natural, adaptive human-computer conversation flows.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
    tags: ["UI/UX", "Next.js Components", "TailwindCSS"],
  },
  {
    id: 28,
    title: "High-Traffic Content Silo Matrix",
    category: "SEO & GEO",
    description: "Re-architected the internal linking network of an enterprise tech news platform, driving critical crawl budget efficiencies across massive directories.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80",
    tags: ["Content Architecture", "SEO Matrix", "Crawl Budget"],
  },
  {
    id: 29,
    title: "Algorithmic Ad Spacing Engine",
    category: "Digital Marketing",
    description: "A programmatic ad layout controller that optimizes the balance between user retention metrics and publisher display monetization earnings.",
    image: "data:image/jpeg;base64,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",
    tags: ["AdTech", "UX Optimization", "Monetization"],
  },
  {
    id: 30,
    title: "High-Frequency Trade Alert Relay",
    category: "FinTech & Automation",
    description: "An ultra-low latency push alert service connecting institutional terminal indicator logs directly to remote communication webhooks.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    tags: ["Automation", "WebSockets", "FinTech"],
  },
  {
    id: 31,
    title: "Clean Design High-Conversion Landing Pages",
    category: "Next.js & API Integration",
    description: "Crafted minimal, distraction-free modern responsive layouts engineered explicitly to maximize lead generation conversions without visual fatigue.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Web Design", "Conversion Rate"],
  },
  {
    id: 32,
    title: "Competitor Backlink Leak Analyzer",
    category: "SEO & GEO",
    description: "A proprietary scripting infrastructure scanning competitor digital assets hourly to pinpoint and claim broken outbound high-authority link opportunities.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    tags: ["Competitor Analysis", "SEO Scripting", "Link Building"],
  },
  {
    id: 33,
    title: "Premium Digital Brand Asset Kit",
    category: "Digital Marketing",
    description: "Curated a series of highly professional visual media guidelines for tech startups, highlighting clear textual hierarchies with no busy watermarks.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    tags: ["Branding", "Visual Identity", "Marketing Materials"],
  },
  {
    id: 34,
    title: "Edge-Cached API Middleware Layer",
    category: "Next.js & API Integration",
    description: "Developed Vercel Edge Runtime compatible middleware capable of checking user routing parameters and authenticating access codes instantaneously.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    tags: ["Edge Runtime", "Next.js Middleware", "API Security"],
  },
  {
    id: 35,
    title: "Global Search Intelligence Engine",
    category: "SEO & GEO",
    description: "An enterprise intelligence portal mapping search intent vectors across Google and upcoming AI search hubs simultaneously in real-time.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["SEO Tools", "GEO Analysis", "Data Platforms"],
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
      
      {/* 2026 Kamal ka Background: High-End Cybernetic Ambient Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[180px]" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-violet-500/5 blur-[130px]" />
        {/* Subtle Cyber Grid Line Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/50 px-4 py-1.5 rounded-full border border-cyan-800/30">
            Engineered Excellence • 2026 Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Production-Grade Case Studies
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
            A comprehensive exhibition of 35 core projects spanning advanced Next.js development, Next-Gen Generative Engine Optimization (GEO), and proprietary financial trading frameworks.
          </p>
        </div>

        {/* Dynamic Project Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <article 
              key={project.id}
              className="group bg-slate-900/40 border border-slate-800/60 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col backdrop-blur-md shadow-2xl hover:shadow-cyan-950/20"
            >
              {/* Premium Project Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out brightness-95 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-medium tracking-wide bg-slate-950/80 backdrop-blur-md text-cyan-400 px-3 py-1 rounded-md border border-slate-800">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed flex-grow line-clamp-4">
                  {project.description}
                </p>

                {/* Tags Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] bg-slate-950/60 text-slate-400 px-2.5 py-1 rounded border border-slate-800/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Page Footer Note */}
        <div className="mt-24 text-center border-t border-slate-900 pt-8">
          <p className="text-xs text-slate-500">
            © 2026 Core Portfolio System. All Rights Reserved. Built with Next.js Architecture.
          </p>
        </div>

      </div>
    </div>
  );
}