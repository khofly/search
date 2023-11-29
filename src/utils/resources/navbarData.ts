import { LinksGroupProps } from "@components/Navbar/Wiki/components/LinksGroup";
import {
  IconEPassport,
  IconFile,
  IconFileText,
  IconLock,
  IconPasswordUser,
  IconSearch,
  IconUser,
} from "@tabler/icons-react";

export const NAVBAR_DATA: LinksGroupProps[] = [
  {
    label: "Auth",
    icon: IconLock,
    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/wiki/auth/overview", isWip: false },
      { label: "Self-Hosted", link: "/wiki/auth/self-host", isWip: true },
    ],
  },

  {
    label: "Search",
    icon: IconSearch,
    initiallyOpened: false,
    links: [
      { label: "Overview", link: "/wiki/search/overview", isWip: false },
      { label: "SearXNG", link: "/wiki/search/searxng", isWip: false },

      { label: "Self-Hosted", link: "/wiki/docs/self-host", isWip: true },
    ],
  },

  {
    label: "Docs",
    icon: IconFileText,
    initiallyOpened: false,
    links: [
      { label: "Overview", link: "/wiki/docs/overview", isWip: true },
      { label: "Docs API", link: "/wiki/docs/api", isWip: true },
      { label: "Self-Hosted", link: "/wiki/docs/self-host", isWip: true },
    ],
  },
];
