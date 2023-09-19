"use client";

import { useEffect } from "react";
import { nprogress } from "@mantine/nprogress";
import { usePathname, useSearchParams } from "next/navigation";

type PushStateInput = [
  data: unknown,
  unused: string,
  url?: string | URL | null | undefined
];

const NProgress = () => {
  // For pages dir
  // useEffect(() => {
  //   const handleStart = (url: string) =>
  //     url !== router.asPath && startNavigationProgress();
  //   const handleComplete = () => completeNavigationProgress();

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // }, [router.asPath, router.events]);

  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   // url !== router.asPath && nprogress.start();
  //   const handleStart = (url: string) => nprogress.start();
  //   const handleComplete = () => nprogress.complete();

  //   const url = `${pathname}?${searchParams}`;
  //   console.log(url);
  //   // You can now use the current URL
  //   // ...
  //   // console.log("URL Change");

  //   // handleStart("");
  //   // handleComplete();
  // }, [pathname, searchParams]);

  // return <NavigationProgress />;
  return null;
};

export default NProgress;
