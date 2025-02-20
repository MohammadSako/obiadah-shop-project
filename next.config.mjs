const supabaseImage = process.env.NEXT_PUBLIC_SUPABASE_URL; //to hide env
const supabase = supabaseImage.slice(8);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname:  `${supabase}`,
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;


// faisal
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "bionaturalpal.com",
//         pathname: "/api-v1/**",
//       },
//       {
//         protocol: "https",
//         hostname: "**.bionaturalpal.com",
//         pathname: "**",
//       },
//     ],
//     domains: ["bionaturalpal.com"],
//   },
//   experimental: {
//     serverActions: {
//       allowedOrigins: [
//         "localhost",
//         "localhost:3000",
//         "bionaturalpal.com",
//         "bionaturalpal.com:3000",
//         "bionatural.vercel.com",
//         "38.242.195.164:3000",
//       ],
//     },
//   },
// };

// module.exports = nextConfig;
