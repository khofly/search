"use client";

import React from "react";
import TabGeneral from "./components/TabGeneral";
import TabMaps from "./components/TabMaps";
import TabImages from "./components/TabImages";
import TabVideos from "./components/TabVideos";
import TabNews from "./components/TabNews";
import { useSearchParams } from "next/navigation";

const PageSearch = () => {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get("tab") || "general";

  // Render tab
  const renderTab = {
    general: <TabGeneral />,
    images: <TabImages />,
    videos: <TabVideos />,
    news: <TabNews />,
    maps: <TabMaps />,
  }[selectedTab];

  return renderTab;
};

export default PageSearch;
