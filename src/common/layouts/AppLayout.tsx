"use client";

import Footer from "@components/Footer";
import Header from "@components/Header";
import { AppShell } from "@mantine/core";
import { IFC } from "@ts/global.types";
import React from "react";

import classes from "./styles.module.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const AppLayout: React.FC<IFC> = ({ children }) => {
  const pathname = usePathname();

  // Adjust layout for pages
  const isSearch = pathname.includes("/search");

  const headerHeight = isSearch ? 100 : 70;

  return (
    <AppShell
      header={{ height: headerHeight, offset: true }}
      footer={{ height: 60, offset: isSearch ? false : true }}
      classNames={{
        root: classes.app_root,
        main: classes.app_main,
        header: clsx(classes.app_header, {
          [classes.app_header_transparent]: ["/"].includes(pathname),
        }),
        footer: classes.app_footer,
      }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>

      {!isSearch && (
        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      )}
    </AppShell>
  );
};

export default AppLayout;
