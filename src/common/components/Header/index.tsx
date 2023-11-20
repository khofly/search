"use client";

import classes from "./styles.module.scss";
import { Anchor, Button, Group } from "@mantine/core";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SearchSection from "@module/Search/components/SearchSection";
import clsx from "clsx";
import HeaderApps from "./components/HeaderApps";
import { useGlobalStore, useTranslations } from "src/store/global";
import HeaderLogo from "./components/HeaderLogo";
import HeaderAvatar from "./components/HeaderAvatar";
import HeaderSettings from "./components/HeaderSettings";

interface Props {
  openNavbar: boolean;
  toggleNavbar: () => void;
}

const Header: React.FC<Props> = ({ openNavbar, toggleNavbar }) => {
  const t = useTranslations();
  const pathname = usePathname();

  const { profile } = useGlobalStore((state) => ({ profile: state.profile }));

  const isChangelog = pathname.startsWith("/changelog");
  const isSettings = pathname.startsWith("/settings");
  const isRewards = pathname.startsWith("/rewards");
  const isSearch = pathname.startsWith("/search");
  const isWiki = pathname.startsWith("/wiki");

  const authUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}/auth/login?redirectTo=${
    process.env.NEXT_PUBLIC_HOST
  }${pathname}&cookieDomain=${
    process.env.NODE_ENV === "development" ? "127.0.0.1" : "khofly.com"
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

      {/* Header: /wiki, /settings, /rewards, /changelog */}
      {(isWiki || isSettings || isChangelog || isRewards) && (
        <HeaderLogo
          hasBurger={isWiki}
          openNavbar={openNavbar}
          toggleNavbar={toggleNavbar}
        />
      )}

      <div className={classes.divider}></div>

      {isSearch && <HeaderSettings />}

      <HeaderApps />

      {profile ? (
        <HeaderAvatar />
      ) : (
        <Anchor className={classes.auth_button} href={authUrl} target="_self">
          <Button size="sm">{t("header.sign_in")}</Button>
        </Anchor>
      )}
    </Group>
  );
};

export default Header;
