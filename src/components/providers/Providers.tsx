"use client";

import React from "react";
import { Props } from "@/types";
import { ThemeProvider } from "next-themes";
import { NavContextProvider } from "@/components/context/NavContext";

const Providers = ({ children }: Props.Children) => {
  return (
    <NavContextProvider>
      <ThemeProvider
        attribute={"class"}
        defaultTheme={"system"}
        enableSystem={true}
      >
        {children}
      </ThemeProvider>
    </NavContextProvider>
  );
};

export default Providers;
