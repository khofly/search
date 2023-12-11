import { useBrowser } from "@hooks/use-browser";
import { Container, Flex, Text, useMantineTheme } from "@mantine/core";
import {
  IconBrandChrome,
  IconBrandEdge,
  IconBrandFirefox,
  IconBrandOpera,
  IconBrandSafari,
  IconWorldWww,
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import React from "react";

import classes from "./styles.module.scss";
import SetDefaultTitle from "./components/set-default/SetDefaultTitle";
import SectionFirefox from "./components/set-default/SectionFirefox";
import SectionChromium from "./components/set-default/SectionChromium";
import SectionEdge from "./components/set-default/SectionEdge";
import SectionSafari from "./components/set-default/SectionSafari";
import { useSearchParams } from "next/navigation";
import SectionOpera from "./components/set-default/SectionOpera";
import WikiLink from "./common/WikiLink";

const WikiSearchSetDefault = () => {
  const searchParams = useSearchParams();
  const browser = useBrowser();
  const theme = useMantineTheme();

  const paramsBrowser = searchParams.get("browser") || browser;

  return (
    <Container size="lg" p="xl" pb={100}>
      {paramsBrowser === "Firefox" && (
        <>
          <SetDefaultTitle
            icon={IconBrandFirefox}
            iconColor={theme.colors.orange[5]}
            label="Adding search engine to Firefox"
          />

          <SectionFirefox />
        </>
      )}

      {paramsBrowser === "Chromium" && (
        <>
          <SetDefaultTitle
            icon={IconBrandChrome}
            iconColor={theme.colors.blue[4]}
            label="Adding search engine to Chromium"
          />

          <SectionChromium />
        </>
      )}

      {paramsBrowser === "Edge" && (
        <>
          <SetDefaultTitle
            icon={IconBrandEdge}
            iconColor={theme.colors.blue[5]}
            label="Adding search engine to Edge"
          />

          <SectionEdge />
        </>
      )}

      {paramsBrowser === "Safari" && (
        <>
          <SetDefaultTitle
            icon={IconBrandSafari}
            iconColor={theme.colors.blue[5]}
            label="Adding search engine to Safari"
          />

          <SectionSafari />
        </>
      )}

      {paramsBrowser === "Opera" && (
        <>
          <SetDefaultTitle
            icon={IconBrandOpera}
            iconColor={theme.colors.red[6]}
            label="Adding search engine to Opera"
          />

          <SectionOpera />
        </>
      )}

      {["IE", "Samsung", "unknown"].includes(paramsBrowser) && (
        <>
          <SetDefaultTitle
            icon={IconWorldWww}
            iconColor={theme.colors.blue[4]}
            label="Adding search engine to [your browser]"
          />

          <WikiLink
            href={`https://khofly.com/search?q=How to add a custom search engine to ${browser}`}
            label="How to add a custom search engine to [your browser]"
          />
        </>
      )}
    </Container>
  );
};

export default WikiSearchSetDefault;
