export interface Writing {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string | null;
  tags: string[];
  readingTimeMinutes: number;
  imageUrl: string | null;
  draft: boolean;
  createdAt: string;
}

export const writings: Writing[] = [
  {
    id: 1,
    title: "What Nobody Tells You About Mentoring Junior Engineers",
    slug: "mentoring-junior-engineers",
    excerpt:
      "After two years running TechWomen Chicago events and countless 1:1s with early-career engineers, I've learned that the most valuable thing you can offer is not answers — it's better questions.",
    content: `Mentoring is awkward at first. You sit across from someone who wants to know what you know, and your instinct is to download everything in your head as fast as possible.

That instinct is wrong.

The engineers I've seen grow fastest weren't the ones who got the most advice. They were the ones who were asked the right questions at the right moment. Questions like: "What have you already tried?" and "What would you do if I wasn't here?" and "What's the worst case if you're wrong?"

After two years running TechWomen Chicago and mentoring engineers across three companies, here's what I've actually learned:

**Silence is a tool.** When a mentee is stuck, resist the urge to fill the silence. Let them sit with the problem a beat longer. Often they'll arrive at the answer themselves — and that's infinitely more valuable than hearing it from you.

**Specificity beats encouragement.** "Great job" lands flat. "The way you refactored that auth middleware to be testable without mocking the whole express stack was a smart move" lands differently.

**Your mistakes are the curriculum.** The shipping incident where I accidentally dropped the wrong database table in a migration. The PR that introduced a race condition I didn't see for three days. These stories are worth ten times more than polished wisdom.

The goal isn't to clone yourself. It's to help someone find their own way of thinking.`,
    publishedAt: "2024-03-15",
    tags: ["mentorship", "engineering", "leadership", "women-in-tech"],
    readingTimeMinutes: 5,
    imageUrl: null,
    draft: false,
    createdAt: "2024-03-10",
  },
  {
    id: 2,
    title: "On Slow Travel and Why I Now Plan Less",
    slug: "slow-travel-plan-less",
    excerpt:
      "I used to arrive in a new city with a Google Sheet of restaurants, museum hours, and neighborhood walks sorted by rating. Then Tokyo taught me something I couldn't unlearn.",
    content: `I am, by training and by temperament, a planner. When I started traveling internationally I treated every trip like a software project: requirements gathered, timeline estimated, backlog groomed.

Tokyo broke that habit.

I had six days. I had a spreadsheet. I had a color-coded map. By day three I had abandoned all of it because I turned down a random alley in Yanaka and found a tiny kissaten — one of those old Japanese coffee shops that feels like it exists slightly outside of time — and spent two hours there reading and watching the neighborhood wake up.

Nothing in my spreadsheet would have led me there. And that two hours ended up being the clearest memory of the whole trip.

**What slow travel actually means.** It doesn't mean you do less. It means you plan the container, not the contents. I book flights and hotels. I learn the neighborhood names. And then I show up and pay attention.

**The gift of inefficiency.** Getting lost in Bergen's wooden alleyways. Accidentally stumbling onto a free outdoor concert in Barcelona. Following a smell to a taco stand in Mexico City that didn't have a Yelp page.

These are the things that don't survive the planning process. They require slack in the schedule and a willingness to let the place surprise you.

I still have opinions about restaurants. I still do research. But I've learned to hold plans loosely — which, it turns out, is also good advice for most things outside of travel.`,
    publishedAt: "2024-07-22",
    tags: ["travel", "slow-travel", "tokyo", "mindfulness"],
    readingTimeMinutes: 6,
    imageUrl: null,
    draft: false,
    createdAt: "2024-07-18",
  },
  {
    id: 3,
    title: "The Case for Building Things You Can Hold",
    slug: "building-things-you-can-hold",
    excerpt:
      "I spend most of my day working on systems that are invisible. Crochet and ceramics are my antidote — and they've made me a better engineer.",
    content: `There is a particular satisfaction to finishing a piece of code. A test goes green, a deployment succeeds, a dashboard metric ticks the right direction. I genuinely love that feeling.

But software is invisible. When I close my laptop, nothing I made today has any physical presence in the world.

That's why, three years ago, I picked up a crochet hook.

**The feedback loop is honest.** When you're crocheting, the work tells you immediately when you've made a mistake. The tension is off, the count is wrong, the piece is pulling in a direction it shouldn't. There's no hiding it. There's no "it works on my machine." You either frogged it and started over, or you made peace with the imperfection.

Engineering could take some lessons here.

**Finishing is different when you can touch the finished thing.** I've shipped features that I'm proud of and that users depend on. I've also given someone a hand-crocheted cardigan and watched them put it on. These are not the same experience. Both matter.

**Making slowly teaches you to think about process.** A complex crochet pattern — the kind with cables or intricate colorwork — requires thinking several rows ahead. You're constantly asking: what does this stitch support? What depends on this decision? What will be impossible to undo later?

Which is, it turns out, exactly how you should think about system architecture.

The skills transfer more than I expected. I recommend picking up something you can hold.`,
    publishedAt: "2025-01-08",
    tags: ["crafts", "crochet", "engineering", "creativity"],
    readingTimeMinutes: 5,
    imageUrl: null,
    draft: false,
    createdAt: "2025-01-04",
  },
];
