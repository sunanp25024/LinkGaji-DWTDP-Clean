import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const registrations = pgTable("registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  // Personal Information
  opsId: text("ops_id").notNull(),
  fullName: text("full_name").notNull(),
  nik: varchar("nik", { length: 16 }).notNull(),
  birthPlace: text("birth_place").notNull(),
  birthDate: text("birth_date").notNull(),
  age: integer("age").notNull(),
  gender: text("gender").notNull(),
  ktpAddress: text("ktp_address").notNull(),
  currentAddress: text("current_address").notNull(),
  rtRw: text("rt_rw").notNull(),
  houseNumber: text("house_number").notNull(),
  kelurahan: text("kelurahan").notNull(),
  kecamatan: text("kecamatan").notNull(),
  city: text("city").notNull(),
  postalCode: varchar("postal_code", { length: 5 }).notNull(),
  religion: text("religion").notNull(),
  maritalStatus: text("marital_status").notNull(),
  citizenship: text("citizenship").notNull(),
  
  // Contact Information
  phone: text("phone").notNull(),
  whatsapp: text("whatsapp").notNull(),
  email: text("email").notNull(),
  
  // Education
  educationLevel: text("education_level").notNull(),
  schoolName: text("school_name").notNull(),
  major: text("major"),
  entryYear: integer("entry_year").notNull(),
  graduationYear: integer("graduation_year").notNull(),
  gpa: text("gpa"),
  
  // Emergency Contact
  emergencyName: text("emergency_name").notNull(),
  emergencyPhone: text("emergency_phone").notNull(),
  emergencyWhatsapp: text("emergency_whatsapp").notNull(),
  emergencyRelationship: text("emergency_relationship").notNull(),
  
  // Bank Information
  bankName: text("bank_name").notNull(),
  accountNumber: text("account_number").notNull(),
  accountHolder: text("account_holder").notNull(),
  
  // Additional Information
  npwp: text("npwp"),
  motherName: text("mother_name").notNull(),
  fatherName: text("father_name").notNull(),
  
  // Document URLs (stored as file paths/URLs)
  ktpPhoto: text("ktp_photo").notNull(),
  kkPhoto: text("kk_photo").notNull(),
  bankPhoto: text("bank_photo").notNull(),
  selfiePhoto: text("selfie_photo").notNull(),
  npwpPhoto: text("npwp_photo"),
  
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  createdAt: true,
}).extend({
  nik: z.string().length(16, "NIK harus 16 digit"),
  postalCode: z.string().length(5, "Kode pos harus 5 digit"),
  phone: z.string().regex(/^\+62\d{9,12}$/, "Format nomor HP harus +62xxxxxxxxx"),
  whatsapp: z.string().regex(/^\+62\d{9,12}$/, "Format nomor WhatsApp harus +62xxxxxxxxx"),
  emergencyPhone: z.string().regex(/^\+62\d{9,12}$/, "Format nomor HP darurat harus +62xxxxxxxxx"),
  emergencyWhatsapp: z.string().regex(/^\+62\d{9,12}$/, "Format nomor WhatsApp darurat harus +62xxxxxxxxx"),
  email: z.string().email("Format email tidak valid"),
  age: z.number().min(17, "Umur minimal 17 tahun").max(65, "Umur maksimal 65 tahun"),
  entryYear: z.number().min(1950).max(2030),
  graduationYear: z.number().min(1950).max(2030),
});

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;
