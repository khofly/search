import { Text } from "@mantine/core";
import { IFC } from "@ts/global.types";
import React from "react";

const WikiText: React.FC<IFC> = ({ children }) => {
  return <Text mt="md">{children}</Text>;
};

export default WikiText;
