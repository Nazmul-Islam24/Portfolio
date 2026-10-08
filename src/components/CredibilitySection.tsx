import { PROJECTS } from '../data/projectsData';

export default function CredibilitySection() {
  const activeProjects = PROJECTS.filter((p) => p.status === 'active');
  const activeIndustries = activeProjects.map((p) => p.industry).join(', ');

  const stats = [
    {
      number: String(activeProjects.length),
      label: 'Selected Niche Projects',
      detail: activeIndustries || 'Tailored specifically to tackle real-world customer conversion bottlenecks.'
    },
    {
      number: '100%',
      label: 'Responsive Architecture',
      detail: 'Meticulously crafted for iOS, Android, tablet, and widescreen desktop experiences.'
    },
    {
      number: '< 1s',
      label: 'Core Load Target',
      detail: 'High Core Web Vitals performance with clean semantic code and zero unnecessary script bloat.'
    },
    {
      number: '100%',
      label: 'Conversion-First UX',
      detail: 'Strategic booking, consultation, and intake funnels engineered directly for business ROI.'
    }
  ];

  return (
    <section className="bg-[#111111] text-[#F5F3EF] py-20 md:py-28 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#B88A5A] mb-3">
            Proof of Work & Discipline
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 text-balance">
            Engineered With Professional Rigor.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Every project in this portfolio is an end-to-end demonstration of how information architecture, clean code, and business thinking work together.
          </p>
        </div>

        {/* 4 Quantitative Rigor Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-8 bg-[#181818] border border-white/10 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-mono font-extrabold text-white tracking-tight block mb-4">
                  {stat.number}
                </span>
                <h3 className="text-base font-bold text-[#F5F3EF] mb-2 leading-snug">
                  {stat.label}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {stat.detail}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-[#B88A5A]">
                <span>✓ Verified Specification</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
