"use server"

import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function submitEmail(email: string) {
  if (!email || !email.includes("@")) {
    throw new Error("Invalid email address")
  }

  try {
    const { error } = await supabase.from("waitlist").insert([{ email, created_at: new Date().toISOString() }])

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error("Error submitting email:", error)
    throw new Error("Failed to submit email")
  }
}
