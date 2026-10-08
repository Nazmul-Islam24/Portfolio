import { Compass, ShieldCheck, Smile, Zap, Layers } from 'lucide-react';

export default function ValueSection() {
  const pillars = [
    {
      title: 'More Clarity',
      description: 'Visitors understand your services faster without deciphering industry buzzwords or searching through nested menus.',
      icon: Compass
    },
    {
      title: 'More Trust',
      description: 'A sharp, professional digital presence strengthens first impressions and reassures customers that your business is legitimate.',
      icon: ShieldCheck
    },
    {
      title: 'Better Experience',
      description: 'Clean layouts, quick load speeds, and intuitive micro-interactions allow customers to find answers with zero friction.',
      icon: Smile
    },
    {
      title: 'Stronger Action',
      description: 'Vital high-intent steps like booking consultations, calling dispatch, or requesting quotes are obvious and effortless.',
      icon: Zap
    },
    {
      title: 'Scalable Foundation',
      description: 'Built with modular React and clean code standards, allowing your digital asset to easily evolve as your company expands.',
      icon: Layers
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#D9D6D0]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#B88A5A] mb-3">
            Tangible Impact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12] mb-4 text-balance">
            The Website Is Only the Medium. <br />
            <span className="text-[#B88A5A]">The Business Goal Comes First.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B]">
            Code and design only matter when they solve a real business challenge. Here is how intentional frontend architecture creates sustainable value:
          </p>
        </div>

        {/* 5 Value Drivers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 bg-[#FFFFFF] border border-[#D9D6D0] rounded-2xl transition-all duration-300 hover:border-[#171717] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F5F3EF] border border-[#D9D6D0] flex items-center justify-center text-[#B88A5A] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#171717] tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9D6D0]/60 flex items-center gap-1.5 text-xs font-semibold text-[#171717]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B88A5A]" />
                  <span>Business Impact Driver</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
