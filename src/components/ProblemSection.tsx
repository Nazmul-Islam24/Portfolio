import { Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export default function ProblemSection() {
  const cards = [
    {
      number: '01',
      title: 'First Impression',
      question: 'Does the website immediately communicate credibility?',
      detail: 'Visitors decide whether to trust a company in milliseconds. Outdated layouts, slow loading, and inconsistent styling signal amateurism before a single word is read.',
      icon: Sparkles
    },
    {
      number: '02',
      title: 'Clarity',
      question: 'Can visitors quickly understand what you offer?',
      detail: 'If a potential client has to hunt through walls of text or vague slogans to find out what service is provided, they hit back and click a competitor.',
      icon: Compass
    },
    {
      number: '03',
      title: 'Action',
      question: 'Is the next step obvious?',
      detail: 'A website without clear, context-aware call-to-actions leaves the visitor stranded. Whether it is an appointment, a quote, or a phone call, the pathway must be unmistakable.',
      icon: CheckCircle2
    }
  ];
// #F5F3EF
  return (
    <section className="py-24 md:py-25 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#B88A5A] mb-3">
            The Reality of Most Websites
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12] mb-6 text-balance">
            A Website Should Do More Than Look Good.
          </h2>
          <div className="space-y-2 text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
            <p>A potential customer can visit a website and leave within seconds.</p>
            <p className="font-semibold text-[#171717]">Not because the business isn't good.</p>
            <p className="text-[#171717]/90">
              But because the website didn't make the value clear enough.
            </p>
          </div>
        </div>

        {/* 3 Core Problem / Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative bg-[#eeeeee] border border-[#D9D6D0] rounded-2xl p-8 transition-all duration-300 hover:border-[#171717] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-mono font-bold text-[#B88A5A]">
                      {card.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F5F3EF] border border-[#D9D6D0] flex items-center justify-center text-[#171717] group-hover:border-[#B88A5A] transition-colors">
                      <Icon className="w-5 h-5 text-[#B88A5A]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#171717] tracking-tight mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#171717] mb-4 leading-snug">
                    "{card.question}"
                  </p>

                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-normal">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D9D6D0]/60 flex items-center gap-2 text-xs font-semibold text-[#B88A5A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B88A5A]" />
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
