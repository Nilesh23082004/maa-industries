import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { company } from "@/lib/content";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-readout",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.maaindustriess.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  applicationName: "Maa Industries",
  title: {
    default: "Maa Industries | Heavy CNC Machining, Ahmedabad",
    template: "%s | Maa Industries",
  },
  description:
    "Heavy CNC machining, VMC turning, precision shaft turning up to 600mm diameter x 6000mm length, industrial rolls, tie bars, and custom heavy components in Rakhial, Ahmedabad, Gujarat.",
  keywords: [
    "Maa Industries",
    "CNC machining Ahmedabad",
    "heavy shaft machining Gujarat",
    "roll machining",
    "tie bar manufacturer",
    "heavy CNC turning",
    "Rakhial industrial area",
    "precision shaft turning",
    "heavy machine shop Ahmedabad",
  ],
  authors: [{ name: "Maa Industries" }],
  creator: "Maa Industries",
  publisher: "Maa Industries",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/maa-logo-icon.png", type: "image/png" },
    ],
    apple: "/images/maa-logo-icon.png",
  },
  openGraph: {
    title: "Maa Industries | Heavy CNC Machining, Ahmedabad",
    description:
      "Heavy CNC machining, VMC turning, and precision component manufacturing up to 600mm diameter x 6000mm length in Rakhial, Ahmedabad, Gujarat.",
    url: siteUrl,
    siteName: "Maa Industries",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maa Industries Heavy CNC Machining Facility in Ahmedabad",
      },
      {
        url: "/images/cnc-lathe-overview.jpg",
        width: 1024,
        height: 1024,
        alt: "Maa Industries CNC Lathe Machinery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Industries | Heavy CNC Machining, Ahmedabad",
    description:
      "Heavy CNC machining, VMC turning, and precision component manufacturing up to 600mm diameter x 6000mm length in Rakhial, Ahmedabad, Gujarat.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Maa Industries",
  url: siteUrl,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: company.name,
  image: `${siteUrl}/images/cnc-lathe-overview.jpg`,
  logo: `${siteUrl}/images/maa-logo-full.png`,
  description:
    "Heavy CNC machining, VMC turning, and precision shaft turning up to 600mm diameter and 6000mm length in Rakhial, Ahmedabad.",
  telephone: company.phoneNumbers.map((p) => p.number),
  email: company.email,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.addressLines.slice(0, 2).join(", "),
    addressLocality: company.city,
    addressRegion: "Gujarat",
    postalCode: "380023",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.0135,
    longitude: 72.6247,
  },
  hasMap: `https://maps.google.com/?q=${encodeURIComponent(company.mapsQuery)}`,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:30",
    closes: "19:30",
  },
  priceRange: "$$",
  areaServed: ["Ahmedabad", "Gujarat", "India"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-graphite text-pale font-body">
        {children}
      </body>
    </html>
  );
}
