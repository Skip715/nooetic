import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nooetics — Wellness. Access. Savings.",
  description:
    "The UK's wellness membership network — connecting members to licensed clinics and exclusive wellness deals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Clash Grotesk via Fontshare's free CDN, used as the display face */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <style>{`:root { --font-clash: 'Clash Grotesk', sans-serif; }`}</style>
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
