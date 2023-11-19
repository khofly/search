"use client";

import {
  ActionIcon,
  Autocomplete,
  Flex,
  Loader,
  Menu,
  TextInput,
  rem,
} from "@mantine/core";
import {
  IconArrowRight,
  IconKeyboard,
  IconListSearch,
  IconSearch,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

import classes from "./styles.module.scss";
import { useDebouncedValue, useDisclosure } from "@mantine/hooks";
import VirtualKeyboard from "../VirtualKeyboard";
import { useRouter } from "next/navigation";
import { useTranslations } from "src/store/global";

import { showNotification } from "@mantine/notifications";
import { getIconStyle } from "@utils/functions/iconStyle";
import { useResponsive } from "@hooks/use-responsive";
import useAutocompleteSWR from "src/api/autocomplete/use-autocomplete-query";
import { useSearchStore } from "@store/search";

const SearchBar = () => {
  const t = useTranslations();

  const { useAutocomplete } = useSearchStore((state) => ({
    useAutocomplete: state.useAutocomplete,
  }));

  const router = useRouter();
  const [openKeyboard, { toggle: toggleKeyboard }] = useDisclosure();

  const [q, setQ] = useState("");
  const [debouncedQ] = useDebouncedValue(q, 400);

  const isXs = useResponsive("max", "xs");

  // Autocomplete API
  const { data, isMutating, trigger, reset } = useAutocompleteSWR();

  const handleSearch = (query: string) => {
    // Prevent empty search
    if (!query.length) return;

    router.push(`/search?q=${query}`);
  };

  useEffect(() => {
    if (!useAutocomplete || !debouncedQ) return;

    trigger(debouncedQ);
  }, [debouncedQ]);

  return (
    <>
      <Autocomplete
        className={classes.search_bar}
        placeholder={t("pages.index.search_placeholder")}
        radius="xl"
        size="lg"
        autoFocus={true}
        value={q}
        onChange={(val) => {
          setQ(val);
          if (!val.length) reset();
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") handleSearch(q);
        }}
        leftSection={
          !isXs &&
          (isMutating ? (
            <Loader size={rem(24)} />
          ) : (
            <IconSearch style={getIconStyle(24)} stroke={1.5} />
          ))
        }
        // leftSectionWidth="auto"
        rightSection={
          <Flex align="center" justify="flex-end">
            {!isXs && (
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
            )}

            <ActionIcon
              size={38}
              radius="xl"
              color={"blue"}
              variant="filled"
              onClick={() => handleSearch(q)}
            >
              <IconArrowRight style={getIconStyle(22)} stroke={1.5} />
            </ActionIcon>
          </Flex>
        }
        rightSectionWidth={isXs ? 50 : 100}
        // Autocomplete props
        data={data?.map((str) => ({ label: str, value: str }))}
        comboboxProps={{
          onOptionSubmit: (val) => handleSearch(val),
        }}
      />

      {openKeyboard && (
        <VirtualKeyboard value={q} onChange={setQ} toggle={toggleKeyboard} />
      )}
    </>
  );
};

export default SearchBar;
