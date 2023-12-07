import { useBrowser } from "@hooks/use-browser";
import { Container, Flex, Text, useMantineTheme } from "@mantine/core";
import {
  IconBrandChrome,
  IconBrandEdge,
  IconBrandFirefox,
  IconBrandSafari,
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import React from "react";

const WikiSearchSetDefault = () => {
  const browser = useBrowser();
  const theme = useMantineTheme();

  return (
    <Container size="lg" p="xl" pb={100}>
      {browser === "Firefox" && (
        <>
          <Flex align="center" gap="lg" mb="md">
            <IconBrandFirefox
              style={getIconStyle(42)}
              color={theme.colors.orange[5]}
            />

            <Text fz="34" fw={600}>
              Adding search engine to Firefox
            </Text>
          </Flex>
        </>
      )}

      {browser === "Chromium" && (
        <>
          <Flex align="center" gap="lg" mb="md">
            <IconBrandChrome
              style={getIconStyle(42)}
              color={theme.colors.green[5]}
            />

            <Text fz="34" fw={600}>
              Adding search engine to Chromium
            </Text>
          </Flex>
        </>
      )}

      {browser === "Edge" && (
        <>
          <Flex align="center" gap="lg" mb="md">
            <IconBrandEdge
              style={getIconStyle(42)}
              color={theme.colors.blue[5]}
            />

            <Text fz="34" fw={600}>
              Adding search engine to Edge
            </Text>
          </Flex>
        </>
      )}

      {browser === "Safari" && (
        <>
          <Flex align="center" gap="lg" mb="md">
            <IconBrandSafari
              style={getIconStyle(42)}
              color={theme.colors.blue[5]}
            />

            <Text fz="34" fw={600}>
              Adding search engine to Safari
            </Text>
          </Flex>
        </>
      )}
    </Container>
  );
};

export default WikiSearchSetDefault;
