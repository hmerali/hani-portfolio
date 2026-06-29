// Work experience, most recent first. All details are from the résumé,
// except the current CPAL role which is intentionally minimal (per Hani:
// "we haven't done much yet — just put current").

export interface Experience {
  org: string;
  title: string;
  period: string;
  location: string;
  stack: string[];
  current?: boolean;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    org: 'Child Poverty Action Lab',
    title: 'Software Engineer',
    period: '2026 — Present',
    location: 'Dallas, TX',
    current: true,
    stack: [],
    bullets: [
      'Current role — continuing to build software at the Child Poverty Action Lab.',
    ],
  },
  {
    org: 'Child Poverty Action Lab',
    title: 'Software Engineering Intern',
    period: 'Jun — Aug 2025',
    location: 'Dallas, TX',
    stack: ['R Shiny', 'Leaflet', 'GIS', 'R', 'Data Visualization', 'Git'],
    bullets: [
      'Developed an interactive housing analytics platform using R Shiny and Leaflet to visualize affordability, displacement, and demographic trends across 50+ ZIP codes, 100+ neighborhoods, and 200+ school campuses.',
      'Engineered dynamic filtering and geospatial querying by integrating public housing datasets, enabling nonprofits and legal aid organizations to identify high-risk communities more efficiently.',
      'Architected automated reporting workflows using GIS analysis and reactive dashboard components, reducing housing research time from hours to minutes.',
    ],
  },
  {
    org: 'Freightcom',
    title: 'Software Engineering Intern',
    period: 'Jun — Aug 2024',
    location: 'Dallas, TX',
    stack: ['Java', 'Jira', 'Agile', 'Software Testing', 'REST APIs'],
    bullets: [
      'Collaborated with software engineers to develop and validate 200+ platform features supporting shipment booking, tracking, and logistics management for 10,000+ business customers.',
      'Engineered integration testing and defect-analysis workflows across REST APIs and backend services, improving release stability and accelerating issue resolution during Agile cycles.',
      'Executed 100+ structured test scenarios across customer-facing applications and core logistics systems, contributing to a 30% reduction in production errors.',
    ],
  },
  {
    org: 'Code2College',
    title: 'Software Engineering Intern',
    period: 'Jun — Aug 2023',
    location: 'Dallas, TX',
    stack: ['Kotlin', 'Android Studio', 'Firebase', 'Cloud Firestore', 'Git'],
    bullets: [
      'Developed a mobile lesson-sharing application using Kotlin and Android Studio, supporting content distribution for 2,500+ students.',
      'Engineered Cloud Firestore and Firebase Authentication integrations to manage user accounts, lesson data, and real-time content updates.',
    ],
  },
];
