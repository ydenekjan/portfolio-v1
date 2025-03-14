"use client";

import React from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <DarkModeSwitch
      checked={resolvedTheme === "dark"}
      onChange={() =>
        setTheme(() => (resolvedTheme === "light" ? "dark" : "light"))
      }
    />
  );
};

export default ThemeSwitch;
