import { useState } from 'react';
import { SKILLS_LIST } from '../data/projectsData';

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#D9D6D0]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#B88A5A] mb-3">
            Technical Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12] mb-4 text-balance">
            Built With Modern Frontend Technology
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B]">
            Clean, performant, and standard-compliant technologies engineered for speed, maintainability, and longevity.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {SKILLS_LIST.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`relative p-6 sm:p-7 bg-[#FFFFFF] border rounded-2xl transition-all duration-300 cursor-default flex flex-col justify-between ${
                  isHovered
                    ? 'border-[#171717] shadow-[0_8px_30px_rgba(0,0,0,0.06)] -translate-y-1'
                    : 'border-[#D9D6D0]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B6B6B]">
                      {skill.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#B88A5A]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    {skill.tooltip}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D9D6D0]/60 flex items-center justify-between text-[11px] font-mono text-[#171717]">
                  <span>Standard</span>
                  <span className="text-[#B88A5A]">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Philosophy Note */}
        <div className="mt-12 p-6 bg-[#FAF8F5] border border-[#D9D6D0] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#6B6B6B]">
          <div>
            <span className="font-semibold text-[#171717]">Architecture Principle: </span>
            Zero bloat, high Core Web Vitals compliance, responsive across every screen dimension, and semantic markup for maximum search indexing.
          </div>
          <span className="font-mono text-xs font-bold text-[#171717] whitespace-nowrap">
            100% Modern Standards
          </span>
        </div>
      </div>
    </section>
  );
}
