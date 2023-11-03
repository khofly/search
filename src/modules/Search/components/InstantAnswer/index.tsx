"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

import { Divider, Flex, Stack, Text, Transition } from "@mantine/core";
import { IFC } from "@ts/global.types";

import CoinFlip from "./CoinFilp";
import Calculator from "./Calculator";
import { IconSelector } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";

export const IAWrapper: React.FC<IFC> = ({ children }) => {
  const [visible, setVisible] = useState(true);

  return (
    <Stack pt={visible ? "lg" : 0} gap={0}>
      <Transition transition="scale-y" duration={300} mounted={visible}>
        {(transitionStyles) => <div style={transitionStyles}>{children}</div>}
      </Transition>

      <Flex mt="lg" align="center" justify="space-between">
        <Text c="dimmed" size="sm">
          This is an instant answer
        </Text>

        <Flex
          align="center"
          onClick={() => setVisible(!visible)}
          style={{ cursor: "pointer" }}
        >
          <IconSelector style={getIconStyle(20)} stroke={1.5} />

          <Text c="dimmed" size="sm" ml={4}>
            Toggle
          </Text>
        </Flex>
      </Flex>

      <Divider mt="xs" />
    </Stack>
  );
};

const InstantAnswer = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  // Instant answer - Calculator WIP
  if (query?.toLowerCase().includes("calculator")) return <Calculator />;

  // Instant answer - CoinFlip
  if (query?.toLowerCase().includes("coin flip")) return <CoinFlip />;

  return null;
};

export default InstantAnswer;
