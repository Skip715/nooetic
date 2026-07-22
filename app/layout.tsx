import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Nooetic — Regulated wellness, made simple",
  description:
    "Nooetic is a UK membership network giving you smarter, more affordable access to licensed clinics and premium wellness brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
