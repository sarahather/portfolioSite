import { Router, type IRouter } from "express";
import { db, travelsTable } from "@workspace/db";
import { desc, eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/travels", async (req, res): Promise<void> => {
  const destinations = await db
    .select({
      id: travelsTable.id,
      country: travelsTable.country,
      city: travelsTable.city,
      region: travelsTable.region,
      visitedYear: travelsTable.visitedYear,
      coverImageUrl: travelsTable.coverImageUrl,
      summary: travelsTable.summary,
      tags: travelsTable.tags,
    })
    .from(travelsTable)
    .orderBy(desc(travelsTable.visitedYear));
  res.json(destinations);
});

router.get("/travels/:id", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(rawId, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  const [destination] = await db
    .select()
    .from(travelsTable)
    .where(eq(travelsTable.id, id));

  if (!destination) {
    res.status(404).json({ error: "Travel destination not found" });
    return;
  }

  res.json(destination);
});

export default router;
