"use client";

import classes from "./styles.module.scss";
import { Button, Group } from "@mantine/core";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SearchSection from "@module/Search/components/SearchSection";
import clsx from "clsx";
import HeaderApps from "./components/HeaderApps";
import { useTranslations } from "src/store/global";
import HeaderLogo from "./components/HeaderLogo";

interface Props {
  openNavbar: boolean;
  toggleNavbar: () => void;
}

const Header: React.FC<Props> = ({ openNavbar, toggleNavbar }) => {
  const t = useTranslations();
  const pathname = usePathname();

  const isSettings = pathname.startsWith("/settings");
  const isSearch = pathname.startsWith("/search");
  const isWiki = pathname.startsWith("/wiki");

  const authUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}/auth/login?redirectTo=${
    process.env.NEXT_PUBLIC_HOST
  }${pathname}${
    process.env.NODE_ENV === "development" ? "&cookieDomain=localhost" : ""
  }`;

  return (
    <Group
      className={clsx(classes.header, {
        [classes.header_search]: pathname.startsWith("/search"),
      })}
      h="100%"
      px="md"
      pt="md"
      pb={pathname.startsWith("/search") ? 0 : "md"}
      gap={0}
    >
      {/* Header: /search?q= */}
      {isSearch && <SearchSection />}

      {/* Header: /wiki, /settings */}
      {(isWiki || isSettings) && (
        <HeaderLogo
          hasBurger={isWiki}
          openNavbar={openNavbar}
          toggleNavbar={toggleNavbar}
        />
      )}

      <div className={classes.divider}></div>

      <HeaderApps />

      <Link className={classes.auth_button} href={authUrl} target="_self">
        <Button size="sm">{t("header.sign_in")}</Button>
      </Link>
    </Group>
  );
};

export default Header;
