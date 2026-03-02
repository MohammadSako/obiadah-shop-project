const supabaseImage = process.env.NEXT_PUBLIC_SUPABASE_URL;
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