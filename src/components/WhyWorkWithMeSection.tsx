import { Briefcase, MessageSquare, Compass, Code } from 'lucide-react';

export default function WhyWorkWithMeSection() {
  const reasons = [
    {
      title: 'Business-first thinking',
      description: 'I look beyond the interface and consider what the website needs to accomplish for the business. Every component is tied to customer psychology and conversion.',
      icon: Briefcase
    },
    {
      title: 'Clear communication',
      description: 'You always know what is being worked on, what is needed from you, and what milestone is coming next. Zero ambiguity, transparent timelines, and prompt updates.',
      icon: MessageSquare
    },
    {
      title: 'Purposeful design',
      description: 'No decorative fluff or arbitrary animation gimmickry. Every important section, button, and headline has a clear reason to exist on the screen.',
      icon: Compass
    },
    {
      title: 'Modern development',
      description: 'Responsive, maintainable frontend experiences built with modern technologies. Clean code, sub-second load times, and flawless mobile performance.',
      icon: Code
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#D9D6D0]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#B88A5A] mb-3">
            Collaboration Standards
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12] mb-4 text-balance">
            Why Work With Me?
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B]">
            A partnership built on technical rigor, transparent execution, and genuine commercial focus.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="p-8 sm:p-10 bg-[#FFFFFF] border border-[#D9D6D0] rounded-2xl transition-all duration-300 hover:border-[#171717] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5F3EF] border border-[#D9D6D0] flex items-center justify-center text-[#B88A5A] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#171717] tracking-tight mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D9D6D0]/60 flex items-center justify-between text-xs font-mono text-[#171717]">
                  <span className="text-[#B88A5A]">● Priority</span>
                  <span>Client Experience</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
