import NextLink from "@components/NextLink";
import { Flex, Switch, Text } from "@mantine/core";
import { useTranslations } from "@store/global";
import { useSearchStore } from "@store/search";
import React from "react";

const IASwitch = () => {
  const translate = useTranslations();

  const { useInstantAnswers, setUseInstantAnswers } = useSearchStore(
    (state) => ({
      useInstantAnswers: state.useInstantAnswers,
      setUseInstantAnswers: state.setUseInstantAnswers,
    })
  );

  return (
    <Flex align="center" gap="sm">
      <Text component="span" c="blue.4">
        <NextLink href="/wiki/search/instant-answers" target="_blank">
          {translate("pages.settings.general.learn_more")}
        </NextLink>
      </Text>

      <Switch
        checked={useInstantAnswers}
        onChange={(e) => setUseInstantAnswers(e.currentTarget.checked)}
      />
    </Flex>
  );
};

export default IASwitch;