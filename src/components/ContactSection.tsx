import { useState } from 'react';
import { ArrowUpRight, Mail, Send, CheckCircle2, Linkedin, Github, Instagram } from 'lucide-react';

interface ContactSectionProps {
  onOpenModal?: () => void;
}

export default function ContactSection({ onOpenModal }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'New Business Website',
    budget: '$1,000 - $3,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Open mailto fallback with prefilled subject & body
    const subject = encodeURIComponent(`Inquiry from ${formData.name} regarding ${formData.projectType}`);
    const body = encodeURIComponent(
      `Hello Nazmul,\n\nMy Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\n\nProject Overview:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:nzlpatwary901@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-[#111111] text-[#F5F3EF] py-24 md:py-36 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B88A5A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Call To Action */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B88A5A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88A5A]" />
              <span>Let's Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white text-balance uppercase">
              HAVE A BUSINESS THAT DESERVES A BETTER ONLINE EXPERIENCE?
            </h2>

            <p className="text-base sm:text-lg text-neutral-400 max-w-lg leading-relaxed">
              Let's build something that works for your business. Whether you need a ground-up website, a high-converting redesign, or strategic frontend guidance.
            </p>

            {/* Direct Communication Channels */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Direct Inbox
                </p>
                <a
                  href="mailto:nzlpatwary901@gmail.com"
                  className="text-lg sm:text-xl font-semibold text-white hover:text-[#B88A5A] transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5 text-[#B88A5A]" />
                  <span>nzlpatwary901@gmail.com</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono font-semibold uppercase text-neutral-400">
                <a
                  href="https://www.linkedin.com/in/nazmul-islam-0b73003a7/?isSelfProfile=true"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#B88A5A]" />
                  <span>LinkedIn ↗</span>
                </a>

                <span className="text-neutral-700">/</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#B88A5A]" />
                  <span>Instagram ↗</span>
                </a>

                <span className="text-neutral-700">/</span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-[#B88A5A]" />
                  <span>GitHub ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Intent Inquiry Form */}
          <div className="lg:col-span-6 bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your default email client was opened to finalize the dispatch to <span className="text-white font-medium">nzlpatwary901@gmail.com</span>. I will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 bg-white text-black text-xs font-bold rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/10 pb-4 mb-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Start a Conversation
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Tell me about your business goals and current web presence.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#1F1F1F] border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#B88A5A]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#1F1F1F] border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#B88A5A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#1F1F1F] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#B88A5A]"
                    >
                      <option>New Business Website</option>
                      <option>Website Redesign & Modernization</option>
                      <option>UX & Conversion Optimization</option>
                      <option>Custom Frontend Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#1F1F1F] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#B88A5A]"
                    >
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $3,000</option>
                      <option>$3,000 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Project Details & Business Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your business, current website challenges, and what you want to achieve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#1F1F1F] border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#B88A5A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#FFFFFF] text-[#111111] font-bold text-sm rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowUpRight className="w-4 h-4 text-[#111111]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
