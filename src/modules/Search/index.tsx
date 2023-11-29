"use client";

import React from "react";
import dynamic from "next/dynamic";

import TabGeneral from "./components/TabGeneral";
import TabImages from "./components/TabImages";
import TabVideos from "./components/TabVideos";
import TabNews from "./components/TabNews";
import { useSearchParams } from "next/navigation";

const TabMapsWithoutSSR = dynamic(() => import("./components/TabMaps"), {
  ssr: false,
});

const PageSearch = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "general";

  // Render tab
  const renderTab = {
    general: <TabGeneral />,
    images: <TabImages />,
    videos: <TabVideos />,
    news: <TabNews />,
    maps: <TabMapsWithoutSSR />,
  }[tab];

  return renderTab;
};

export default PageSearch;
