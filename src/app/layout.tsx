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

// Site-wide defaults. Each edition page sets its own title/description/canonical.
export const metadata: Metadata = {
  title: {
    default: "BitConf - Moldova's Premier Technology Conference",
    template: "%s | BitConf",
  },
  description:
    "BitConf is Moldova's leading technology conference: inspiring talks, hands-on workshops and networking for the region's tech community.",
  keywords:
    "BitConf, Moldova technology conference, tech conference Bălți, software development, programming, IT conference Moldova",
  authors: [{ name: "BitConf Team" }],
  creator: "BitConf",
  publisher: "BitConf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bitconf.md'),
  openGraph: {
    siteName: 'BitConf',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
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
