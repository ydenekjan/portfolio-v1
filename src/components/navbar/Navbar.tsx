"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Props } from "@/types";

const Navbar = ({ className }: Props.ClassName) => {
  const t = useTranslations("Main");
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentHash = window.location.hash.replace("#", "");
      console.log(currentHash);
      setActiveLink(currentHash || t("About.href"));
    }

    const handleHashChange = () => {
      setActiveLink(window.location.hash.replace("#", "") || t("About.href"));
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className={`max-lg:hidden flex flex-col gap-y-4 ${className}`}>
      <a
        onClick={() => setActiveLink("about")}
        className={`nav-item ${activeLink === t("About.href") ? "active" : ""}`}
        href={`#${t("About.href")}`}
      >
        {t("About.title")}
      </a>
      <a
        onClick={() => setActiveLink("experience")}
        className={`nav-item ${activeLink === t("Experience.href") ? "active" : ""}`}
        href={`#${t("Experience.href")}`}
      >
        {t("Experience.title")}
      </a>
      <a
        onClick={() => setActiveLink("projects")}
        className={`nav-item ${activeLink === t("Projects.href") ? "active" : ""}`}
        href={`#${t("Projects.href")}`}
      >
        {t("Projects.title")}
      </a>
    </nav>
  );
};

export default Navbar;
