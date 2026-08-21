import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = "Marco Fleming";
const description =
  "Personal site of Marco Fleming. MIT computer science, 2022. Co-founded Instinct and Neptune Medical.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marcofleming.com"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    type: "profile",
    images: [{ url: "/marco.jpeg", width: 800, height: 800, alt: title }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/marco.jpeg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marco Fleming",
  url: "https://www.marcofleming.com",
  image: "https://www.marcofleming.com/marco.jpeg",
  description,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Massachusetts Institute of Technology",
  },
  sameAs: [
    "https://github.com/MarcoF1",
    "https://www.linkedin.com/in/marcofleming/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
