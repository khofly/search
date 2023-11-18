"use client";

import { useSearchParams } from "next/navigation";
import React, { Dispatch, useState } from "react";

import { Divider, Flex, Stack, Text, Transition } from "@mantine/core";
import { IFC } from "@ts/global.types";

import CoinFlip from "./CoinFilp";
import Calculator from "./Calculator";
import { IconSelector } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";

interface IAProps extends IFC {
  visible: boolean;
  setVisible: Dispatch<boolean>;
}

export const IAWrapper: React.FC<IAProps> = ({
  visible,
  setVisible,
  children,
}) => {
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
  const [visible, setVisible] = useState(true);

  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  let instantAnswer = null;

  // Instant answer - Calculator WIP
  if (query?.toLowerCase().includes("calculator"))
    instantAnswer = <Calculator />;

  // Instant answer - CoinFlip
  if (query?.toLowerCase().includes("coin flip"))
    instantAnswer = <CoinFlip visible={visible} />;

  return instantAnswer ? (
    <IAWrapper visible={visible} setVisible={setVisible}>
      {instantAnswer}
    </IAWrapper>
  ) : null;
};

export default InstantAnswer;
