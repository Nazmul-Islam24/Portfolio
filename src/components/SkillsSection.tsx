import { useState } from 'react';

interface TechItem {
  name: string;
  category: string;
  tooltip: string;
  brandColor: string;
  icon: (color: string) => React.ReactNode;
}

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const techStack: TechItem[] = [
    {
      name: 'HTML5',
      category: 'Semantic Markup & SEO',
      tooltip: 'Accessible landmarks, clean microdata, and schema foundation for search indexing.',
      brandColor: '#E44D26',
      icon: (color) => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" fill="none" aria-hidden="true">
          <path d="M4 3l1.6 18 6.4 1.8 6.4-1.8L20 3H4z" fill={color} />
          <path d="M12 4.8v16.1l4.8-1.4 1.2-13.3H12z" fill="#F16529" />
          <path d="M12 7.8H8.2l.2 2.5H12v2.5H8.6l.4 4.5 3 .9v2.5l-5.3-1.5-.7-8.9h6V7.8z" fill="#EBEBEB" />
          <path d="M12 7.8h3.8l-.4 3.7h-3.4v-2.5h3.2l-.2 1.3h-3v2.5h2.8l-.3 3.6-2.5.7v2.5l4.5-1.3.6-6.7h.3l.4-4.5H12V7.8z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: 'CSS3',
      category: 'Styling Architecture',
      tooltip: 'Modern responsive layout systems, custom properties, and smooth GPU-accelerated transitions.',
      brandColor: '#264DE4',
      icon: (color) => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" fill="none" aria-hidden="true">
          <path d="M4 3l1.6 18 6.4 1.8 6.4-1.8L20 3H4z" fill={color} />
          <path d="M12 4.8v16.1l4.8-1.4 1.2-13.3H12z" fill="#2965F1" />
          <path d="M12 7.8H8.2l.2 2.5H12v2.5H8.6l.4 4.5 3 .9v2.5l-5.3-1.5-.7-8.9h6V7.8z" fill="#EBEBEB" />
          <path d="M12 7.8h3.8l-.4 3.7h-3.4v-2.5h3.2l-.2 1.3h-3v2.5h2.8l-.3 3.6-2.5.7v2.5l4.5-1.3.6-6.7h.3l.4-4.5H12V7.8z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: 'Core Logic & APIs',
      tooltip: 'Modern ESNext features, asynchronous data pipelines, and optimized DOM manipulation.',
      brandColor: '#F7DF1E',
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 rounded-md overflow-hidden" aria-hidden="true">
          <rect width="24" height="24" fill="#F7DF1E" />
          <path d="M7.5 18.5c.8.5 1.7.8 2.6.8 1.4 0 2.2-.7 2.2-2.1v-7.1H10.1v7.1c0 .6-.3.9-.8.9-.4 0-.8-.2-1.1-.4l-.7 1.3zm6.6-.2c1 .6 2.2.9 3.4.9 2.5 0 4-1.3 4-3.5 0-2-1.3-3-3.1-3.8-.9-.4-1.5-.7-1.5-1.3 0-.5.4-.9 1.2-.9.8 0 1.5.3 2 .7l.8-1.4c-.8-.5-1.8-.8-2.8-.8-2.4 0-3.8 1.4-3.8 3.3 0 1.9 1.2 2.9 2.9 3.6 1 .4 1.7.8 1.7 1.5 0 .6-.5 1-1.4 1-.9 0-1.8-.4-2.5-.9l-.9 1.4z" fill="#000000" />
        </svg>
      )
    },
    {
      name: 'TypeScript',
      category: 'Type Safety',
      tooltip: 'Strict type safety, robust interface contracts, and bug prevention before deployment.',
      brandColor: '#3178C6',
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 rounded-md overflow-hidden" aria-hidden="true">
          <rect width="24" height="24" fill="#3178C6" />
          <path d="M5.5 8h6v2h-2v9h-2v-9h-2V8zm7.5 7.5c.8.5 1.7.8 2.6.8 1.4 0 2.1-.6 2.1-1.6 0-1-.8-1.5-2.2-2.1-1.9-.8-3.1-1.6-3.1-3.3 0-1.8 1.4-3.1 3.5-3.1 1.1 0 2.1.3 2.9.8l-.8 1.8c-.7-.4-1.4-.6-2.1-.6-1 0-1.6.5-1.6 1.3 0 .8.7 1.3 2 1.8 2 .8 3.3 1.7 3.3 3.6 0 2-1.5 3.3-4.1 3.3-1.2 0-2.4-.3-3.3-.9l.8-1.8z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: 'React',
      category: 'Component UI',
      tooltip: 'Component-driven reactive architectures, custom hooks, and high-performance render cycles.',
      brandColor: '#61DAFB',
      icon: (color) => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" fill="none" stroke={color} strokeWidth="1.5" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill={color} />
        </svg>
      )
    },
    {
      name: 'Next.js',
      category: 'Production Framework',
      tooltip: 'Server components, dynamic routes, automated asset compression, and instant page routing.',
      brandColor: '#FFFFFF',
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 rounded-full" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#FFFFFF" />
          <path d="M8.5 7.5v9h2.2v-5.2l5.7 6.2c.4-.3.8-.7 1.2-1.1l-6.9-7.5H8.5zm6.8 0v5.8l2.2 2.4V7.5h-2.2z" fill="#000000" />
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      category: 'Design Systems',
      tooltip: 'Design token governance, responsive breakpoints, and ultra-light production CSS bundles.',
      brandColor: '#38BDF8',
      icon: (color) => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" fill={color} aria-hidden="true">
          <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.7 1.2 1.2 2.6 2.7 5.5 2.7 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.7C16.3 7.5 14.9 6 12 6zm-6 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.7 1.2 1.2 2.6 2.7 5.5 2.7 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.7C10.3 13.5 8.9 12 6 12z" />
        </svg>
      )
    },
    {
      name: 'Git & GitHub',
      category: 'Version Control',
      tooltip: 'Atomic commits, git workflows, automated CI/CD deployments, and codebase integrity.',
      brandColor: '#FFFFFF',
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" fill="#FFFFFF" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-18 md:py-24 bg-[#0D0F16] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#E5A855] mb-2 sm:mb-3">
            Technical Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-3 sm:mb-4 text-balance">
            Built With Modern Frontend Technology
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Clean, performant, and standard-compliant technologies engineered for lightning-fast speeds, maintainability, and longevity.
          </p>
        </div>

        {/* 2-Columns on Mobile (grid-cols-2), 4 on Desktop (md:grid-cols-4), Zero overflow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {techStack.map((tech) => {
            const isHovered = hoveredSkill === tech.name;
            return (
              <div
                key={tech.name}
                onMouseEnter={() => setHoveredSkill(tech.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`relative p-3.5 sm:p-7 bg-[#131520] border rounded-xl sm:rounded-2xl transition-all duration-300 cursor-default flex flex-col justify-between ${
                  isHovered
                    ? 'border-[#E5A855] shadow-[0_12px_36px_rgba(229,168,85,0.12)] -translate-y-1'
                    : 'border-white/10'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-3 sm:mb-5">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 sm:p-2">
                      {tech.icon(tech.brandColor)}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                      Standard
                    </span>
                  </div>

                  <h3 className="text-base sm:text-2xl font-bold text-white tracking-tight mb-1 truncate">
                    {tech.name}
                  </h3>

                  <p className="text-[11px] sm:text-xs font-semibold text-[#E5A855] mb-2 sm:mb-2.5 truncate">
                    {tech.category}
                  </p>

                  {/* Paragraph hidden on mobile as instructed to keep cards compact & prevent overflow */}
                  <p className="hidden sm:block text-xs text-neutral-400 leading-relaxed">
                    {tech.tooltip}
                  </p>
                </div>

                <div className="mt-3 sm:mt-6 pt-2 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono">
                  <span className="text-neutral-500 hidden sm:inline">Engineered for</span>
                  <span className="font-semibold text-neutral-300 text-[10px] sm:text-xs">High Performance</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Philosophy Note */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-[#131520] border border-white/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-neutral-300">
          <div>
            <span className="font-semibold text-white">Engineering Principle: </span>
            Zero bloat, 100% Core Web Vitals compliance, responsive across every screen dimension, and semantic markup for maximum search indexing.
          </div>
          <span className="font-mono text-xs font-bold text-[#E5A855] whitespace-nowrap bg-white/5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/10">
            100% Modern Standards
          </span>
        </div>
      </div>
    </section>
  );
}
