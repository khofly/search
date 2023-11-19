"use client";

import {
  Button,
  Flex,
  Group,
  Paper,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { IconLink } from "@tabler/icons-react";
import React from "react";

import classes from "../../styles.module.scss";
import { getIconStyle } from "@utils/functions/iconStyle";
import { useSearXNGStore } from "src/store/searxng";
import { useForm } from "@mantine/form";
import Link from "next/link";

const SettingsSearXNG = () => {
  const { domain, setDomain } = useSearXNGStore((state) => ({
    domain: state.domain,
    setDomain: state.setDomain,
  }));

  const form = useForm({
    initialValues: {
      domain: domain,
    },
    validate: {
      domain: (value) =>
        /^(ftp|http|https):\/\/[^ "]+$/.test(value) ? null : "Invalid URL",
    },
  });

  const theme = useMantineTheme();

  const handleSubmit = (values: typeof form.values) => {
    setDomain(values.domain);
  };

  return (
    <Paper radius="md" withBorder>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex align="center" p="lg" mb={16}>
          <IconLink style={getIconStyle(32)} />

          <Text fz={26} fw={600} ml="sm">
            SearXNG Domain
          </Text>
        </Flex>

        {/* Settings content */}
        <Group px="lg" mb="xl">
          <TextInput
            placeholder="domain.com"
            size="md"
            className={classes.settings_input}
            {...form.getInputProps("domain")}
          />
        </Group>

        <Flex
          align="center"
          justify="space-between"
          p="lg"
          className={classes.settings_footer}
        >
          <Text c="dimmed">
            Change this to your own url for better privacy & less load for
            default instance.{" "}
            <Text component="span" c="blue">
              <Link href={"/wiki/search/searxng"}>Read more</Link>
            </Text>
          </Text>

          <Button type="submit">Save</Button>
        </Flex>
      </form>
    </Paper>
  );
};

export default SettingsSearXNG;
