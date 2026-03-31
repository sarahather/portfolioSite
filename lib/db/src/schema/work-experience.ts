import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const workExperienceTable = pgTable("work_experience", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  current: boolean("current").notNull().default(false),
  description: text("description").notNull(),
  highlights: text("highlights").array().notNull().default([]),
  technologies: text("technologies").array().notNull().default([]),
  logoUrl: text("logo_url"),
  location: text("location").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertWorkExperienceSchema = createInsertSchema(workExperienceTable).omit({ id: true, createdAt: true });
export type InsertWorkExperience = z.infer<typeof insertWorkExperienceSchema>;
export type WorkExperience = typeof workExperienceTable.$inferSelect;
