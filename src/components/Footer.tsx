import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] text-[#F5F3EF] border-t border-white/10 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Positioning */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="text-base font-extrabold tracking-tight text-white">NAZMUL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88A5A]" />
          </div>
          <p className="text-xs text-neutral-400">
            Frontend Developer & Web Consultant · Modern Digital Experiences
          </p>
        </div>

        {/* Quiet Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#approach" className="hover:text-white transition-colors">Approach</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
            © {new Date().getFullYear()} Nazmul
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#181818] border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#B88A5A]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
