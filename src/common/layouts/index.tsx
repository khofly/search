"use client";

import Footer from "@components/Footer";
import Header from "@components/Header";
import { AppShell, MantineProvider } from "@mantine/core";
import { IFC } from "@ts/global.types";
import React, { Suspense } from "react";

import classes from "./styles.module.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import WikiNavbar from "@components/Navbar/Wiki";
import { useDisclosure } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";
import { getMantineTheme } from "@utils/resources/mantineTheme";
import { useGlobalStore } from "@store/global";
import { NavigationProgress } from "@mantine/nprogress";
import NProgress from "@module/NProgress";
import { useApiProfile } from "src/api/profile/use-api-profile";
import { useApiTier } from "src/api/tier/use-api-tier";

const AppLayout: React.FC<IFC> = ({ children }) => {
  const [openNavbar, { toggle: toggleNavbar }] = useDisclosure(false);

  const { appTheme } = useGlobalStore((state) => ({
    appTheme: state.appTheme,
  }));

  const pathname = usePathname();

  // Adjust layout for pages
  const isSearch = pathname.startsWith("/search");
  const isWiki = pathname.startsWith("/wiki");

  const isIndex = pathname === "/";

  const isFooterOffset = isSearch || isWiki;

  const headerHeight = isSearch ? 100 : 70;

  // Updates profile on session change
  useApiProfile();
  useApiTier();

  return (
    <MantineProvider
      theme={getMantineTheme(appTheme)}
      defaultColorScheme="dark"
    >
      <Notifications />
      <NavigationProgress />

      <Suspense fallback={null}>
        <NProgress />
      </Suspense>

      <AppShell
        header={{ height: headerHeight, offset: true }}
        footer={{ height: 60, offset: isFooterOffset ? false : true }}
        navbar={
          isWiki
            ? {
                width: { sm: isWiki ? 200 : 0, md: isWiki ? 300 : 0 },
                breakpoint: "md",
                collapsed: { mobile: !openNavbar, desktop: false },
              }
            : undefined
        }
        classNames={{
          root: classes.app_root,
          main: classes.app_main,
          navbar: classes.app_navbar,
          header: clsx(classes.app_header, {
            [classes.app_header_transparent]: ["/"].includes(pathname),
          }),
          footer: classes.app_footer,
        }}
      >
        <AppShell.Header>
          <Header openNavbar={openNavbar} toggleNavbar={toggleNavbar} />
        </AppShell.Header>

        <AppShell.Main>{children}</AppShell.Main>

        {isWiki && (
          <AppShell.Navbar p="md">
            <WikiNavbar />
          </AppShell.Navbar>
        )}

        {isIndex && (
          <AppShell.Footer>
            <Footer />
          </AppShell.Footer>
        )}
      </AppShell>
    </MantineProvider>
  );
};

export default AppLayout;
