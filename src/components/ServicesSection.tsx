import { Sparkles, Code2, ArrowUpRight, Target, Check } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export default function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const services = [
    {
      number: '01',
      title: 'Bespoke Website Design',
      tagline: 'Modern, high-conversion interfaces tailored specifically around your business goals.',
      icon: Sparkles,
      symbol: '✦',
      deliverables: [
        'Strategic wireframing & customer journey mapping',
        'High-fidelity editorial layouts tailored to brand voice',
        'Mobile-first responsive layout architecture',
        'Design systems with consistent typography & color hierarchies'
      ],
      outcome: 'A distinct, credible digital presence that sets you apart from cookie-cutter competitor templates.'
    },
    {
      number: '02',
      title: 'Full Frontend Development',
      tagline: 'Responsive, performant experiences engineered with modern web standards.',
      icon: Code2,
      symbol: '</>',
      deliverables: [
        'Clean React & Next.js component architecture',
        'Pixel-accurate, ultra-responsive Tailwind CSS implementations',
        'Sub-second page speeds and 100% Core Web Vitals optimization',
        'Accessible, semantic HTML with zero bloated dependencies'
      ],
      outcome: 'A rock-solid, lightning-fast codebase that works flawlessly across all devices and screen sizes.'
    },
    {
      number: '03',
      title: 'Website Redesign & Modernization',
      tagline: 'Transforming legacy or underperforming websites into clearer, modern revenue engines.',
      icon: ArrowUpRight,
      symbol: '↗',
      deliverables: [
        'Deep audit of current conversion roadblocks and friction points',
        'Complete visual uplift without losing your established brand authority',
        'Information architecture restructuring for rapid scanning',
        'Streamlined navigation that surfaces high-intent pages'
      ],
      outcome: 'Revitalize your legacy website into a contemporary asset that commands premium client trust.'
    },
    {
      number: '04',
      title: 'UX & Conversion Optimization',
      tagline: 'Structuring pages, copy, and CTAs around what prospective clients need to do next.',
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
    <section id="services" className="py-18 md:py-24 bg-[#0D0F16] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#E5A855] mb-3">
              Capabilities & Offerings
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
              From Business Goals to Better Digital Experiences.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-sm">
            I combine clean frontend engineering with conversion-focused UX to build web experiences that actively work for your bottom line.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => {
            return (
              <div
                key={service.number}
                className="group relative bg-[#131520] border border-white/10 rounded-2xl p-7 sm:p-10 transition-all duration-300 hover:border-[#E5A855]/60 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Custom Symbol */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#E5A855]">
                      SERVICE {service.number}
                    </span>
                    <span className="text-sm font-mono font-bold text-white px-2.5 py-1 bg-white/5 rounded-md border border-white/10">
                      {service.symbol}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2.5 group-hover:text-[#E5A855] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
                    {service.tagline}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-6">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <Check className="w-4 h-4 text-[#E5A855] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact Outcome Note */}
                  <div className="p-3.5 bg-black/40 rounded-xl border border-white/10 text-xs text-neutral-300">
                    <span className="font-semibold text-white">Primary Outcome: </span>
                    {service.outcome}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#E5A855] transition-colors cursor-pointer"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A855]" />
                  </button>
                  <span className="text-[11px] font-mono text-neutral-400">Custom Delivery</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
