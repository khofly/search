import React from "react";
import WikiSubtitle from "../../common/WikiSubtitle";
import WikiText from "../../common/WikiText";
import WikiLink from "../../common/WikiLink";
import { Alert, Image } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

const SectionFirefox = () => {
  return (
    <>
      <WikiSubtitle>1. Add a search engine from the Search bar</WikiSubtitle>

      <WikiText>
        Firefox offers an optional Search bar. See{" "}
        <WikiLink
          href="https://support.mozilla.org/en-US/kb/add-search-bar-firefox-toolbar"
          label="Add the Search bar to your
        Firefox toolbar"
        />{" "}
        to add it to Firefox.
      </WikiText>

      <WikiText>
        1. Visit a website that offers an{" "}
        <WikiLink
          href="https://developer.mozilla.org/docs/Web/OpenSearch"
          label="OpenSearch"
        />{" "}
        search engine ( we&apos;ll use
        <WikiLink href="https://youtube.com" label="YouTube" /> as an example ).
      </WikiText>

      <WikiText>
        2. Click the magnifying glass{" "}
        <Image
          src="https://assets-prod.sumo.prod.webservices.mozgcp.net/media/uploads/gallery/images/2015-08-04-10-25-59-77093e.png"
          w={22}
          h={22}
          display="inline-block"
          alt="Edge add search engine"
        />{" "}
        icon in the Search bar.
      </WikiText>

      <WikiText>
        3. Click on the YouTube{" "}
        <Image
          src="https://assets-prod.sumo.prod.webservices.mozgcp.net/media/uploads/gallery/images/2022-02-22-03-40-25-7be19c.png"
          w={22}
          h={22}
          display="inline-block"
          alt="Edge add search engine"
        />{" "}
        icon in the Search bar drop-down.
      </WikiText>

      <Image
        src="https://assets-prod.sumo.prod.webservices.mozgcp.net/media/uploads/gallery/images/2022-02-21-17-10-11-f135e2.png"
        w="100%"
        maw={900}
        my="xl"
        alt="Edge add search engine"
      />

      <WikiText>
        The search engine will appear in your available search options.
      </WikiText>

      <WikiSubtitle>2. Add a search engine from the address bar</WikiSubtitle>

      <WikiText>
        When you visit a website that offers an{" "}
        <WikiLink
          href="https://developer.mozilla.org/docs/Web/OpenSearch"
          label="OpenSearch"
        />{" "}
        search engine, you can add it from the address bar context menu
        (we&apos;ll use <WikiLink href="https://youtube.com" label="YouTube" />{" "}
        as an example).
      </WikiText>

      <WikiText>1. Right-click on the address bar.</WikiText>

      <Image
        src="https://assets-prod.sumo.prod.webservices.mozgcp.net/media/uploads/gallery/images/2021-04-19-03-10-39-50664c.png"
        w="100%"
        maw={600}
        my="xl"
        alt="Edge add search engine"
      />

      <WikiText>
        2. Select Add &quot;YouTube&quot; from the context menu.{" "}
      </WikiText>

      <Alert
        mt="xl"
        variant="light"
        color="blue"
        title="Learn more"
        icon={<IconInfoCircle />}
      >
        You can read more about adding a search engine to Firefox at{" "}
        <WikiLink
          href="https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox"
          label="official docs"
        />
        .
      </Alert>
    </>
  );
};

export default SectionFirefox;
