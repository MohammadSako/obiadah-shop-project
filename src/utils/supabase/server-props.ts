// import { type GetServerSidePropsContext } from 'next'
// import { createServerClient, serializeCookieHeader } from '@supabase/ssr'

// export function createClient({ req, res }: GetServerSidePropsContext) {
//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return Object.keys(req.cookies).map((name) => ({ name, value: req.cookies[name] || '' }))
//         },
//         setAll(cookiesToSet) {
//           res.setHeader(
//             'Set-Cookie',
//             cookiesToSet.map(({ name, value, options }) =>
//               serializeCookieHeader(name, value, options)
//             )
//           )
//         },
//       },
//     }
//   )

//   return supabase
// }

import { type GetServerSidePropsContext } from 'next'
import { createServerClient, serializeCookieHeader } from '@supabase/ssr'
import type { CookieSerializeOptions } from 'cookie'

// Manual type because @supabase/ssr does NOT export a cookie type
type SupabaseCookie = {
  name: string
  value: string
  options?: CookieSerializeOptions
}

export function createClient({ req, res }: GetServerSidePropsContext) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return Object.keys(req.cookies).map((name) => ({
            name,
            value: req.cookies[name] || '',
          }))
        },

        // FIX: Explicit type + safe options handling
        setAll(cookiesToSet: SupabaseCookie[]) {
          res.setHeader(
            'Set-Cookie',
            cookiesToSet.map(({ name, value, options }) =>
              serializeCookieHeader(name, value, options ?? {})
            )
          )
        },
      },
    }
  )

  return supabase
}
