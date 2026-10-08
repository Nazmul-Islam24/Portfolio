import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ApproachSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Understand',
      summary: 'I start with the business, audience and goals—not the design.',
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
      summary: 'I turn those goals into a clear, modern and intuitive experience.',
      details: 'Visual hierarchy, typography, intentional whitespace, and high-fidelity project styling come together to establish instant credibility and effortless reading.',
      deliverable: 'High-fidelity responsive layouts & component system'
    },
    {
      number: '04',
      title: 'Build',
      summary: 'I develop the experience with responsive, maintainable frontend code.',
      details: 'Using modern standards (React, Next.js, TypeScript, Tailwind CSS), I engineer clean, accessible, sub-second loading code without heavy plugins or technical debt.',
      deliverable: 'Production-ready, ultra-fast frontend codebase'
    },
    {
      number: '05',
      title: 'Refine',
      summary: 'I test the experience across devices and refine the details before launch.',
      details: 'Rigorous cross-browser testing across mobile, tablet, and desktop viewports. We tune micro-interactions, optimize image assets, and audit accessibility standards.',
      deliverable: 'Cross-device verification & Core Web Vitals audit'
    }
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#D9D6D0]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#B88A5A] mb-3">
            Consulting Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12] mb-4 text-balance">
            My Approach
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B]">
            A structured, 5-phase framework designed to eliminate guesswork and build websites that deliver measurable business results.
          </p>
        </div>

        {/* Horizontal Process Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#171717] text-[#F5F3EF] border-[#171717] shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
                    : 'bg-[#FFFFFF] text-[#171717] border-[#D9D6D0] hover:border-[#171717]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider ${
                        isSelected ? 'text-[#B88A5A]' : 'text-[#B88A5A]'
                      }`}
                    >
                      PHASE {step.number}
                    </span>
                    {idx < steps.length - 1 && (
                      <ArrowRight
                        className={`hidden md:block w-3.5 h-3.5 ${
                          isSelected ? 'text-neutral-500' : 'text-[#D9D6D0]'
                        }`}
                      />
                    )}
                  </div>

                  <h3
                    className={`text-xl font-bold tracking-tight mb-2 ${
                      isSelected ? 'text-white' : 'text-[#171717]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? 'text-neutral-300' : 'text-[#6B6B6B]'
                    }`}
                  >
                    {step.summary}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-current/10">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider block ${
                      isSelected ? 'text-[#B88A5A]' : 'text-[#6B6B6B]'
                    }`}
                  >
                    Click to examine
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="p-8 sm:p-10 bg-[#FFFFFF] border border-[#D9D6D0] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#B88A5A] mb-2">
              <span>Phase {steps[activeStep].number} Detail</span>
              <span aria-hidden="true">•</span>
              <span>{steps[activeStep].title}</span>
            </div>
            <h4 className="text-xl font-bold text-[#171717] mb-2">
              {steps[activeStep].summary}
            </h4>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              {steps[activeStep].details}
            </p>
          </div>

          <div className="p-4 bg-[#F5F3EF] rounded-xl border border-[#D9D6D0] shrink-0 w-full md:w-auto">
            <span className="text-[10px] font-mono uppercase font-bold text-[#6B6B6B] block mb-1">
              Phase Deliverable
            </span>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]">
              <CheckCircle2 className="w-4 h-4 text-[#B88A5A]" />
              <span>{steps[activeStep].deliverable}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
