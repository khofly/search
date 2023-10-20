import { Flex, Image, Text, UnstyledButton } from "@mantine/core";
import React from "react";

import classes from "./styles.module.scss";
import { IKhoflyApp } from "@khofly/core";
import Link from "next/link";

const AppIcon: React.FC<IKhoflyApp> = ({ icon, name, url }) => {
  return (
    <UnstyledButton className={classes.app_icon}>
      <Link href={url} target="_blank">
        <Flex direction="column" align="center" justify="center" p="xs">
          <Image src={icon} alt={`${name} logo`} w={22} h={22} />

          <Text size="md" fw={500} mt="xs">
            {name}
          </Text>
        </Flex>
      </Link>
    </UnstyledButton>
  );
};

export default AppIcon;
