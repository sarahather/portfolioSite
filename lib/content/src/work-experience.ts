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
    company: "CNA Insurance",
    role: "Software Engineer",
    startDate: "2023-04",
    endDate: null,
    current: true,
    description:
      "Designing and deploying cloud-based web applications for underwriters using React, JavaScript, Java, and Spring. Leading production deployments with zero defects and 100% uptime during business hours. Automating internal workflows and leveraging AI agents to eliminate repetitive manual work.",
    highlights: [
      "Designed and deployed ILAP, a cloud-based web application for underwriters using React, JavaScript, Java, and Spring",
      "Built scalable microservices and integrated APIs, improving interoperability and reducing redundancy across platforms",
      "Authored and maintained API documentation using Postman alongside extensive Confluence resources",
      "Integrated SonarQube into CI/CD pipelines, performing penetration testing and maintaining 97%+ JUnit test coverage",
      "Spearheaded production deployments with zero defects and 100% uptime during business hours",
      "Led migration from Concourse to GitHub Actions, reducing deployment cycles by 25% and automating deployment, test, and environment workflows end-to-end",
      "Built AI agent-powered scripts using Claude to automate database change communication to downstream support teams, eliminating manual coordination handoffs",
    ],
    technologies: ["React", "JavaScript", "Java", "Spring Boot", "SonarQube", "GitHub Actions", "Postman", "Claude", "GitHub Copilot", "Adobe Designer", "Echo API"],
    logoUrl: null,
    location: "Chicago, IL",
    createdAt: "2023-04-01T00:00:00Z",
  },
  {
    id: 2,
    company: "CNA Insurance",
    role: "Associate Software Engineer & Intern Manager",
    startDate: "2021-04",
    endDate: "2023-03",
    current: false,
    description:
      "Developed new product segments for an existing web application and led the internship program — designing curriculum, onboarding new hires, and mentoring interns through their first professional engineering experiences.",
    highlights: [
      "Developed a Restaurant segment generating $4M in new premium within months of launch",
      "Improved API integration, increasing digital activity by 300%",
      "Designed and executed an intern curriculum earning a 98% satisfaction rating",
      "Served as key recruiter, mentor, and manager for summer interns — conducting interviews and overseeing professional development",
      "Authored knowledge transfer documentation on Confluence to support team continuity",
    ],
    technologies: ["Java", "Spring Boot", "React", "JavaScript", "Confluence", "SQL"],
    logoUrl: null,
    location: "Chicago, IL",
    createdAt: "2021-04-01T00:00:00Z",
  },
  {
    id: 3,
    company: "CNA Insurance",
    role: "Associate Software Engineer",
    startDate: "2019-06",
    endDate: "2021-03",
    current: false,
    description:
      "Developed and maintained RESTful APIs for commercial insurance exchanges, contributing to $10M in profits. Built automated testing pipelines and shared knowledge through CNA's internal technology newsletter.",
    highlights: [
      "Developed and maintained RESTful APIs using Java, Kotlin, and Spring Boot, contributing $10M in profits",
      "Automated testing pipelines with Concourse, achieving 99% code coverage",
      "Wrote for CNA's technology newsletter, fostering internal knowledge-sharing and collaboration",
    ],
    technologies: ["Java", "Kotlin", "Spring Boot", "Concourse", "SQL"],
    logoUrl: null,
    location: "Chicago, IL",
    createdAt: "2019-06-01T00:00:00Z",
  },
  {
    id: 4,
    company: "CDW Corporation",
    role: "Application Developer Intern",
    startDate: "2017-06",
    endDate: "2017-08",
    current: false,
    description:
      "Improved efficiency of Java applications using Code Analysis Tools (CAST) and refactored legacy code into a modern REST API.",
    highlights: [
      "Improved code quality of Java applications using CAST, increasing quality by multiple letter grades",
      "Refactored legacy Java code into a modern REST API, improving maintainability and usability",
    ],
    technologies: ["Java", "REST APIs", "CAST"],
    logoUrl: null,
    location: "Vernon Hills, IL",
    createdAt: "2017-06-01T00:00:00Z",
  },
  {
    id: 5,
    company: "UIC — Computer Science: Program Design",
    role: "Undergraduate Teaching Assistant",
    startDate: "2017-01",
    endDate: "2019-05",
    current: false,
    description:
      "Led lab sections and held tutoring office hours to help students understand computer science fundamentals. Saw consistent grade improvements among office hour attendees over the course of each semester.",
    highlights: [
      "Led lab sections and tutoring office hours for CS fundamentals coursework",
      "Observed measurable grade improvements among students who attended office hours regularly",
    ],
    technologies: ["C++", "Python", "Computer Science Education"],
    logoUrl: null,
    location: "Chicago, IL",
    createdAt: "2017-01-01T00:00:00Z",
  },
  {
    id: 6,
    company: "Muslim Women in Technology",
    role: "Co-Founder",
    startDate: "2018-06",
    endDate: null,
    current: true,
    description:
      "Co-founded a 501(c)(3) nonprofit supporting underrepresented women in tech. Organized 20+ tech talks featuring leaders from Google, Meta, and startups, and partnered with organizations like Latinas in Tech and General Assembly.",
    highlights: [
      "Founded a 501(c)(3) nonprofit supporting underrepresented women in technology",
      "Organized 20+ tech talks featuring leaders from Google, Meta, and startups",
      "Partnered with Latinas in Tech and General Assembly to expand community reach",
      "Spoke at industry panels and events to advocate for diversity and inclusion",
    ],
    technologies: ["Community Building", "Event Organization", "DEI", "Nonprofit Leadership"],
    logoUrl: null,
    location: "Chicago, IL",
    createdAt: "2018-06-01T00:00:00Z",
  },
];
