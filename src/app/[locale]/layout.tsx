import type { Metadata } from "next";
import "../globals.css";
import NavBar from "../../components/layouts/navbar";
import Footer from "../../components/layouts/footer";
import PageLine from "../../components/UI/pageLine";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "@/components/UI/toaster";
import { montserrat, angelo, playfair, tajawal } from "./fonts";
import "../globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Obaidah Shop",
  description:
    "Browse & discover many of products. we ship to you. Shop top brands in clothing and more.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await Promise.resolve(params);

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={` ${angelo.variable} ${playfair.variable} ${tajawal.variable} ${montserrat.variable}`}
    >
      <body className={`ltr:font-sans rtl:font-arabic`}>
        <Suspense fallback={<Loading />}>
          <Providers locale={locale}>
            <PageLine />
            <NavBar />
            <Suspense fallback={<Loading />}>
              <main className="flex-grow flex-1">{children}</main>
            </Suspense>
            <Footer />
          </Providers>
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
