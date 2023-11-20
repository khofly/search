import { Switch } from "@mantine/core";
import { useSearchStore } from "@store/search";
import React from "react";

const NewTabSwitch = () => {
  const { openInNewTab, setOpenInNewTab } = useSearchStore((state) => ({
    openInNewTab: state.openInNewTab,
    setOpenInNewTab: state.setOpenInNewTab,
  }));

  return (
    <Switch
      checked={openInNewTab}
      onChange={(e) => setOpenInNewTab(e.currentTarget.checked)}
    />
  );
};

export default NewTabSwitch;
