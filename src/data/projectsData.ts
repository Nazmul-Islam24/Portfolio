import salonPreview from '../assets/images/salon_preview.avif'
import dentalPreview from '../assets/images/dental_preview.avif'




export interface ProjectCaseStudy {
  id: string;
  number: string;
  industry: string;
  name: string;
  tagline: string;
  oneLineProblem: string;
  focus: string[];
  businessGoalTags: string[];
  image: string;
  themeStyle: 'dental' | 'law' | 'salon' | 'gym' | 'homeservice' | 'restaurant';
  /**
   * Visibility Status:
   * 'active' => Rendered on portfolio with full case study & interactive multi-device preview.
   * 'hidden' => Completely hidden; takes ZERO space, ZERO margins, ZERO blocking on the website.
   */
  status: 'active' | 'hidden';
  /**
   * Live Website URL:
   * Paste your full deployed website link here (e.g. 'https://my-dental-clinic.vercel.app').
   * When provided, the system embeds and runs the real website inside Desktop & Mobile device simulators!
   */
  liveUrl?: string;
  /**
   * Optional GitHub repository link
   */
  githubUrl?: string;
  challenge: string;
  goals: string[];
  approachSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  businessDecisions: {
    title: string;
    rationale: string;
  }[];
  technologies: string[];
  liveFeatures: {
    headline: string;
    subheadline: string;
    actionLabel: string;
    secondaryAction?: string;
    highlights: string[];
    sampleStats?: { label: string; value: string }[];
  };
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'dental-clinic',
    number: '01',
    industry: 'DENTAL CLINIC',
    name: 'Verdant Dental Care',
    tagline: 'Trust-first digital experience designed around consultation and appointment journeys.',
    oneLineProblem: 'Dental patients often experience appointment hesitation when pricing, credentials, and procedure comfort are not instantly transparent.',
    focus: ['Trust Architecture', 'Appointment Journey', 'Responsive UX', 'SEO Foundation'],
    businessGoalTags: ['TRUST', 'APPOINTMENTS', 'UX'],
    image: dentalPreview,
    themeStyle: 'dental',
    status: 'active', // ACTIVE: currently visible on portfolio
    liveUrl: 'https://verdant-dental-care1.vercel.app/', // PASTE YOUR LIVE DENTIST SITE URL HERE (e.g. 'https://your-dentist-site.vercel.app')
    challenge: 'Prospective patients visit with high anxiety and leave websites within 10 seconds if clinic hygiene, doctor credentials, and simple scheduling options are not immediately clear.',
    goals: [
      'Build immediate clinical trust and warm bedside manner online',
      'Eliminate booking friction with direct step-by-step appointment scheduling',
      'Clarify treatment options and financing before the initial consult'
    ],
    approachSteps: [
      { number: '01', title: 'Discovery', description: 'Audited patient friction points during tooth pain and cosmetic inquiry workflows.' },
      { number: '02', title: 'Information Architecture', description: 'Reorganized medical jargon into intuitive treatment clusters (Cosmetic, Preventive, Emergency).' },
      { number: '03', title: 'UX Direction', description: 'Created an effortless 2-step booking widget anchored at top and bottom viewports.' },
      { number: '04', title: 'Visual Design', description: 'Selected soothing travertine and clinical ivory tones with high-contrast reassuring typography.' },
      { number: '05', title: 'Frontend Development', description: 'Engineered smooth client-side validation, appointment date picker, and sub-second load times.' },
      { number: '06', title: 'Responsive Optimization', description: 'Tested thumbs-only booking flow across iOS Safari and Android Chrome.' }
    ],
    businessDecisions: [
      {
        title: 'High-Visibility Appointment CTA',
        rationale: 'Primary conversion goal is getting qualified prospective patients into the dental chair. The booking trigger is permanently accessible without being obtrusive.'
      },
      {
        title: 'Treatment Organized by Patient Inquiries',
        rationale: 'Patients search by problem ("Crooked Teeth", "Painful Molar") rather than clinical terminology ("Orthodontic Realignment").'
      },
      {
        title: 'Verifiable Credentials & Patient Outcomes',
        rationale: 'Placed board certifications and high-resolution case photographs directly before the booking trigger to resolve pre-booking hesitation.'
      }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    liveFeatures: {
      headline: 'Gentle, Modern Dental Care Designed Around Your Comfort',
      subheadline: 'State-of-the-art restorative dentistry and cosmetic smiles in a calming, anxiety-free sanctuary.',
      actionLabel: 'Schedule Your Consultation',
      secondaryAction: 'Explore Treatments',
      highlights: ['Same-Day Emergency Consults', 'Zero-Discomfort Digital Scans', 'Transparent Upfront Pricing'],
      sampleStats: [
        { label: 'Patient Retention', value: '98.4%' },
        { label: 'Booking Time', value: '< 45s' },
        { label: '5-Star Reviews', value: '450+' }
      ]
    }
  },
  {
    id: 'beauty-salon',
    number: '02',
    industry: 'BEAUTY & HAIR SALON',
    name: 'Beauty Salon',
    tagline: 'A visual-first experience designed around discovery, artistic trust and appointment booking.',
    oneLineProblem: 'Discerning clients seek salon services based on visual mastery and stylist artistry, but most salon sites are clunky and lack aesthetic finesse.',
    focus: ['Editorial Lookbook', 'Stylist Portfolio Showcase', 'Instant Chair Reservation', 'Brand Atmosphere'],
    businessGoalTags: ['VISUAL DISCOVERY', 'BOOKING', 'BRAND'],
    image: salonPreview,
    themeStyle: 'salon',
    status: 'active', // ACTIVE: currently visible on portfolio
    liveUrl: 'https://beauty-hair-salon-topaz.vercel.app/', // PASTE YOUR LIVE SALON SITE URL HERE (e.g. 'https://your-salon-site.vercel.app')
    challenge: 'A luxury salon cannot convert high-ticket appointments with generic booking software widgets. The website itself must reflect haute couture elegance.',
    goals: [
      'Showcase stylist artistry and hair transformations with an editorial magazine aesthetic',
      'Provide clear, tiered service descriptions (Balayage, Sculpting, Botanical Rituals)',
      'Drive friction-free appointment reservations on mobile devices'
    ],
    approachSteps: [
      { number: '01', title: 'Discovery', description: 'Observed client behavior on Instagram vs booking platforms to bridge the visual-to-booking gap.' },
      { number: '02', title: 'Information Architecture', description: 'Organized services by desired look and stylist tier to avoid pricing ambiguity.' },
      { number: '03', title: 'UX Direction', description: 'Created an interactive visual lookbook with click-to-book stylist pairing.' },
      { number: '04', title: 'Visual Design', description: 'Applied warm travertine neutrals, graceful serifs, and high-fashion whitespace.' },
      { number: '05', title: 'Frontend Development', description: 'Implemented lightweight smooth image carousels and micro-transitions.' },
      { number: '06', title: 'Responsive Optimization', description: 'Fine-tuned touch gestures and instant date selection for mobile users on the go.' }
    ],
    businessDecisions: [
      {
        title: 'Editorial Visual Hierarchy',
        rationale: 'Visitors book with their eyes. High-definition work samples are presented before service price sheets.'
      },
      {
        title: 'Stylist-Matched Booking Flow',
        rationale: 'Clients book the artisan, not just a service. Highlighting stylist bios dramatically lifts repeat bookings.'
      },
      {
        title: 'Transparent Timing & Package Inclusions',
        rationale: 'Detailed appointment duration and complimentary rituals so clients feel pampered before arrival.'
      }
    ],
    technologies: ['React', 'Next-Gen Responsive Grid', 'Tailwind CSS', 'Motion Effects'],
    liveFeatures: {
      headline: 'Bespoke Hair Artistry & Botanical Wellness',
      subheadline: 'Crafting effortless silhouettes, custom color palettes, and restorative scalp therapy in an architectural sanctuary.',
      actionLabel: 'Reserve Your Appointment',
      secondaryAction: 'Browse The Lookbook',
      highlights: ['Master Colorist Specialists', 'Organic Clean-Air Formulations', 'Private Styling Suites'],
      sampleStats: [
        { label: 'Client Satisfaction', value: '99.2%' },
        { label: 'Booking Conversion', value: '3.4x' },
        { label: 'Instagram Community', value: '42K' }
      ]
    }
  },
  {
    id: 'law-firm',
    number: '03',
    industry: 'CORPORATE LAW FIRM',
    name: 'Apex & Partners Legal Counsel',
    tagline: 'A high-authority digital experience designed to communicate expertise, credibility and make consultation seamless.',
    oneLineProblem: 'High-stake corporate clients dismiss law firms whose websites look template-driven or fail to demonstrate verified litigation capabilities.',
    focus: ['Authority Presentation', 'Confidential Inquiry Flow', 'Practice Area Indexing', 'Fast Loading'],
    businessGoalTags: ['AUTHORITY', 'CONSULTATION', 'CLARITY'],
    image: '/src/assets/images/law_preview_1790179232479.jpg',
    themeStyle: 'law',
    status: 'hidden', // HIDDEN: not yet built, takes zero space on portfolio
    liveUrl: '',
    challenge: 'General counsels and founders seek decisive legal representation. Outdated, clutter-filled legal directories cause immediate skepticism.',
    goals: [
      'Project unquestioned institutional credibility and courtroom track record',
      'Clarify complex corporate practice areas with transparent scope outlines',
      'Provide a protected, direct consultation channel for executive inquiries'
    ],
    approachSteps: [
      { number: '01', title: 'Discovery', description: 'Mapped how corporate executives assess legal competency and retainer inquiries.' },
      { number: '02', title: 'Information Architecture', description: 'Structured partner profiles, landmark case summaries, and practice areas into concise pathways.' },
      { number: '03', title: 'UX Direction', description: 'Designed a dignified, distraction-free reading experience prioritizing attorney track records.' },
      { number: '04', title: 'Visual Design', description: 'Curated deep charcoal, editorial ivory, and subtle brass accents evoking prestige chambers.' },
      { number: '05', title: 'Frontend Development', description: 'Built an encrypted intake form modal with instant client feedback and clean accessibility.' },
      { number: '06', title: 'Responsive Optimization', description: 'Ensured fluid readability across executive tablets and mobile devices.' }
    ],
    businessDecisions: [
      {
        title: 'Executive Summary at Top of Page',
        rationale: 'C-suite visitors require immediate confirmation of the firm\'s jurisdiction and deal experience before scrolling.'
      },
      {
        title: 'Attorney Specialization Filtering',
        rationale: 'Allowed clients to find the exact partner suited to their regulatory dispute in two clicks.'
      },
      {
        title: 'Direct Private Case Evaluation CTA',
        rationale: 'Replaced generic "contact us" with a discrete "Request Confidential Evaluation" flow.'
      }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Accessible Forms', 'Vite'],
    liveFeatures: {
      headline: 'Strategic Legal Counsel for High-Stakes Corporate Challenges',
      subheadline: 'Representing multinational enterprises, venture-backed companies, and executives in complex regulatory and commercial disputes.',
      actionLabel: 'Request Confidential Case Evaluation',
      secondaryAction: 'Review Practice Areas',
      highlights: ['$2.4B+ Deal Volume Advised', 'Tier-1 Commercial Litigation', 'Strict Attorney-Client Confidentiality'],
      sampleStats: [
        { label: 'Litigation Success', value: '94%' },
        { label: 'Years of Precedence', value: '25+' },
        { label: 'Corporate Clients', value: '180+' }
      ]
    }
  },
  {
    id: 'gym-fitness',
    number: '04',
    industry: 'GYM & ATHLETIC LAB',
    name: 'Vanguard Performance Lab',
    tagline: 'A high-energy website experience built around programs, memberships and conversion-focused CTAs.',
    oneLineProblem: 'Fitness facilities lose prospective members when memberships are complicated and class energy fails to convey through the screen.',
    focus: ['High-Velocity Layout', 'Trial Pass Funnel', 'Program Breakdown', 'Coach Credibility'],
    businessGoalTags: ['MEMBERSHIP', 'ENERGY', 'CONVERSION'],
    image: '/src/assets/images/gym_preview_1790179261882.jpg',
    themeStyle: 'gym',
    status: 'hidden', // HIDDEN: not yet built, takes zero space on portfolio
    liveUrl: '',
    challenge: 'Prospects need an adrenaline spark and clear next step. Passive, text-heavy gym websites produce low trial pass signups.',
    goals: [
      'Inject visceral athletic energy using bold typography and high-contrast visuals',
      'Make membership tiers crystal clear with zero hidden gym fees',
      'Capture prospective member leads with a zero-risk 1-day pass claim'
    ],
    approachSteps: [
      { number: '01', title: 'Discovery', description: 'Identified that athletes make decisions based on training equipment and coaching pedigree.' },
      { number: '02', title: 'Information Architecture', description: 'Split training offerings into Strength, Hyrox, Recovery, and Personal Coaching.' },
      { number: '03', title: 'UX Direction', description: 'Created an immediate 1-click pass selector with SMS/Email confirmation.' },
      { number: '04', title: 'Visual Design', description: 'Utilized intense charcoal black, athletic amber accents, and bold geometric sans type.' },
      { number: '05', title: 'Frontend Development', description: 'Engineered performant micro-interactions, timetable tabs, and fast loading media.' },
      { number: '06', title: 'Responsive Optimization', description: 'Ensured timetable and pass claim work seamlessly with one-handed mobile grip.' }
    ],
    businessDecisions: [
      {
        title: 'TRAIN. PERFORM. BECOME. Lead Statement',
        rationale: 'Establishes a high-standard athletic mindset that repels casual churn and attracts dedicated fitness enthusiasts.'
      },
      {
        title: 'Instant 1-Day Trial Pass Claim',
        rationale: 'Lowered barrier to entry by requiring only name and phone to generate an instant QR locker code.'
      },
      {
        title: 'Transparent Tier Comparison',
        rationale: 'Eliminated gym sales gimmicks by laying out exactly what Open Gym vs All-Access Coaching delivers.'
      }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'High-Contrast UI'],
    liveFeatures: {
      headline: 'TRAIN. PERFORM. BECOME.',
      subheadline: 'Elite athletic conditioning, Olympic lifting platforms, and science-backed recovery protocols for dedicated athletes.',
      actionLabel: 'Claim Your Free 1-Day Pass',
      secondaryAction: 'View Training Timetable',
      highlights: ['Eleiko Competition Rigs', 'Infrared Sauna & Cold Plunge', 'Certified Strength Coaches'],
      sampleStats: [
        { label: 'Pass Claim Conversion', value: '+68%' },
        { label: 'Active Members', value: '650+' },
        { label: 'Athlete PRs Logged', value: '4,200+' }
      ]
    }
  },
  {
    id: 'home-service',
    number: '05',
    industry: 'HOME & RESIDENTIAL SERVICES',
    name: 'RapidFix Pro Specialists',
    tagline: 'A conversion-focused website designed to make finding a service and requesting help effortless.',
    oneLineProblem: 'Homeowners experiencing plumbing leaks, HVAC failures, or electrical faults need urgent assistance, not complex marketing essays.',
    focus: ['Urgent Dispatch CTA', '2-Minute Quote Calculator', 'Local Service Badging', 'Trust & Insurance Proof'],
    businessGoalTags: ['LEADS', 'LOCAL SERVICE', 'QUICK ACTION'],
    image: '/src/assets/images/home_service_preview_1790179308949.jpg',
    themeStyle: 'homeservice',
    status: 'hidden', // HIDDEN: not yet built, takes zero space on portfolio
    liveUrl: '',
    challenge: 'When a pipe bursts at 8 PM, customers call the first certified contractor who answers or offers instant dispatch confirmation.',
    goals: [
      'Provide an unmissable Emergency Hotline and fast dispatch guarantee',
      'Offer a 3-question instant quote calculator for routine maintenance projects',
      'Display licensed, insured, and background-checked technicians to build trust'
    ],
    approachSteps: [
      { number: '01', title: 'Discovery', description: 'Analyzed residential customer anxiety during emergency household breakdowns.' },
      { number: '02', title: 'Information Architecture', description: 'Placed emergency dispatch at top priority followed by transparent routine services.' },
      { number: '03', title: 'UX Direction', description: 'Built an interactive quote estimator calculating realistic service ranges in 45 seconds.' },
      { number: '04', title: 'Visual Design', description: 'Clean technical blue and amber warning accents that communicate professional speed and reliability.' },
      { number: '05', title: 'Frontend Development', description: 'Implemented click-to-call direct routing and responsive multi-field dispatch request.' },
      { number: '06', title: 'Responsive Optimization', description: 'Sticky bottom call bar for instant tap-to-call on all mobile viewports.' }
    ],
    businessDecisions: [
      {
        title: 'Prominent "NEED HELP NOW?" Banner',
        rationale: 'Directs distressed customers straight to immediate assistance without needing to scroll.'
      },
      {
        title: 'Upfront Flat-Rate Pricing Promise',
        rationale: 'Combats common contractor mistrust with a "No Hidden Diagnostics Fees" guarantee.'
      },
      {
        title: 'Live Service Radius Map & ETA',
        rationale: 'Shows real-time dispatch availability to reassure the customer that help is nearby.'
      }
    ],
    technologies: ['React', 'Interactive Estimator', 'Tailwind CSS', 'Mobile Action Triggers'],
    liveFeatures: {
      headline: 'NEED HELP NOW? Fast, Certified Home Repairs in Under 60 Minutes',
      subheadline: 'Licensed plumbers, HVAC technicians, and master electricians available 24/7 with upfront flat-rate pricing.',
      actionLabel: 'Get Instant Free Quote →',
      secondaryAction: 'Call 24/7 Dispatch',
      highlights: ['60-Minute Response Guarantee', 'Licensed, Bonded & Insured', '100% Satisfaction Warranty'],
      sampleStats: [
        { label: 'Average Arrival ETA', value: '38 mins' },
        { label: 'Jobs Completed', value: '12,500+' },
        { label: 'Google Rating', value: '4.9 ★' }
      ]
    }
  },
  {
    id: 'restaurant-cafe',
    number: '06',
    industry: 'RESTAURANT & SPECIALTY CAFÉ',
    name: 'L\'Arôme Bistro & Roastery',
    tagline: 'A storytelling-driven experience combining culinary discovery, atmosphere and reservation journeys.',
    oneLineProblem: 'Guests drop off restaurant sites when menus are locked in unreadable PDF downloads and reservation links redirect to confusing portals.',
    focus: ['Sensory Storytelling', 'Live Digital Menu', 'Direct Table Booking', 'Atmospheric Photography'],
    businessGoalTags: ['DISCOVERY', 'MENU', 'RESERVATION'],
    image: '/src/assets/images/restaurant_preview_1790179327697.jpg',
    themeStyle: 'restaurant',
    status: 'hidden', // HIDDEN: not yet built, takes zero space on portfolio
    liveUrl: '',
    challenge: 'Diners want to preview the ambiance, check dietary options, and reserve a table in seconds from their phone before evening rush.',
    goals: [
      'Eliminate static PDF menus with a responsive, filterable digital menu',
      'Communicate the artisanal farm-to-table ethos through sensory layout and photography',
      'Enable seamless table reservations with instant SMS confirmation'
    ],
    approachSteps: [
      { number: '01', title: 'Discovery', description: 'Interviewed dining guests on their mobile habits when choosing a dinner venue.' },
      { number: '02', title: 'Information Architecture', description: 'Organized menu into Brunch, Evening Dining, Cellar Wine, and Specialty Single-Origin Roasts.' },
      { number: '03', title: 'UX Direction', description: 'Engineered an interactive table booking widget with guest count and date selector.' },
      { number: '04', title: 'Visual Design', description: 'Curated deep espresso browns, champagne highlights, and artisanal serif headings.' },
      { number: '05', title: 'Frontend Development', description: 'Interactive dietary filters (Gluten-Free, Plant-Based) that update the menu instantly.' },
      { number: '06', title: 'Responsive Optimization', description: 'Tested smooth scrolling and table booking on small mobile screens.' }
    ],
    businessDecisions: [
      {
        title: 'Zero-Download Responsive Menu',
        rationale: 'Replaced pinch-and-zoom PDF files with an accessible, high-speed mobile menu.'
      },
      {
        title: '3-Click Table Reservation Widget',
        rationale: 'Keeps diners inside the branded experience rather than losing them to third-party portals.'
      },
      {
        title: 'Atmospheric Storytelling Sections',
        rationale: 'Highlights open flame cooking and ethically sourced beans to justify premium dining positioning.'
      }
    ],
    technologies: ['React', 'Interactive Menu Filters', 'Tailwind CSS', 'Reservation Engine UI'],
    liveFeatures: {
      headline: 'Artisanal Woodfired Kitchen & Single-Origin Roastery',
      subheadline: 'Crafting seasonal plates from heirloom ingredients, accompanied by small-batch natural wines and signature espresso.',
      actionLabel: 'Reserve A Table',
      secondaryAction: 'Explore Seasonal Menu',
      highlights: ['Heirloom Farm Ingredients', 'Natural & Low-Intervention Wines', 'Specialty Micro-Roastery'],
      sampleStats: [
        { label: 'Weekend Table Fill', value: '100%' },
        { label: 'Digital Menu Load', value: '0.3s' },
        { label: 'Farm Partners', value: '18 Local' }
      ]
    }
  }
];

export const SKILLS_LIST = [
  { name: 'HTML5', category: 'Markup & Semantic SEO', tooltip: 'Semantic structure, accessible landmarks, and rich metadata foundation' },
  { name: 'CSS3', category: 'Styling Architecture', tooltip: 'Modern layout systems, responsive variables, and zero-jank transitions' },
  { name: 'JavaScript', category: 'Core Language', tooltip: 'ESNext features, asynchronous workflows, and DOM optimization' },
  { name: 'TypeScript', category: 'Type Safety', tooltip: 'Strict types, interface definitions, and bug prevention at compile time' },
  { name: 'React', category: 'Frontend UI', tooltip: 'Component-driven state architecture, custom hooks, and reactive UI' },
  { name: 'Next.js', category: 'Production Framework', tooltip: 'Server components, dynamic routing, and fast initial page loads' },
  { name: 'Tailwind CSS', category: 'Utility Styling', tooltip: 'Design token discipline, high consistency, and minimal CSS payload' },
  { name: 'Git & GitHub', category: 'Version Control', tooltip: 'Branching workflows, atomic commits, and collaborative delivery' }
];

export const FAQS = [
  {
    question: 'Do you redesign existing websites?',
    answer: 'Yes. I can evaluate your current website, pinpoint conversion drop-off points, and systematically transform its structure, visual hierarchy, mobile responsiveness, and client journey into a modern, high-performing asset.'
  },
  {
    question: 'Do you build from scratch?',
    answer: 'Yes. Projects can be researched, structured, designed, and developed from the ground up tailored to your business model, customer psychology, and specific market positioning.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'I specialize in modern, battle-tested frontend standards: HTML5, CSS3, JavaScript (ESNext), TypeScript, React, Next.js, and Tailwind CSS. Clean, maintainable code without bloated templates or dependencies.'
  },
  {
    question: 'How long does a website take?',
    answer: 'Timeline typically ranges from 1 to 3 weeks depending on the project scope, custom interactive requirements, content readiness, and client feedback cycles. Every milestone is transparently tracked.'
  },
  {
    question: 'Can you help with website strategy?',
    answer: 'Absolutely. A website is a business asset, not just graphic art. I help define what value the site must communicate first, how to organize services around real buyer questions, and which calls to action deliver the highest return.'
  }
];
