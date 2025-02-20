export interface Intro {
  name: string;
  about: string;
  href: string;
  github?: string;
  linkedin?: string;
  email: string;
}

export interface ResumeItem {
  title: string;
  href?: string;
  date?: string;
  location?: string;
  description: string[];
}

export interface EducationItem extends ResumeItem {
  title: string;
  date: string;
  location: string;
  description: string[];
}

export interface ProjectItem extends ResumeItem {
  title: string;
  href?: string;
  description: string[];
}

export const intro: Intro = {
  name: "Joaquín Galasso",
  about:
    "Soy un profesional creativo y proactivo con sólida formación en Diseño Multimedial y Tecnologías de la Información. Cuento con experiencia en docencia y en el desarrollo de soluciones digitales, combinando habilidades en programación, diseño gráfico y multimedia para transformar ideas en proyectos innovadores.",
  href: "http://behance.net/joaquingalasso",
  email: "mail@joaquingalasso.com",
  github: "http://github.com/joaquingalasso",
  linkedin: "https://www.linkedin.com/in/joaquingalasso/",
};

export const work: ResumeItem[] = [
  {
    title: "Diseñador Freelancer",
    date: "Diciembre 2021 – Presente",
    location: "Argentina",
    description: [
      "Desarrollo de identidad visual, diseño gráfico y soluciones multimediales para clientes independientes.",
      "Creación de branding, materiales promocionales y contenido digital adaptado a diferentes plataformas.",
    ],
  },
  {
    title: "Técnico Informático · Aurelio Impresiones",
    date: "Julio 2024 – Presente",
    location: "Argentina",
    description: [
      "Mantenimiento y optimización de sistemas informáticos.",
      "Gestión de equipos y soporte técnico para la producción gráfica.",
      "Implementación de soluciones digitales para mejorar el flujo de trabajo en entornos de impresión.",
    ],
  },
  {
    title: "Diseñador Multimedia · Agencia Wolf",
    date: "Marzo 2023 – Diciembre 2023",
    location: "Argentina",
    description: [
      "Desarrollo de contenido visual y multimedia para campañas digitales.",
      "Diseño de interfaces, material publicitario y animaciones para redes sociales.",
      "Garantizar una comunicación visual efectiva y alineada con la identidad de marca.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "Licenciatura en Diseño Multimedial",
    date: "Febrero 2023 – Diciembre 2026 (en curso)",
    location: "Universidad Nacional de La Plata (UNLP), Facultad de Artes",
    description: ["Formación en diseño, multimedia y tecnologías de la información."],
  },
  {
    title: "Curso de Cocinero (Niveles I y II)",
    date: "Febrero 2023 – Diciembre 2023",
    location: "Escuela Universitaria de Oficios de la UNLP",
    description: ["Formación profesional inicial en gastronomía."],
  },
  {
    title: "Diploma de Escuela Superior, Orientación en Comunicación",
    date: "Marzo 2016 – Diciembre 2021",
    location: "Escuela Secundaria Euforión",
    description: ["Promedio: 9,62."],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Paper 'Multiplicidades'",
    description: [
      "Autores: Galasso, Esteban, Joray.",
      "Referencia: Proyectual D Nº 3, e013, 2025.",
      "Estado: En proceso de publicación.",
    ],
  },
];

export const skills: ResumeItem[] = [
  {
    title: "Programación y Desarrollo",
    description: [
      "Lenguajes: C#, Pascal, Java, JavaScript.",
      "Paradigmas: Programación imperativa y orientada a objetos (OOP).",
      "Tecnologías: Arduino, p5.js, Unity, HTML, CSS, Bootstrap, SASS, NPM, Git.",
    ],
  },
  {
    title: "Diseño y Multimedia",
    description: [
      "Diseño gráfico y de interfaces: UX/UI, User Interface Design, Branding e identidad.",
      "Herramientas: Adobe Illustrator, Adobe XD, Adobe Photoshop, Adobe InDesign, Adobe Premiere Pro, Figma.",
      "Arte algorítmico y multimedia: Creación de arte generativo, edición de videos y proyectos de diseño interactivo.",
    ],
  },
  {
    title: "Competencias Complementarias",
    description: [
      "Comunicación; Presentaciones; Trabajo en equipo.",
      "Resolución creativa de problemas; Habilidades analíticas.",
      "Escritura y Uso de Metodologías Ágiles.",
    ],
  },
  {
    title: "Habilidades Gastronómicas",
    description: [
      "Cocina (Niveles I y II); Demostraciones de comida.",
      "Carnicería; Panadería; Pastelería.",
    ],
  },
];

export const languages: ResumeItem[] = [
  {
    title: "Español",
    description: [
      "Dominio nativo.",
    ],
  },
  {
    title: "Inglés",
    description: [
      "Competencia laboral profesional.",
      "EF SET (C2 Proficient).",
    ],
  },
];

export const contact: ResumeItem = {
  title: "Contacto",
  description: [
    `<a href="https://wa.me/542216714359" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
      📞 +54 221 671-4359
    </a>`,
    `<a href="mailto:mail@joaquingalasso.com" class="text-blue-500 hover:underline">
      📧 mail@joaquingalasso.com
    </a>`,
    "La Plata, Buenos Aires 🇦🇷",
  ],
};




