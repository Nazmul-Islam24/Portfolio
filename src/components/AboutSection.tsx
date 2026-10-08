import { ArrowUpRight, MapPin, Globe, GraduationCap } from 'lucide-react';
import nazmul from '../assets/images/nazmul.avif'
import me from '../assets/images/Me.avif'

interface AboutSectionProps {
  onOpenContact: () => void;
}

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#D9D6D0]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Nazmul's Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px]">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#D9D6D0] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(0,0,0,0.06)] group">
                <img
                  src={me}
                  alt="Nazmul"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('src/assets/images')) {
                      target.src = nazmul;
                    }
                  }}
                />
              </div>

              {/* Bottom Offset Card */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#FFFFFF] border border-[#D9D6D0] p-4 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-w-[220px]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]">
                  <Globe className="w-3.5 h-3.5 text-[#B88A5A]" />
                  <span>Remote Worldwide</span>
                </div>
                <p className="text-[11px] text-[#6B6B6B] mt-1 leading-snug">
                  Collaborating seamlessly across global time zones.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Positioning */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[#B88A5A] mb-3">
                About The Developer
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12] mb-6">
                Nazmul Patwary
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
                <p className="text-[#171717] font-medium text-lg sm:text-xl leading-snug">
                  I'm Nazmul, a Frontend Developer and Web Consultant focused on building modern digital experiences for businesses.
                </p>
                <p>
                  I combine frontend development, visual design thinking and business goals to create websites that are not only visually strong, but useful.
                </p>
                <p>
                  Many developers treat client projects as simple checklists of code syntax. I approach each project as a high-stakes business investment: researching who your audience is, what objections they bring to the screen, and engineering an interface that turns their attention into meaningful action.
                </p>
              </div>
            </div>

            {/* Credential Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FFFFFF] border border-[#D9D6D0] rounded-xl flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#B88A5A] shrink-0" />
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B6B6B]">Location</p>
                  <p className="text-xs font-semibold text-[#171717]">Based in Bangladesh</p>
                </div>
              </div>

              <div className="p-4 bg-[#FFFFFF] border border-[#D9D6D0] rounded-xl flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#B88A5A] shrink-0" />
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B6B6B]">Background</p>
                  <p className="text-xs font-semibold text-[#171717]">Computer Science & Engineering</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-[#F5F3EF] text-sm font-semibold rounded-lg hover:bg-black transition-colors cursor-pointer"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88A5A]" />
              </button>

              <a
                href="https://www.linkedin.com/in/nazmul-islam-0b73003a7/?isSelfProfile=true"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-5 py-3 border border-[#D9D6D0] text-[#171717] text-sm font-semibold rounded-lg hover:border-[#171717] hover:bg-[#FFFFFF] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-[#6B6B6B]" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-5 py-3 border border-[#D9D6D0] text-[#171717] text-sm font-semibold rounded-lg hover:border-[#171717] hover:bg-[#FFFFFF] transition-colors"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4 text-[#6B6B6B]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
