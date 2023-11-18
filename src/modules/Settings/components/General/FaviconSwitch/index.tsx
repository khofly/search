import { Switch } from "@mantine/core";
import { useGlobalStore } from "@store/global";
import React from "react";

const FaviconSwitch = () => {
  const { displayFavicon, setDisplayFavicon } = useGlobalStore((state) => ({
    displayFavicon: state.displayFavicon,
    setDisplayFavicon: state.setDisplayFavicon,
  }));

  return (
    <Switch
      checked={displayFavicon}
      onChange={(e) => setDisplayFavicon(e.currentTarget.checked)}
    />
  );
};

export default FaviconSwitch;
