import { ActionIcon, rem } from "@mantine/core";
import React from "react";
import classes from "./HeaderApps/styles.module.scss";
import { IconSettings2 } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import Link from "next/link";

const HeaderSettings = () => {
  return (
    <Link href="/settings">
      <ActionIcon
        className={classes.action_icon}
        variant="subtle"
        size={rem(36)}
        mr="md"
      >
        <IconSettings2 style={getIconStyle(28)} />
      </ActionIcon>
    </Link>
  );
};

export default HeaderSettings;
