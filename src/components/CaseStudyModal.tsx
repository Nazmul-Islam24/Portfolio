import { useState, useEffect, useRef } from 'react';
import {
  X,
  ArrowRight,
  ArrowUpRight,
  Laptop,
  Smartphone,
  Tablet,
  Check,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  Globe,
  Info
} from 'lucide-react';
import { ProjectCaseStudy } from '../data/projectsData';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  initialTab?: 'case-study' | 'live-demo';
  onClose: () => void;
  onOpenContact: () => void;
}

export default function CaseStudyModal({
  project,
  initialTab = 'case-study',
  onClose,
  onOpenContact
}: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<'case-study' | 'live-demo'>(initialTab);
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(0);
  const [iframeError, setIframeError] = useState(false);

  // Interactive prototype state inside built-in simulator
  const [interactiveFormSubmitted, setInteractiveFormSubmitted] = useState(false);
  const [demoInput, setDemoInput] = useState('');
  const [demoDate, setDemoDate] = useState('2026-10-15');
  const [demoCategory, setDemoCategory] = useState('General Consultation');

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setActiveTab(initialTab);
    setInteractiveFormSubmitted(false);
    setDemoInput('');
    setIframeError(false);
  }, [project, initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInteractiveFormSubmitted(true);
  };

  const handleRefreshIframe = () => {
    setIframeKey((prev) => prev + 1);
    setIframeError(false);
  };

  const effectiveUrl = project.liveUrl?.trim() || `https://${project.id}.nazmul.dev`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-[#F5F3EF] border border-[#D9D6D0] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col">
        {/* Top Sticky Bar: Project Meta, Tabs & Close */}
        <div className="sticky top-0 z-30 bg-[#FFFFFF] border-b border-[#D9D6D0] px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xs font-mono font-bold text-[#B88A5A] px-2 py-0.5 bg-[#FAF8F5] rounded border border-[#D9D6D0] shrink-0">
              {project.number}
            </span>
            <div className="min-w-0 truncate">
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#6B6B6B] truncate">
                {project.industry} · {project.status === 'active' ? 'ACTIVE NICHE' : 'CONCEPT SPEC'}
              </p>
              <h2 className="text-sm sm:text-base font-bold text-[#171717] tracking-tight truncate">
                {project.name}
              </h2>
            </div>
          </div>

          {/* Mode Switcher & Close */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center p-1 bg-[#F5F3EF] rounded-lg border border-[#D9D6D0]">
              <button
                onClick={() => setActiveTab('case-study')}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeTab === 'case-study'
                    ? 'bg-[#171717] text-[#F5F3EF] shadow-sm'
                    : 'text-[#6B6B6B] hover:text-[#171717]'
                }`}
              >
                Case Study
              </button>
              <button
                onClick={() => setActiveTab('live-demo')}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'live-demo'
                    ? 'bg-[#171717] text-[#F5F3EF] shadow-sm'
                    : 'text-[#6B6B6B] hover:text-[#171717]'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-[#B88A5A]" />
                <span className="hidden sm:inline">Website Simulator</span>
                <span className="sm:hidden">Website</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </button>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold rounded-lg hover:bg-emerald-100 transition-colors"
                title="Open live site in separate tab"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 text-[#6B6B6B] hover:text-[#171717] hover:bg-[#F5F3EF] rounded-lg transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 md:p-10 space-y-8 md:space-y-12">
          {activeTab === 'case-study' ? (
            <>
              {/* Header Hero in Case Study */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#B88A5A]">
                  <span>{project.industry}</span>
                  <span aria-hidden="true">•</span>
                  <span>{project.status === 'active' ? 'PRODUCTION NICHE' : 'CONCEPT BLUEPRINT'}</span>
                  {project.liveUrl && (
                    <span className="ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded border border-emerald-300 font-mono text-[10px]">
                      LIVE CONNECTED
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12]">
                  {project.name}
                </h1>

                <p className="text-base sm:text-lg text-[#171717] font-medium max-w-3xl leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Large Mockup Showcase */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#D9D6D0] bg-[#FAF8F5] shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 w-full text-white text-xs sm:text-sm">
                    <span className="font-semibold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Full Responsive Layout Available</span>
                    </span>

                    <button
                      onClick={() => setActiveTab('live-demo')}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#B88A5A] text-white font-semibold rounded-lg hover:bg-[#a3794c] transition-colors cursor-pointer shadow-md"
                    >
                      <Laptop className="w-4 h-4" />
                      <span>Launch Desktop & Mobile Preview</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* The Challenge & The Goal */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pt-2">
                <div className="md:col-span-6 p-6 sm:p-8 bg-[#FFFFFF] border border-[#D9D6D0] rounded-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B88A5A] block mb-2">
                    The Business Challenge
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#171717] mb-3">
                    Overcoming Visitor Hesitation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="md:col-span-6 p-6 sm:p-8 bg-[#FFFFFF] border border-[#D9D6D0] rounded-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B88A5A] block mb-2">
                    The Strategic Goals
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#171717] mb-4">
                    Clarity + Trust + Conversion
                  </h3>
                  <div className="space-y-3">
                    {project.goals.map((goal, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717]">
                        <Check className="w-4 h-4 text-[#B88A5A] shrink-0 mt-0.5" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* My Approach: 6 Structured Steps */}
              <div className="space-y-4 pt-2">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B88A5A] block mb-1">
                    Systematic Process
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
                    My Approach to this Niche
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.approachSteps.map((step) => (
                    <div
                      key={step.number}
                      className="p-5 bg-[#FFFFFF] border border-[#D9D6D0] rounded-xl flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-[#B88A5A] block mb-2">
                          {step.number} — {step.title}
                        </span>
                        <p className="text-xs text-[#6B6B6B] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Thinking: Why I Made These Decisions */}
              <div className="space-y-4 pt-2">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B88A5A] block mb-1">
                    Consultant Mindset
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
                    Why I Made These Strategic Decisions
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                    Frontend development decisions grounded in real customer conversion psychology.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {project.businessDecisions.map((decision, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-[#FFFFFF] border border-[#D9D6D0] rounded-2xl flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#D9D6D0] flex items-center justify-center text-xs font-mono font-bold text-[#B88A5A] mb-4">
                          0{idx + 1}
                        </div>
                        <h4 className="text-base font-bold text-[#171717] mb-2">
                          {decision.title}
                        </h4>
                        <p className="text-xs text-[#6B6B6B] leading-relaxed">
                          {decision.rationale}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="p-6 bg-[#FFFFFF] border border-[#D9D6D0] rounded-2xl space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B88A5A] block">
                  Frontend Tech Stack
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#F5F3EF] border border-[#D9D6D0] rounded-lg text-xs font-medium text-[#171717]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 sm:p-10 bg-[#111111] text-[#F5F3EF] rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg sm:text-2xl font-bold tracking-tight text-white mb-2">
                    Need a high-converting website for your business?
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Let's collaborate on building a tailor-made digital experience for your specific industry.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="px-6 py-3 bg-[#FFFFFF] text-[#111111] font-semibold text-sm rounded-lg hover:bg-neutral-200 transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
                >
                  <span>Start A Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            /* ======================================================== */
            /* FULL WEBSITE PREVIEW: MULTI-DEVICE SIMULATOR (DESK/TAB/MOB)*/
            /* ======================================================== */
            <div className="space-y-6">
              {/* Device Selector Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#FFFFFF] border border-[#D9D6D0] rounded-xl shadow-xs">
                {/* Left: Device Mode Switchers */}
                <div className="flex items-center gap-1.5 p-1 bg-[#F5F3EF] rounded-lg border border-[#D9D6D0]">
                  <button
                    onClick={() => setViewportMode('desktop')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewportMode === 'desktop'
                        ? 'bg-[#171717] text-[#F5F3EF] shadow-xs'
                        : 'text-[#6B6B6B] hover:text-[#171717]'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Desktop</span>
                    <span className="text-[10px] opacity-70 font-mono">(1440px)</span>
                  </button>

                  <button
                    onClick={() => setViewportMode('tablet')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewportMode === 'tablet'
                        ? 'bg-[#171717] text-[#F5F3EF] shadow-xs'
                        : 'text-[#6B6B6B] hover:text-[#171717]'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Tablet</span>
                    <span className="text-[10px] opacity-70 font-mono">(768px)</span>
                  </button>

                  <button
                    onClick={() => setViewportMode('mobile')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewportMode === 'mobile'
                        ? 'bg-[#171717] text-[#F5F3EF] shadow-xs'
                        : 'text-[#6B6B6B] hover:text-[#171717]'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Mobile</span>
                    <span className="text-[10px] opacity-70 font-mono">(390px)</span>
                  </button>
                </div>

                {/* Right: URL Controls */}
                <div className="flex items-center gap-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] text-white text-xs font-semibold rounded-lg hover:bg-black transition-colors"
                    >
                      <span>Open Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#B88A5A]" />
                    </a>
                  ) : (
                    <span className="text-xs text-[#6B6B6B] hidden md:inline-flex items-center gap-1">
                      <Info className="w-3.5 h-3.5 text-[#B88A5A]" />
                      <span>Connect your deployed URL in <code>projectsData.ts</code></span>
                    </span>
                  )}

                  <button
                    onClick={handleRefreshIframe}
                    className="p-1.5 text-[#6B6B6B] hover:text-[#171717] hover:bg-[#F5F3EF] rounded-lg transition-colors cursor-pointer"
                    title="Refresh website viewport"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Device Frame Container */}
              <div
                className={`mx-auto transition-all duration-300 rounded-2xl overflow-hidden border border-[#D9D6D0] bg-[#FFFFFF] shadow-xl ${
                  viewportMode === 'mobile'
                    ? 'max-w-[400px] border-neutral-800 ring-8 ring-neutral-900/10'
                    : viewportMode === 'tablet'
                    ? 'max-w-[800px] border-neutral-700 ring-6 ring-neutral-900/5'
                    : 'w-full'
                }`}
              >
                {/* Simulated Browser Address Bar */}
                <div className="bg-[#FAF8F5] border-b border-[#D9D6D0] px-4 py-2.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="flex-1 max-w-xl mx-auto bg-[#FFFFFF] border border-[#D9D6D0] rounded-md px-3 py-1 text-[11px] font-mono text-[#6B6B6B] flex items-center justify-between gap-2 overflow-hidden">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-emerald-600 font-bold">https://</span>
                      <span className="truncate">{effectiveUrl.replace(/^https?:\/\//, '')}</span>
                    </div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#B88A5A] hover:underline shrink-0"
                      >
                        ↗
                      </a>
                    )}
                  </div>

                  <div className="text-[10px] font-mono text-[#6B6B6B] shrink-0 font-bold uppercase">
                    {viewportMode.toUpperCase()}
                  </div>
                </div>

                {/* Website Content Area */}
                {project.liveUrl ? (
                  /* ======================================================== */
                  /* REAL LIVE WEBSITE IFRAME (Connected External Website)   */
                  /* ======================================================== */
                  <div className="relative bg-white min-h-[620px]">
                    <iframe
                      key={iframeKey}
                      ref={iframeRef}
                      src={project.liveUrl}
                      title={`${project.name} Live Website`}
                      className="w-full h-[650px] border-0"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      onError={() => setIframeError(true)}
                    />

                    {/* Friendly notice bar below iframe */}
                    <div className="p-3 bg-[#FAF8F5] border-t border-[#D9D6D0] flex flex-wrap items-center justify-between gap-2 text-xs text-[#6B6B6B]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Rendering live deployed website at <strong>{project.liveUrl}</strong></span>
                      </div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-[#171717] hover:text-[#B88A5A]"
                      >
                        <span>Open fullscreen tab</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ) : (
                  /* ======================================================== */
                  /* HIGH-FIDELITY BUILT-IN INTERACTIVE SIMULATION            */
                  /* ======================================================== */
                  <div className="p-4 sm:p-8 space-y-6 max-h-[700px] overflow-y-auto">
                    {/* Setup Instruction Banner for Nazmul */}
                    <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-amber-900 text-xs">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-bold">Interactive Niche Blueprint Active</p>
                        <p className="text-[11px] text-amber-800 mt-0.5">
                          When you deploy your dedicated <strong>{project.industry}</strong> website, simply add its link to{' '}
                          <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">liveUrl: 'https://...'</code> in{' '}
                          <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">/src/data/projectsData.ts</code>.
                          It will immediately embed your real live website here in full desktop, tablet, and mobile dimensions!
                        </p>
                      </div>
                    </div>

                    {/* Hero Banner inside prototype */}
                    <div className="relative rounded-xl overflow-hidden border border-[#D9D6D0] aspect-[16/8]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#B88A5A] mb-1">
                          {project.industry}
                        </span>
                        <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight">
                          {project.liveFeatures.headline}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mt-1 hidden sm:block">
                          {project.liveFeatures.subheadline}
                        </p>
                      </div>
                    </div>

                    {/* Highlights Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {project.liveFeatures.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="p-3 bg-[#FAF8F5] border border-[#D9D6D0] rounded-lg text-xs font-semibold text-[#171717] flex items-center gap-2"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#B88A5A] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Live Stats Row */}
                    {project.liveFeatures.sampleStats && (
                      <div className="grid grid-cols-3 gap-3 p-4 bg-[#111111] text-[#F5F3EF] rounded-xl">
                        {project.liveFeatures.sampleStats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <p className="text-base sm:text-2xl font-mono font-bold text-white">{stat.value}</p>
                            <p className="text-[10px] font-mono uppercase text-neutral-400">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Interactive Conversion Action Widget */}
                    <div className="p-5 sm:p-6 bg-[#FAF8F5] border border-[#D9D6D0] rounded-xl">
                      <h4 className="text-sm sm:text-base font-bold text-[#171717] mb-1">
                        {project.liveFeatures.actionLabel}
                      </h4>
                      <p className="text-xs text-[#6B6B6B] mb-4">
                        Experience the frictionless 1-click conversion flow engineered into this concept:
                      </p>

                      {interactiveFormSubmitted ? (
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold">Interactive Submission Test Passed!</p>
                            <p className="text-[11px] text-emerald-700 mt-0.5">
                              In your live deployed site, this initiates instant client calendar confirmation and backend webhook dispatch.
                            </p>
                            <button
                              onClick={() => setInteractiveFormSubmitted(false)}
                              className="mt-2 text-[11px] font-semibold underline text-emerald-900 cursor-pointer"
                            >
                              Reset Interactive Test
                            </button>
                          </div>
                        </div>
                      ) : (
                        <form onSubmit={handleDemoSubmit} className="space-y-3.5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="text-[11px] font-mono uppercase font-bold text-[#6B6B6B] block mb-1">
                                Client / Patient Name
                              </label>
                              <input
                                type="text"
                                required
                                placeholder="e.g. Jessica Sterling"
                                value={demoInput}
                                onChange={(e) => setDemoInput(e.target.value)}
                                className="w-full px-3 py-2 text-xs bg-white border border-[#D9D6D0] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B88A5A]"
                              />
                            </div>

                            <div>
                              <label className="text-[11px] font-mono uppercase font-bold text-[#6B6B6B] block mb-1">
                                Preferred Date
                              </label>
                              <input
                                type="date"
                                value={demoDate}
                                onChange={(e) => setDemoDate(e.target.value)}
                                className="w-full px-3 py-2 text-xs bg-white border border-[#D9D6D0] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B88A5A]"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="text-[11px] font-mono uppercase font-bold text-[#6B6B6B] block mb-1">
                              Session / Service Focus
                            </label>
                            <select
                              value={demoCategory}
                              onChange={(e) => setDemoCategory(e.target.value)}
                              className="w-full px-3 py-2 text-xs bg-white border border-[#D9D6D0] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B88A5A]"
                            >
                              <option>Primary Comprehensive Session</option>
                              <option>Priority Specialist Consultation</option>
                              <option>Custom Strategic Review</option>
                            </select>
                          </div>

                          <button
                            type="submit"
                            className="w-full py-2.5 px-4 bg-[#171717] text-[#F5F3EF] text-xs font-semibold rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span>Confirm {project.liveFeatures.actionLabel}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#B88A5A]" />
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
