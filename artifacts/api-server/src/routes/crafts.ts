import { Router, type IRouter } from "express";
import { db, craftsTable } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

router.get("/crafts", async (req, res): Promise<void> => {
  const products = await db
    .select()
    .from(craftsTable)
    .orderBy(desc(craftsTable.featured), desc(craftsTable.id));
  res.json(products);
});

export default router;
