"use client";

import {
  ActionIcon,
  Autocomplete,
  Button,
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
  IconMicrophone,
  IconSearch,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

import classes from "./styles.module.scss";
import { useDebouncedValue, useDisclosure } from "@mantine/hooks";
import VirtualKeyboard from "../VirtualKeyboard";
import { useRouter } from "next/navigation";
import { useTranslations } from "src/store/global";

import { getIconStyle } from "@utils/functions/iconStyle";
import { useResponsive } from "@hooks/use-responsive";
import useAutocompleteSWR from "src/api/autocomplete/use-autocomplete-query";
import { nprogress } from "@mantine/nprogress";
import { useGeneralStore } from "@store/general";

const SearchBar = () => {
  const t = useTranslations();

  const { useAutocomplete } = useGeneralStore((state) => ({
    useAutocomplete: state.useAutocomplete,
  }));

  const router = useRouter();
  const [openKeyboard, { toggle: toggleKeyboard }] = useDisclosure();

  const [q, setQ] = useState("");
  const [debouncedQ] = useDebouncedValue(q, 300);

  const isXs = useResponsive("max", "xs");

  // Autocomplete API
  const {
    data: autocompleteData,
    isMutating,
    trigger,
    reset,
  } = useAutocompleteSWR();

  const handleSearch = (query: string) => {
    // Prevent empty search
    if (!query.length) return;

    nprogress.start();
    router.push(`/search?q=${encodeURIComponent(query)}`);
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
        size={isXs ? "md" : "lg"}
        value={q}
        onChange={(val) => {
          setQ(val);
          if (!val.length) reset();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(q);
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
              size={isXs ? 32 : 38}
              radius="xl"
              color={"blue"}
              variant="filled"
              onClick={() => handleSearch(q)}
              disabled={!q}
            >
              <IconArrowRight style={getIconStyle(22)} stroke={1.5} />
            </ActionIcon>
          </Flex>
        }
        rightSectionWidth={isXs ? 40 : 100}
        maxLength={250}
        // Autocomplete props
        data={autocompleteData?.map((str) => ({ label: str, value: str }))}
        comboboxProps={{
          onOptionSubmit: (val) => handleSearch(val),
          size: "md",
        }}
      />

      {openKeyboard && (
        <VirtualKeyboard value={q} onChange={setQ} toggle={toggleKeyboard} />
      )}
    </>
  );
};

export default SearchBar;
