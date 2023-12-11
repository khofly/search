import React from "react";
import WikiText from "../../common/WikiText";
import WikiLink from "../../common/WikiLink";
import Link from "next/link";
import { Text } from "@mantine/core";

const SectionOpera = () => {
  return (
    <>
      <WikiText>1. Take a deep breath.</WikiText>

      <WikiText>
        2. Open Firefox{" "}
        <WikiLink
          href="https://www.mozilla.org/en-US/firefox/new/"
          label="download page"
        />{" "}
        and proceed with installation.
      </WikiText>

      <WikiText>
        3. Once the installation is finished follow the steps from{" "}
        <Link href={"/wiki/search/set-default?browser=Firefox"}>
          <Text component="span" c="blue">
            this page
          </Text>
        </Link>
      </WikiText>
    </>
  );
};

export default SectionOpera;
