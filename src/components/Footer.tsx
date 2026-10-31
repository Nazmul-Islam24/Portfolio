import { ArrowUp, Linkedin, Instagram, Facebook, Github } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090C] text-[#F3F4F6] border-t border-white/10 py-9 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Brand & Positioning */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="text-base font-extrabold tracking-tight text-white">NAZMUL</span>
          </div>
          <p className="text-xs text-neutral-400">
            Frontend Developer & Web Consultant · High-Converting Digital Experiences
          </p>
        </div>

        {/* Quiet Navigation (Approach before Services) */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#approach" className="hover:text-white transition-colors">Approach</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#skills" className="hover:text-white transition-colors">Stack</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* 4 Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5 text-neutral-400">
            {/* 1. LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nazmul-islam-0b73003a7/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer noopener"
              className="p-1.5 rounded-lg hover:text-[#E5A855] hover:bg-white/5 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* 2. Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="p-1.5 rounded-lg hover:text-[#E5A855] hover:bg-white/5 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* 3. Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="p-1.5 rounded-lg hover:text-[#E5A855] hover:bg-white/5 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* 4. GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
              className="p-1.5 rounded-lg hover:text-[#E5A855] hover:bg-white/5 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#131520] border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#E5A855]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
