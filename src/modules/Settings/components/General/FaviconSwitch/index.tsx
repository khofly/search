import { Switch } from "@mantine/core";
import { useSearchStore } from "@store/search";
import React from "react";

const FaviconSwitch = () => {
  const { displayFavicon, setDisplayFavicon } = useSearchStore((state) => ({
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
