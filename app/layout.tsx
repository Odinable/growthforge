import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE } from "@/lib/content";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Self-referencing canonical: tells Google this URL is the real one.
  alternates: { canonical: "/" },
  title: SITE.metaTitle,
  description: SITE.metaDescription,
  openGraph: {
    title: SITE.metaTitle,
    description: SITE.metaDescription,
    siteName: SITE.name,
    url: SITE_URL,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.metaTitle,
    description: SITE.metaDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full">
        {/*
          Marks JS as available before first paint. Every animation's hidden
          starting state is gated on this class, so a failed bundle degrades
          to a fully visible page instead of a blank one.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
