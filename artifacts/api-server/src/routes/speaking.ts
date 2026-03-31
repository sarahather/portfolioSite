import { Router, type IRouter } from "express";
import { db, speakingTable } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

router.get("/speaking", async (req, res): Promise<void> => {
  const engagements = await db
    .select()
    .from(speakingTable)
    .orderBy(desc(speakingTable.date));
  res.json(engagements);
});

export default router;
