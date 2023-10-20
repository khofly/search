"use client";

import React from "react";
import TabSearchResults from "./components/TabSearchResults";
import { useSearchStore } from "src/store/search";
import TabMaps from "./components/TabMaps";

const PageSearch = () => {
  const { selectedTab } = useSearchStore();

  // Render tab
  const renderTab = {
    general: <TabSearchResults />,
    images: null,
    videos: null,
    news: null,
    maps: <TabMaps />,
  }[selectedTab];

  return renderTab;
};

export default PageSearch;
