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

      {/* Language select */}
      <Flex direction="row" align="flex-start" justify="space-between" gap="sm">
        <Select
          className={classes.flex_side}
          data={LANG_DATA}
          value={lang1}
          onChange={(val) => setLang1(val || "")}
          mb="md"
        />

        <ActionIcon variant="subtle" onClick={handleSwapLanguages} mt={4}>
          <IconSwitchHorizontal />
        </ActionIcon>

        <Select
          className={classes.flex_side}
          data={LANG_DATA}
          value={lang2}
          onChange={(val) => setLang2(val || "")}
          mb="md"
        />
      </Flex>

      <Flex
        className={classes.flex_mobile}
        align="flex-start"
        justify="space-between"
      >
        {/* User input */}
        <Textarea
          classNames={{
            root: classes.textarea,
            input: classes.textarea,
          }}
          placeholder="Enter text"
          variant="default"
          size="md"
        />

        {/* API output */}
        <Textarea
          classNames={{
            root: classes.textarea,
            input: classes.textarea,
          }}
          placeholder="Translation"
          variant="filled"
          size="md"
          readOnly
        />
      </Flex>
    </IAWrapper>
  );
};

export default Translate;
