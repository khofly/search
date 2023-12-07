import { Box, Code, Container, Text } from "@mantine/core";
import classes from "./styles.module.scss";

import Calculator from "@module/Search/components/InstantAnswer/Calculator";
import CoinFlip from "@module/Search/components/InstantAnswer/CoinFilp";
import Lyrics from "@module/Search/components/InstantAnswer/Lyrics";
import Stopwatch from "@module/Search/components/InstantAnswer/Stopwatch";
import Timer from "@module/Search/components/InstantAnswer/Timer";
import Translate from "@module/Search/components/InstantAnswer/Translate";
import UUID from "@module/Search/components/InstantAnswer/UUID";

const WikiSearchInstantAnswer = () => {
  const IAWrapperString = "<IAWrapper />";

  return (
    <Container size="lg" p="xl" pb={100}>
      <Text fz="34" fw={600} mb="md">
        Adding instant answer
      </Text>
      <Text mt="md">
        All instant answers code is located in{" "}
        <Code>/src/modules/Search/components/InstantAnswer</Code>
      </Text>
      <Text mt="md">
        Create a folder with a descriptive name and make sure that everything is
        wrapped with <Code>{IAWrapperString}</Code>, then add your logic for
        displaying Instant Answer in <Code>index.tsx</Code> similar to how
        others are displayed conditionally.
      </Text>

      <Text fz="34" mt="md" fw={600} mb="md">
        All available instant answers
      </Text>
      <Text mt="md">
        Below is a list of all currently available Instant Answers, some of them
        might still be work in progress but offer enough functionality to still
        be included and be useful. More will be available in the future.
      </Text>

      <Text fz="28" mt="xl" fw={600} mb="md">
        1. Calculator
      </Text>
      <Box className={classes.search_box}>
        <Calculator />
      </Box>

      <Text fz="28" mt="xl" fw={600} mb="md">
        2. Coin Flip
      </Text>
      <Box className={classes.search_box}>
        <CoinFlip />
      </Box>

      <Text fz="28" mt="xl" fw={600} mb="md">
        3. Lyrics
      </Text>
      <Box className={classes.search_box}>
        <Lyrics initialQ="rick astley never gonna give you up" />
      </Box>

      <Text fz="28" mt="xl" fw={600} mb="md">
        4. Timer
      </Text>
      <Box className={classes.search_box}>
        <Timer />
      </Box>

      <Text fz="28" mt="xl" fw={600} mb="md">
        5. Translate
      </Text>
      <Box className={classes.search_box}>
        <Translate />
      </Box>

      <Text fz="28" mt="xl" fw={600} mb="md">
        6. Random UUID
      </Text>
      <Box className={classes.search_box}>
        <UUID />
      </Box>
    </Container>
  );
};

export default WikiSearchInstantAnswer;
