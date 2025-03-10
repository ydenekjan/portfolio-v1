"use client";

import React from "react";
import { Props } from "@/types";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: Props.Children) => {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme={"system"}
      enableSystem={true}
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
