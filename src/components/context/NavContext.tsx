"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type Props = {
  children: React.ReactNode;
};
type Context = {
  aboutInView: boolean;
  setAboutInView: React.Dispatch<React.SetStateAction<boolean>>;
  experienceInView: boolean;
  setExperienceInView: React.Dispatch<React.SetStateAction<boolean>>;
  projectsInView: boolean;
  setProjectsInView: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavContext = createContext<Context | null>(null);

export const NavContextProvider = ({ children }: Props) => {
  const [aboutInView, setAboutInView] = useState(false);
  const [experienceInView, setExperienceInView] = useState(false);
  const [projectsInView, setProjectsInView] = useState(false);

  const t = useTranslations("Main");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentHash = window.location.hash.replace("#", "");
      switch (currentHash) {
        case t("About.href"):
          setAboutInView(true);
          break;
        case t("Experience.href"):
          setExperienceInView(true);
          break;
        case t("Projects.href"):
          setProjectsInView(true);
          break;
      }
    }
  }, []);

  return (
    <NavContext.Provider
      value={{
        aboutInView,
        setAboutInView,
        experienceInView,
        setExperienceInView,
        projectsInView,
        setProjectsInView,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(NavContext);

  if (!context)
    throw new Error(
      "NavContext must be called from within the NavContextProvider",
    );

  return context;
};
