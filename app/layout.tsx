import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";
import { Toaster } from "sonner";
import { brandName, shortBrandName, siteDescription, siteKeywords, siteTitle, siteUrl } from "@/lib/site-constants";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: brandName }],
  creator: brandName,
  metadataBase: siteUrl,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: brandName,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: `/branding/${shortBrandName}-Logo-512.png` }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`/branding/${shortBrandName}-Logo-512.png`],
  },
  icons: {
    icon: [
      { url: `/branding/${shortBrandName}-Logo-192.png`, sizes: "192x192", type: "image/png" },
      { url: `/branding/${shortBrandName}-Logo-512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: `/branding/${shortBrandName}-apple-touch-icon.png`,
  },
  manifest: "/branding/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontVariables} font-lato antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
