"use client";

import { Avatar, Flex, Group, Menu, Text } from "@mantine/core";
import { useRouter } from "next/router";

import {
  IconRefresh,
  IconLogout,
  IconFileText,
  IconUser,
} from "@tabler/icons-react";

import Link from "next/link";
import { useGlobalStore, useTranslations } from "src/store/global/store";
import { useApiAuth } from "src/api/auth/use-api-auth";
import { getIconStyle } from "@utils/functions/iconStyle";

const HeaderAvatar = () => {
  const t = useTranslations();
  const { profile } = useGlobalStore();
  const { auth_signOut } = useApiAuth();
  const router = useRouter();

  const avatarUrl = profile?.avatar_url;
  const username = profile?.display_name;

  const currentLocation =
    typeof window !== "undefined" && window.location.origin;

  const authUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}/auth/login?redirectTo=${
    currentLocation + router.asPath
  }${process.env.NODE_ENV === "development" ? "&cookieDomain=localhost" : ""}`;

  const profileUrl = process.env.NEXT_PUBLIC_AUTH_URL + "/user";

  const handleOpenAuth = () => {
    window.location.replace(authUrl);
  };

  const handleLogOut = () => {
    auth_signOut();
  };

  return (
    <Menu shadow="md" width={250} position="bottom-end" withArrow>
      <Menu.Target>
        <Avatar
          radius="xl"
          style={{ cursor: "pointer" }}
          color="blue"
          src={avatarUrl}
          placeholder=""
          // styles={{
          //   root: {
          //     border:
          //     profile ? `2px solid ${getTierData(tier, theme).color}` : "unset",
          //   },
          // }}
        >
          {!profile && <IconUser />}
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <Link href={profileUrl} target="_blank">
            <Group>
              <Avatar
                radius="xl"
                src={avatarUrl}
                // styles={{
                //   root: {
                //     border:
                //     profile ? `2px solid ${getTierData(tier, theme).color}` : "unset",
                //   },
                // }}
              />

              <div style={{ width: 160 }}>
                {username && (
                  <Flex align="center" gap={4}>
                    <Text fw={500} truncate>
                      {username}
                    </Text>

                    {/* <Badge
                      size="xs"
                      color={getTierData(tier, theme).mColor}
                      miw={35}
                      variant="dot"
                    >
                      {getTierData(tier, theme).short}
                    </Badge> */}
                  </Flex>
                )}

                <Text size="xs" color="dimmed" truncate>
                  {profile?.email}
                </Text>
              </div>
            </Group>
          </Link>
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>{t("header.avatar.label_1")}</Menu.Label>

        {false && (
          <Link href="/doc/my">
            <Menu.Item leftSection={<IconFileText style={getIconStyle(20)} />}>
              Test
            </Menu.Item>
          </Link>
        )}

        <Menu.Divider />

        <Menu.Label>{t("header.avatar.label_2")}</Menu.Label>

        <Menu.Item
          leftSection={<IconRefresh style={getIconStyle(20)} />}
          onClick={() => window.location.replace(authUrl)}
        >
          {t("header.avatar.switch_acc")}
        </Menu.Item>

        <Menu.Item
          color="yellow"
          leftSection={<IconLogout style={getIconStyle(20)} />}
          onClick={() => handleLogOut()}
        >
          {t("header.avatar.sign_out")}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderAvatar;
