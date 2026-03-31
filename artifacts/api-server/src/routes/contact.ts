import { Router, type IRouter } from "express";
import { db, contactTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const { name, email, category, subject, message } = req.body;

  if (!name || !email || !category || !subject || !message) {
    res.status(400).json({ error: "All fields are required: name, email, category, subject, message" });
    return;
  }

  const validCategories = ["speaking", "recruiting", "crafts", "general"];
  if (!validCategories.includes(category)) {
    res.status(400).json({ error: `Category must be one of: ${validCategories.join(", ")}` });
    return;
  }

  const [submission] = await db
    .insert(contactTable)
    .values({ name, email, category, subject, message })
    .returning();

  res.status(201).json(submission);
});

export default router;
