import React from "react";
import WikiText from "../../common/WikiText";
import {
  IconArrowDown,
  IconDotsVertical,
  IconEdit,
  IconInfoCircle,
  IconPencil,
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import { Alert, List } from "@mantine/core";
import WikiLink from "../../common/WikiLink";

const SectionChromium = () => {
  return (
    <>
      <WikiText>
        1. At the top right, click More{" "}
        <IconDotsVertical
          style={getIconStyle(18, true)}
          display="inline-block"
        />{" "}
        and then <b>Settings</b>.
      </WikiText>

      <WikiText>
        2. On the left, click <b>Search engine</b> and then{" "}
        <b>Manage search engines and site search</b>.
      </WikiText>

      <WikiText>3. To change site search shortcuts:</WikiText>

      <List mt="xs">
        <List.Item>
          <b>Add:</b> To the right of &apos;Site search,&apos; click <b>Add</b>.
          After you fill out the text fields, click <b>Add</b>.
        </List.Item>

        <List.Item>
          <b>Edit:</b> To the right of a site search shortcut, click Edit{" "}
          <IconPencil style={getIconStyle(18, true)} display="inline-block" />.
        </List.Item>

        <List.Item>
          <b>Set as default:</b> To the right of a site search shortcut, click
          More{" "}
          <IconDotsVertical
            style={getIconStyle(18, true)}
            display="inline-block"
          />{" "}
          and then <b>Make default</b>.
        </List.Item>

        <List.Item>
          <b>Deactivate:</b> To the right of a site search shortcut, click More
          <IconDotsVertical
            style={getIconStyle(18, true)}
            display="inline-block"
          />{" "}
          and then <b>Deactivate</b>.
        </List.Item>

        <List.Item>
          <b>Delete:</b> To the right of a site search shortcut, click More{" "}
          <IconDotsVertical
            style={getIconStyle(18, true)}
            display="inline-block"
          />
          and then <b>Delete</b>.
        </List.Item>
      </List>

      <Alert
        mt="xl"
        variant="light"
        color="blue"
        title="Learn more"
        icon={<IconInfoCircle />}
      >
        You can read more about adding a search engine to Chromium at{" "}
        <WikiLink
          href="https://support.google.com/chrome/answer/95426"
          label="official docs"
        />
        .
      </Alert>
    </>
  );
};

export default SectionChromium;
