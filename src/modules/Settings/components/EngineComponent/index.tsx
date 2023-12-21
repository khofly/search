import {
  Anchor,
  Badge,
  Chip,
  Flex,
  HoverCard,
  Image,
  Stack,
  Switch,
  Text,
} from "@mantine/core";
import { ITranslations, useTranslations } from "@store/global";
import { DotNestedKeys } from "@ts/global.types";
import React from "react";
import classes from "./styles.module.scss";
import { IHoverData } from "./hover-data";

interface Props {
  iconSrc: string;
  iconAlt: string;
  label: DotNestedKeys<ITranslations>;
  checked: boolean;
  onChange: (next: boolean) => void;
  hoverData?: IHoverData;
}

const EngineComponent: React.FC<Props> = ({
  checked,
  iconAlt,
  iconSrc,
  label,
  onChange,
  hoverData,
}) => {
  const translate = useTranslations();

  return (
    <Flex
      w="100%"
      // direction={{ base: "column", sm: "row" }}
      direction="row"
      align="center"
      justify="space-between"
    >
      <HoverCard width={600} shadow="md" position="right" disabled={!hoverData}>
        <HoverCard.Target>
          <Flex
            align="center"
            gap="sm"
            onClick={() => onChange(!checked)}
            className={classes.engine_component}
          >
            <Image
              src={iconSrc}
              w={20}
              h={20}
              alt={iconAlt}
              fit="contain"
              fallbackSrc="https://placehold.co/200x200?text=Placeholder"
            />

            <Text size="md" fw={400}>
              {translate(label)}
            </Text>
          </Flex>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Stack gap={0}>
            <Text size="sm">{hoverData?.description}</Text>

            <Text mt="xs" component="span" c="blue.4">
              <Anchor size="sm" href={hoverData?.linkUrl} target="_blank">
                {hoverData?.linkUrl}
              </Anchor>
            </Text>

            <Text mb="xs" component="span" c="blue.4">
              <Anchor size="sm" href={hoverData?.wikiUrl} target="_blank">
                {hoverData?.wikiUrl}
              </Anchor>
            </Text>

            <Flex mb="xs" align="center" justify="space-between">
              <Flex align="center" justify="space-between" gap="xs">
                {hoverData?.bangsEngine.map((bang, i) => (
                  <Badge key={i} color="gray">
                    {bang}
                  </Badge>
                ))}
              </Flex>

              <Text size="sm">!bang for this engine</Text>
            </Flex>

            <Flex align="center" justify="space-between">
              <Flex align="center" justify="space-between" gap="xs">
                {hoverData?.bangsCategory.map((bang, i) => (
                  <Badge key={i} color="gray">
                    {bang}
                  </Badge>
                ))}
              </Flex>

              <Text size="sm">!bang for its category</Text>
            </Flex>
          </Stack>
        </HoverCard.Dropdown>
      </HoverCard>

      <Switch
        style={{ cursor: "pointer" }}
        checked={checked}
        onChange={(e) => onChange(e.currentTarget.checked)}
      />
    </Flex>
  );
};

export default EngineComponent;
