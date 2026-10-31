import { ArrowUpRight, Eye, Laptop, Smartphone, ExternalLink } from 'lucide-react';
import { PROJECTS, ProjectCaseStudy } from '../data/projectsData';

interface SelectedWorkProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
  onOpenLiveDemo: (project: ProjectCaseStudy) => void;
}

export default function SelectedWorkSection({ onSelectProject, onOpenLiveDemo }: SelectedWorkProps) {
  // Only display projects with status === 'active'.
  const activeProjects = PROJECTS.filter((p) => p.status === 'active');

  return (
    <section id="work" className="py-18 md:py-24 bg-[#0A0C10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3 text-xs uppercase tracking-widest font-semibold text-[#E5A855]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A855]" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
              Selected Work
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-400">
              Real commercial niches. Purpose-built conversion funnels. Interactive desktop and mobile simulations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm font-medium text-neutral-400">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#131520] border border-white/10 rounded-lg text-white">
              <span className="font-semibold">{activeProjects.length} Custom Industry Solutions</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Laptop className="w-3.5 h-3.5 text-[#E5A855]" />
              <span>Desktop</span>
              <span>+</span>
              <Smartphone className="w-3.5 h-3.5 text-[#E5A855]" />
              <span>Mobile Simulation</span>
            </div>
          </div>
        </div>

        {/* Dynamic Project Showcase (Only Active Niches Render) */}
        <div className="space-y-10 md:space-y-14">
          {activeProjects.map((project, index) => {
            const isGym = project.themeStyle === 'gym';
            const isHomeService = project.themeStyle === 'homeservice';
            const isImageLeft = index % 2 === 1;
            const displayNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl p-5 sm:p-8 md:p-10 transition-all duration-300 bg-[#131520] border border-white/10 hover:border-[#E5A855]/60 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
              >
                {/* Athletic Motto Banner for Gym Niche */}
                {isGym && (
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                    <span className="text-lg sm:text-2xl md:text-3xl font-black tracking-tighter text-white uppercase">
                      TRAIN. <span className="text-[#E5A855]">PERFORM.</span> BECOME.
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#E5A855] px-2.5 py-0.5 bg-[#E5A855]/10 rounded border border-[#E5A855]/20">
                      HIGH-VELOCITY FUNNEL
                    </span>
                  </div>
                )}

                {/* Dispatch Alert Banner for Home Services Niche */}
                {isHomeService && (
                  <div className="mb-5 p-3.5 bg-white/5 border border-white/10 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200">
                        URGENT DISPATCH FLOW · ON-CALL SPECIALISTS AVAILABLE
                      </span>
                    </div>
                    <button
                      onClick={() => onOpenLiveDemo(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-neutral-950 text-xs font-bold rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer w-fit"
                    >
                      <span>TEST DISPATCH FLOW →</span>
                    </button>
                  </div>
                )}

                {/* Metadata Header: Displayed at top on mobile above the image! */}
                <div className="flex lg:hidden flex-wrap items-center gap-2 mb-3.5 text-xs font-mono font-semibold">
                  <span className="text-[#E5A855] text-sm">{displayNumber}</span>
                  <span className="text-neutral-600">/</span>
                  <span className="text-neutral-200 font-bold uppercase tracking-wide">{project.industry}</span>
                  <span className="text-neutral-600">·</span>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-mono text-[11px]"
                    >
                      <span>Live Deployed ↗</span>
                    </a>
                  ) : (
                    <span className="text-neutral-400 text-[11px]">
                      Interactive Prototype
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  
                  {/* Left Column (Desktop) or Text Details after Image (Mobile) */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between h-full ${
                      isImageLeft ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Desktop-only Top Metadata Line (kept clean) */}
                      <div className="hidden lg:flex flex-wrap items-center gap-2.5 mb-3 text-xs font-mono font-semibold">
                        <span className="text-[#E5A855]">{displayNumber}</span>
                        <span className="text-neutral-600">/</span>
                        <span className="text-neutral-300">{project.industry}</span>
                        <span className="text-neutral-600">·</span>
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-mono"
                          >
                            <span>Live Deployed ↗</span>
                          </a>
                        ) : (
                          <span className="text-neutral-400">
                            Interactive Prototype
                          </span>
                        )}
                      </div>

                      {/* Project Name */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 sm:mb-3 transition-colors text-white group-hover:text-[#E5A855]">
                        {project.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-xs sm:text-sm md:text-base font-medium leading-snug mb-3 sm:mb-4 text-neutral-300">
                        {project.tagline}
                      </p>

                      {/* Commercial Problem Solved */}
                      <div className="mb-4 sm:mb-6 p-3.5 sm:p-4 rounded-xl border bg-black/30 border-white/10">
                        <p className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider mb-1 text-neutral-400">
                          Commercial Problem Solved
                        </p>
                        <p className="text-xs sm:text-sm leading-relaxed text-neutral-200">
                          {project.oneLineProblem}
                        </p>
                      </div>

                      {/* Business Focus Goals */}
                      <div className="mb-4 sm:mb-6">
                        <p className="text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5 sm:mb-2 text-neutral-400">
                          Business Goals
                        </p>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-neutral-200">
                          {project.businessGoalTags.map((tag, idx) => (
                            <span key={tag} className="inline-flex items-center gap-1.5">
                              <span className="text-[#E5A855]">·</span>
                              <span>{tag}</span>
                              {idx < project.businessGoalTags.length - 1 && (
                                <span className="text-neutral-600 ml-1">/</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10">
                      {/* Button 1: Case Study */}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer bg-white text-neutral-950 hover:bg-neutral-200"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A855]" />
                      </button>

                      {/* Button 2: Full Website Desktop & Mobile Simulation */}
                      <button
                        onClick={() => onOpenLiveDemo(project)}
                        className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer border border-white/20 text-white hover:border-white hover:bg-white/10"
                      >
                        <div className="flex items-center gap-1 text-[#E5A855]">
                          <Laptop className="w-3.5 h-3.5" />
                          <Smartphone className="w-3 h-3" />
                        </div>
                        <span>Test Interactive Site</span>
                        <Eye className="w-3.5 h-3.5 text-neutral-400" />
                      </button>

                      {/* Button 3: Direct External Link (if liveUrl provided) */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-semibold rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors"
                          title="Open live website in a new window"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual Image Container: Shown immediately below metadata on mobile (order-1), alternating on desktop */}
                  <div
                    onClick={() => onOpenLiveDemo(project)}
                    className={`lg:col-span-7 aspect-[16/10] rounded-xl overflow-hidden relative cursor-pointer group/image border border-white/15 bg-black/40 ${
                      isImageLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-85 group-hover/image:opacity-60 transition-opacity" />

                    {/* Interactive Click Invitation Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white text-xs">
                      <span className="bg-black/75 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15 text-[10px] sm:text-xs font-medium">
                        Desktop & Mobile Simulator
                      </span>
                      <span className="font-semibold text-[#E5A855] flex items-center gap-1 bg-black/75 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15 group-hover/image:bg-black/90 transition-colors text-[10px] sm:text-xs">
                        Launch Website ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
