export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  logoUrl: string | null;
  location: string;
  createdAt: string;
}

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "Bandwidth",
    role: "Software Engineer II",
    startDate: "2022-07-01",
    endDate: null,
    current: true,
    description:
      "Building and maintaining distributed systems that power Bandwidth's cloud communications platform. Work spans backend services, internal tooling, and cross-team API design in a high-availability environment.",
    highlights: [
      "Led intern cohort technical mentorship program across two consecutive summers",
      "Designed and implemented internal developer tooling that reduced onboarding time by 30%",
      "Contributed to migration of legacy monolith components to microservices architecture",
      "Collaborated with product and design to ship customer-facing API features end-to-end",
    ],
    technologies: ["Java", "Kotlin", "AWS", "PostgreSQL", "Kubernetes", "Terraform", "gRPC"],
    logoUrl: null,
    location: "Raleigh, NC (Remote)",
    createdAt: "2022-07-01T00:00:00Z",
  },
  {
    id: 2,
    company: "Relativity",
    role: "Software Engineer",
    startDate: "2020-06-01",
    endDate: "2022-06-30",
    current: false,
    description:
      "Worked on Relativity's e-discovery SaaS platform, developing features for large-scale legal data processing and review. Gained deep experience in distributed data pipelines and compliance-critical software.",
    highlights: [
      "Built data ingestion pipelines processing millions of documents per day",
      "Improved test coverage across core platform modules from 40% to 85%",
      "Mentored two junior engineers through their first full project lifecycle",
      "Presented at internal engineering all-hands on observability best practices",
    ],
    technologies: ["C#", ".NET", "SQL Server", "Azure", "React", "TypeScript", "RabbitMQ"],
    logoUrl: null,
    location: "Chicago, IL",
    createdAt: "2020-06-01T00:00:00Z",
  },
  {
    id: 3,
    company: "Arity",
    role: "Software Engineer Intern",
    startDate: "2019-06-01",
    endDate: "2019-08-31",
    current: false,
    description:
      "Developed features for a telematics data platform at this Allstate-founded startup. Worked on real-time data streaming and built internal dashboards for driver behavior analytics.",
    highlights: [
      "Built an internal analytics dashboard surfacing real-time driver score aggregations",
      "Contributed to Kafka-based streaming pipeline for mobile telematics data",
      "Presented final project to senior engineering leadership and product stakeholders",
    ],
    technologies: ["Java", "Kafka", "Google Cloud Platform", "React", "Python"],
    logoUrl: null,
    location: "Chicago, IL",
    createdAt: "2019-06-01T00:00:00Z",
  },
  {
    id: 4,
    company: "UIC College of Engineering",
    role: "Undergraduate Research Assistant",
    startDate: "2018-01-01",
    endDate: "2019-05-31",
    current: false,
    description:
      "Conducted research on natural language processing and human-computer interaction under faculty supervision. Co-developed a prototype tool for automated accessibility testing of web interfaces.",
    highlights: [
      "Contributed to accessibility testing prototype evaluated in a 30-participant user study",
      "Reviewed and summarized 50+ academic papers on NLP and HCI for literature review",
      "Presented research poster at UIC Research Forum, spring 2019",
    ],
    technologies: ["Python", "NLTK", "JavaScript", "Selenium"],
    logoUrl: null,
    location: "Chicago, IL",
    createdAt: "2018-01-01T00:00:00Z",
  },
  {
    id: 5,
    company: "TechWomen Chicago",
    role: "Co-Founder & Board Member",
    startDate: "2020-01-01",
    endDate: null,
    current: true,
    description:
      "Co-founded a nonprofit dedicated to supporting women and non-binary people of color in tech through community events, mentorship, and career resources. Organized speaker series and networking events serving 400+ members.",
    highlights: [
      "Grew community from 0 to 400+ members in under two years",
      "Organized 15+ events including speaker panels, workshops, and networking nights",
      "Secured sponsorships from Google, Microsoft, and several Chicago-based tech companies",
      "Partnered with university CS departments to reach students early in their careers",
    ],
    technologies: [],
    logoUrl: null,
    location: "Chicago, IL",
    createdAt: "2020-01-01T00:00:00Z",
  },
];
