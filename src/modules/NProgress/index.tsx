"use client";

import { useEffect } from "react";
import { nprogress } from "@mantine/nprogress";
import { usePathname, useSearchParams } from "next/navigation";

const NProgress = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const targetUrl = (event.currentTarget as HTMLAnchorElement).href;
      const currentUrl = window.location.href;
      if (targetUrl !== currentUrl) {
        nprogress.start();
      }
    };

    const handleMutation: MutationCallback = () => {
      const anchorElements: NodeListOf<HTMLAnchorElement> =
        document.querySelectorAll("a[href]");

      anchorElements.forEach((anchor) =>
        anchor.addEventListener("click", handleAnchorClick)
      );
    };

    const mutationObserver = new MutationObserver(handleMutation);

    mutationObserver.observe(document, { childList: true, subtree: true });
  }, []);

  useEffect(() => {
    nprogress.complete();
  }, [pathname, searchParams]);

  // return <NavigationProgress />;
  return null;
};

export default NProgress;
