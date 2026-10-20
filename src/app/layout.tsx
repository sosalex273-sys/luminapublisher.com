import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta"
});

export const metadata: Metadata = {
  title: "LUMINA PUBLISHER - Lembaga Publikasi Ilmiah & Konsultan Akademik",
  description: "Layanan publikasi jurnal nasional & internasional, buku, dan HKI profesional terbaik.",
  keywords: ["Jurnal", "Publikasi", "HKI", "Buku", "LUMINA PUBLISHER"],
  authors: [{ name: "LUMINA PUBLISHER" }],
  icons: {
    icon: "/images/LOGOBARUNEW.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://luminapublisher.com",
    title: "LUMINA PUBLISHER - Premium Publishing",
    description: "Layanan publikasi terbaik untuk kebutuhan akademik dan profesional.",
    siteName: "LUMINA PUBLISHER",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
