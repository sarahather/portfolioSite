import { Router, type IRouter } from "express";
import { db, workExperienceTable } from "@workspace/db";
import { desc, eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/work-experience", async (req, res): Promise<void> => {
  const experiences = await db
    .select()
    .from(workExperienceTable)
    .orderBy(desc(workExperienceTable.id));
  res.json(experiences);
});

router.get("/work-experience/:id", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(rawId, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  const [experience] = await db
    .select()
    .from(workExperienceTable)
    .where(eq(workExperienceTable.id, id));

  if (!experience) {
    res.status(404).json({ error: "Work experience not found" });
    return;
  }

  res.json(experience);
});

export default router;
