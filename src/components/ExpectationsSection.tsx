import { MessageSquare, GitBranch, Lightbulb, FileCheck2 } from 'lucide-react';

export default function ExpectationsSection() {
  const expectations = [
    {
      title: 'Clear Communication',
      description: 'Regular progress updates, immediate responses to queries, and zero confusing technical jargon. You will always know what stage your project is in.',
      icon: MessageSquare
    },
    {
      title: 'Structured Process',
      description: 'From initial discovery to wireframes, frontend build, and QA testing, each milestone has defined deliverables and agreed timelines.',
      icon: GitBranch
    },
    {
      title: 'Business-Focused Thinking',
      description: 'Your goals and revenue drivers guide the design. I build around what your target customer needs to see to take action.',
      icon: Lightbulb
    },
    {
      title: 'Transparent Scope',
      description: 'No hidden fees, no sudden scope creep, and no surprises. Every deliverable is clearly outlined and agreed upon before work begins.',
      icon: FileCheck2
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#D9D6D0]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#B88A5A] mb-3">
            Honest Client Partnership
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12] mb-4 text-balance">
            What Clients Can Expect
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B]">
            Instead of fabricated testimonials or exaggerated guarantees, here are the real professional commitments I bring to every engagement.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {expectations.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className="p-8 sm:p-10 bg-[#FFFFFF] border border-[#D9D6D0] rounded-2xl transition-all duration-300 hover:border-[#171717] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5F3EF] border border-[#D9D6D0] flex items-center justify-center text-[#B88A5A] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D9D6D0]/60 flex items-center justify-between text-xs font-mono text-[#171717]">
                  <span className="text-[#B88A5A]">● Commitment</span>
                  <span>Direct Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
