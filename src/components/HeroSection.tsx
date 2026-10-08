import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import nazmul from '../assets/images/nazmul.avif'

interface HeroSectionProps {
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle noise / ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B88A5A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value-First Headline & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Position Kicker */}
            <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-widest font-semibold text-[#B88A5A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88A5A]" />
              <span>Frontend Developer / Web Consultant</span>
            </div>

            {/* Massive Heading with balanced wrapping */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.08] mb-6 text-balance">
              I Build Digital Experiences <br className="hidden sm:block" />
              That Help Businesses Grow.
            </h1>

            {/* Clear Value-Driven Narrative */}
            <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-xl mb-9 font-normal">
              I design and develop modern, responsive websites that make businesses look credible, communicate their value clearly, and turn more visitors into meaningful actions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#work"
                onClick={scrollToWork}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#171717] text-[#F5F3EF] text-sm font-semibold rounded-lg hover:bg-black transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A5A] cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88A5A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>

              <button
                onClick={onOpenContact}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FFFFFF] text-[#171717] border border-[#D9D6D0] text-sm font-semibold rounded-lg hover:border-[#171717] hover:bg-[#FAF8F5] transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A5A] cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 text-[#6B6B6B] group-hover:text-[#171717] group-hover:translate-x-1 transition-all duration-200" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Portrait with floating purposeful cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer decorative hairline frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D9D6D0] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(0,0,0,0.06)] group">
                <img
                  src={nazmul}
                  alt="Nazmul - Frontend Developer and Web Consultant"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to relative asset path if nazmul isn't direct
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('src/assets/images')) {
                      target.src = nazmul;
                    }
                  }}
                />

                {/* Subtle scrim at bottom for photo depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Quiet badge inside the photo bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs px-3 py-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                  <span className="font-medium tracking-wide">Nazmul · Web Consultant</span>
                  <span className="text-[#B88A5A] flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Work
                  </span>
                </div>
              </div>

              {/* Floating Card 1: Business-First Web Experience */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#FFFFFF] border border-[#D9D6D0] px-4 py-3 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] z-20 flex items-center gap-2.5 max-w-[210px] animate-in fade-in zoom-in-95 duration-500">
                <div className="w-8 h-8 rounded-lg bg-[#F5F3EF] border border-[#D9D6D0] flex items-center justify-center shrink-0 text-[#B88A5A]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#B88A5A]">Focus</p>
                  <p className="text-xs font-semibold text-[#171717] leading-tight">Business-First Web Experience</p>
                </div>
              </div>

              {/* Floating Card 2: Modern Frontend Stack */}
              <div className="absolute -bottom-4 -right-3 sm:-right-6 bg-[#FFFFFF] border border-[#D9D6D0] px-4 py-3 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] z-20 max-w-[240px] animate-in fade-in zoom-in-95 duration-700">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B6B6B] mb-1">Modern Stack</p>
                <p className="text-xs font-semibold text-[#171717] tracking-tight">
                  HTML <span className="text-[#B88A5A]">·</span> CSS <span className="text-[#B88A5A]">·</span> JS <span className="text-[#B88A5A]">·</span> React <span className="text-[#B88A5A]">·</span> Next.js
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 01 Bottom: Transparent Credibility Line */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#D9D6D0]/80">
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#6B6B6B] text-center">
            <span className="text-[#171717]">Industry-Focused Niche Projects</span>
            <span className="text-[#B88A5A]" aria-hidden="true">•</span>
            <span className="text-[#171717]">Modern Frontend Development</span>
            <span className="text-[#B88A5A]" aria-hidden="true">•</span>
            <span className="text-[#171717]">Business-First Web Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}
