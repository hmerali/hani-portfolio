// Work experience, in the order Hani specified. Descriptions are Hani's exact
// wording. Tech chips are extracted only from tools named in those descriptions.
// Dates for the two research roles are pending — left undefined until provided.

export interface Experience {
  org: string;
  title: string;
  period?: string;
  location?: string;
  stack: string[];
  current?: boolean;
  description?: string;
}

export const experience: Experience[] = [
  {
    org: 'Child Poverty Action Lab (CPAL)',
    title: 'Software Engineering Intern',
    period: '2026 — Present',
    location: 'Dallas, TX',
    current: true,
    stack: [],
  },
  {
    org: 'Child Poverty Action Lab (CPAL)',
    title: 'Software Engineering Intern',
    period: 'Jun — Aug 2025',
    location: 'Dallas, TX',
    stack: ['R Shiny', 'Leaflet', 'GIS', 'Data Visualization'],
    description:
      'Developed an interactive Dallas housing dashboard using R Shiny and Leaflet to visualize housing and demographic data across 50+ ZIP codes, 100+ neighborhoods, and 200+ school campuses. Built mapping, filtering, and reporting features used by nonprofits and community organizations.',
  },
  {
    org: 'Code2College',
    title: 'Software Engineering Intern',
    period: 'Jun — Aug 2023',
    location: 'Dallas, TX',
    stack: ['HTML', 'CSS', 'JavaScript', 'Agile'],
    description:
      'Developed a web based lesson sharing platform using HTML, CSS, and JavaScript to improve collaboration for educators and support more than 2,500 students. Designed responsive interfaces and implemented new application features in an Agile environment.',
  },
  {
    org: 'Freightcom',
    title: 'Quality Assurance and Software Engineering Intern',
    period: 'Jun — Aug 2024',
    location: 'Dallas, TX',
    stack: ['QA / Testing', 'Test Planning', 'Agile'],
    description:
      'Designed and executed test plans across 200+ application features, improving software quality for a platform serving more than 10,000 customers. Identified defects, validated fixes, and collaborated with engineers before production releases.',
  },
  {
    org: 'The University of Texas at Arlington — IDIR Lab',
    title: 'Artificial Intelligence Research Intern',
    period: 'Jun — Aug 2025',
    location: 'Arlington, TX',
    stack: ['GPT-4o mini', 'Prompt Engineering', 'Fitbit Data'],
    description:
      'Developed AI generated health coaching workflows using GPT 4o mini, Fitbit health metrics, and weather data. Designed and evaluated 45 personalized intervention messages across 15 health alert scenarios using prompt engineering.',
  },
  {
    org: 'UT Health Science Center at San Antonio',
    title: 'Artificial Intelligence Research Volunteer',
    period: 'Sep 2025 — Jun 2026',
    location: 'San Antonio, TX',
    stack: ['Machine Learning', 'Data Pipelines', 'Multimodal Data'],
    description:
      'Conducted machine learning research using infant cry recordings and developmental assessment data to study autism related outcomes. Built data processing pipelines and evaluated predictive models using multimodal datasets.',
  },
];
