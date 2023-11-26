"use client";
import "@mantine/code-highlight/styles.css";

import React from "react";
import WikiSearchOverview from "./components/search-overview";
import WikiIndex from "./components";
import WikiWIP from "./components/wip";
import WikiAuthOverview from "./components/auth-overview";
import WikiSearchSearxng from "./components/search-searxng";

interface Props {
  slug: Array<string>;
}

const Wiki: React.FC<Props> = ({ slug }) => {
  // Basic first redirect
  if (!slug) return <WikiIndex />;

  const wikiPage = {
    "auth/overview": <WikiAuthOverview />,
    "auth/self-host": <WikiWIP />,

    "search/overview": <WikiSearchOverview />,
    "search/searxng": <WikiSearchSearxng />,
    "search/self-host": <WikiWIP />,

    "docs/overview": <WikiWIP />,
    "docs/api": <WikiWIP />,
    "docs/self-host": <WikiWIP />,
  }[slug?.join("/")];

  return <>{wikiPage || <WikiIndex />}</>;
};

export default Wiki;
