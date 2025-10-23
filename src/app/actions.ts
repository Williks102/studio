"use server"

import { z } from "zod"

const bookingSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  date: z.date(),
  time: z.string(),
  guests: z.coerce.number().min(1),
  message: z.string().optional(),
})

export async function handleBooking(data: unknown) {
  const parsed = bookingSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, message: "Invalid data provided." }
  }

  // Here you would typically save to a database, send an email, etc.
  console.log("New Booking Request:", parsed.data)

  return { success: true }
}

const quoteSchema = z.object({
  name: z.string().min(2),
  contact: z.string().min(10),
  email: z.string().email(),
  formula: z.string(),
  people: z.coerce.number().min(1),
})

export async function handleQuote(data: unknown) {
  const parsed = quoteSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, message: "Invalid data provided." }
  }

  // Here you would typically save to a database, send an email, etc.
  console.log("New Quote Request:", parsed.data)

  return { success: true }
}
