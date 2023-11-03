"use client";

import React, { useState } from "react";
import { IAWrapper } from "..";
import { Button, Flex, Grid, Paper, Text, Transition } from "@mantine/core";

import { BTN_VALUES_BASIC } from "./data";

const calculateResult = (numbers: number[], operations: string[]) => {
  let equation = "";
  for (let i = 0; i < numbers.length; i++) {
    equation += numbers[i];
    if (i < operations.length) {
      equation += operations[i];
    }
  }

  // Calculate the result of the equation
  return eval(equation);
};

const getFloatPrecision = (a: number) => {
  if (!isFinite(a)) return 0;
  var e = 1,
    p = 0;
  while (Math.round(a * e) / e !== a) {
    e *= 10;
    p++;
  }
  return p;
};

const Calculator = () => {
  // Calculator state
  const [numbers, setNumbers] = useState<string[]>([]);
  const [operations, setOperations] = useState<string[]>([]);
  const [result, setResult] = useState("");

  const handlePress = (btn: string) => {
    if (btn === "clear") {
      setNumbers([]);
      setOperations([]);
      setResult("");
    }

    if (btn === "backspace") {
      if (result.length) return setResult("");

      const shouldDeleteOperation = operations.length === numbers.length;

      if (shouldDeleteOperation) return setOperations(operations.slice(0, -1));

      const lastNumber = numbers[numbers.length - 1];
      const modifiedLastNumber = lastNumber.substring(0, lastNumber.length - 1);

      // We should remove item from array if length is 0
      if (!modifiedLastNumber.length) return setNumbers(numbers.slice(0, -1));

      // Just remove last character from last item
      return setNumbers(
        numbers.map((no, i) =>
          i === numbers.length - 1 ? no.substring(0, no.length - 1) : no
        )
      );
    }

    if (["+", "-", "*", "/", "%"].includes(btn)) {
      // TODO: handle negative numbers

      // Continue equation if result exists
      if (result.length) setResult("");

      const shouldAddOperation = operations.length === numbers.length - 1;

      if (shouldAddOperation) return setOperations([...operations, btn]);
    }

    if (btn === "equals") {
      if (!numbers.length) return;
      if (operations.length === numbers.length) return;

      const floatArray = numbers.map((no) => parseFloat(no));

      const floatPrecisions = floatArray.map((no) => getFloatPrecision(no));
      const hightstFloatPrecision = Math.max(...floatPrecisions);

      setResult(
        `${calculateResult(floatArray, operations).toFixed(
          hightstFloatPrecision
        )}`
      );
    }

    if (btn === ".") {
      // Continue equation if result exists
      if (result.length) setResult("");

      const lastNumber = numbers[numbers.length - 1];

      if (!lastNumber.includes("."))
        return setNumbers(
          numbers.map((no, i) => (i === numbers.length - 1 ? no + btn : no))
        );
    }

    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(btn)) {
      if (!numbers.length) return setNumbers([btn]);

      // Continue equation if result exists
      if (result.length) setResult("");

      if (operations.length === numbers.length)
        return setNumbers([...numbers, btn]);

      return setNumbers(
        numbers.map((no, i) => (i === numbers.length - 1 ? no + btn : no))
      );
    }
  };

  return (
    <IAWrapper>
      <Paper p="xs" w="100%" h={100}>
        <Flex h="100%" justify="flex-end" align="flex-end" direction="column">
          <Text
            c={!result.length ? "" : "dimmed"}
            size={!result.length ? "xl" : "md"}
            fw={!result.length ? 600 : 400}
          >
            {numbers.map((no, i) => {
              return `${no} ${operations[i] || ""} `;
            })}
          </Text>

          {/* Slide in result */}
          <Transition transition="pop" duration={300} mounted={!!result.length}>
            {(transitionStyles) => (
              <Text fz={28} fw={600} style={transitionStyles}>
                {result}
              </Text>
            )}
          </Transition>
        </Flex>
      </Paper>

      {/* Scientific keyboard */}

      {/* Basic keyboard */}

      {BTN_VALUES_BASIC.map((gridBtnRow, i) => (
        <Grid key={i} grow gutter="xs" mt="xs">
          {gridBtnRow.map((gridBtn) => (
            <Grid.Col key={gridBtn.value} span={3}>
              <Button
                w="100%"
                color={gridBtn.color}
                onClick={() => handlePress(gridBtn.value)}
                disabled={gridBtn.value === "switch"}
              >
                {gridBtn.label}
              </Button>
            </Grid.Col>
          ))}
        </Grid>
      ))}
    </IAWrapper>
  );
};

export default Calculator;
