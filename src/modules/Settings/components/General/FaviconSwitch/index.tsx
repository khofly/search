import { Switch } from "@mantine/core";
import { useGeneralStore } from "@store/general";
import React from "react";

const FaviconSwitch = () => {
  const { displayFavicon, setDisplayFavicon } = useGeneralStore((state) => ({
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
