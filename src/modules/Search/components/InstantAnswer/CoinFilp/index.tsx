"use client";

import React, { useEffect, useState } from "react";
import { IAWrapper } from "..";
import { Center, Paper } from "@mantine/core";

import classes from "./styles.module.scss";
import { IconCampfireFilled, IconMoodSmileFilled } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import clsx from "clsx";
import { cryptoRandomNumber } from "@utils/functions/cryptoRandomNumber";
import { useNonInitialEffect } from "@hooks/use-non-initial-effect";

const CoinFlip = () => {
  const [side, setSide] = useState<"heads" | "tails" | "">("");
  const [counter, setCounter] = useState(1);

  const handleToss = () => {
    setSide("");
    setCounter(counter + 1);
  };

  useNonInitialEffect(() => {
    if (counter === 1) return;

    const landedOn = cryptoRandomNumber(0, 1);
    setSide(landedOn === 0 ? "heads" : "tails");
  }, [counter]);

  return (
    <IAWrapper>
      <Center>
        <Paper
          className={clsx(
            classes.coin,
            { [classes.heads_win]: side === "heads" },
            { [classes.tails_win]: side === "tails" }
          )}
          onClick={handleToss}
          withBorder
        >
          <div className={classes.side_heads}>
            <IconMoodSmileFilled style={getIconStyle(80)} />
          </div>
          <div className={classes.side_tails}>
            <IconCampfireFilled style={getIconStyle(80)} />
          </div>
        </Paper>
      </Center>
    </IAWrapper>
  );
};

export default CoinFlip;
