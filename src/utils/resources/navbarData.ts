import { LinksGroupProps } from "@components/Navbar/Wiki/components/LinksGroup";
import {
  IconBrandSupabase,
  IconEPassport,
  IconFile,
  IconFileText,
  IconLock,
  IconPasswordUser,
  IconSearch,
  IconUser,
  IconVideo,
} from "@tabler/icons-react";

export const NAVBAR_DATA: LinksGroupProps[] = [
  // {
  //   label: "Supabase",
  //   icon: IconBrandSupabase,
  //   links: [{ label: "Overview", link: "/wiki/docs/overview", isWip: true }],
  // },

  {
    label: "Auth",
    icon: IconLock,

    links: [
      { label: "Overview", link: "/wiki/auth/overview", isWip: false },
      { label: "Self-Hosted", link: "/wiki/auth/self-host", isWip: true },
    ],
  },

  {
    label: "Search",
    icon: IconSearch,
    links: [
      { label: "Overview", link: "/wiki/search/overview", isWip: true },
      { label: "SearXNG", link: "/wiki/search/searxng", isWip: false },
      {
        label: "Instant Answer",
        link: "/wiki/search/instant-answers",
        isWip: false,
      },
      { label: "Set Default", link: "/wiki/search/set-default", isWip: false },
      { label: "Self-Hosted", link: "/wiki/search/self-host", isWip: true },
    ],
  },

  {
    label: "Docs",
    icon: IconFileText,
    links: [
      { label: "Overview", link: "/wiki/docs/overview", isWip: true },
      { label: "Docs API", link: "/wiki/docs/api", isWip: true },
      { label: "Self-Hosted", link: "/wiki/docs/self-host", isWip: true },
    ],
  },

  // {
  //   label: "Meet",
  //   icon: IconVideo,
  //   links: [
  //     { label: "Overview", link: "/wiki/docs/overview", isWip: true },
  //     { label: "LiveKit", link: "/wiki/docs/api", isWip: true },
  //     { label: "Self-Hosted", link: "/wiki/docs/self-host", isWip: true },
  //   ],
  // },
];
