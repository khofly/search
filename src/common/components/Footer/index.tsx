import { Text, Container, Group, ActionIcon } from "@mantine/core";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./styles.module.scss";

const Footer = () => {
  return (
    <Container size="lg" py="sm" className={classes.after_footer}>
      <Text c="dimmed" size="sm">
        Copyright something etc.
      </Text>

      <Group gap="sm" justify="flex-end">
        <Link href="/wiki">
          <Text>Wiki</Text>
        </Link>

        <Link href="/rewards">
          <Text>Rewards</Text>
        </Link>

        <Link href="/settings">
          <Text>Settings</Text>
        </Link>
      </Group>
    </Container>
  );
};

export default Footer;
