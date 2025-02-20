"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: {
  email: string;
  password: string;
  locale: string;
}) {
  const supabase = await createClient();

  // Perform login
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    throw new Error(error.message); // This will be caught in the client-side try-catch block
  }

  revalidatePath("/dashboard", "layout");
  redirect(`/${formData.locale}/dashboard`);
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message); // This will be caught in the client-side try-catch block
  }
  redirect("/login");
}

//https://supabase.com/docs/guides/auth/server-side/nextjs