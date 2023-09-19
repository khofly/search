import { Flex, Image, Text, UnstyledButton } from "@mantine/core";
import React from "react";

import classes from "./styles.module.scss";
import { IconFileChart } from "@tabler/icons-react";
import { ITsuvahApp } from "@tsuvah/core";
import { getIconStyle } from "@utils/functions/iconStyle";
import Link from "next/link";

const AppIcon: React.FC<ITsuvahApp> = ({ icon, name, url }) => {
  return (
    <UnstyledButton className={classes.app_icon}>
      <Link href={url} target="_blank">
        <Flex direction="column" align="center" justify="center" p="xs">
          <IconFileChart style={getIconStyle(32)} />

          {/* <Image src={icon} alt={`${name} logo`} w={40} h={40} /> */}

          <Text size="sm" fw={500} mt="xs">
            {name}
          </Text>
        </Flex>
      </Link>
    </UnstyledButton>
  );
};

export default AppIcon;
