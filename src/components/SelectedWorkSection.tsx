import { ArrowUpRight, Eye, Laptop, Smartphone, ExternalLink, Sparkles } from 'lucide-react';
import { PROJECTS, ProjectCaseStudy } from '../data/projectsData';

interface SelectedWorkProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
  onOpenLiveDemo: (project: ProjectCaseStudy) => void;
}

export default function SelectedWorkSection({ onSelectProject, onOpenLiveDemo }: SelectedWorkProps) {
  // Only display projects with status === 'active'.
  // Hidden projects take ZERO space, ZERO padding, and ZERO margin on the portfolio.
  const activeProjects = PROJECTS.filter((p) => p.status === 'active');

  return (
    <section id="work" className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#D9D6D0]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-widest font-semibold text-[#B88A5A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88A5A]" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12] text-balance">
              Selected Work
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#6B6B6B]">
              Real commercial niches. Purpose-built conversion funnels. Interactive desktop and mobile experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm font-medium text-[#6B6B6B]">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#D9D6D0] rounded-lg text-[#171717]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              <span className="font-semibold">{activeProjects.length} Active Niche Solutions</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B]">
              <Laptop className="w-3.5 h-3.5 text-[#B88A5A]" />
              <span>Desktop</span>
              <span>+</span>
              <Smartphone className="w-3.5 h-3.5 text-[#B88A5A]" />
              <span>Mobile Simulation</span>
            </div>
          </div>
        </div>

        {/* Dynamic Project Showcase (Only Active Niches Render) */}
        <div className="space-y-12 md:space-y-16">
          {activeProjects.map((project, index) => {
            const isDark = project.themeStyle === 'law' || project.themeStyle === 'gym';
            const isGym = project.themeStyle === 'gym';
            const isHomeService = project.themeStyle === 'homeservice';
            const isImageLeft = index % 2 === 1;
            const displayNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl p-6 sm:p-10 transition-all duration-300 ${
                  isDark
                    ? isGym
                      ? 'bg-[#0E0E0E] text-[#F5F3EF] border border-amber-900/30 hover:border-amber-500/60 hover:shadow-[0_12px_36px_rgba(245,158,11,0.1)]'
                      : 'bg-[#111111] text-[#F5F3EF] border border-white/10 hover:border-[#B88A5A] hover:shadow-[0_12px_36px_rgba(0,0,0,0.3)]'
                    : 'bg-[#FFFFFF] border border-[#D9D6D0] text-[#171717] hover:border-[#171717] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)]'
                }`}
              >
                {/* Optional Athletic Motto Banner for Gym Niche */}
                {isGym && (
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-neutral-100 uppercase">
                      TRAIN. <span className="text-amber-400">PERFORM.</span> BECOME.
                    </span>
                    <span className="text-xs font-mono font-bold tracking-widest text-amber-400 px-3 py-1 bg-amber-950/40 rounded border border-amber-800/40">
                      HIGH-VELOCITY FUNNEL
                    </span>
                  </div>
                )}

                {/* Optional Dispatch Alert Banner for Home Services Niche */}
                {isHomeService && (
                  <div className="mb-6 p-4 bg-[#FAF8F5] border border-[#D9D6D0] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
                        NEED HELP NOW? ON-CALL SPECIALISTS AVAILABLE
                      </span>
                    </div>
                    <button
                      onClick={() => onOpenLiveDemo(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] text-[#F5F3EF] text-xs font-semibold rounded-lg hover:bg-black transition-colors cursor-pointer w-fit"
                    >
                      <span>TEST DISPATCH FLOW →</span>
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left or Right Content depending on alternating index */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between h-full ${
                      isImageLeft ? 'order-1 lg:order-2' : 'order-1'
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <div
                          className={`text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${
                            isDark
                              ? 'text-[#B88A5A] border-white/10 bg-white/5'
                              : 'text-[#B88A5A] border-[#D9D6D0] bg-[#FAF8F5]'
                          }`}
                        >
                          <span>{displayNumber}</span>
                          <span className="mx-1.5 opacity-50">/</span>
                          <span>{project.industry}</span>
                        </div>

                        {/* Live Link Badge */}
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 rounded text-[11px] font-mono font-semibold hover:bg-emerald-500/20 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Live Site Online ↗</span>
                          </a>
                        ) : (
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${
                              isDark
                                ? 'bg-white/5 border-white/10 text-neutral-400'
                                : 'bg-[#F5F3EF] border-[#D9D6D0] text-[#6B6B6B]'
                            }`}
                          >
                            <Sparkles className="w-3 h-3 text-[#B88A5A]" />
                            <span>Full Prototype Ready</span>
                          </span>
                        )}
                      </div>

                      {/* Project Name */}
                      <h3
                        className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 transition-colors ${
                          isDark
                            ? 'text-white group-hover:text-[#B88A5A]'
                            : 'text-[#171717] group-hover:text-[#B88A5A]'
                        }`}
                      >
                        {project.name}
                      </h3>

                      {/* Tagline */}
                      <p
                        className={`text-sm sm:text-base font-medium leading-snug mb-4 ${
                          isDark ? 'text-neutral-300' : 'text-[#171717]'
                        }`}
                      >
                        {project.tagline}
                      </p>

                      {/* Business Problem Solved */}
                      <div
                        className={`mb-6 p-4 rounded-xl border ${
                          isDark
                            ? 'bg-[#181818] border-white/10'
                            : 'bg-[#F5F3EF] border-[#D9D6D0]/80'
                        }`}
                      >
                        <p
                          className={`text-[11px] font-mono font-bold uppercase tracking-wider mb-1 ${
                            isDark ? 'text-neutral-400' : 'text-[#6B6B6B]'
                          }`}
                        >
                          Business Problem Solved
                        </p>
                        <p
                          className={`text-xs sm:text-sm leading-relaxed ${
                            isDark ? 'text-neutral-200' : 'text-[#171717]'
                          }`}
                        >
                          {project.oneLineProblem}
                        </p>
                      </div>

                      {/* Business Focus Tags */}
                      <div className="mb-6">
                        <p
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider mb-2 ${
                            isDark ? 'text-neutral-400' : 'text-[#6B6B6B]'
                          }`}
                        >
                          Business Focus
                        </p>
                        <div
                          className={`flex flex-wrap items-center gap-2 text-xs font-semibold ${
                            isDark ? 'text-white' : 'text-[#171717]'
                          }`}
                        >
                          {project.businessGoalTags.map((tag, idx) => (
                            <span key={tag} className="inline-flex items-center gap-1.5">
                              <span className="text-[#B88A5A]">✦</span>
                              <span>{tag}</span>
                              {idx < project.businessGoalTags.length - 1 && (
                                <span className={isDark ? 'text-neutral-700 ml-1' : 'text-[#D9D6D0] ml-1'}>
                                  ·
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div
                      className={`flex flex-wrap items-center gap-3 pt-4 border-t ${
                        isDark ? 'border-white/10' : 'border-[#D9D6D0]/70'
                      }`}
                    >
                      {/* Button 1: Case Study */}
                      <button
                        onClick={() => onSelectProject(project)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                          isDark
                            ? 'bg-[#FFFFFF] text-[#111111] hover:bg-neutral-200'
                            : 'bg-[#171717] text-[#F5F3EF] hover:bg-black'
                        }`}
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#B88A5A]" />
                      </button>

                      {/* Button 2: Full Website Desktop & Mobile Simulation */}
                      <button
                        onClick={() => onOpenLiveDemo(project)}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer border ${
                          isDark
                            ? 'border-white/20 text-white hover:border-white hover:bg-white/10'
                            : 'border-[#D9D6D0] text-[#171717] hover:border-[#171717] hover:bg-[#F5F3EF]'
                        }`}
                      >
                        <div className="flex items-center gap-1 text-[#B88A5A]">
                          <Laptop className="w-3.5 h-3.5" />
                          <Smartphone className="w-3 h-3" />
                        </div>
                        <span>Interactive Website</span>
                        <Eye className="w-3.5 h-3.5 text-[#6B6B6B]" />
                      </button>

                      {/* Button 3: Direct External Link (if liveUrl provided) */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-semibold rounded-lg text-emerald-600 hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors"
                          title="Open live website in a new window"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right or Left Visual Image */}
                  <div
                    onClick={() => onOpenLiveDemo(project)}
                    className={`lg:col-span-7 aspect-[16/10] rounded-xl overflow-hidden relative cursor-pointer group/image ${
                      isImageLeft ? 'order-2 lg:order-1' : 'order-2'
                    } ${
                      isDark
                        ? 'border border-white/10 bg-[#161616]'
                        : 'border border-[#D9D6D0] bg-[#FAF8F5]'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-85 group-hover/image:opacity-70 transition-opacity" />

                    {/* Interactive Click Invitation Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Desktop & Mobile View Ready</span>
                      </span>
                      <span className="font-semibold text-[#B88A5A] flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1.5 rounded-md border border-white/10 group-hover/image:bg-black/90 transition-colors">
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
