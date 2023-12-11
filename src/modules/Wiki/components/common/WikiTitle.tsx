import { Text } from "@mantine/core";
import { IFC } from "@ts/global.types";
import React from "react";

const WikiTitle: React.FC<IFC> = ({ children }) => {
  return (
    <Text fz="34" fw={600} mt={50} mb="md">
      {children}
    </Text>
  );
};

export default WikiTitle;
