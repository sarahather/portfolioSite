import { Router, type IRouter } from "express";
import { db, workExperienceTable, travelsTable, speakingTable, craftsTable, writingTable } from "@workspace/db";
import { count, eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/stats", async (req, res): Promise<void> => {
  const [expResult] = await db.select({ count: count() }).from(workExperienceTable);
  const [travelResult] = await db.select({ count: count() }).from(travelsTable);
  const [speakingResult] = await db.select({ count: count() }).from(speakingTable);
  const [craftResult] = await db.select({ count: count() }).from(craftsTable);
  const [writingResult] = await db
    .select({ count: count() })
    .from(writingTable)
    .where(eq(writingTable.draft, false));

  res.json({
    yearsExperience: 8,
    countriesVisited: travelResult?.count ?? 0,
    talkCount: speakingResult?.count ?? 0,
    craftCount: craftResult?.count ?? 0,
    writingCount: writingResult?.count ?? 0,
    menteeCount: 50,
  });
});

export default router;
