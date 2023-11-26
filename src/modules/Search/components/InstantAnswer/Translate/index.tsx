import React, { useState } from "react";
import { IAWrapper } from "../wrapper";
import {
  ActionIcon,
  Button,
  Flex,
  Select,
  Text,
  Textarea,
} from "@mantine/core";
import { LANG_DATA } from "./data";
import { IconLanguage, IconSwitchHorizontal } from "@tabler/icons-react";

import classes from "./styles.module.scss";
import { getIconStyle } from "@utils/functions/iconStyle";

const Translate = () => {
  const [lang1, setLang1] = useState("");
  const [lang2, setLang2] = useState("");

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSwapLanguages = () => {
    const newLang1 = lang2;
    const newLang2 = lang1;
    setLang1(newLang1);
    setLang2(newLang2);
  };

  return (
    <IAWrapper>
      <Flex direction="row" align="center" justify="space-between" mb="sm">
        <Flex align="center" gap={6}>
          <IconLanguage style={getIconStyle(22)} />
          <Text size="lg" fw={500}>
            LibreTranslate
          </Text>
        </Flex>

        <Button size="xs">Translate</Button>
      </Flex>

      <Flex direction="row" align="flex-start" gap="sm">
        {/* User input */}
        <Flex className={classes.flex_side} direction="column">
          <Select
            data={LANG_DATA}
            value={lang1}
            onChange={(val) => setLang1(val || "")}
            mb="md"
          />

          <Textarea
            classNames={{
              input: classes.textarea,
            }}
            placeholder="Enter text"
            variant="unstyled"
            size="lg"
          />
        </Flex>

        {/* Center */}
        <ActionIcon variant="subtle" onClick={handleSwapLanguages} mt={4}>
          <IconSwitchHorizontal />
        </ActionIcon>

        {/* API output */}
        <Flex className={classes.flex_side} direction="column">
          <Select
            data={LANG_DATA}
            value={lang2}
            onChange={(val) => setLang2(val || "")}
            mb="md"
          />

          <Textarea
            classNames={{
              input: classes.textarea,
            }}
            placeholder="Translation"
            variant="filled"
            size="lg"
            readOnly
          />
        </Flex>
      </Flex>
    </IAWrapper>
  );
};

export default Translate;
