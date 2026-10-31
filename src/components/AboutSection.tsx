import { ArrowUpRight, MapPin, Globe, GraduationCap, Linkedin, Instagram, Facebook, Github } from 'lucide-react';
import nazmul from '../assets/images/naz.png';
import me from '../assets/images/naz.png';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <section id="about" className="py-18 md:py-24 bg-[#0A0C10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Nazmul's Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E5A855]/20 via-[#E5A855]/5 to-transparent rounded-3xl blur-xl pointer-events-none" />

              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-[#131520] shadow-[0_16px_40px_rgba(0,0,0,0.6)] group relative">
                <img
                  src={me}
                  alt="Nazmul Patwary - Frontend Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('src/assets/images')) {
                      target.src = nazmul;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Offset Card */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#131520] border border-white/15 p-3.5 sm:p-4 rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.7)] max-w-[210px]">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Globe className="w-3.5 h-3.5 text-[#E5A855]" />
                  <span>Remote Worldwide</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                  Collaborating seamlessly across global client time zones.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[#E5A855] mb-2 sm:mb-3">
                About The Developer
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-4 sm:mb-5">
                Nazmul Patwary
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-neutral-300 leading-relaxed">
                <p className="text-white font-medium text-base sm:text-lg leading-snug">
                  I'm Nazmul, a Frontend Developer and Web Consultant focused on building modern digital experiences that turn visitors into clients.
                </p>
                <p>
                  I combine modern frontend engineering, refined aesthetic design, and commercial conversion strategy to create websites that are not merely pretty, but commercially valuable.
                </p>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  Many developers treat client projects as simple code checklists. I approach each project as a high-stakes business investment: researching who your audience is, addressing customer psychology, and engineering an interface that builds immediate trust and closes deals.
                </p>
              </div>
            </div>

            {/* Credential Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 sm:p-4 bg-[#131520] border border-white/10 rounded-xl flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#E5A855] shrink-0" />
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">Location</p>
                  <p className="text-xs font-semibold text-white">Based in Bangladesh · Global Delivery</p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 bg-[#131520] border border-white/10 rounded-xl flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#E5A855] shrink-0" />
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">Education</p>
                  <p className="text-xs font-semibold text-white">Computer Science & Engineering</p>
                </div>
              </div>
            </div>

            {/* Actions & 4 Social Channels in exact order */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-neutral-950 font-bold text-xs sm:text-sm rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E5A855]" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono font-semibold uppercase text-neutral-300 pt-1">
                {/* 1. LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nazmul-islam-0b73003a7/?isSelfProfile=true"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:border-white hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#E5A855]" />
                  <span>LinkedIn</span>
                </a>

                {/* 2. Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:border-white hover:bg-white/10 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E5A855]" />
                  <span>Instagram</span>
                </a>

                {/* 3. Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:border-white hover:bg-white/10 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#E5A855]" />
                  <span>Facebook</span>
                </a>

                {/* 4. GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:border-white hover:bg-white/10 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#E5A855]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
