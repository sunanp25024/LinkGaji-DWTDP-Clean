import { type Registration, type InsertRegistration, registrations } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getRegistration(id: string): Promise<Registration | undefined>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getAllRegistrations(): Promise<Registration[]>;
}

export class DatabaseStorage implements IStorage {
  async getRegistration(id: string): Promise<Registration | undefined> {
    const [registration] = await db.select().from(registrations).where(eq(registrations.id, id));
    return registration || undefined;
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const [registration] = await db
      .insert(registrations)
      .values(insertRegistration)
      .returning();
    return registration;
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return await db.select().from(registrations);
  }
}

export const storage = new DatabaseStorage();
