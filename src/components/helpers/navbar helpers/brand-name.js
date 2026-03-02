import Link from "next/link";

export default function BrandName() {
  return (
    <div className="flex flex-row gap-1">
      <Link href="/">
        <h1 className="lg:text-3xl md:text-xl sm:text-md text-sm font-sans sm:block hidden tracking-tight">
          OBAIDAH <span className="font-bold text-[#06b6d4]">Shop</span>
        </h1>
      </Link>
    </div>
  );
}
