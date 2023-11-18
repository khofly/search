"use client";

import React, { useEffect, useState } from "react";
import { IAWrapper } from "..";
import { Center, Paper } from "@mantine/core";

import classes from "./styles.module.scss";
import { IconCampfireFilled, IconMoodSmileFilled } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import clsx from "clsx";
import { cryptoRandomNumber } from "@utils/functions/cryptoRandomNumber";

const CoinFlip: React.FC<{ visible: boolean }> = ({ visible }) => {
  const [side, setSide] = useState<"heads" | "tails" | "">("");

  const handleToss = () => {
    const landedOn = cryptoRandomNumber(0, 1);
    setSide(landedOn === 0 ? "heads" : "tails");
  };

  useEffect(() => {
    if (!visible) setSide("");
  }, [visible]);

  return (
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
  );
};

export default CoinFlip;
