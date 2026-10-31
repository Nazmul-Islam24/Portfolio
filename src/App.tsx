/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SelectedWorkSection from './components/SelectedWorkSection';
import ApproachSection from './components/ApproachSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
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
    <div className="min-h-screen bg-[#0A0C10] text-[#F3F4F6] selection:bg-[#E5A855]/30 selection:text-white font-sans antialiased">
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Flow: Reordered & Streamlined */}
      <main>
        {/* Section 01: Hero with 24/7 Canvas 3D Animation & Side-by-Side Mobile Layout */}
        <HeroSection onOpenContact={handleOpenContact} />

        {/* Section 02: The Problem Reality (3 Core Business Tests) */}
        <ProblemSection />

        {/* Section 03: Selected Work */}
        <SelectedWorkSection
          onSelectProject={handleSelectProject}
          onOpenLiveDemo={handleOpenLiveDemo}
        />

        {/* Section 04: My Approach (Moved above Services as requested) */}
        <ApproachSection />

        {/* Section 05: From Business Goals to Better Digital Experiences (Services Offerings) */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* Section 06: Built With Modern Frontend Technology (2 columns on mobile) */}
        <SkillsSection />

        {/* Section 07: About Nazmul (Background, Credentials, Philosophy) */}
        <AboutSection onOpenContact={handleOpenContact} />

        {/* Section 08: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 09: Contact & Direct Engagement Section */}
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
