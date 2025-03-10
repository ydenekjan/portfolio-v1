import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { getTranslations } from "next-intl/server";
import Socials from "@/components/core/Socials";

const Aside = async () => {
  const t = await getTranslations("Aside");
  return (
    <aside
      className={
        "vertical-padding flex flex-col h-min justify-between gap-y-12 lg:fixed"
      }
    >
      <header className={"flex flex-col gap-y-5"}>
        <h1>{t("name")}</h1>
        <h2>{t("position")}</h2>
        <p className={"max-w-96"}>{t("quote")}</p>
        <Socials />
      </header>

      <Navbar />
    </aside>
  );
};

export default Aside;
