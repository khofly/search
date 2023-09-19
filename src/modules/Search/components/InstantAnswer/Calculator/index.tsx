"use client";

import React from "react";
import { IAWrapper } from "..";
import { Button, Grid, Paper } from "@mantine/core";
import {
  IconBackspace,
  IconCe,
  IconDivide,
  IconEqual,
  IconMinus,
  IconPercentage,
  IconPlus,
  IconReplace,
  IconX,
} from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";

const Calculator = () => {
  const handlePress = (btn: string) => {};

  return (
    <IAWrapper>
      <Paper p="md" w="100%">
        Answer
      </Paper>

      {/* Scientific keyboard */}

      {/* Basic keyboard */}

      <Grid grow gutter="xs" mt="xs">
        <Grid.Col span={3}>
          <Button w="100%" color="dark.4">
            <IconCe style={getIconStyle(22)} />
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.4">
            <IconBackspace style={getIconStyle(22)} />
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.4">
            <IconPercentage style={getIconStyle(22)} />
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.4">
            <IconDivide style={getIconStyle(22)} />
          </Button>
        </Grid.Col>
      </Grid>

      <Grid grow gutter="xs" mt="xs">
        <Grid.Col span={3}>
          <Button w="100%" color="dark.6">
            7
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.6">
            8
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.6">
            9
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.4">
            <IconX style={getIconStyle(22)} />
          </Button>
        </Grid.Col>
      </Grid>

      <Grid grow gutter="xs" mt="xs">
        <Grid.Col span={3}>
          <Button w="100%" color="dark.6">
            4
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.6">
            5
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.6">
            6
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.4">
            <IconMinus style={getIconStyle(22)} />
          </Button>
        </Grid.Col>
      </Grid>

      <Grid grow gutter="xs" mt="xs">
        <Grid.Col span={3}>
          <Button w="100%" color="dark.6">
            1
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.6">
            2
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.6">
            3
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.4">
            <IconPlus style={getIconStyle(22)} />
          </Button>
        </Grid.Col>
      </Grid>

      <Grid grow gutter="xs" mt="xs">
        <Grid.Col span={3}>
          <Button w="100%" color="teal">
            <IconReplace style={getIconStyle(22)} />
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.6">
            0
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" color="dark.6">
            .
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button w="100%" variant="filled">
            <IconEqual style={getIconStyle(22)} />
          </Button>
        </Grid.Col>
      </Grid>
    </IAWrapper>
  );
};

export default Calculator;
