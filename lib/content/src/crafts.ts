export interface Craft {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
  createdAt: string;
}

export const crafts: Craft[] = [
  {
    id: 1,
    name: "Custom Chip Bags",
    category: "party favors",
    description:
      "Personalized chip bags designed for parties, baby showers, weddings, graduations, and any celebration worth commemorating. Custom names, dates, photos, and color schemes — every bag is designed from scratch.",
    imageUrl: "/images/craft-chips-bag.jpg",
    tags: ["custom", "party", "personalized", "gift"],
    featured: true,
    createdAt: "2023-04-01T00:00:00Z",
  },
  {
    id: 2,
    name: "Custom Signage & Banners",
    category: "signage",
    description:
      "Hand-designed custom signs and banners for events, home décor, and business use. Welcome signs, seating charts, milestone banners, and one-of-a-kind pieces for any occasion.",
    imageUrl: "/images/craft-signage.jpg",
    tags: ["signage", "custom", "events", "home decor"],
    featured: true,
    createdAt: "2023-02-01T00:00:00Z",
  },
  {
    id: 3,
    name: "Custom Jewelry Boxes",
    category: "custom gifts",
    description:
      "Personalized jewelry boxes and bridesmaid gift sets — monogrammed, hand-lettered, and curated with care. Perfect for weddings, bridal parties, and anyone who deserves something special.",
    imageUrl: "/images/craft-jewelry-box.png",
    tags: ["custom", "gifts", "wedding", "personalized"],
    featured: true,
    createdAt: "2023-01-10T00:00:00Z",
  },
  {
    id: 4,
    name: "Custom Gift Bouquets",
    category: "custom gifts",
    description:
      "Curated gift bundles and custom bouquets designed to feel personal and intentional. From bridal party sets to milestone celebrations, every piece is thoughtfully assembled.",
    imageUrl: "/images/craft-gift-bouquet.jpg",
    tags: ["gifts", "custom", "bouquet", "events"],
    featured: true,
    createdAt: "2023-04-20T00:00:00Z",
  },
  {
    id: 5,
    name: "Event Tablescapes & Signage",
    category: "events",
    description:
      "Full event styling — coordinated tablescapes, custom welcome signs, seating charts, and décor that transforms any venue into something memorable. South Asian weddings and multicultural celebrations a specialty.",
    imageUrl: "/images/craft-tablescape-signage.jpg",
    tags: ["events", "wedding", "tablescape", "signage"],
    featured: true,
    createdAt: "2023-05-15T00:00:00Z",
  },
  {
    id: 6,
    name: "Event Tablescapes",
    category: "events",
    description:
      "Styled tablescapes and centerpiece coordination for intimate dinners, bridal showers, and large-scale events. Elevated, cohesive, and built around your vision.",
    imageUrl: "/images/craft-tablescape-2.jpg",
    tags: ["events", "tablescape", "styling", "wedding"],
    featured: false,
    createdAt: "2022-12-01T00:00:00Z",
  },
];
