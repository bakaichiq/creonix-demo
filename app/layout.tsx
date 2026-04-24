import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { ScrollToTop } from "@/components/ui/scroll-to-top";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: {
    default: "Creonix Demo Hub — ERP+CRM под ваш бизнес",
    template: "%s | Creonix Demo Hub"
  },
  description:
    "Интерактивная demo-платформа Creonix для презентации ERP+CRM под 10 типов бизнеса. Запуск за 30 дней.",
  keywords: ["ERP", "CRM", "автоматизация бизнеса", "демо", "управление производством", "аналитика"],
  authors: [{ name: "Creonix" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Creonix Demo Hub",
    title: "Creonix Demo Hub — ERP+CRM под ваш бизнес за 30 дней",
    description:
      "Интерактивная demo-платформа для 10 отраслей: строительство, логистика, пекарня, ресторан и другие."
  },
  twitter: {
    card: "summary_large_image",
    title: "Creonix Demo Hub",
    description: "ERP+CRM под конкретные отрасли. Интерактивное демо."
  },
  robots: {
    index: true,
    follow: true
  }
};

import { Toaster } from "sonner";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg focus:outline-none"
        >
          Перейти к содержимому
        </a>
        {children}
        <ScrollToTop />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
