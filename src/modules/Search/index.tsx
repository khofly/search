"use client";

import React from "react";
import TabSearchResults from "./components/TabSearchResults";
import { useSearchStore } from "src/store/search";
import TabMaps from "./components/TabMaps";
import TabImages from "./components/TabImages";
import TabVideos from "./components/TabVideos";
import TabNews from "./components/TabNews";

const PageSearch = () => {
  const { selectedTab } = useSearchStore();

  // Render tab
  const renderTab = {
    general: <TabSearchResults />,
    images: <TabImages />,
    videos: <TabVideos />,
    news: <TabNews />,
    maps: <TabMaps />,
  }[selectedTab];

  return renderTab;
};

export default PageSearch;
