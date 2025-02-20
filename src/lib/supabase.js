import { createClient } from "@supabase/supabase-js";
// ANON anonymous key, not public
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// for dashboard , only admin use
// export const supabaseAdmin = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
// );





// Auth Client supabase
// https://www.youtube.com/watch?v=HtM1ZAnivI4&list=PL8HkCX2C5h0X9ZFgSSUhzTI5Nh8-Olijv&index=2