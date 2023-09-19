"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

import { Divider, Stack, Text } from "@mantine/core";
import { IFC } from "@ts/global.types";

import CoinFlip from "./CoinFilp";
import Calculator from "./Calculator";

export const IAWrapper: React.FC<IFC> = ({ children }) => {
  return (
    <Stack py="xl" gap={0}>
      {children}

      <Text c="dimmed" size="sm" mt="lg">
        This is an instant answer
      </Text>

      <Divider mt="xs" />
    </Stack>
  );
};

const InstantAnswer = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  // Instant answer - Calculator WIP
  // if (query?.toLowerCase().includes("calculator")) return <Calculator />;

  // Instant answer - CoinFlip
  if (query?.toLowerCase().includes("coin flip")) return <CoinFlip />;

  return null;
};

export default InstantAnswer;
