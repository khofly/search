import React, { useEffect, useState } from "react";
import { IAWrapper } from "../wrapper";
import { Text } from "@mantine/core";

const UUID = () => {
  const [uuid, setUuid] = useState("");

  useEffect(() => {
    setUuid(self.crypto.randomUUID());
  }, []);

  return (
    <IAWrapper>
      <Text size="md" fw={500}>
        {uuid}
      </Text>
      <Text size="xs" c="dimmed">
        Random UUID v4
      </Text>
    </IAWrapper>
  );
};

export default UUID;
