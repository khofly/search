import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/notifications/styles.css";

import "@styles/base.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import AppLayout from "@layout/AppLayout";
import { THEME_MANTINE } from "@utils/resources/theme";
import { Notifications } from "@mantine/notifications";
// import NProgress from "@module/NProgress/NProgress";
// import { Suspense } from "react";
// import { NavigationProgress } from "@mantine/nprogress";

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
      </head>
      <body>
        <MantineProvider theme={THEME_MANTINE} defaultColorScheme="dark">
          <Notifications />

          {/* <NavigationProgress />

          <Suspense fallback={null}>
            <NProgress />
          </Suspense> */}

          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}

// Meta tags
export const metadata: Metadata = {
  title: "Khofly",
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
