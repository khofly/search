"use client";

import { ActionIcon, Flex, TextInput, rem } from "@mantine/core";
import { IconArrowRight, IconKeyboard, IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";

import classes from "./styles.module.scss";
import { useDisclosure } from "@mantine/hooks";
import VirtualKeyboard from "../VirtualKeyboard";
import { useRouter } from "next/navigation";
import { useTranslations } from "src/store/global";
import { PRON_SITES } from "@utils/resources/haramData";

import { showNotification } from "@mantine/notifications";
import { getIconStyle } from "@utils/functions/iconStyle";

const SearchBar = () => {
  const t = useTranslations();
  const router = useRouter();
  const [openKeyboard, { toggle: toggleKeyboard }] = useDisclosure();

  const [q, setQ] = useState("");

  const handleSearch = () => {
    // Prevent empty search
    if (!q.length) return;

    // Haram filter
    if (PRON_SITES.find((s) => q.includes(s.toLowerCase())))
      return showNotification({
        title: "Haram!",
        message: "",
        color: "yellow",
      });

    router.push(`/search?q=${q}`);
  };

  return (
    <>
      <TextInput
        className={classes.search_bar}
        placeholder={t("pages.index.search_placeholder")}
        radius="xl"
        size="lg"
        autoFocus={true}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") handleSearch();
        }}
        leftSection={<IconSearch style={getIconStyle(24)} stroke={1.5} />}
        // leftSectionWidth="auto"
        rightSection={
          <Flex align="center" justify="flex-end">
            <ActionIcon
              size={"xl"}
              mr={6}
              radius="xl"
              // color={"blue"}
              variant="transparent"
              onClick={toggleKeyboard}
            >
              <IconKeyboard
                style={getIconStyle(22)}
                color={"white"}
                stroke={1.5}
              />
            </ActionIcon>

            <ActionIcon
              size={38}
              radius="xl"
              color={"blue"}
              variant="filled"
              onClick={handleSearch}
            >
              <IconArrowRight style={getIconStyle(22)} stroke={1.5} />
            </ActionIcon>
          </Flex>
        }
        rightSectionWidth={100}
      />

      {openKeyboard && (
        <VirtualKeyboard value={q} onChange={setQ} toggle={toggleKeyboard} />
      )}
    </>
  );
};

export default SearchBar;
