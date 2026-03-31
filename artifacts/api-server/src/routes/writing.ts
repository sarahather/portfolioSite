import { Router, type IRouter } from "express";
import { db, writingTable } from "@workspace/db";
import { desc, eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/writing", async (req, res): Promise<void> => {
  const posts = await db
    .select()
    .from(writingTable)
    .where(eq(writingTable.draft, false))
    .orderBy(desc(writingTable.publishedAt));
  res.json(posts);
});

router.get("/writing/:id", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(rawId, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  const [post] = await db
    .select()
    .from(writingTable)
    .where(eq(writingTable.id, id));

  if (!post || post.draft) {
    res.status(404).json({ error: "Writing post not found" });
    return;
  }

  res.json(post);
});

export default router;
