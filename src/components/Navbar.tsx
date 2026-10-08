import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Approach', href: '#approach' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F3EF]/92 backdrop-blur-md border-b border-[#D9D6D0]/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single element brand mark */}
          <a
            href="#"
            className="group flex items-center gap-1.5 text-xl font-extrabold tracking-tight text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A5A]"
          >
            <span>NAZMUL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88A5A] group-hover:scale-125 transition-transform" />
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B6B6B]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 text-[#171717]/80 hover:text-[#171717] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B88A5A] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button & Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-[#F5F3EF] bg-[#171717] rounded-lg hover:bg-[#111111] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A5A] whitespace-nowrap cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B88A5A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#171717] hover:bg-[#EBE7DF] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#111111]/40 backdrop-blur-sm transition-opacity">
          <div className="fixed top-[62px] left-0 right-0 bg-[#F5F3EF] border-b border-[#D9D6D0] p-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-base font-medium text-[#171717] hover:bg-[#EBE7DF] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-[#D9D6D0]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#171717] text-[#F5F3EF] font-semibold text-sm rounded-lg hover:bg-black transition-colors"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88A5A]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
