import { Text, Container, Group, ActionIcon } from "@mantine/core";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./styles.module.scss";

import packageJson from "package.json";

const Footer = () => {
  return (
    <Container size="xl" py="sm" className={classes.after_footer}>
      <Text c="dimmed" size="sm">
        Version {packageJson.version} beta, powered by SearXNG
      </Text>

      <Group gap="sm" justify="flex-end">
        <Link href="/wiki">
          <Text>Wiki</Text>
        </Link>

        <Link href="/rewards">
          <Text>Rewards</Text>
        </Link>

        <Link href="/changelog">
          <Text>Changelog</Text>
        </Link>

        <Link href="/settings">
          <Text>Settings</Text>
        </Link>
      </Group>
    </Container>
  );
};

export default Footer;
