export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  tips?: string;
}

export interface Travel {
  id: number;
  country: string;
  city: string;
  region: string | null;
  visitedYear: number;
  coverImageUrl: string;
  secondaryImageUrl: string | null;
  galleryImages: string[];
  summary: string;
  tags: string[];
  itinerary: ItineraryDay[];
  highlights: string[];
  practicalInfo: string | null;
  createdAt: string;
}

export const travels: Travel[] = [
  {
    id: 1,
    country: "Japan",
    city: "Tokyo",
    region: "Kanto",
    visitedYear: 2023,
    coverImageUrl: "/images/travel-1.png",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "Tokyo is sensory overload in the best way. Thirteen million people, infinite neighborhoods, and somehow everything runs exactly on time. I spent two weeks here and still only scratched the surface.",
    tags: ["Asia", "City", "Food", "Culture"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Shinjuku",
        activities: [
          "Land at Narita, take the Narita Express into the city",
          "Check into hotel in Shinjuku",
          "Walk Kabukicho and the Golden Gai alley bars",
          "Dinner at a standing ramen shop",
        ],
        tips: "Buy a Suica card at the airport — it works on every train, subway, and bus.",
      },
      {
        day: 2,
        title: "Harajuku & Shibuya",
        activities: [
          "Morning walk through Meiji Shrine",
          "Takeshita Street for shopping and people-watching",
          "Lunch in Omotesando",
          "Shibuya Crossing at dusk — worth the crowds",
        ],
        tips: "Go to Shibuya Crossing just before sunset for the best photos.",
      },
      {
        day: 3,
        title: "Asakusa & Akihabara",
        activities: [
          "Senso-ji Temple early morning before the crowds arrive",
          "Nakamise-dori shopping street for snacks and souvenirs",
          "Afternoon in Akihabara's electronics and gaming shops",
          "Dinner in Ueno",
        ],
      },
    ],
    highlights: [
      "Found the best tonkotsu ramen of my life at a tiny counter shop in Shinjuku",
      "Watched the Shibuya scramble crossing from the rooftop of Shibuya Sky",
      "Got completely lost in Shimokitazawa's vintage shops for three hours and didn't care",
    ],
    practicalInfo:
      "IC card (Suica/Pasmo) is essential. Google Maps works perfectly for transit. Most restaurants take cash only — always carry yen. 7-Eleven and Lawson are genuinely great for meals.",
    createdAt: "2023-04-01T00:00:00Z",
  },
  {
    id: 2,
    country: "Italy",
    city: "Rome",
    region: "Lazio",
    visitedYear: 2022,
    coverImageUrl: "/images/travel-sedona.jpg",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "Every corner of Rome is a history lesson you didn't ask for and can't stop absorbing. Ancient ruins sit next to coffee bars. The food is better than anywhere else. I'd move here.",
    tags: ["Europe", "History", "Food", "Architecture"],
    itinerary: [
      {
        day: 1,
        title: "The Forum & Palatine Hill",
        activities: [
          "Roman Forum in the morning before the heat",
          "Palatine Hill overlooking the Forum",
          "Lunch near Campo de' Fiori",
          "Trastevere neighborhood in the evening",
        ],
        tips: "Buy a combined ticket that covers the Colosseum, Forum, and Palatine Hill — much better value.",
      },
      {
        day: 2,
        title: "Vatican & Castel Sant'Angelo",
        activities: [
          "Vatican Museums — arrive at opening to beat crowds",
          "St. Peter's Basilica and the dome climb",
          "Castel Sant'Angelo in the afternoon",
          "Gelato on Piazza Navona",
        ],
        tips: "Pre-book Vatican Museums skip-the-line tickets at least two weeks ahead.",
      },
    ],
    highlights: [
      "Ate cacio e pepe at a family restaurant in Trastevere that had no menu — just whatever they made that day",
      "Climbed to the top of St. Peter's dome at sunset",
      "Sat in the Pantheon for an hour and let it sink in that the dome has been open to the sky for 2,000 years",
    ],
    practicalInfo:
      "Walking is the best way to see Rome. Most major sights require booking in advance. Dress code for churches is strict — cover shoulders and knees.",
    createdAt: "2022-06-01T00:00:00Z",
  },
  {
    id: 3,
    country: "USA",
    city: "Sedona",
    region: "Arizona",
    visitedYear: 2023,
    coverImageUrl: "/images/travel-sedona.jpg",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "Red rock formations, vortex sites, and more wellness retreats per square mile than anywhere I've ever been. Sedona is wild and beautiful and a little bit woo-woo, and I loved every second of it.",
    tags: ["USA", "Nature", "Hiking", "Southwest"],
    itinerary: [
      {
        day: 1,
        title: "Cathedral Rock & Bell Rock",
        activities: [
          "Cathedral Rock Trail at sunrise — worth the early alarm",
          "Bell Rock Trail midmorning",
          "Lunch in Uptown Sedona",
          "Sunset at Airport Mesa overlook",
        ],
        tips: "Red Rock Pass required for parking at most trailheads — buy it at the trailhead kiosk.",
      },
    ],
    highlights: [
      "Watched the sun rise behind Cathedral Rock and couldn't speak for a full minute",
      "Accidentally stumbled into a sound bath ceremony and stayed for the whole thing",
      "Best stargazing I've ever experienced — zero light pollution",
    ],
    practicalInfo:
      "Rent a Jeep or 4WD vehicle — some of the best spots require off-road access. Book accommodations well in advance; it's a popular destination year-round.",
    createdAt: "2023-09-01T00:00:00Z",
  },
  {
    id: 4,
    country: "South Korea",
    city: "Seoul",
    region: null,
    visitedYear: 2023,
    coverImageUrl: "/images/travel-1.png",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "Seoul is what happens when you take ultra-modern infrastructure and layer a thousand years of history and culture on top of it. The food scene alone is worth the flight.",
    tags: ["Asia", "City", "Food", "Culture", "K-Culture"],
    itinerary: [
      {
        day: 1,
        title: "Gyeongbokgung & Insadong",
        activities: [
          "Gyeongbokgung Palace in traditional hanbok — rentals available at the gate",
          "Bukchon Hanok Village walking tour",
          "Insadong for traditional crafts and tea",
          "Dinner in Jongno-gu",
        ],
        tips: "Wearing hanbok gives you free entry to Gyeongbokgung and several other palaces.",
      },
      {
        day: 2,
        title: "Myeongdong & Namsan",
        activities: [
          "Myeongdong street food for breakfast",
          "Namsan Tower cable car and observation deck",
          "Afternoon in Hongdae for music and street art",
          "Night market and pojangmacha street food stalls",
        ],
      },
    ],
    highlights: [
      "Ate tteokbokki at 2am from a pojangmacha cart and it was the best decision I made all trip",
      "Wandered through Bukchon Hanok Village at dawn before the tour groups arrived",
      "Took a day trip to the DMZ — one of the most sobering experiences I've had",
    ],
    practicalInfo:
      "T-money card for transit. Kakao Maps is better than Google for Korean addresses. Most neighborhoods are very walkable. Convenience stores (CU, GS25, 7-Eleven) are surprisingly excellent for meals.",
    createdAt: "2023-05-01T00:00:00Z",
  },
  {
    id: 5,
    country: "Norway",
    city: "Bergen",
    region: "Vestland",
    visitedYear: 2021,
    coverImageUrl: "/images/travel-sedona.jpg",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "Bergen is a city of wooden houses, fjords, and near-constant drizzle that somehow makes everything more beautiful. It's the perfect base for exploring Norway's western coast.",
    tags: ["Europe", "Nature", "Fjords", "Scandinavia"],
    itinerary: [
      {
        day: 1,
        title: "Bryggen & Mount Fløyen",
        activities: [
          "Bryggen Wharf UNESCO walking tour",
          "Funicular up to Mount Fløyen for panoramic views",
          "Bergen Fish Market for lunch",
          "Explore the historic Hanseatic quarter",
        ],
        tips: "The Fløibanen funicular runs frequently and the view from the top is worth it even in the rain.",
      },
    ],
    highlights: [
      "Took the Flåm Railway — arguably the most scenic train ride in the world",
      "Kayaked through the Nærøyfjord at sunset",
      "Ate fresh shrimp bought directly off a fishing boat at the wharf",
    ],
    practicalInfo:
      "Norway is expensive — budget accordingly. Pack waterproof layers regardless of season. The fjord tours sell out; book in advance.",
    createdAt: "2021-07-01T00:00:00Z",
  },
  {
    id: 6,
    country: "Malaysia",
    city: "Kuala Lumpur",
    region: null,
    visitedYear: 2023,
    coverImageUrl: "/images/travel-1.png",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "KL is a city of contradictions that somehow works: gleaming skyscrapers, ancient Hindu temples, colonial architecture, and some of the best halal food on earth — all within walking distance of each other.",
    tags: ["Asia", "City", "Food", "Multicultural"],
    itinerary: [
      {
        day: 1,
        title: "KLCC & Bukit Bintang",
        activities: [
          "Petronas Twin Towers skybridge (book tickets in advance)",
          "KLCC Park for views of the towers",
          "Bukit Bintang shopping and street food",
          "Jalan Alor Night Market for dinner",
        ],
        tips: "Skybridge tickets sell out quickly — book online at least a few days ahead.",
      },
      {
        day: 2,
        title: "Batu Caves & Little India",
        activities: [
          "Batu Caves Hindu shrine — 272 steps",
          "Little India (Brickfields) for lunch",
          "Central Market for local crafts",
          "Chinatown Petaling Street for afternoon snacking",
        ],
      },
    ],
    highlights: [
      "Found the best nasi lemak of my life at a roadside stall open since 5am",
      "Visited during Thaipusam and witnessed something I'll never forget",
      "The diversity of the food scene — Malay, Chinese, Indian, and fusion all excellent",
    ],
    practicalInfo:
      "Grab (like Uber) is the easiest way to get around. Most restaurants serve halal food. Heat and humidity are intense — carry water and dress in light layers.",
    createdAt: "2023-03-01T00:00:00Z",
  },
  {
    id: 7,
    country: "Spain",
    city: "Barcelona",
    region: "Catalonia",
    visitedYear: 2022,
    coverImageUrl: "/images/travel-sedona.jpg",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "Barcelona is the city that convinced me urban planning can be an art form. Gaudí's architecture, the Gothic Quarter, the Boqueria — and the fact that dinner doesn't start until 10pm.",
    tags: ["Europe", "Architecture", "Food", "City", "Art"],
    itinerary: [
      {
        day: 1,
        title: "Gothic Quarter & La Boqueria",
        activities: [
          "Gothic Quarter morning walking tour",
          "La Boqueria market for breakfast",
          "Barcelona Cathedral and the surrounding plazas",
          "El Born neighborhood in the afternoon",
        ],
      },
      {
        day: 2,
        title: "Gaudí Day",
        activities: [
          "Sagrada Família — book timed entry in advance",
          "Park Güell — arrive early for tower access",
          "Casa Batlló or Casa Milà in the evening",
          "Dinner in Eixample after 9pm",
        ],
        tips: "Book Sagrada Família tickets months in advance, especially in summer. The night photography option is stunning.",
      },
    ],
    highlights: [
      "Stood inside Sagrada Família and actually cried — I wasn't expecting that",
      "Ate pan con tomate at every meal and have no regrets",
      "Spent an afternoon in El Born just wandering with no agenda",
    ],
    practicalInfo:
      "Pick-pocketing is common in tourist areas — use a crossbody bag and stay aware. Public transit (TMB) is excellent. Dining hours are genuinely late — restaurants fill up after 9pm.",
    createdAt: "2022-08-01T00:00:00Z",
  },
  {
    id: 8,
    country: "USA",
    city: "New Orleans",
    region: "Louisiana",
    visitedYear: 2022,
    coverImageUrl: "/images/travel-1.png",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "New Orleans is unlike any other American city. The music, the food, the architecture, the culture — it's a place that insists on being itself, and that's exactly what makes it unforgettable.",
    tags: ["USA", "Music", "Food", "Culture", "South"],
    itinerary: [
      {
        day: 1,
        title: "French Quarter & Frenchmen Street",
        activities: [
          "Café Du Monde for beignets — obviously",
          "French Quarter walking tour",
          "St. Louis Cathedral and Jackson Square",
          "Frenchmen Street at night for live jazz",
        ],
        tips: "Frenchmen Street has better live music than Bourbon Street and far less chaos.",
      },
    ],
    highlights: [
      "Heard a second-line brass band spontaneously march past my hotel on Sunday morning",
      "Ate a shrimp po'boy from a gas station and it was legitimately great",
      "Took a swamp tour and got closer to alligators than I planned",
    ],
    practicalInfo:
      "Wear comfortable shoes — you'll walk everywhere. The heat and humidity are serious from May through September. Drink water between the cocktails.",
    createdAt: "2022-03-01T00:00:00Z",
  },
  {
    id: 9,
    country: "Canada",
    city: "Toronto",
    region: "Ontario",
    visitedYear: 2021,
    coverImageUrl: "/images/travel-sedona.jpg",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "Toronto is one of the most genuinely multicultural cities I've visited — not just diverse on paper, but diverse in its food, neighborhoods, and everyday life in a way that's rare and remarkable.",
    tags: ["Americas", "City", "Food", "Culture"],
    itinerary: [
      {
        day: 1,
        title: "Kensington Market & Chinatown",
        activities: [
          "Kensington Market for vintage shopping and international food",
          "Chinatown for dim sum lunch",
          "Art Gallery of Ontario afternoon",
          "Distillery District for evening drinks",
        ],
      },
    ],
    highlights: [
      "Ate my way through Kensington Market over two days and barely made a dent",
      "Found a tiny Nigerian restaurant in Scarborough that made me feel completely at home",
      "CN Tower EdgeWalk — the most terrified I've been on a trip that was entirely voluntary",
    ],
    practicalInfo:
      "TTC transit is comprehensive. The Presto card works across transit systems. June through August is ideal — winters are serious.",
    createdAt: "2021-09-01T00:00:00Z",
  },
  {
    id: 10,
    country: "USA",
    city: "Chicago",
    region: "Illinois",
    visitedYear: 2019,
    coverImageUrl: "/images/travel-1.png",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "Chicago is where I grew up and where I went to college. I know it deeply — the lake, the architecture, the neighborhoods, the winters that will genuinely test your character. It's still one of my favorite cities in the world.",
    tags: ["USA", "City", "Home", "Architecture", "Food"],
    itinerary: [],
    highlights: [
      "The 606 Trail on a summer morning is one of the best urban experiences I know",
      "Chicago deep dish pizza is a meal, not a pizza — and it's worth it",
      "The Chicago Architecture Foundation river cruise is legitimately educational and beautiful",
    ],
    practicalInfo:
      "The L train gets you most places. Winters (November–March) are brutal — pack for it. Chicago summers are some of the best anywhere.",
    createdAt: "2019-01-01T00:00:00Z",
  },
  {
    id: 11,
    country: "USA",
    city: "Nashville",
    region: "Tennessee",
    visitedYear: 2023,
    coverImageUrl: "/images/travel-sedona.jpg",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "Nashville is growing faster than almost any city in the country and you can feel it — cranes everywhere, new restaurants every week, and a music scene that hasn't lost its soul despite the boom.",
    tags: ["USA", "Music", "Food", "City", "South"],
    itinerary: [],
    highlights: [
      "Heard incredible live country music at the Bluebird Cafe — the real thing, not the tourist strip",
      "The National Museum of African American Music is extraordinary",
      "Hot chicken at Prince's — not for the faint of heart, but mandatory",
    ],
    practicalInfo:
      "Everything on Broadway is a tourist trap (but also fun). The East Nashville neighborhood has the best local food and bars.",
    createdAt: "2023-02-01T00:00:00Z",
  },
  {
    id: 12,
    country: "Mexico",
    city: "Mexico City",
    region: null,
    visitedYear: 2022,
    coverImageUrl: "/images/travel-1.png",
    secondaryImageUrl: null,
    galleryImages: [],
    summary:
      "CDMX is one of the great cities of the world — full stop. World-class museums, ancient ruins inside the city limits, extraordinary food at every price point, and a creative energy unlike anywhere I've been.",
    tags: ["Americas", "City", "Food", "Art", "History", "Culture"],
    itinerary: [
      {
        day: 1,
        title: "Roma Norte & Condesa",
        activities: [
          "Brunch in Roma Norte — the neighborhood is full of excellent options",
          "Parque México afternoon walk",
          "Mercado de Medellín for local produce and lunch",
          "Condesa dinner and bar-hopping",
        ],
        tips: "These two neighborhoods are extremely walkable and very safe for tourists.",
      },
      {
        day: 2,
        title: "Historic Center & Teotihuacán",
        activities: [
          "Zócalo and Metropolitan Cathedral",
          "Templo Mayor archaeological site",
          "Day trip to Teotihuacán pyramids (45 min from city center)",
          "Dinner in Polanco",
        ],
        tips: "Go to Teotihuacán early — it gets very hot and very crowded by midday.",
      },
    ],
    highlights: [
      "Climbed the Pyramid of the Sun at Teotihuacán at sunrise",
      "Ate tacos al pastor from a street cart at midnight in Roma Norte and it changed me",
      "Frida Kahlo's Casa Azul is one of the most moving museum experiences I've had",
    ],
    practicalInfo:
      "Altitude is real — take it easy your first day. Drink bottled water. Uber and DiDi are safe and reliable. Carry cash for street food and markets.",
    createdAt: "2022-11-01T00:00:00Z",
  },
];
