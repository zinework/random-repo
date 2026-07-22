import type { Metadata } from "next";
import { Source_Serif_4, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const bodySans = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingSerif = Source_Serif_4({
  variable: "--font-heading",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Islamophobia",
  description: "Research hub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodySans.variable} ${headingSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
