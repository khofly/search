import { Anchor, Flex, Image, Text } from "@mantine/core";
import React from "react";
import classes from "./styles.module.scss";

const SearchResultRow = () => {
  return (
    <Anchor href="https://docs.khofly.com" target="_self">
      <Flex className={classes.search_row} direction="column">
        {/* Website url */}
        <Flex align="center" gap="xs">
          <Image
            w={16}
            h={16}
            // src="https://icon.horse/icon/youtube.com"
            src="https://docs.fossly.tech/favicon.ico"
            alt=""
          />

          <Text size="sm">https://docs.khofly.com</Text>
        </Flex>

        {/* Website title */}
        <Text className={classes.text_title} size="xl" c="white" mb={4}>
          Khofly Docs
        </Text>

        {/* Website description */}
        <Text size="sm" c="dimmed">
          Online Calculator! We have a range of free, easy to use calculators,
          conversion tools, and much more! Our tools are designed to help you
          perform a wide range of calculations and conversions quickly and
          accurately, whether you're at …{" "}
        </Text>
      </Flex>
    </Anchor>
  );
};

export default SearchResultRow;
