import { Text } from "@mantine/core";
import { IFC } from "@ts/global.types";
import React from "react";

const WikiSubtitle: React.FC<IFC> = ({ children }) => {
  return (
    <Text mt="md" mb="xs" size="xl" fw="bold">
      {children}
    </Text>
  );
};

export default WikiSubtitle;
