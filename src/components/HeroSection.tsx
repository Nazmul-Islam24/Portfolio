import { ArrowRight, ArrowUpRight } from 'lucide-react';
import nazImage from '../assets/images/naz.avif';
import HeroThreeAnimation from './HeroThreeAnimation';

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
    <section
      id="hero"
      className="relative pt-8 pb-10 sm:pt-16 sm:pb-14 lg:pt-24 lg:pb-18 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-[#0A0C10]"
      aria-label="Nazmul Patwary - Frontend Developer & Web Consultant"
    >
      {/* 24/7 Dynamic 3D Three.js Background Animation */}
      <HeroThreeAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">

        {/* =========================================================================
            MOBILE & TABLET VIEW (< lg):
            Image on TOP (centered, 2X larger, lifted higher up), with kicker attached,
            followed by an airy gap down to the headline, action buttons & 3 points
            ========================================================================= */}
        <div className="flex flex-col items-center text-center lg:hidden w-full max-w-2xl mx-auto">
          
          {/* Top Portrait Container (Centered, 2X larger, lifted higher up with safe left/right margins) */}
          <div className="relative w-full flex flex-col items-center justify-end pt-0 pb-0">
            {/* Ambient golden glow scaled with image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-[#E5A855]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Cutout Image with bottom dark gradient blend (2X larger presence with clean side gaps) */}
            <div className="relative w-[86vw] xs:w-[82vw] sm:w-[380px] max-w-[420px] mx-auto select-none">
              <img
                src={nazImage}
                alt="Nazmul Patwary - Frontend Developer and Web Consultant"
                className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.7)]"
                loading="eager"
                fetchPriority="high"
              />
              
              {/* Gradient mask blending the bottom of the arms/torso into the background */}
              <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/85 to-transparent pointer-events-none" />
            </div>

            {/* Position Kicker Badge: attached with the image, sized up to match the 2X image */}
            <div className="relative z-20 mt-[-10px] sm:mt-[-14px]">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#E5A855] bg-white/[0.06] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A855]" />
                <span>Frontend Developer & Consultant</span>
              </div>
            </div>
          </div>

          {/* Text Content: Clear deliberate gap after kicker, flows smoothly downwards */}
          <div className="flex flex-col items-center text-center w-full px-2 mt-7 xs:mt-8 sm:mt-9 relative z-20">

            {/* Main Headline with Custom Radiant Gradient */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.14] mb-3 sm:mb-4 text-balance max-w-xl">
              <span className="bg-gradient-to-r from-white via-amber-100 to-[#E5A855] bg-clip-text text-transparent">
                I Build Digital Experiences That Help Businesses Grow.
              </span>
            </h1>

            {/* Paragraph for tablet screens (sm+), hidden on tiny mobile for neatness */}
            <p className="hidden sm:block text-sm sm:text-base text-neutral-300 leading-relaxed font-normal mb-5 max-w-lg text-balance">
              I design and develop modern, responsive websites that make businesses look credible, communicate value instantly, and turn online attention into paying clients.
            </p>

            {/* Action Buttons: View Work & Let's Talk */}
            <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full pt-1">
              <a
                href="#work"
                onClick={scrollToWork}
                className="group inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3.5 bg-white text-neutral-950 text-xs sm:text-sm font-bold rounded-lg hover:bg-neutral-200 transition-all duration-200 shadow-[0_4px_20px_rgba(255,255,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A855] cursor-pointer"
              >
                <span>View Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5A855] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>

              <button
                onClick={onOpenContact}
                className="group inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3.5 bg-white/5 border border-white/20 text-white text-xs sm:text-sm font-semibold rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A855] cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </button>
            </div>

            {/* 3 Micro-proof Points (Visible on mobile as requested) */}
            <div className="mt-6 pt-4 border-t border-white/10 w-full flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-neutral-400 font-medium">
              <span className="flex items-center gap-1"><span className="text-[#E5A855]">✓</span> Sub-second loading</span>
              <span className="flex items-center gap-1"><span className="text-[#E5A855]">✓</span> Conversion-focused UX</span>
              <span className="flex items-center gap-1"><span className="text-[#E5A855]">✓</span> Direct collaboration</span>
            </div>
          </div>
        </div>


        {/* =========================================================================
            DESKTOP VIEW (lg:flex):
            Classic 2-Column Layout (Text Left, Portrait Right with new cutout image)
            ========================================================================= */}
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
          
          {/* Left Column: Text & Buttons */}
          <div className="lg:w-[58%] xl:w-[60%] flex flex-col items-start text-left">
            
            {/* Position Kicker */}
            <div className="inline-flex items-center gap-2 mb-3.5 text-xs uppercase tracking-widest font-semibold text-[#E5A855] bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A855]" />
              <span>Frontend Developer & Consultant</span>
            </div>

            {/* Main Headline with Custom Radiant Gradient */}
            <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] mb-5 text-balance">
              <span className="bg-gradient-to-r from-white via-amber-100 to-[#E5A855] bg-clip-text text-transparent">
                I Build Digital Experiences That Help Businesses Grow.
              </span>
            </h1>

            {/* Paragraph Description */}
            <div className="mb-8 max-w-xl">
              <p className="text-base xl:text-lg text-neutral-300 leading-relaxed font-normal">
                I design and develop modern, responsive websites that make businesses look credible, communicate value instantly, and turn online attention into paying clients.
              </p>
            </div>

            {/* Action Buttons: View Work & Let's Talk */}
            <div className="flex items-center gap-4 w-full">
              <a
                href="#work"
                onClick={scrollToWork}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-neutral-950 text-sm font-bold rounded-lg hover:bg-neutral-200 transition-all duration-200 shadow-[0_4px_20px_rgba(255,255,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A855] cursor-pointer"
              >
                <span>View Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5A855] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>

              <button
                onClick={onOpenContact}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 border border-white/20 text-white text-sm font-semibold rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A855] cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </button>
            </div>

            {/* Quick Micro-Proofs */}
            <div className="mt-8 pt-5 border-t border-white/10 w-full flex items-center gap-x-6 text-xs text-neutral-400 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="text-[#E5A855]">✓</span>
                <span className="text-neutral-200">Sub-second loading</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#E5A855]">✓</span>
                <span className="text-neutral-200">Conversion-focused UX</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#E5A855]">✓</span>
                <span className="text-neutral-200">Direct collaboration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Nazmul's Cutout Portrait (Zero dark background, zero box/card, completely transparent) */}
          <div className="lg:w-[42%] xl:w-[40%] flex justify-end items-end relative">
            <div className="relative w-full max-w-[380px] xl:max-w-[430px] flex flex-col items-center">
              
              {/* Pristine Cutout Image - directly on the canvas without any dark background or shadow box */}
              <div className="relative w-full flex justify-center items-end select-none overflow-hidden">
                <img
                  src={nazImage}
                  alt="Nazmul Patwary - Frontend Developer and Web Consultant"
                  className="w-full h-auto max-h-[510px] object-contain object-bottom pointer-events-auto transition-transform duration-500 hover:scale-[1.01]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle soft dark gradient overlay from bottom up to mid-shirt/hands (Desktop only) */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/35 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Credibility Strip */}
        <div className="mt-8 sm:mt-12 lg:mt-14 pt-3 sm:pt-4 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 sm:gap-x-6 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-400 text-center">
            <span className="text-neutral-200">Industry-Focused Niche Solutions</span>
            <span className="text-[#E5A855]" aria-hidden="true">•</span>
            <span className="text-neutral-200">Modern Frontend Engineering</span>
            <span className="text-[#E5A855]" aria-hidden="true">•</span>
            <span className="text-neutral-200">Conversion-Driven UX</span>
          </div>
        </div>

      </div>
    </section>
  );
}
