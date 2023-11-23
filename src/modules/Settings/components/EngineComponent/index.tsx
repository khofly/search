import { Flex, Image, Switch, Text } from "@mantine/core";
import { ITranslations, useTranslations } from "@store/global";
import { DotNestedKeys } from "@ts/global.types";
import React from "react";

interface Props {
  iconSrc: string;
  iconAlt: string;
  label: DotNestedKeys<ITranslations>;
  checked: boolean;
  onChange: (next: boolean) => void;
}

const EngineComponent: React.FC<Props> = ({
  checked,
  iconAlt,
  iconSrc,
  label,
  onChange,
}) => {
  const translate = useTranslations();

  return (
    <Flex
      w="100%"
      direction={{ base: "column", sm: "row" }}
      align="center"
      justify="space-between"
    >
      <Flex align="center" gap="sm">
        <Image src={iconSrc} w={20} h={20} alt={iconAlt} />

        <Text size="md" fw={400}>
          {translate(label)}
        </Text>
      </Flex>

      <Switch
        style={{ cursor: "pointer" }}
        checked={checked}
        onChange={(e) => onChange(e.currentTarget.checked)}
      />
    </Flex>
  );
};

export default EngineComponent;