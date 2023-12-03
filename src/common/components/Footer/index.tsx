import { Text, Container, Group } from "@mantine/core";

import classes from "./styles.module.scss";

import packageJson from "package.json";
import NextLink from "@components/NextLink";

const Footer = () => {
  return (
    <Container size="xl" py="sm" className={classes.after_footer}>
      <Text c="dimmed" size="sm">
        Version {packageJson.version} beta, powered by SearXNG
      </Text>

      <Group gap="sm" justify="flex-end">
        <NextLink href="/wiki">
          <Text>Wiki</Text>
        </NextLink>

        {/* <NextLink href="/rewards">
          <Text>Rewards</Text>
        </NextLink> */}

        <NextLink href="/changelog">
          <Text>Changelog</Text>
        </NextLink>

        <NextLink href="/settings">
          <Text>Settings</Text>
        </NextLink>
      </Group>
    </Container>
  );
};

export default Footer;
