import { Anchor, Flex, Image, Text, UnstyledButton } from "@mantine/core";
import React from "react";

import classes from "./styles.module.scss";
import { IKhoflyApp } from "@khofly/core";

const AppIcon: React.FC<IKhoflyApp> = ({ icon, name, url }) => {
  return (
    <UnstyledButton className={classes.app_icon}>
      <Anchor href={url} target="_blank">
        <Flex direction="column" align="center" justify="center" px="xs" pt={2}>
          <Image
            src={icon}
            alt={`${name} logo`}
            w={22}
            h={22}
            fallbackSrc={icon}
          />

          <Text size="md" fw={500} mt="xs">
            {name}
          </Text>
        </Flex>
      </Anchor>
    </UnstyledButton>
  );
};

export default AppIcon;
