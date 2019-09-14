import React from "react";
import { theme } from "@chakra-ui/core";

const customIcons = {
  menu: {
    path: <path d="M-.035 0h100.05v22.232H-.035zM-.035 38.865h100.05v22.232H-.035zM-.035 77.73h100.05v22.233H-.035z" />,
    viewBox: "0 0 100 100"
  }
};

// Example theme!
// https://palx.jxnblk.com/00365d
const customColors = {
  brand: {
    light: {
      background: "#FFFFFF",
      background20: "#CCCCCC",
      primary: "#000000",
      secondary: "#686c70",
      active: "#00365D"
    },
    dark: {
      background: "#00365d",
      background20: "#336990",
      primary: "#FFFFFF",
      secondary: "#b0c0cc",
      active: "#e7ecf0"
    }
  }
};

export default {
  ...theme, // extend the core theme from chakra-ui
  colors: {
    ...theme.colors,
    ...customColors
  },
  fonts: {
    heading: '"Roboto", sans-serif',
    body: '"Lato", sans-serif',
    mono: '"Roboto Mono", monospace',
  },
  icons: {
    ...theme.icons,
    ...customIcons
  },
  mobileBreakpoint: 760
  // maybe you can add a tabletBreakpoint if you want to design for iPadOS 
};
