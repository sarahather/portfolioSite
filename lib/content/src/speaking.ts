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
    eventName: "WiTech",
    talkTitle: "Navigating Tech as a Muslim Woman in STEM",
    date: "2022-10-01",
    location: "Virtual",
    format: "conference talk",
    audience: "Women in tech, underrepresented minorities in STEM",
    description:
      "Spoke about navigating the tech industry as a Muslim woman, building community through Muslim Women in Technology, and what it takes to show up authentically in spaces not designed for you.",
    slidesUrl: null,
    recordingUrl: "https://www.youtube.com/watch?v=JD13XPwAg74",
    imageUrl: "/images/speaking-panel.jpg",
    upcoming: false,
    createdAt: "2022-10-01T00:00:00Z",
  },
  {
    id: 2,
    eventName: "Techstars Startup Week Chicago",
    talkTitle: "Building in Public: Lessons from a First-Gen Founder",
    date: "2021-09-20",
    location: "Chicago, IL",
    format: "conference talk",
    audience: "Startup founders, entrepreneurs, aspiring builders",
    description:
      "Shared lessons from co-founding Muslim Women in Technology — the realities of building a nonprofit from scratch, community-led growth, and what no one tells you about being a first-generation founder.",
    slidesUrl: null,
    recordingUrl: "https://techstarsstartupweekchicago2021a.sched.com/directory/speakers",
    imageUrl: null,
    upcoming: false,
    createdAt: "2021-09-20T00:00:00Z",
  },
  {
    id: 3,
    eventName: "8th Grade Commencement Ceremony",
    talkTitle: "8th Grade Commencement Address",
    date: "2021-06-01",
    location: "Villa Park, IL",
    format: "keynote",
    audience: "8th grade graduates, families, faculty",
    description:
      "Delivered the commencement address to graduating 8th graders — speaking on identity, resilience, and what it means to carry your community with you as you grow.",
    slidesUrl: null,
    recordingUrl: null,
    imageUrl: null,
    upcoming: false,
    createdAt: "2021-06-01T00:00:00Z",
  },
  {
    id: 4,
    eventName: "South Asian Wedding Events",
    talkTitle: "Wedding & Event Emcee",
    date: "2020-01-01",
    location: "Chicago Metro Area & Beyond",
    format: "emcee",
    audience: "Wedding guests, families, event attendees",
    description:
      "Emceed multiple South Asian wedding events and cultural celebrations — keeping the energy alive, honoring traditions, and making every moment feel personal and memorable for families.",
    slidesUrl: null,
    recordingUrl: null,
    imageUrl: "/images/speaking-stage.jpg",
    upcoming: false,
    createdAt: "2020-01-01T00:00:00Z",
  },
  {
    id: 5,
    eventName: "Coffee, Careers & Connections — Muslim Women's Alliance",
    talkTitle: "Coffee, Careers & Connections",
    date: "2019-10-27",
    location: "Doubletree Hotel, Oak Brook, IL",
    format: "panel",
    audience: "Muslim women professionals, students, career-changers",
    description:
      "Panelist at the Muslim Women's Alliance's Coffee, Careers & Connections event — a professional networking and mentorship afternoon bringing together Muslim women across industries to share career journeys, offer guidance, and build community.",
    slidesUrl: null,
    recordingUrl: null,
    imageUrl: "/images/speaking-mwa-flyer.jpg",
    upcoming: false,
    createdAt: "2019-10-27T00:00:00Z",
  },
  {
    id: 6,
    eventName: "Anita Borg Institute Chicago (ABIdotCHI)",
    talkTitle: "Speaker — Anita Borg Institute Chicago",
    date: "2016-01-01",
    location: "Google Chicago, Chicago, IL",
    format: "conference talk",
    audience: "Tech students, early-career engineers, women in computing",
    description:
      "Speaker at ABIdotCHI — the Chicago chapter of the Anita Borg Institute, an organization dedicated to advancing women in technology. A community event bringing together women and underrepresented technologists to connect, learn, and lift each other up. Hosted at Google Chicago.",
    slidesUrl: null,
    recordingUrl: null,
    imageUrl: null,
    upcoming: false,
    createdAt: "2016-01-01T00:00:00Z",
  },
];
