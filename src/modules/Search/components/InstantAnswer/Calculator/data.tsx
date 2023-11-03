import {
  IconBackspace,
  IconDivide,
  IconEqual,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import { IconReplace } from "@tabler/icons-react";
import { IconPercentage } from "@tabler/icons-react";
import { IconCe } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";

export const BTN_VALUES_BASIC = [
  [
    {
      value: "clear",
      label: <IconCe style={getIconStyle(22)} />,
      color: "dark.4",
    },
    {
      value: "backspace",
      label: <IconBackspace style={getIconStyle(22)} />,
      color: "dark.4",
    },
    {
      value: "%",
      label: <IconPercentage style={getIconStyle(22)} />,
      color: "dark.4",
    },
    {
      value: "/",
      label: <IconDivide style={getIconStyle(22)} />,
      color: "dark.4",
    },
  ],
  [
    {
      value: "7",
      label: "7",
      color: "dark.6",
    },
    {
      value: "8",
      label: "8",
      color: "dark.6",
    },
    {
      value: "9",
      label: "9",
      color: "dark.6",
    },
    {
      value: "*",
      label: <IconX style={getIconStyle(22)} />,
      color: "dark.4",
    },
  ],
  [
    {
      value: "4",
      label: "4",
      color: "dark.6",
    },
    {
      value: "5",
      label: "5",
      color: "dark.6",
    },
    {
      value: "6",
      label: "6",
      color: "dark.6",
    },
    {
      value: "-",
      label: <IconMinus style={getIconStyle(22)} />,
      color: "dark.4",
    },
  ],
  [
    {
      value: "1",
      label: "1",
      color: "dark.6",
    },
    {
      value: "2",
      label: "2",
      color: "dark.6",
    },
    {
      value: "3",
      label: "3",
      color: "dark.6",
    },
    {
      value: "+",
      label: <IconPlus style={getIconStyle(22)} />,
      color: "dark.4",
    },
  ],
  [
    {
      value: "switch",
      label: <IconReplace style={getIconStyle(22)} />,
      color: "teal",
    },
    {
      value: "0",
      label: "0",
      color: "dark.6",
    },
    {
      value: ".",
      label: ".",
      color: "dark.6",
    },
    {
      value: "equals",
      label: <IconEqual style={getIconStyle(22)} />,
      color: "blue",
    },
  ],
];
