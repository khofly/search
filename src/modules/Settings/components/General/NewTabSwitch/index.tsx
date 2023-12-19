import { Switch } from "@mantine/core";
import { useGeneralStore } from "@store/general";
import React from "react";

const NewTabSwitch = () => {
  const { openInNewTab, setOpenInNewTab } = useGeneralStore((state) => ({
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
