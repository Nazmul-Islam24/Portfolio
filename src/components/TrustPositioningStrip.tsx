import { useState } from 'react';
import { Eye, BookOpen, ShieldCheck, Zap, TrendingUp, ArrowRight } from 'lucide-react';

export default function TrustPositioningStrip() {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    {
      id: 0,
      badge: 'Step 01',
      title: 'ATTRACT',
      icon: Eye,
      description: 'Clean visual hierarchy and instant load speeds grab the visitor’s focus before they bounce.',
      metric: '< 1.2s First Contentful Paint'
    },
    {
      id: 1,
      badge: 'Step 02',
      title: 'UNDERSTAND',
      icon: BookOpen,
      description: 'Clear value proposition answers what you do, who you serve, and why it matters within 5 seconds.',
      metric: 'Zero confusing jargon'
    },
    {
      id: 2,
      badge: 'Step 03',
      title: 'TRUST',
      icon: ShieldCheck,
      description: 'Social proof, case proof, and polished craftsmanship reassure visitors that your business is verified.',
      metric: 'Credibility anchored upfront'
    },
    {
      id: 3,
      badge: 'Step 04',
      title: 'ACT',
      icon: Zap,
      description: 'Frictionless, obvious calls to action guide visitors smoothly into booking, calling, or inquiring.',
      metric: '1-click conversion paths'
    },
    {
      id: 4,
      badge: 'Outcome',
      title: 'GROWTH',
      icon: TrendingUp,
      description: 'Web traffic transforms into tangible revenue opportunities, qualified leads, and brand authority.',
      metric: 'Measurable business ROI'
    }
  ];

  return (
    <section className="bg-[#111111] text-[#F5F3EF] py-20 md:py-28 relative overflow-hidden">
      {/* Subtle grid background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Core Philosophy Statement */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#B88A5A] mb-4">
            Underlying Philosophy
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-balance">
            I DON'T JUST BUILD WEBSITES.
            <span className="block text-[#B88A5A] mt-2 font-normal">
              I THINK ABOUT WHAT HAPPENS AFTER SOMEONE LANDS ON ONE.
            </span>
          </h2>
        </div>

        {/* Visual Pipeline: Attract -> Understand -> Trust -> Act -> Growth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`group relative p-6 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1C1C1C] border-[#B88A5A] shadow-[0_8px_30px_rgba(184,138,90,0.12)]'
                    : 'bg-[#161616] border-white/10 hover:border-white/20 hover:bg-[#1A1A1A]'
                }`}
              >
                <div>
                  {/* Top indicator & step number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono tracking-widest text-[#B88A5A] font-medium">
                      {step.badge}
                    </span>
                    <Icon className={`w-4 h-4 transition-colors ${isSelected ? 'text-[#B88A5A]' : 'text-neutral-500 group-hover:text-neutral-300'}`} />
                  </div>

                  {/* Stage Name */}
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-lg font-bold tracking-tight text-white">
                      {step.title}
                    </h3>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-neutral-600 ml-auto" />
                    )}
                  </div>

                  {/* Explanation */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal mb-5">
                    {step.description}
                  </p>
                </div>

                {/* Metric Footer */}
                <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-[#B88A5A]/90">
                  {step.metric}
                </div>
              </div>
            );
          })}
        </div>

        {/* Story Bottom Insight */}
        <div className="mt-12 p-5 bg-[#171717] border border-white/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-neutral-300">
            <span className="text-white font-semibold">The Core Rule:</span> When each of these 5 steps is intentionally engineered into the frontend, a website ceases to be an expense and becomes an active growth driver.
          </p>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#B88A5A] whitespace-nowrap">
            Business → Customer → Conversion
          </span>
        </div>
      </div>
    </section>
  );
}
