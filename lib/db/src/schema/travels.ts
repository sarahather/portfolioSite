import { pgTable, text, serial, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const travelsTable = pgTable("travels", {
  id: serial("id").primaryKey(),
  country: text("country").notNull(),
  city: text("city").notNull(),
  region: text("region"),
  visitedYear: integer("visited_year").notNull(),
  coverImageUrl: text("cover_image_url").notNull(),
  summary: text("summary").notNull(),
  tags: text("tags").array().notNull().default([]),
  itinerary: jsonb("itinerary").notNull().default([]),
  highlights: text("highlights").array().notNull().default([]),
  practicalInfo: text("practical_info"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertTravelSchema = createInsertSchema(travelsTable).omit({ id: true, createdAt: true });
export type InsertTravel = z.infer<typeof insertTravelSchema>;
export type Travel = typeof travelsTable.$inferSelect;
