"use client";

import { useSearchParams } from "next/navigation";
import { useResponsive } from "@hooks/use-responsive";

import CoinFlip from "./CoinFilp";
import Calculator from "./Calculator";
import Lyrics from "./Lyrics";
import Translate from "./Translate";
import UUID from "./UUID";
import Timer from "./Timer";
import { shouldDisplayIA } from "./utils";
import { useSearchStore } from "@store/search";

const InstantAnswer = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const isXl = useResponsive("min", "lg");

  const { useInstantAnswers } = useSearchStore((state) => ({
    useInstantAnswers: state.useInstantAnswers,
  }));

  // Instant Answers disabled in settings
  if (!useInstantAnswers) return null;

  // Instant answer - Calculator WIP
  if (shouldDisplayIA(query, ["calc", "calculator"])) return <Calculator />;

  // Instant answer - CoinFlip
  if (shouldDisplayIA(query, ["coinflip", "coin flip"])) return <CoinFlip />;

  // Instant answer - Translate WIP
  if (shouldDisplayIA(query, ["translate"])) return <Translate />;

  // Instant answer - UUID
  if (shouldDisplayIA(query, ["uuid"])) return <UUID />;

  // Instant answer - Timer WIP
  if (shouldDisplayIA(query, ["timer"])) return <Timer />;

  // Instant answer - Lyrics by Genius
  if (shouldDisplayIA(query, ["lyrics"]) && !isXl) return <Lyrics />;

  // Next release todo
  // Instant answer - Weather
  // Instant answer - Currency convert
  // Instant answer - Stopwatch WIP
  // if (query?.toLowerCase().includes("stopwatch")) return <Stopwatch />;

  return null;
};

export default InstantAnswer;
