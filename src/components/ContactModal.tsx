import { useState, useEffect } from 'react';
import { X, ArrowUpRight, Mail, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'New Business Website',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Nazmul,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nProject Scope:\n${formData.message}\n\nSent from portfolio contact modal.`
    );
    window.location.href = `mailto:nzlpatwary901@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#141414] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-[#F5F3EF] my-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close Contact Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Inquiry Prepared!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto">
              Your default email client has opened with pre-filled details to <span className="text-white font-medium">nzlpatwary901@gmail.com</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-2 px-4 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E5A855] block mb-1">
                Direct Engagement
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Let's Talk About Your Project
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Tell me about your business and what you're looking to build or redesign.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-mono font-bold uppercase text-neutral-400 block mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#1F1F1F] border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#E5A855]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold uppercase text-neutral-400 block mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#1F1F1F] border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#E5A855]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold uppercase text-neutral-400 block mb-1">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#1F1F1F] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#E5A855]"
                >
                  <option>New Business Website</option>
                  <option>Website Redesign & Modernization</option>
                  <option>UX & Conversion Strategy</option>
                  <option>Custom Frontend Engineering</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold uppercase text-neutral-400 block mb-1">
                  Brief Overview *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="What is your website trying to accomplish?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#1F1F1F] border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#E5A855] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#FFFFFF] text-[#111111] font-bold text-xs rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#E5A855]" />
                <span>nzlpatwary901@gmail.com</span>
              </span>
              <span>Available for global projects</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
