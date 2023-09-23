"use client";

import {
  ActionIcon,
  Dialog,
  SimpleGrid,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconApps, IconAppsFilled } from "@tabler/icons-react";
import React from "react";
import AppIcon from "./components/AppIcon";

import classes from "./styles.module.scss";
import { KHOFLY_APPS } from "@khofly/core";
import { getIconStyle } from "@utils/functions/iconStyle";

const HeaderApps = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  const theme = useMantineTheme();

  return (
    <>
      <ActionIcon onClick={toggle} variant="subtle" size={rem(36)}>
        <IconApps style={getIconStyle(28)} />
      </ActionIcon>

      <Dialog
        className={classes.dialog}
        opened={opened}
        onClose={close}
        // size="lg"
        position={{ top: 80, right: theme.spacing.md }}
        transitionProps={{ transition: "fade" }}
        p="xs"
      >
        <SimpleGrid
          className={classes.dialog_inner}
          cols={3}
          p="sm"
          spacing="xs"
        >
          {KHOFLY_APPS.map((app, i) => (
            <AppIcon key={i} {...app} />
          ))}
        </SimpleGrid>
      </Dialog>
    </>
  );
};

export default HeaderApps;
