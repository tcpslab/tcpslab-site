import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Instrument_Sans, Raleway } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.shortName} | ${site.fullName}`,
  description: `${site.fullName}, ${site.department}, ${site.university}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-black">
        <ViewTransition>{children}</ViewTransition>
      </body>
    </html>
  );
}
