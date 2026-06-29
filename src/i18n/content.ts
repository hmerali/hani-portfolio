// Bilingual content (English + Spanish). Single source of truth for the
// homepage and the project case-study pages. Prose is translated; technology
// names and skills stay in English (universal). All factual content is real
// (résumé + Hani's NeuroShield text + Hani's own About/experience wording).

export type Lang = 'en' | 'es';

export interface CaseSection {
  heading: string;
  body: string[];
  bullets?: string[];
}
export interface Project {
  slug: string;
  context: string;
  title: string;
  tagline: string;
  summary: string;
  tags: string[];
  sections: CaseSection[];
}
export interface Experience {
  org: string;
  title: string;
  period?: string;
  location?: string;
  stack: string[];
  current?: boolean;
  description?: string;
}
export interface Content {
  meta: { description: string };
  nav: { about: string; projects: string; experience: string; contact: string; resume: string };
  toggles: {
    toLight: string;
    toDark: string;
    toEs: string;
    toEn: string;
    langShort: string; // label shown on the language button (the OTHER language)
  };
  hero: { eyebrow: string; tagline: string; contact: string; resumeLabel: string };
  about: { eyebrow: string; heading: string; paras: string[] };
  projectsSection: {
    eyebrow: string;
    heading: string;
    viewDetails: string;
    skillsLabel: string;
    aboutLabel: string;
    close: string;
  };
  projects: Project[];
  experienceSection: { eyebrow: string; heading: string; current: string };
  experience: Experience[];
  contact: { eyebrow: string; heading: string; lead: string };
  footer: { tagline: string; built: string; email: string };
}

// Tech tags shared across locales.
const TAGS = {
  neuro: ['AI / ML', 'Biomedical', 'Precision Medicine', 'Simulation', 'Research'],
  visit: ['Accessibility', 'Web Speech API', 'JavaScript', 'Python', 'AAC'],
  keyguard: ['CAD', 'OpenSCAD', '3D Printing', 'Assistive Tech', 'Disability Advocacy'],
};

const en: Content = {
  meta: {
    description:
      'Hani Merali — software engineer and computer science student at UT Austin, working across accessibility, AI for healthcare, and civic data.',
  },
  nav: { about: 'About me', projects: 'Projects', experience: 'Experience', contact: 'Contact me', resume: 'Resume' },
  toggles: {
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    toEs: 'Ver en español',
    toEn: 'View in English',
    langShort: 'ES',
  },
  hero: {
    eyebrow: 'Computer Science · The University of Texas at Austin',
    tagline: 'Building data and technology for civic and human good.',
    contact: 'Contact me',
    resumeLabel: 'Resume (PDF)',
  },
  about: {
    eyebrow: 'About me',
    heading: 'A little about me.',
    paras: [
      'I’m a computer science student at UT Austin, and I enjoy building technology that solves real problems. Within tech, I’m most interested in where software creates meaningful impact through accessibility and assistive technology, AI for healthcare, and data driven tools that help communities make better decisions.',
      'Outside of tech, I enjoy spending time with friends and family, playing basketball, and following football. I also mentor younger students through my local mosque community.',
    ],
  },
  projectsSection: {
    eyebrow: 'Projects',
    heading: 'Things I’ve built. Click any project for details.',
    viewDetails: 'View details',
    skillsLabel: 'Skills used',
    aboutLabel: 'About the project',
    close: 'Close dialog',
  },
  projects: [
    {
      slug: 'neuroshield',
      context: 'ExploraVision competition project',
      title: 'NeuroShield',
      tagline: 'Predicting and preventing viral neuroinvasion before it reaches the brain.',
      summary:
        'A biomedical defense system that uses an AI-powered risk index to predict, prevent, and respond to viral neuroinvasion before viruses can enter the brain and cause neurological damage.',
      tags: TAGS.neuro,
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
      context: 'Accessibility engineering project',
      title: 'Hani (Visit)',
      tagline: 'A web-based communication platform for nonverbal autistic users.',
      summary:
        'A web-based AAC (augmentative and alternative communication) platform delivering customizable speech-generation interfaces for 20+ nonverbal autistic users.',
      tags: TAGS.visit,
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
      context: 'Texas Technology Access Program · Aug — Dec 2025',
      title: 'AAC Keyguard Prototypes',
      tagline: 'CAD-designed keyguards making communication devices usable for limited motor skills.',
      summary:
        'Fifteen CAD keyguard prototype devices designed to improve communication-device accessibility for nonverbal autistic individuals with limited motor skills, built as an Accessibility Technology Ambassador.',
      tags: TAGS.keyguard,
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
  ],
  experienceSection: { eyebrow: 'Experience', heading: 'Where I’ve worked.', current: 'Current' },
  experience: [
    {
      org: 'Child Poverty Action Lab (CPAL)',
      title: 'Software Engineering Intern',
      period: '2026 — Present',
      location: 'Dallas, TX',
      current: true,
      stack: [],
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
      org: 'The University of Texas at Arlington — IDIR Lab',
      title: 'Artificial Intelligence Research Intern',
      period: 'Jun — Aug 2025',
      location: 'Arlington, TX',
      stack: ['GPT-4o mini', 'Prompt Engineering', 'Fitbit Data'],
      description:
        'Developed AI generated health coaching workflows using GPT 4o mini, Fitbit health metrics, and weather data. Designed and evaluated 45 personalized intervention messages across 15 health alert scenarios using prompt engineering.',
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
      org: 'Code2College',
      title: 'Software Engineering Intern',
      period: 'Jun — Aug 2023',
      location: 'Dallas, TX',
      stack: ['HTML', 'CSS', 'JavaScript', 'Agile'],
      description:
        'Developed a web based lesson sharing platform using HTML, CSS, and JavaScript to improve collaboration for educators and support more than 2,500 students. Designed responsive interfaces and implemented new application features in an Agile environment.',
    },
  ],
  contact: {
    eyebrow: 'Contact',
    heading: 'Let’s get in touch.',
    lead:
      'I’m always glad to talk about civic tech, accessibility, AI for good, or a role you think I’d be great for. The best way to reach me is email.',
  },
  footer: {
    tagline: 'Building data and technology for civic and human good.',
    built: 'Built with Astro.',
    email: 'Email',
  },
};

const es: Content = {
  meta: {
    description:
      'Hani Merali — ingeniero de software y estudiante de ciencias de la computación en UT Austin, enfocado en accesibilidad, IA para la salud y datos cívicos.',
  },
  nav: { about: 'Sobre mí', projects: 'Proyectos', experience: 'Experiencia', contact: 'Contáctame', resume: 'Currículum' },
  toggles: {
    toLight: 'Cambiar a modo claro',
    toDark: 'Cambiar a modo oscuro',
    toEs: 'Ver en español',
    toEn: 'View in English',
    langShort: 'EN',
  },
  hero: {
    eyebrow: 'Ciencias de la Computación · Universidad de Texas en Austin',
    tagline: 'Creando datos y tecnología para el bien cívico y humano.',
    contact: 'Contáctame',
    resumeLabel: 'Currículum (PDF)',
  },
  about: {
    eyebrow: 'Sobre mí',
    heading: 'Un poco sobre mí.',
    paras: [
      'Soy estudiante de ciencias de la computación en UT Austin y disfruto crear tecnología que resuelve problemas reales. Dentro de la tecnología, me interesa sobre todo donde el software genera un impacto significativo: la accesibilidad y la tecnología de asistencia, la IA para la salud, y las herramientas basadas en datos que ayudan a las comunidades a tomar mejores decisiones.',
      'Fuera de la tecnología, disfruto pasar tiempo con amigos y familia, jugar baloncesto y seguir el fútbol americano. También soy mentor de estudiantes más jóvenes a través de la comunidad de mi mezquita local.',
    ],
  },
  projectsSection: {
    eyebrow: 'Proyectos',
    heading: 'Cosas que he creado. Haz clic en cualquier proyecto para ver más.',
    viewDetails: 'Ver detalles',
    skillsLabel: 'Habilidades utilizadas',
    aboutLabel: 'Sobre el proyecto',
    close: 'Cerrar',
  },
  projects: [
    {
      slug: 'neuroshield',
      context: 'Proyecto para el concurso ExploraVision',
      title: 'NeuroShield',
      tagline: 'Predecir y prevenir la neuroinvasión viral antes de que llegue al cerebro.',
      summary:
        'Un sistema de defensa biomédico que utiliza un índice de riesgo impulsado por IA para predecir, prevenir y responder a la neuroinvasión viral antes de que los virus entren al cerebro y causen daño neurológico.',
      tags: TAGS.neuro,
      sections: [
        {
          heading: 'El problema',
          body: [
            'La mayoría de las respuestas a una infección viral son reactivas: el tratamiento comienza solo después de que el virus ya se ha propagado y ha empezado a causar daño. Cuando ese daño llega al sistema nervioso central, las consecuencias pueden incluir encefalitis, neurodegeneración y otros trastornos neurológicos relacionados con virus.',
            'NeuroShield plantea una pregunta distinta: ¿y si pudiéramos predecir el riesgo de neuroinvasión de forma temprana e intervenir antes de que un virus llegue al cerebro?',
          ],
        },
        {
          heading: 'El enfoque',
          body: [
            'NeuroShield adopta un enfoque proactivo monitoreando continuamente biomarcadores como la carga viral, la inflamación, la susceptibilidad de los receptores y el estrés de la barrera hematoencefálica (BHE).',
            'Estas mediciones alimentan un Índice de Riesgo de Neuroinvasión (NRI) impulsado por IA, que genera una puntuación de riesgo personalizada, un nivel de confianza y un curso de acción recomendado para identificar a pacientes que podrían estar en riesgo de complicaciones neurológicas.',
          ],
          bullets: [
            'Monitoreo continuo de biomarcadores: carga viral, inflamación, susceptibilidad de receptores y estrés de la BHE.',
            'Un Índice de Riesgo de Neuroinvasión (NRI) impulsado por IA que produce una puntuación personalizada, un nivel de confianza y una recomendación.',
            'Una respuesta de defensa dirigida que se activa cuando el riesgo supera un umbral seguro.',
          ],
        },
        {
          heading: 'La respuesta de defensa',
          body: [
            'Si el NRI de un paciente supera un umbral seguro, NeuroShield activa un sistema de defensa dirigido que bloquea o redirige temporalmente las vías de entrada viral mediante nanocuerpos diseñados, señuelos de receptores, nanoportadores inteligentes y terapias estabilizadoras de la BHE.',
            'El objetivo es evitar que los virus crucen al sistema nervioso central minimizando la interrupción de la función cerebral normal.',
          ],
        },
        {
          heading: 'Qué se construyó',
          body: [
            'Desarrollado como proyecto para el concurso ExploraVision, NeuroShield combina cuatro componentes en una plataforma unificada que demuestra cómo la inteligencia artificial y la medicina de precisión podrían trabajar juntas para reducir el riesgo de trastornos neurológicos relacionados con virus.',
          ],
          bullets: [
            'Un artículo de investigación que fundamenta el sistema en la ciencia subyacente.',
            'Un algoritmo de IA que calcula el Índice de Riesgo de Neuroinvasión.',
            'Un prototipo de escáner de biovigilancia.',
            'Una simulación de software de la plataforma completa.',
          ],
        },
      ],
    },
    {
      slug: 'visit',
      context: 'Proyecto de ingeniería de accesibilidad',
      title: 'Hani (Visit)',
      tagline: 'Una plataforma de comunicación web para usuarios autistas no verbales.',
      summary:
        'Una plataforma web de CAA (comunicación aumentativa y alternativa) que ofrece interfaces personalizables de generación de voz para más de 20 usuarios autistas no verbales.',
      tags: TAGS.visit,
      sections: [
        {
          heading: 'El problema',
          body: [
            'Las personas autistas no verbales —especialmente quienes tienen habilidades motoras limitadas— necesitan herramientas de comunicación que se adapten a ellas, no al revés. Las interfaces genéricas suelen ser rígidas, difíciles de navegar y no personalizadas al vocabulario o a las capacidades motoras de cada persona.',
          ],
        },
        {
          heading: 'Lo que construí',
          body: [
            'Desarrollé una plataforma web de CAA usando HTML, CSS y JavaScript para ofrecer interfaces personalizables de generación de voz, atendiendo a más de 20 usuarios autistas no verbales.',
          ],
          bullets: [
            'Diseñé sistemas dinámicos de gestión de vocabulario, flujos de texto a voz (Web Speech API) y tableros de comunicación personalizados.',
            'Facilité la comunicación para personas con necesidades de comunicación complejas.',
            'Optimicé la accesibilidad de la interfaz y la eficiencia de navegación mediante pruebas iterativas, mejorando la usabilidad para personas autistas no verbales con habilidades motoras limitadas.',
          ],
        },
        {
          heading: 'Por qué importa',
          body: [
            'La accesibilidad no es una función que añado al final: es el objetivo. Este proyecto definió cómo pienso en cada interfaz que construyo: quién queda excluido por defecto y cómo el diseño puede darle voz.',
          ],
        },
      ],
    },
    {
      slug: 'keyguard',
      context: 'Texas Technology Access Program · ago. — dic. 2025',
      title: 'Prototipos de Keyguard para CAA',
      tagline: 'Keyguards diseñados con CAD que hacen usables los dispositivos de comunicación para habilidades motoras limitadas.',
      summary:
        'Quince prototipos de keyguard diseñados con CAD para mejorar la accesibilidad de los dispositivos de comunicación de personas autistas no verbales con habilidades motoras limitadas, creados como Embajador de Tecnología de Accesibilidad.',
      tags: TAGS.keyguard,
      sections: [
        {
          heading: 'El contexto',
          body: [
            'Como Embajador de Tecnología de Accesibilidad del Texas Technology Access Program, colaboré con más de 10 clínicos, investigadores y profesionales de accesibilidad para evaluar tecnologías de CAA para personas con autismo y discapacidades de comunicación.',
          ],
        },
        {
          heading: 'Lo que diseñé',
          body: [
            'Diseñé 15 prototipos de keyguard usando OpenSCAD y técnicas de modelado CAD. Los keyguards son cubiertas físicas que se colocan sobre un dispositivo de comunicación, ayudando a usuarios con habilidades motoras limitadas a presionar la tecla correcta sin errores.',
          ],
          bullets: [
            'Usé OpenSCAD y modelado CAD para diseñar e iterar 15 prototipos de keyguard.',
            'Me enfoqué en mejorar la accesibilidad de los dispositivos de comunicación para personas autistas no verbales con habilidades motoras limitadas.',
            'Trabajé junto a clínicos y profesionales de accesibilidad para evaluar su ajuste en el mundo real.',
          ],
        },
        {
          heading: 'El hilo conductor',
          body: [
            'Software, hardware, el diseño de una sola cubierta física: el hilo común en mi trabajo es eliminar las barreras entre las personas y las herramientas que deberían ayudarlas.',
          ],
        },
      ],
    },
  ],
  experienceSection: { eyebrow: 'Experiencia', heading: 'Dónde he trabajado.', current: 'Actual' },
  experience: [
    {
      org: 'Child Poverty Action Lab (CPAL)',
      title: 'Practicante de Ingeniería de Software',
      period: '2026 — Presente',
      location: 'Dallas, TX',
      current: true,
      stack: [],
    },
    {
      org: 'UT Health Science Center en San Antonio',
      title: 'Voluntario de Investigación en Inteligencia Artificial',
      period: 'sep. 2025 — jun. 2026',
      location: 'San Antonio, TX',
      stack: ['Machine Learning', 'Data Pipelines', 'Multimodal Data'],
      description:
        'Realicé investigación de aprendizaje automático usando grabaciones de llanto infantil y datos de evaluación del desarrollo para estudiar resultados relacionados con el autismo. Construí canalizaciones de procesamiento de datos y evalué modelos predictivos con conjuntos de datos multimodales.',
    },
    {
      org: 'Child Poverty Action Lab (CPAL)',
      title: 'Practicante de Ingeniería de Software',
      period: 'jun. — ago. 2025',
      location: 'Dallas, TX',
      stack: ['R Shiny', 'Leaflet', 'GIS', 'Data Visualization'],
      description:
        'Desarrollé un tablero interactivo de vivienda de Dallas usando R Shiny y Leaflet para visualizar datos de vivienda y demográficos en más de 50 códigos postales, 100 vecindarios y 200 planteles escolares. Construí funciones de mapeo, filtrado y generación de informes utilizadas por organizaciones sin fines de lucro y comunitarias.',
    },
    {
      org: 'Universidad de Texas en Arlington — IDIR Lab',
      title: 'Practicante de Investigación en Inteligencia Artificial',
      period: 'jun. — ago. 2025',
      location: 'Arlington, TX',
      stack: ['GPT-4o mini', 'Prompt Engineering', 'Fitbit Data'],
      description:
        'Desarrollé flujos de trabajo de asesoría de salud generados con IA usando GPT 4o mini, métricas de salud de Fitbit y datos meteorológicos. Diseñé y evalué 45 mensajes de intervención personalizados en 15 escenarios de alerta de salud mediante ingeniería de prompts.',
    },
    {
      org: 'Freightcom',
      title: 'Practicante de Aseguramiento de Calidad e Ingeniería de Software',
      period: 'jun. — ago. 2024',
      location: 'Dallas, TX',
      stack: ['QA / Testing', 'Test Planning', 'Agile'],
      description:
        'Diseñé y ejecuté planes de prueba en más de 200 funciones de la aplicación, mejorando la calidad del software de una plataforma que atiende a más de 10,000 clientes. Identifiqué defectos, validé correcciones y colaboré con ingenieros antes de los lanzamientos a producción.',
    },
    {
      org: 'Code2College',
      title: 'Practicante de Ingeniería de Software',
      period: 'jun. — ago. 2023',
      location: 'Dallas, TX',
      stack: ['HTML', 'CSS', 'JavaScript', 'Agile'],
      description:
        'Desarrollé una plataforma web para compartir lecciones usando HTML, CSS y JavaScript para mejorar la colaboración de los educadores y apoyar a más de 2,500 estudiantes. Diseñé interfaces responsivas e implementé nuevas funciones de la aplicación en un entorno Ágil.',
    },
  ],
  contact: {
    eyebrow: 'Contacto',
    heading: 'Pongámonos en contacto.',
    lead:
      'Siempre me alegra hablar sobre tecnología cívica, accesibilidad, IA para el bien social, o una oportunidad en la que creas que encajaría. La mejor forma de contactarme es por correo electrónico.',
  },
  footer: {
    tagline: 'Creando datos y tecnología para el bien cívico y humano.',
    built: 'Hecho con Astro.',
    email: 'Correo',
  },
};

export const content: Record<Lang, Content> = { en, es };
export const getContent = (lang: Lang): Content => content[lang];
