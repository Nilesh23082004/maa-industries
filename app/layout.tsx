import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Maa Industries | Heavy CNC Machining, Ahmedabad",
  description:
    "Heavy CNC machining, VMC turning, and precision component manufacturing with up to 600mm height and 6000mm length capacity in Rakhial, Ahmedabad.",
  icons: {
    icon: "/favicon.ico",
  },
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
      <body className="min-h-full flex flex-col bg-graphite text-pale font-body">
        {children}
      </body>
    </html>
  );
}

