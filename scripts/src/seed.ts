import { db, workExperienceTable, travelsTable, speakingTable, craftsTable, writingTable } from "@workspace/db";

async function seed() {
  console.log("Seeding portfolio database...");

  // Clear existing data (idempotent reseed)
  await db.delete(writingTable);
  await db.delete(craftsTable);
  await db.delete(speakingTable);
  await db.delete(travelsTable);
  await db.delete(workExperienceTable);

  // ── Work Experience ────────────────────────────────────────────────────────
  await db.insert(workExperienceTable).values([
    {
      company: "TechCorp Solutions",
      role: "Senior Software Engineer",
      startDate: "2021-03",
      endDate: null,
      current: true,
      description:
        "Leading full-stack development of customer-facing web applications serving millions of users. Champion for engineering mentorship programs and onboarding initiatives for new hires and interns.",
      highlights: [
        "Led migration of legacy monolith to microservices, reducing load times by 40%",
        "Designed and ran the company's first structured intern mentoring program — 12 interns, 100% return offer rate",
        "Built real-time notification system serving 2M+ active users",
        "Promoted twice in 3 years based on technical leadership and cross-team impact",
      ],
      technologies: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Kubernetes", "AWS"],
      logoUrl: null,
      location: "San Francisco, CA (Hybrid)",
    },
    {
      company: "DataBridge Inc.",
      role: "Software Engineer II",
      startDate: "2019-06",
      endDate: "2021-02",
      current: false,
      description:
        "Built and maintained data pipeline infrastructure and internal developer tools used by 200+ engineers across the organization.",
      highlights: [
        "Developed internal tooling that cut deployment time from 45 minutes to under 8 minutes",
        "Mentored 3 junior engineers — all received promotions within 18 months",
        "Co-created new hire onboarding curriculum adopted company-wide",
        "Led DEI initiative increasing team diversity by 30%",
      ],
      technologies: ["Python", "Java", "React", "Apache Kafka", "Spark", "GCP"],
      logoUrl: null,
      location: "New York, NY",
    },
    {
      company: "StartupLab",
      role: "Software Engineer",
      startDate: "2017-07",
      endDate: "2019-05",
      current: false,
      description:
        "Early-stage fintech startup. Full-stack engineer responsible for building company's first mobile-responsive web application and managing intern cohorts.",
      highlights: [
        "Built company's first mobile-responsive web app, growing to 50K monthly active users",
        "Sole engineer responsible for all frontend architecture decisions",
        "Organized bi-weekly knowledge-sharing sessions that became company culture",
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
      logoUrl: null,
      location: "Brooklyn, NY",
    },
  ]);
  console.log("  ✓ Work experience seeded");

  // ── Travels ────────────────────────────────────────────────────────────────
  await db.insert(travelsTable).values([
    {
      country: "Portugal",
      city: "Lisbon",
      region: "Lisbon Metro Area",
      visitedYear: 2022,
      coverImageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800",
      summary:
        "My first solo international trip and the one that changed everything. Lisbon felt like a city that had figured out the balance between old and new.",
      tags: ["Europe", "solo travel", "food", "history", "beaches"],
      itinerary: [
        {
          day: 1,
          title: "Arrival and Alfama",
          activities: [
            "Check in to boutique hotel in Baixa",
            "Walk through Alfama neighborhood",
            "Watch sunset from Miradouro da Graca",
            "Dinner at traditional tasca with bacalhau",
          ],
          tips: "Wear comfortable shoes - Alfama is very hilly.",
        },
        {
          day: 2,
          title: "Belem and Pastries",
          activities: [
            "Morning visit to Jeronimos Monastery",
            "Stop at Pasteis de Belem - the original custard tarts",
            "Walk along the riverfront to Torre de Belem",
            "Evening fado show",
          ],
          tips: "Get to Pasteis de Belem when it opens at 8am.",
        },
        {
          day: 3,
          title: "Day Trip to Sintra",
          activities: [
            "Morning train to Sintra (40 min from Rossio)",
            "Hike to Pena Palace",
            "Visit Quinta da Regaleira",
            "Return to Lisbon for sunset dinner",
          ],
          tips: "Buy combined Sintra park pass online in advance.",
        },
        {
          day: 4,
          title: "Neighborhoods and Departure",
          activities: [
            "Morning in Mouraria neighborhood",
            "Coffee at Praca do Comercio",
            "Last pastel de nata and souvenir shopping",
            "Afternoon flight home",
          ],
          tips: "Pick up local ceramics as gifts.",
        },
      ],
      highlights: [
        "Alfama at golden hour is unforgettable",
        "The Black expat community in Lisbon welcomed me like family",
        "Pasteis de Belem at 8am before the crowds",
        "Sintra looks designed by a fairy tale author",
      ],
      practicalInfo:
        "Visa-free for US passport holders (up to 90 days in Schengen). Best to visit April-June or September-October.",
    },
    {
      country: "Ghana",
      city: "Accra",
      region: "Greater Accra",
      visitedYear: 2023,
      coverImageUrl: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800",
      summary:
        "Going to Ghana was more than a trip - it was a homecoming of the spirit. Between the vibrant markets, the history at Cape Coast, the warmth of every person I met, I understood something about myself I could not have learned anywhere else.",
      tags: ["Africa", "heritage travel", "food", "culture", "history"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Accra",
          activities: [
            "Arrival at Kotoka International Airport",
            "Check in and rest",
            "Evening walk through Osu neighborhood",
            "Dinner at local chop bar - jollof rice and kelewele",
          ],
          tips: "Download Uber before you land. Exchange cedis at the airport.",
        },
        {
          day: 2,
          title: "Accra History and Culture",
          activities: [
            "Morning visit to Kwame Nkrumah Memorial Park",
            "Explore the National Museum of Ghana",
            "Afternoon at Makola Market",
            "Dinner with groundnut soup and fufu",
          ],
          tips: "Hire a local guide for Makola Market. Bring cash only, mostly small bills.",
        },
        {
          day: 3,
          title: "Day Trip to Cape Coast",
          activities: [
            "Early drive to Cape Coast (3 hours)",
            "Guided tour of Cape Coast Castle",
            "Visit Kakum National Park canopy walk",
            "Return to Accra in the evening",
          ],
          tips: "The Cape Coast Castle tour is emotionally heavy and deeply important. Give yourself time after.",
        },
        {
          day: 4,
          title: "Kumasi Day Trip",
          activities: [
            "Morning flight or bus to Kumasi",
            "Visit Kejetia Market - largest open-air market in West Africa",
            "Explore Manhyia Palace Museum",
            "Return to Accra for farewell dinner",
          ],
          tips: "Budget 4-5 hours just to wander Kejetia Market properly.",
        },
      ],
      highlights: [
        "Cape Coast Castle changed the way I understand my history",
        "The markets in Accra are a masterclass in color and commerce",
        "Jollof rice debate settled - Ghana wins",
        "The warmth of strangers who feel like family",
      ],
      practicalInfo:
        "US passport holders can obtain a visa on arrival. Yellow fever vaccination required. Best months: November-March (dry season).",
    },
    {
      country: "Japan",
      city: "Kyoto",
      region: "Kansai Region",
      visitedYear: 2023,
      coverImageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
      summary:
        "Kyoto in November during koyo (autumn leaf season) is one of the most beautiful things I have ever seen. I came for the temples and left with a philosophy about slowness and attention.",
      tags: ["Asia", "temples", "food", "nature", "history"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kyoto via Shinkansen",
          activities: [
            "Bullet train from Tokyo (2 hours 20 minutes)",
            "Check in to traditional ryokan in Higashiyama district",
            "Stroll Ninenzaka and Sannenzaka stone-paved streets",
            "Dinner - traditional kaiseki multi-course meal",
          ],
          tips: "Book the ryokan months in advance for autumn season.",
        },
        {
          day: 2,
          title: "Arashiyama and Bamboo Grove",
          activities: [
            "Early morning at Arashiyama Bamboo Grove (arrive before 7:30am)",
            "Tenryu-ji Temple and its garden",
            "Boat ride on the Oi River",
            "Afternoon in Gion district",
            "Sunset at Yasaka Shrine",
          ],
          tips: "The bamboo grove is overcrowded by 9am. Arrive at sunrise.",
        },
        {
          day: 3,
          title: "Temples and Shrines",
          activities: [
            "Morning at Fushimi Inari Shrine - hike through thousands of torii gates",
            "Afternoon at Kinkaku-ji (Golden Pavilion)",
            "Nishiki Market - the covered food market",
            "Evening tea ceremony experience",
          ],
          tips: "Fushimi Inari takes 2-3 hours to hike the full loop. Book a tea ceremony class in advance.",
        },
        {
          day: 4,
          title: "Day Trip and Departure",
          activities: [
            "Morning at Nara - giant Buddha and free-roaming deer",
            "Return to Kyoto for last shopping and dinner",
            "Bullet train to Tokyo for departing flight",
          ],
          tips: "Deer in Nara will bow for shika senbei (deer crackers).",
        },
      ],
      highlights: [
        "Fushimi Inari at sunrise - just you and the torii gates",
        "Kaiseki dinner at the ryokan was the best meal of my life",
        "Autumn leaves at every temple simultaneously",
        "The quietness of Kyoto side streets at dusk",
      ],
      practicalInfo:
        "No visa required for US passport holders (up to 90 days). IC Suica card is essential for all transit. Carry cash - Japan is still largely cash-based.",
    },
  ]);
  console.log("  ✓ Travels seeded");

  // ── Speaking ───────────────────────────────────────────────────────────────
  await db.insert(speakingTable).values([
    {
      eventName: "Grace Hopper Celebration",
      talkTitle: "Breaking Barriers in Backend: My Journey as a Black Woman in Software Engineering",
      date: "2024-09-18",
      location: "Orlando, FL",
      format: "conference talk",
      audience: "Women in tech, aspiring engineers, 2500+ attendees",
      description:
        "A personal and technical talk weaving together career lessons with insights on navigating the tech industry as a Black woman. Covered imposter syndrome, mentorship strategies, and how to build systems that scale.",
      slidesUrl: "https://slides.example.com/ghc2024",
      recordingUrl: null,
      imageUrl: null,
      upcoming: false,
    },
    {
      eventName: "AfroTech Conference",
      talkTitle: "Mentorship at Scale: How to Build Programs That Actually Work",
      date: "2024-11-02",
      location: "Austin, TX",
      format: "keynote",
      audience: "Black tech professionals, engineering leaders, 10,000+ attendees",
      description:
        "Keynote on designing sustainable mentorship programs in tech organizations. Shared frameworks for building structured mentoring at scale based on running intern and new hire programs.",
      slidesUrl: "https://slides.example.com/afrotech2024",
      recordingUrl: null,
      imageUrl: null,
      upcoming: false,
    },
    {
      eventName: "She Geeks Out Summit",
      talkTitle: "Designing for Everyone: Inclusive Engineering Practices",
      date: "2024-05-15",
      location: "Boston, MA",
      format: "panel",
      audience: "Women engineers, product managers, DEI practitioners",
      description:
        "Panelist discussing how inclusive engineering practices lead to better products. Covered accessible design, diverse hiring pipelines, and building equitable team cultures.",
      slidesUrl: null,
      recordingUrl: null,
      imageUrl: null,
      upcoming: false,
    },
    {
      eventName: "WomenTech Network Conference",
      talkTitle: "From Intern to Senior Engineer: Navigating Your Growth",
      date: "2023-10-20",
      location: "Virtual",
      format: "workshop",
      audience: "Early-career engineers, career changers",
      description:
        "Interactive workshop walking through the career journey from intern to senior engineer. Participants built personal development roadmaps and practiced technical communication skills.",
      slidesUrl: "https://slides.example.com/wtn2023",
      recordingUrl: null,
      imageUrl: null,
      upcoming: false,
    },
    {
      eventName: "TechConf NYC",
      talkTitle: "APIs That Tell Stories: Building Expressive REST Interfaces",
      date: "2025-06-10",
      location: "New York, NY",
      format: "conference talk",
      audience: "Software engineers, API designers",
      description:
        "An upcoming talk exploring how good API design is storytelling — how naming, structure, and error handling communicate intent and make developer experience unforgettable.",
      slidesUrl: null,
      recordingUrl: null,
      imageUrl: null,
      upcoming: true,
    },
  ]);
  console.log("  ✓ Speaking engagements seeded");

  // ── Crafts ─────────────────────────────────────────────────────────────────
  await db.insert(craftsTable).values([
    {
      name: "Hand-poured Soy Candles",
      category: "candles",
      description:
        "Luxury hand-poured soy wax candles in curated scents inspired by travel destinations. Each batch is small-batch made with natural fragrance oils and cotton wicks.",
      imageUrl: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=800",
      tags: ["home decor", "natural", "custom", "gift"],
      featured: true,
    },
    {
      name: "Beaded Statement Earrings",
      category: "jewelry",
      description:
        "Bold, handcrafted beaded earrings inspired by West African and Caribbean design traditions. Each pair is one-of-a-kind — seed beads, Czech glass, and natural stones woven into wearable art.",
      imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
      tags: ["jewelry", "wearable art", "cultural", "handmade"],
      featured: true,
    },
    {
      name: "Custom Tote Bags",
      category: "apparel",
      description:
        "Hand-painted and heat-transferred custom tote bags with original designs and personal mantras. Durable canvas, machine washable. Custom orders welcome.",
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800",
      tags: ["apparel", "custom", "eco-friendly", "gift"],
      featured: false,
    },
    {
      name: "Macrame Wall Hangings",
      category: "home decor",
      description:
        "Handwoven macrame wall art in natural and dyed cotton rope. Each piece takes 6-10 hours to complete. Custom sizing and color palettes available.",
      imageUrl: "https://images.unsplash.com/photo-1579783483458-83d02161294e?w=800",
      tags: ["home decor", "boho", "handwoven", "wall art"],
      featured: true,
    },
    {
      name: "Pressed Flower Greeting Cards",
      category: "stationery",
      description:
        "Handmade greeting cards with real pressed flowers sourced from seasonal gardens. Each card is unique — flowers vary by season.",
      imageUrl: "https://images.unsplash.com/photo-1490750967868-88df5691b5e7?w=800",
      tags: ["stationery", "botanical", "handmade", "gift"],
      featured: false,
    },
    {
      name: "Resin Art Coasters",
      category: "home decor",
      description:
        "Custom resin art coasters featuring unique swirl patterns, dried flowers, and metallic accents. Food-safe coating, cork backing. Sets of 4.",
      imageUrl: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800",
      tags: ["home decor", "resin", "custom", "functional art"],
      featured: false,
    },
  ]);
  console.log("  ✓ Crafts seeded");

  // ── Writing ────────────────────────────────────────────────────────────────
  await db.insert(writingTable).values([
    {
      title: "What Nobody Tells You About Mentoring Junior Engineers",
      slug: "what-nobody-tells-you-about-mentoring",
      excerpt:
        "After mentoring 50+ engineers across internships and full-time roles, I've learned that the hardest part isn't the code reviews — it's the invisible emotional labor of helping someone believe they belong.",
      content:
        "After mentoring 50+ engineers, I've learned that the hardest part isn't the code reviews. It's helping someone believe they belong.\n\nWhen I started mentoring, I thought my job was to transfer technical knowledge. What I found is that the technical stuff is the easy part.\n\nThree things I wish someone had told me:\n\n1. Your presence is the first message. Before you say a word of technical advice, your mentee is watching how you show up.\n\n2. Ask more than you advise. I now ask: 'What have you tried? What do you think is happening?' The answer is almost always better than what I would have said.\n\n3. Celebrate the non-obvious wins. The day someone stops apologizing before asking a question — that's the real milestone.",
      publishedAt: "2024-02-14",
      tags: ["mentorship", "career", "engineering", "leadership"],
      readingTimeMinutes: 8,
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      draft: false,
    },
    {
      title: "On Traveling Solo as a Black Woman: What I Carry and What I Leave Behind",
      slug: "traveling-solo-black-woman",
      excerpt:
        "Every trip I take is part adventure, part reclamation. I travel with a list of things I research that most travel blogs don't mention — but I've learned that the joy is always bigger than the caution.",
      content:
        "Every trip I take is part adventure, part reclamation.\n\nI started traveling internationally alone at 26. My first solo trip was to Portugal — a country I chose partly because of the Black American expat community in Lisbon.\n\nWhat I carry: A list of Black-owned restaurants and tour guides. A hair care kit that weighs more than my shoes. The memory of everyone who told me solo travel was not for 'someone like me.'\n\nWhat I leave behind: The feeling that I need permission. The need for a travel companion to validate my experience.\n\nI travel because the world is bigger than the story I was handed.",
      publishedAt: "2024-04-03",
      tags: ["travel", "solo travel", "identity", "personal"],
      readingTimeMinutes: 10,
      imageUrl: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800",
      draft: false,
    },
    {
      title: "The Art of the Technical Career Conversation",
      slug: "art-of-technical-career-conversation",
      excerpt:
        "Most engineers are taught to write code, not to talk about their careers with clarity and confidence. Here's how to close that gap.",
      content:
        "Most engineers are taught to write code, not to talk about their careers.\n\nI've been on both sides of the career conversation. What I've found is that technical people often struggle with translating the complexity of their work into language that lands.\n\nThe framework I use with everyone I mentor:\n\nLead with outcome, not process. 'I cut login errors by 60%' lands differently than 'I rewrote the authentication service.'\n\nName the scope explicitly. '500K daily transactions' communicates trust and complexity.\n\nTalk about the people you made better. Impact on people lasts longer than impact on a codebase.",
      publishedAt: "2024-06-20",
      tags: ["career", "engineering", "communication", "growth"],
      readingTimeMinutes: 7,
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      draft: false,
    },
  ]);
  console.log("  ✓ Writing posts seeded");

  console.log("\nPortfolio database seeded successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
