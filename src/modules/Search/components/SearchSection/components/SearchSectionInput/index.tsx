import NextLink from "@components/NextLink";
import {
  ActionIcon,
  Autocomplete,
  Combobox,
  Divider,
  Flex,
  TextInput,
  useCombobox,
} from "@mantine/core";
import { IconSearch, IconTriangleFilled, IconX } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import React, { useEffect, useRef, useState } from "react";

import classes from "./styles.module.scss";
import { useSearchStore } from "@store/search";
import { useDebouncedValue } from "@mantine/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { useResponsive } from "@hooks/use-responsive";
import { useTranslations } from "@store/global";
import useAutocompleteSWR from "src/api/autocomplete/use-autocomplete-query";

const SearchSectionInput = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isSm = useResponsive("max", "sm");
  const inputRef = useRef<HTMLInputElement>(null);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const { useAutocomplete } = useSearchStore((state) => ({
    useAutocomplete: state.useAutocomplete,
  }));

  const [q, setQ] = useState(searchParams.get("q") || "");
  const [debouncedQ] = useDebouncedValue(q, 400);

  // Autocomplete API
  const { data, trigger, reset } = useAutocompleteSWR();

  const handleSearch = (query: string) => {
    const paramsTab = searchParams.get("tab") || "general";
    const paramsQ = searchParams.get("q") || "";

    // Prevent unnecessary search
    if (!query.length || query === paramsQ) return;

    // Unfocus input on search
    inputRef.current?.blur();
    router.push(`/search?q=${encodeURIComponent(query)}&tab=${paramsTab}`);
  };

  const handleClear = () => {
    setQ("");
  };

  const comboboxOptions =
    data &&
    data.map((str) => (
      <Combobox.Option value={str} key={str}>
        {str}
      </Combobox.Option>
    ));

  useEffect(() => {
    const query = searchParams.get("q");

    if (query) setQ(query);
  }, [searchParams]);

  useEffect(() => {
    if (!useAutocomplete || !debouncedQ) return;

    trigger(debouncedQ);
  }, [debouncedQ]);

  return (
    <Combobox
      onOptionSubmit={(val) => {
        handleSearch(val);
        combobox.closeDropdown();
      }}
      resetSelectionOnOptionHover
      store={combobox}
      withinPortal={false}
    >
      <Combobox.Target>
        <TextInput
          ref={inputRef}
          className={classes.search_bar}
          placeholder={t("pages.search.search_placeholder")}
          radius="md"
          size="md"
          value={q}
          onChange={(e) => {
            const val = e.currentTarget.value;

            combobox.resetSelectedOption();
            setQ(val);
            if (!val.length) reset();
          }}
          onKeyDown={(e) => {
            const isSubmitOption = combobox.getSelectedOptionIndex() !== -1;

            if (e.key === "Enter" && !isSubmitOption) {
              handleSearch(q);
            }
          }}
          leftSection={
            isSm && (
              <NextLink className={classes.app_logo_mobile} href="/">
                <IconTriangleFilled style={getIconStyle(22)} />
              </NextLink>
            )
          }
          rightSection={
            <Flex align="center" justify="flex-end" gap={4}>
              {q.length >= 1 && (
                <>
                  <ActionIcon
                    size="lg"
                    radius="sm"
                    color="gray.8"
                    variant="transparent"
                    onClick={handleClear}
                  >
                    <IconX style={getIconStyle(20)} stroke={1.5} />
                  </ActionIcon>

                  <Divider orientation="vertical" w={1} my={9} color="gray.7" />
                </>
              )}

              <ActionIcon
                w={40}
                h={40}
                radius="md"
                color="gray.4"
                variant="transparent"
                onClick={() => handleSearch(q)}
              >
                <IconSearch
                  style={getIconStyle(20)}
                  stroke={2}
                  // color="white"
                />
              </ActionIcon>
            </Flex>
          }
          rightSectionWidth={q.length >= 1 ? 83 : 40}
          // onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
          maxLength={250}
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={!comboboxOptions}>
        <Combobox.Options>{comboboxOptions}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default SearchSectionInput;
