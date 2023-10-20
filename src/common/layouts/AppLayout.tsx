"use client";

import Footer from "@components/Footer";
import Header from "@components/Header";
import { AppShell } from "@mantine/core";
import { IFC } from "@ts/global.types";
import React from "react";

import classes from "./styles.module.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import WikiNavbar from "@components/Navbar/Wiki";
import { useDisclosure } from "@mantine/hooks";

const AppLayout: React.FC<IFC> = ({ children }) => {
  const [openNavbar, { toggle: toggleNavbar }] = useDisclosure(false);
  const pathname = usePathname();

  // Adjust layout for pages
  const isSettings = pathname.startsWith("/settings");
  const isSearch = pathname.startsWith("/search");
  const isWiki = pathname.startsWith("/wiki");

  const isFooterOffset = isSearch || isWiki;

  const headerHeight = isSearch ? 100 : 70;

  return (
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

      {!isSearch && !isWiki && !isSettings && (
        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      )}
    </AppShell>
  );
};

export default AppLayout;
