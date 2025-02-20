import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order your items right to your door! | Obaidah Shop",
  description: "Lorem upsum",
};

export default async function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col container mx-auto px-[2rem] pt-[90px] lg:pt-[100px]">
      <div className="flex flex-col w-full lg:mt-[180px] py-10">{children}</div>
    </div>
  );
}
