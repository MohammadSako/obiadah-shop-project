"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function logIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
    }
    router.push("/");
  }

  async function signUp() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error(error);
    }
    router.push("/");
  }

  return (
    <main>
      <form className="space-y-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-100 p-2 rounded-md shadow-[#06b6d4] shadow-md"
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-100 p-2 rounded-md shadow-[#06b6d4] shadow-md"
          />
        </div>
        <div className="flex flex-row space-x-8">
          <button
            type="button"
            onClick={logIn}
            className="border border-gray-100 p-2 rounded-md shadow-[#06b6d4] shadow-md hover:shadow-inner"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={signUp}
            className="border border-gray-100 p-2 rounded-md shadow-[#06b6d4] shadow-md hover:shadow-inner"
          >
            Sign up
          </button>
        </div>
      </form>
    </main>
  );
}
