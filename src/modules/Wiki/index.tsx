"use client";
import "@mantine/code-highlight/styles.css";

import React from "react";
import WikiSearchOverview from "./components/search-overview";
import WikiIndex from "./components";
import WikiWIP from "./components/wip";
import WikiAuthOverview from "./components/auth-overview";
import WikiSearchSearxng from "./components/search-searxng";
import WikiSearchInstantAnswer from "./components/search-instant-answer";
import WikiSearchSetDefault from "./components/search-set-default";

interface Props {
  slug: Array<string>;
}

const Wiki: React.FC<Props> = ({ slug }) => {
  // Basic first redirect
  if (!slug) return <WikiIndex />;

  const wikiPage = {
    "auth/overview": <WikiAuthOverview />,
    "auth/self-host": <WikiWIP />,

    "search/overview": <WikiWIP />,
    "search/searxng": <WikiSearchSearxng />,
    "search/instant-answers": <WikiSearchInstantAnswer />,
    "search/set-default": <WikiSearchSetDefault />,
    "search/self-host": <WikiWIP />,

    "docs/overview": <WikiWIP />,
    "docs/api": <WikiWIP />,
    "docs/self-host": <WikiWIP />,
  }[slug?.join("/")];

  return <>{wikiPage || <WikiIndex />}</>;
};

export default Wiki;
