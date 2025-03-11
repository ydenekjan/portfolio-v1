"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Props } from "@/types";
import { useNavContext } from "@/components/context/NavContext";

const Navbar = ({ className }: Props.ClassName) => {
  const t = useTranslations("Main");

  const [activeLink, setActiveLink] = useState("about");
  const { aboutInView, experienceInView, projectsInView } = useNavContext();

  useEffect(() => {
    if (projectsInView) setActiveLink(t("Projects.href"));
    if (experienceInView) setActiveLink(t("Experience.href"));
    if (aboutInView) setActiveLink(t("About.href"));
  }, [aboutInView, experienceInView, projectsInView]);

  return (
    <nav className={`max-lg:hidden flex flex-col gap-y-4 ${className}`}>
      <a
        className={`nav-item ${activeLink === t("About.href") ? "active" : ""}`}
        href={`#${t("About.href")}`}
      >
        {t("About.title")}
      </a>
      <a
        className={`nav-item ${activeLink === t("Experience.href") ? "active" : ""}`}
        href={`#${t("Experience.href")}`}
      >
        {t("Experience.title")}
      </a>
      <a
        className={`nav-item ${activeLink === t("Projects.href") ? "active" : ""}`}
        href={`#${t("Projects.href")}`}
      >
        {t("Projects.title")}
      </a>
    </nav>
  );
};

export default Navbar;
