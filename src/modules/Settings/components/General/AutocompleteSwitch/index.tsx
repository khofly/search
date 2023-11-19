import { Flex, Select, Switch } from "@mantine/core";
import { useTranslations } from "@store/global";
import { IAutocompleteEngines, useSearchStore } from "@store/search";
import React from "react";

const AutocompleteSwitch = () => {
  const translate = useTranslations();

  const {
    useAutocomplete,
    setUseAutocomplete,
    autocompleteEngine,
    setAutocompleteEngine,
  } = useSearchStore((state) => ({
    useAutocomplete: state.useAutocomplete,
    setUseAutocomplete: state.setUseAutocomplete,
    autocompleteEngine: state.autocompleteEngine,
    setAutocompleteEngine: state.setAutocompleteEngine,
  }));

  return (
    <Flex align="center" gap="sm">
      {useAutocomplete && (
        <Select
          data={[
            {
              label: translate(
                "pages.settings.general.autocompleteEngineGoogle"
              ),
              value: "google",
            },
            {
              label: translate("pages.settings.general.autocompleteEngineDDG"),
              value: "duckduckgo",
            },
          ]}
          value={autocompleteEngine}
          onChange={(val) => setAutocompleteEngine(val as IAutocompleteEngines)}
          w={150}
        />
      )}

      <Switch
        checked={useAutocomplete}
        onChange={(e) => setUseAutocomplete(e.currentTarget.checked)}
      />
    </Flex>
  );
};

export default AutocompleteSwitch;
