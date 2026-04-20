"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <DarkModeSwitch
      checked={resolvedTheme === "dark"}
      onChange={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    />
  );
};

export default ThemeSwitch;
