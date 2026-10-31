import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ApproachSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Understand',
      summary: 'I start with the business model, target audience, and ROI goals—not just visuals.',
      details: 'Before opening code editors or design tools, I analyze your business model, customer pain points, competitors, and what specific action needs to occur for a visit to be considered successful.',
      deliverable: 'Business goals audit & user journey mapping'
    },
    {
      number: '02',
      title: 'Define',
      summary: 'We identify what the website needs to communicate and what visitors should do next.',
      details: 'We strip out fluff and establish the core message. We clarify the primary value proposition, service offerings, objection counters, and the unambiguous conversion triggers.',
      deliverable: 'Information architecture & content structure'
    },
    {
      number: '03',
      title: 'Design',
      summary: 'I turn those goals into a clear, modern, intuitive visual system.',
      details: 'Visual hierarchy, typography, intentional whitespace, and high-fidelity project styling come together to establish instant credibility and effortless reading.',
      deliverable: 'High-fidelity responsive layouts & component system'
    },
    {
      number: '04',
      title: 'Build',
      summary: 'I engineer the experience with clean, maintainable, ultra-fast frontend code.',
      details: 'Using modern standards (React, Next.js, TypeScript, Tailwind CSS), I engineer clean, accessible, sub-second loading code without heavy plugins or technical debt.',
      deliverable: 'Production-ready, ultra-fast frontend codebase'
    },
    {
      number: '05',
      title: 'Refine',
      summary: 'I test the experience rigorously across devices and refine every detail.',
      details: 'Rigorous cross-browser testing across mobile, tablet, and desktop viewports. We tune micro-interactions, optimize image assets, and audit accessibility standards.',
      deliverable: 'Cross-device verification & Core Web Vitals audit'
    }
  ];

  return (
    <section id="approach" className="py-18 md:py-24 bg-[#0A0C10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#E5A855] mb-3">
            Consulting Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-4 text-balance">
            My Approach
          </h2>
          <p className="text-base sm:text-lg text-neutral-400">
            A structured, 5-phase framework designed to eliminate guesswork and build websites that deliver measurable business results.
          </p>
        </div>

        {/* Horizontal Process Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#181B27] text-white border-[#E5A855] shadow-[0_8px_30px_rgba(229,168,85,0.15)]'
                    : 'bg-[#131520] text-neutral-300 border-white/10 hover:border-white/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#E5A855]">
                      PHASE {step.number}
                    </span>
                    {idx < steps.length - 1 && (
                      <ArrowRight
                        className={`hidden md:block w-3.5 h-3.5 ${
                          isSelected ? 'text-[#E5A855]' : 'text-neutral-600'
                        }`}
                      />
                    )}
                  </div>

                  <h3 className={`text-xl font-bold tracking-tight mb-2 ${isSelected ? 'text-white' : 'text-neutral-200'}`}>
                    {step.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-neutral-400">
                    {step.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10">
                  <span className={`text-[10px] font-mono uppercase tracking-wider block ${isSelected ? 'text-[#E5A855]' : 'text-neutral-500'}`}>
                    Click to examine
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="p-7 sm:p-10 bg-[#131520] border border-white/10 rounded-2xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#E5A855] mb-2">
              <span>Phase {steps[activeStep].number} In Detail</span>
              <span aria-hidden="true">•</span>
              <span>{steps[activeStep].title}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {steps[activeStep].summary}
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {steps[activeStep].details}
            </p>
          </div>

          <div className="p-4 bg-black/40 rounded-xl border border-white/10 shrink-0 w-full md:w-auto">
            <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block mb-1">
              Phase Deliverable
            </span>
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <CheckCircle2 className="w-4 h-4 text-[#E5A855]" />
              <span>{steps[activeStep].deliverable}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
