import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BitConf 2025 - Moldova's Premier Technology Conference | November 8, Bălți",
  description: "Join 150+ tech professionals at BitConf 2025, Moldova's leading technology conference. Experience inspiring talks, hands-on workshops, and networking opportunities. November 8, 2025 at Nortek Center, Bălți. Register now!",
  keywords: "BitConf, BitConf 2025, Moldova technology conference, tech conference Bălți, software development, programming, IT conference Moldova, Nortek Center, November 2025",
  authors: [{ name: "BitConf Team" }],
  creator: "BitConf",
  publisher: "BitConf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bitconf.md'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BitConf 2025 - Moldova's Premier Technology Conference",
    description: "Join 150+ tech professionals at BitConf 2025. Inspiring talks, hands-on workshops, and networking opportunities. November 8, 2025 at Nortek Center, Bălți.",
    url: 'https://bitconf.md',
    siteName: 'BitConf',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BitConf 2025 - Technology Conference in Moldova',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BitConf 2025 - Moldova's Premier Technology Conference",
    description: "Join 150+ tech professionals at BitConf 2025. November 8, 2025 at Nortek Center, Bălți. Register now!",
    images: ['/og-image.png'],
    creator: '@bitconf_md',
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
