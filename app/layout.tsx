import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/notifications/styles.css";

import "@styles/base.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ColorSchemeScript } from "@mantine/core";
import AppLayout from "@layout/index";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--next-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />

        <ColorSchemeScript defaultColorScheme="dark" />

        {/* OpenSearch XML */}
        <link
          rel="search"
          href={"/opensearch_stag.xml"}
          type="application/opensearchdescription+xml"
          title="Search khofly.com"
        />

        {/* Leaflet stuff */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

// Meta tags
export const metadata: Metadata = {
  title: !+process.env.NEXT_PUBLIC_IS_SELF_HOST!
    ? "Khofly"
    : process.env.NEXT_PUBLIC_APP_NAME,
  description:
    "Khofly - a modern SearXNG front-end, focused on speed and user experience.",
  keywords:
    "Khofly, Search, Khofly Search, SearXNG, FOSS, open source, meta search engine",
  metadataBase: new URL("https://khofly.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: new URL("https://khofly.com"),
    siteName: "Khofly",
    title: "Khofly",
    description:
      "Khofly - a modern SearXNG front-end, focused on speed and user experience.",
    images: [
      {
        url: "https://khofly.com/images/og.png",
        width: 1200,
        height: 600,
        alt: "Khofly og image",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
};
