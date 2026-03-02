import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { CookieSerializeOptions } from 'cookie'

type SupabaseCookie = {
  name: string
  value: string
  options?: CookieSerializeOptions
}

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },

        // FIX: typed cookiesToSet + safe options fallback
        setAll(cookiesToSet: SupabaseCookie[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options ?? {})
            })
          } catch {
            // Ignore errors in Server Components — session will be refreshed via middleware.
          }
        },
      },
    }
  )
}
