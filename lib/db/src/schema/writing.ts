import { pgTable, text, serial, boolean, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const writingTable = pgTable("writing", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  publishedAt: text("published_at"),
  tags: text("tags").array().notNull().default([]),
  readingTimeMinutes: integer("reading_time_minutes").notNull().default(5),
  imageUrl: text("image_url"),
  draft: boolean("draft").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertWritingSchema = createInsertSchema(writingTable).omit({ id: true, createdAt: true });
export type InsertWriting = z.infer<typeof insertWritingSchema>;
export type Writing = typeof writingTable.$inferSelect;
