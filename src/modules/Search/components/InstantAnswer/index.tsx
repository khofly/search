"use client";

import { useSearchParams } from "next/navigation";
import { useResponsive } from "@hooks/use-responsive";

import CoinFlip from "./CoinFilp";
import Calculator from "./Calculator";
import Lyrics from "./Lyrics";
import Translate from "./Translate";
import UUID from "./UUID";
import Stopwatch from "./Stopwatch";

const InstantAnswer = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const isXl = useResponsive("min", "lg");

  // Instant answer - Calculator WIP
  if (query?.toLowerCase().includes("calculator")) return <Calculator />;

  // Instant answer - CoinFlip
  if (query?.toLowerCase().includes("coin flip")) return <CoinFlip />;

  // Instant answer - Translate WIP
  if (query?.toLowerCase().includes("translate")) return <Translate />;

  // Instant answer - UUID
  if (query?.toLowerCase().includes("uuid")) return <UUID />;

  // Instant answer - Stopwatch WIP
  if (query?.toLowerCase().includes("uuid")) return <Stopwatch />;

  // Instant answer - Lyrics by Genius
  if (query?.toLowerCase().includes("lyrics") && !isXl) return <Lyrics />;

  // Next release todo
  // Instant answer - Weather
  // Instant answer - Currency convert

  return null;
};

export default InstantAnswer;
