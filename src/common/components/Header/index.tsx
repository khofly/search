"use client";

import classes from "./styles.module.scss";
import { Button, Group } from "@mantine/core";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SearchSection from "@module/Search/components/SearchSection";
import clsx from "clsx";
import HeaderApps from "./HeaderApps";

const Header = () => {
  const pathname = usePathname();

  return (
    <Group
      className={clsx(classes.header, {
        [classes.header_search]: pathname.includes("/search"),
      })}
      h="100%"
      px="md"
      pt="md"
    >
      {/* Header: /search?q= */}
      {pathname.includes("/search") && <SearchSection />}

      <div className={classes.divider}></div>

      <HeaderApps />

      <Link href="/">
        <Button className={classes.btn_oglas}>Sign in</Button>
      </Link>
    </Group>
  );
};

export default Header;
