export interface Speaking {
  id: number;
  eventName: string;
  talkTitle: string;
  date: string;
  location: string;
  format: string;
  audience: string | null;
  description: string;
  slidesUrl: string | null;
  recordingUrl: string | null;
  imageUrl: string | null;
  upcoming: boolean;
  createdAt: string;
}

export const speakingEngagements: Speaking[] = [
  {
    id: 1,
    eventName: "Google for Startups Campus Chicago",
    talkTitle: "Developing & Valuing Your Own Perspective in Tech",
    date: "2022-03-15",
    location: "Chicago, IL",
    format: "keynote",
    audience: "Early-career engineers and founders",
    description:
      "Keynote on building confidence in your technical perspective, pushing back thoughtfully, and finding your voice in spaces that weren't designed with you in mind.",
    slidesUrl: null,
    recordingUrl: null,
    imageUrl: "/images/speaking-google.jpg",
    upcoming: false,
    createdAt: "2022-03-15T00:00:00Z",
  },
  {
    id: 2,
    eventName: "Grace Hopper Celebration",
    talkTitle: "First-Gen in Tech: Building Community When There Isn't One",
    date: "2021-09-28",
    location: "Virtual",
    format: "panel",
    audience: "Women in computing, students and professionals",
    description:
      "Panel discussion on the experience of being first-generation in the tech industry — navigating cultural expectations, building support networks, and making space for others.",
    slidesUrl: null,
    recordingUrl: null,
    imageUrl: null,
    upcoming: false,
    createdAt: "2021-09-28T00:00:00Z",
  },
  {
    id: 3,
    eventName: "UIC College of Engineering Speaker Series",
    talkTitle: "What No One Told Me About My First Year as a Software Engineer",
    date: "2021-04-10",
    location: "Chicago, IL (Virtual)",
    format: "talk",
    audience: "CS undergraduate students",
    description:
      "Honest, practical talk about the gap between CS coursework and professional software engineering — code reviews, team dynamics, imposter syndrome, and how to advocate for yourself early.",
    slidesUrl: null,
    recordingUrl: null,
    imageUrl: null,
    upcoming: false,
    createdAt: "2021-04-10T00:00:00Z",
  },
  {
    id: 4,
    eventName: "ChiHackNight",
    talkTitle: "Building Inclusive Tech Communities from Scratch",
    date: "2021-11-02",
    location: "Chicago, IL",
    format: "lightning talk",
    audience: "Civic tech community members",
    description:
      "Lightning talk on the lessons learned from co-founding TechWomen Chicago — what works for building inclusive communities, what doesn't, and the operational realities of nonprofit organizing.",
    slidesUrl: null,
    recordingUrl: null,
    imageUrl: null,
    upcoming: false,
    createdAt: "2021-11-02T00:00:00Z",
  },
  {
    id: 5,
    eventName: "Bandwidth Engineering All-Hands",
    talkTitle: "Observability in Practice: Lessons from the Trenches",
    date: "2023-06-20",
    location: "Raleigh, NC",
    format: "internal talk",
    audience: "Engineering organization, ~150 engineers",
    description:
      "Internal engineering talk on practical observability patterns — logging, metrics, distributed tracing, and how to build systems that tell you what's wrong before your users do.",
    slidesUrl: null,
    recordingUrl: null,
    imageUrl: null,
    upcoming: false,
    createdAt: "2023-06-20T00:00:00Z",
  },
  {
    id: 6,
    eventName: "TechWomen Chicago Annual Summit",
    talkTitle: "Navigating the Industry as a Muslim Woman in Tech",
    date: "2022-10-14",
    location: "Chicago, IL",
    format: "keynote",
    audience: "Women and non-binary people of color in tech",
    description:
      "Personal keynote exploring identity, visibility, and belonging in the tech industry — with practical frameworks for navigating environments that weren't built for you while staying true to yourself.",
    slidesUrl: null,
    recordingUrl: null,
    imageUrl: null,
    upcoming: false,
    createdAt: "2022-10-14T00:00:00Z",
  },
];
