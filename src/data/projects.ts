// Featured project case studies. Content is faithful to the résumé and the
// NeuroShield description provided by Hani. No metrics or claims are invented.

export interface CaseSection {
  heading: string;
  body: string[]; // paragraphs
  bullets?: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  context: string; // short line shown on cards (e.g. competition / org)
  year?: string;
  tags: string[];
  // Card summary
  summary: string;
  // Case-study body
  sections: CaseSection[];
}

export const projects: Project[] = [
  {
    slug: 'neuroshield',
    title: 'NeuroShield',
    tagline: 'Predicting and preventing viral neuroinvasion before it reaches the brain.',
    context: 'ExploraVision competition project',
    tags: ['AI / ML', 'Biomedical', 'Precision Medicine', 'Simulation', 'Research'],
    summary:
      'A biomedical defense system that uses an AI-powered risk index to predict, prevent, and respond to viral neuroinvasion before viruses can enter the brain and cause neurological damage.',
    sections: [
      {
        heading: 'The problem',
        body: [
          'Most responses to viral infection are reactive — treatment begins only after a virus has already spread and begun causing damage. When that damage reaches the central nervous system, the consequences can include encephalitis, neurodegeneration, and other virus-related neurological disorders.',
          'NeuroShield asks a different question: what if we could predict the risk of neuroinvasion early, and intervene before a virus ever crosses into the brain?',
        ],
      },
      {
        heading: 'The approach',
        body: [
          'NeuroShield takes a proactive approach by continuously monitoring biomarkers such as viral load, inflammation, receptor susceptibility, and blood-brain barrier (BBB) stress.',
          'These measurements feed an AI-powered Neuroinvasion Risk Index (NRI), which generates a personalized risk score, a confidence level, and a recommended course of action to identify patients who may be at risk of neurological complications.',
        ],
        bullets: [
          'Continuous biomarker monitoring: viral load, inflammation, receptor susceptibility, BBB stress.',
          'An AI-driven Neuroinvasion Risk Index (NRI) producing a personalized score, confidence level, and recommendation.',
          'A targeted defense response that activates when risk crosses a safe threshold.',
        ],
      },
      {
        heading: 'The defense response',
        body: [
          'If a patient’s NRI exceeds a safe threshold, NeuroShield activates a targeted defense system that temporarily blocks or redirects viral entry pathways using engineered nanobodies, receptor decoys, intelligent nanocarriers, and BBB-stabilizing therapies.',
          'The goal is to stop viruses from crossing into the central nervous system while minimizing disruption to normal brain function.',
        ],
      },
      {
        heading: 'What was built',
        body: [
          'Developed as an ExploraVision competition project, NeuroShield combines four components into a unified platform that demonstrates how artificial intelligence and precision medicine could work together to reduce the risk of virus-related neurological disorders.',
        ],
        bullets: [
          'A research paper grounding the system in the underlying science.',
          'An AI algorithm computing the Neuroinvasion Risk Index.',
          'A biosurveillance scanner prototype.',
          'A software simulation of the end-to-end platform.',
        ],
      },
    ],
  },
  {
    slug: 'visit',
    title: 'Hani (Visit)',
    tagline: 'A web-based communication platform for nonverbal autistic users.',
    context: 'Accessibility engineering project',
    tags: ['Accessibility', 'Web Speech API', 'JavaScript', 'Python', 'AAC'],
    summary:
      'A web-based AAC (augmentative and alternative communication) platform delivering customizable speech-generation interfaces for 20+ nonverbal autistic users.',
    sections: [
      {
        heading: 'The problem',
        body: [
          'Nonverbal autistic individuals — especially those with limited motor skills — need communication tools that adapt to them, not the other way around. Off-the-shelf interfaces are often rigid, hard to navigate, and not personalized to an individual’s vocabulary or motor abilities.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'I developed a web-based AAC platform using HTML, CSS, and JavaScript to deliver customizable speech-generation interfaces, serving 20+ nonverbal autistic users.',
        ],
        bullets: [
          'Engineered dynamic vocabulary-management systems, text-to-speech workflows (Web Speech API), and personalized communication boards.',
          'Streamlined communication for individuals with complex communication needs.',
          'Optimized interface accessibility and navigation efficiency through iterative testing, improving usability for nonverbal autistic individuals with limited motor skills.',
        ],
      },
      {
        heading: 'Why it matters',
        body: [
          'Accessibility is not a feature I bolt on at the end — it is the point. This project shaped how I think about every interface I build: who is excluded by default, and how design can give them a voice.',
        ],
      },
    ],
  },
  {
    slug: 'keyguard',
    title: 'AAC Keyguard Prototypes',
    tagline: 'CAD-designed keyguards making communication devices usable for limited motor skills.',
    context: 'Texas Technology Access Program · Aug — Dec 2025',
    year: '2025',
    tags: ['CAD', 'OpenSCAD', '3D Printing', 'Assistive Tech', 'Disability Advocacy'],
    summary:
      'Fifteen CAD keyguard prototype devices designed to improve communication-device accessibility for nonverbal autistic individuals with limited motor skills, built as an Accessibility Technology Ambassador.',
    sections: [
      {
        heading: 'The context',
        body: [
          'As an Accessibility Technology Ambassador with the Texas Technology Access Program, I collaborated with 10+ clinicians, researchers, and accessibility professionals to evaluate AAC technologies for individuals with autism and communication disabilities.',
        ],
      },
      {
        heading: 'What I designed',
        body: [
          'I designed 15 CAD keyguard prototype devices using OpenSCAD and CAD modeling techniques. Keyguards are physical overlays that sit on top of a communication device, helping users with limited motor skills target the right key without mis-presses.',
        ],
        bullets: [
          'Used OpenSCAD and CAD modeling to design and iterate on 15 keyguard prototypes.',
          'Focused on improving communication-device accessibility for nonverbal autistic individuals with limited motor skills.',
          'Worked alongside clinicians and accessibility professionals to evaluate real-world fit.',
        ],
      },
      {
        heading: 'The throughline',
        body: [
          'Software, hardware, the design of a single physical overlay — the common thread across my work is removing barriers between people and the tools meant to help them.',
        ],
      },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
