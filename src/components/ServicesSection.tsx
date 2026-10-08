import { useState } from 'react';
import { Sparkles, Code2, ArrowUpRight, Target, Check } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export default function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      number: '01',
      title: 'Website Design',
      tagline: 'Modern interfaces designed around your business and customers.',
      icon: Sparkles,
      symbol: '✦',
      deliverables: [
        'Strategic wireframing & customer journey mapping',
        'High-fidelity editorial layouts tailored to brand voice',
        'Mobile-first responsive layout planning',
        'Design systems with consistent typography & color hierarchies'
      ],
      outcome: 'A distinct, credible digital presence that sets you apart from cookie-cutter competitor templates.'
    },
    {
      number: '02',
      title: 'Website Development',
      tagline: 'Responsive, performant experiences built with modern frontend technologies.',
      icon: Code2,
      symbol: '</>',
      deliverables: [
        'Clean React & Next.js component architecture',
        'Pixel-accurate, ultra-responsive Tailwind CSS implementations',
        'Sub-second page speeds and Core Web Vitals optimization',
        'Accessible, semantic HTML with zero bloated dependencies'
      ],
      outcome: 'A rock-solid, lightning-fast codebase that works flawlessly across all devices and screen sizes.'
    },
    {
      number: '03',
      title: 'Website Redesign',
      tagline: 'Transforming outdated websites into clearer, more modern experiences.',
      icon: ArrowUpRight,
      symbol: '↗',
      deliverables: [
        'Deep audit of current conversion roadblocks and friction points',
        'Complete visual uplift without losing your established brand identity',
        'Information architecture restructuring for rapid scanning',
        'Streamlined navigation that surfaces high-intent pages'
      ],
      outcome: 'Revitalize your legacy website into a contemporary asset that commands premium client trust.'
    },
    {
      number: '04',
      title: 'UX & Conversion Thinking',
      tagline: 'Structuring pages, content and CTAs around what visitors need to do next.',
      icon: Target,
      symbol: '◎',
      deliverables: [
        'Strategic placement of calls to action (booking, quotes, calls)',
        'Content hierarchy designed for scanning customer psychology',
        'Friction-free intake forms and appointment workflows',
        'Continuous refinement based on user intent and feedback'
      ],
      outcome: 'Turn casual page visits into active inquiries, consultations, and revenue opportunities.'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#D9D6D0]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#B88A5A] mb-3">
              Capabilities & Offerings
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12] text-balance">
              From Business Goals to Better Digital Experiences.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B6B6B] max-w-sm">
            I combine clean frontend engineering with conversion-focused UX to build web experiences that actively work for your bottom line.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = selectedService === index;

            return (
              <div
                key={service.number}
                className="group relative bg-[#FFFFFF] border border-[#D9D6D0] rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:border-[#171717] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Custom Symbol */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D9D6D0]/60">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#B88A5A]">
                      SERVICE {service.number}
                    </span>
                    <span className="text-sm font-mono font-bold text-[#171717] px-2.5 py-1 bg-[#F5F3EF] rounded-md border border-[#D9D6D0]/80">
                      {service.symbol}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-[#171717] tracking-tight mb-3 group-hover:text-[#B88A5A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed mb-6 font-normal">
                    {service.tagline}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-6">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717]">
                        <Check className="w-4 h-4 text-[#B88A5A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact Outcome Note */}
                  <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#D9D6D0]/70 text-xs text-[#6B6B6B]">
                    <span className="font-semibold text-[#171717]">Primary Outcome: </span>
                    {service.outcome}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-4 border-t border-[#D9D6D0]/60 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:text-[#B88A5A] transition-colors cursor-pointer"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-[#6B6B6B]">Bespoke Delivery</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
