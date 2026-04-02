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
    name: "Custom Chip Bag Set — Baby Shower",
    category: "Chip Bags",
    description:
      "Full set of custom chip bags for a baby shower, designed around the nursery color palette. Each bag printed with the guest's name and custom illustration.",
    imageUrl: "/images/craft-chips-bag.jpg",
    tags: ["chip bags", "baby shower", "custom", "personalized"],
    featured: true,
    createdAt: "2023-04-01T00:00:00Z",
  },
  {
    id: 2,
    name: "Engagement Party Welcome Sign",
    category: "Signage",
    description:
      "Hand-lettered acrylic welcome sign for an engagement party, with custom calligraphy and floral illustration. Paired with matching table numbers and menus.",
    imageUrl: "/images/craft-chips-bag.jpg",
    tags: ["signage", "calligraphy", "engagement", "wedding"],
    featured: true,
    createdAt: "2023-02-01T00:00:00Z",
  },
  {
    id: 3,
    name: "Eid Celebration Gift Boxes",
    category: "Gift Sets",
    description:
      "Custom gift boxes for Eid al-Fitr — hand-assembled with crinkle paper, custom tissue, and a personalized card. Available in sets of 6, 12, or 24.",
    imageUrl: "/images/craft-chips-bag.jpg",
    tags: ["gift set", "Eid", "custom", "holiday"],
    featured: false,
    createdAt: "2023-04-20T00:00:00Z",
  },
  {
    id: 4,
    name: "Graduation Party Tablescape",
    category: "Tablescapes",
    description:
      "Full graduation party tablescape design and assembly — centerpieces, balloons, custom chip bags, and coordinated tableware in school colors.",
    imageUrl: "/images/craft-chips-bag.jpg",
    tags: ["tablescape", "graduation", "party", "custom"],
    featured: true,
    createdAt: "2023-05-15T00:00:00Z",
  },
  {
    id: 5,
    name: "Bridal Shower Favor Bags",
    category: "Chip Bags",
    description:
      "Personalized chip bag favors for a bridal shower, featuring a custom portrait of the bride and playful copy. Printed with premium finish.",
    imageUrl: "/images/craft-chips-bag.jpg",
    tags: ["chip bags", "bridal shower", "favors", "custom"],
    featured: false,
    createdAt: "2023-01-10T00:00:00Z",
  },
  {
    id: 6,
    name: "Birthday Party Welcome Board",
    category: "Signage",
    description:
      "Custom birthday welcome board with hand-lettered name, age, and party theme. Includes matching bar menu and photo booth props.",
    imageUrl: "/images/craft-chips-bag.jpg",
    tags: ["signage", "birthday", "custom", "party"],
    featured: false,
    createdAt: "2022-12-01T00:00:00Z",
  },
];
