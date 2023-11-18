import { IProfile } from "@khofly/core";
import { Code, Container, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useGlobalStore } from "src/store/global";

const WikiAuthOverview = () => {
  const { profile } = useGlobalStore((store) => ({ profile: store.profile }));

  const theme = useMantineTheme();

  const exampleProfile: IProfile = {
    id: "uuid",
    avatar_url: "https://link.to.image",
    created_at: "timestamp",
    updated_at: "timestamp",
    display_name: "John Doe",
    email: "email@domain.com",
  };

  return (
    <Container size="lg" p="xl">
      <Text fz="34" fw={600} mt="xl" mb="md">
        How it works?
      </Text>

      <Text>
        Supabase is used as BaaS, all apps (ex.{" "}
        <Text component="a" c="blue.4" href="https://khofly.com/">
          Search
        </Text>
        {", "}
        <Text component="a" c="blue.4" href="https://docs.khofly.com/">
          Docs
        </Text>{" "}
        ) share the same auth server ( ex.{" "}
        <Text
          component="a"
          c="blue.4"
          href="https://auth.khofly.com/auth/login"
        >
          https://auth.khofly.com
        </Text>{" "}
        ) so that the auth code isn&apos;t repeated for every app. To make this work
        supabaseClient <Code>cookieOptions.domain</Code> option has to be set to
        a top level domain, otherwise the session wouldn&apos;t be shared.
      </Text>

      <Text mt="md">
        By default <Code>auth.users</Code> table is not editable for security
        reasons so all editable data is stored in a linked{" "}
        <Code>public.profiles</Code> table that holds basic editable user data (
        display_name, email, avatar_url ).
      </Text>

      <Text fz="34" fw={600} mt={50} mb="md">
        User profiles
      </Text>

      <Text mt="md">
        Example profile <br />{" "}
        <Code>{JSON.stringify(profile ? profile : exampleProfile)}</Code>
      </Text>

      <Text fz="34" fw={600} mt={50} mb="md">
        Teams
      </Text>

      <Text mt="md">
        Every user can create their own team, amount of teams is based on user{" "}
        <Link href="/rewards" style={{ color: theme.colors.blue["4"] }}>
          tier
        </Link>
        , this allows the users within a team to share documents, schedule
        meetings, etc.
      </Text>
    </Container>
  );
};

export default WikiAuthOverview;
