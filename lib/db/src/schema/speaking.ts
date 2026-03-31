import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const speakingTable = pgTable("speaking", {
  id: serial("id").primaryKey(),
  eventName: text("event_name").notNull(),
  talkTitle: text("talk_title").notNull(),
  date: text("date").notNull(),
  location: text("location").notNull(),
  format: text("format").notNull(),
  audience: text("audience"),
  description: text("description").notNull(),
  slidesUrl: text("slides_url"),
  recordingUrl: text("recording_url"),
  imageUrl: text("image_url"),
  upcoming: boolean("upcoming").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertSpeakingSchema = createInsertSchema(speakingTable).omit({ id: true, createdAt: true });
export type InsertSpeaking = z.infer<typeof insertSpeakingSchema>;
export type Speaking = typeof speakingTable.$inferSelect;
