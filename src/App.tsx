/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustPositioningStrip from './components/TrustPositioningStrip';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import SelectedWorkSection from './components/SelectedWorkSection';
import ApproachSection from './components/ApproachSection';
import ValueSection from './components/ValueSection';
import SkillsSection from './components/SkillsSection';
import WhyWorkWithMeSection from './components/WhyWorkWithMeSection';
import AboutSection from './components/AboutSection';
import CredibilitySection from './components/CredibilitySection';
import ExpectationsSection from './components/ExpectationsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ContactModal from './components/ContactModal';
import { ProjectCaseStudy } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [modalTab, setModalTab] = useState<'case-study' | 'live-demo'>('case-study');
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleSelectProject = (project: ProjectCaseStudy) => {
    setSelectedProject(project);
    setModalTab('case-study');
  };

  const handleOpenLiveDemo = (project: ProjectCaseStudy) => {
    setSelectedProject(project);
    setModalTab('live-demo');
  };

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#171717] selection:bg-[#B88A5A]/20 selection:text-[#171717] font-sans antialiased">
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Flow */}
      <main>
        {/* Section 01: Hero with Editorial Framing & Value-First Messaging */}
        <HeroSection onOpenContact={handleOpenContact} />

        {/* Section 02: The Problem Section (3 Cards) */}
        <ProblemSection />

        {/* Section 03: Trust & Positioning Strip (Dark) */}
        <TrustPositioningStrip />

        {/* Section 04: What I Do / Services (4 Offerings) */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* Section 05: Selected Work (6 Custom Industry Concepts) */}
        <SelectedWorkSection
          onSelectProject={handleSelectProject}
          onOpenLiveDemo={handleOpenLiveDemo}
        />

        {/* Section 06: My Approach (5-Step Framework) */}
        <ApproachSection />

        {/* Section 07: How I Create Value (5 Pillars) */}
        <ValueSection />

        {/* Section 08: Modern Frontend Technology */}
        <SkillsSection />

        {/* Section 09: Why Work With Me */}
        <WhyWorkWithMeSection />

        {/* Section 10: About Nazmul (Editorial Layout & Background) */}
        <AboutSection onOpenContact={handleOpenContact} />

        {/* Section 11: Quantitative Credibility Strip (Dark) */}
        <CredibilitySection />

        {/* Section 12: What Clients Can Expect */}
        <ExpectationsSection />

        {/* Section 13: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 14: Contact & Engagement Section (Deep Dark) */}
        <ContactSection onOpenModal={handleOpenContact} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* In-Depth Case Study & Interactive Prototype Modal */}
      <CaseStudyModal
        project={selectedProject}
        initialTab={modalTab}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />

      {/* Quick Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
