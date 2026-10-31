import { Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export default function ProblemSection() {
  const cards = [
    {
      number: '01',
      title: 'First Impression',
      question: 'Does your website immediately communicate credibility?',
      detail: 'Visitors decide whether to trust a company in milliseconds. Outdated layouts, slow loading speeds, and disjointed typography signal amateurism before a single word is read.',
      icon: Sparkles
    },
    {
      number: '02',
      title: 'Value Clarity',
      question: 'Can visitors quickly understand what you offer?',
      detail: 'If a potential client has to hunt through walls of text or vague corporate slogans to find out what service is provided, they leave and contact your competitor.',
      icon: Compass
    },
    {
      number: '03',
      title: 'Definite Action',
      question: 'Is the next step obvious and effortless?',
      detail: 'A website without clear, context-aware call-to-actions leaves the visitor stranded. Whether it is an appointment booking, quote request, or phone call, the pathway must be unmistakable.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-15 md:py-20 bg-[#0D0F16] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#E5A855] mb-3">
            The Reality of Most Websites
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5 text-balance">
            A Website Should Do More Than Look Pretty.
          </h2>
          <div className="space-y-2 text-base sm:text-lg text-neutral-300 leading-relaxed">
            <p>A potential customer visits a website and leaves within seconds.</p>
            <p className="font-semibold text-white">Not because the business isn't exceptional.</p>
            <p className="text-neutral-400">
              But because the digital presence didn't make the value and trust immediately obvious.
            </p>
          </div>
        </div>

        {/* 3 Core Problem / Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative bg-[#131520] border border-white/10 rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:border-[#E5A855]/60 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#E5A855] bg-[#E5A855]/10 px-2 py-0.5 rounded border border-[#E5A855]/20">
                      PHASE {card.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5A855] group-hover:border-[#E5A855]/50 transition-colors">
                      <Icon className="w-5 h-5 text-[#E5A855]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm font-semibold text-neutral-200 mb-3 leading-snug">
                    "{card.question}"
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#E5A855]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A855]" />
                  <span>Solved in frontend architecture</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
