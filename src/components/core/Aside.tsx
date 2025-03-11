import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { getTranslations } from "next-intl/server";
import Socials from "@/components/core/Socials";
import TypewriterInfo from "@/components/core/TypewriterInfo";

const Aside = async () => {
  const t = await getTranslations("Aside");
  return (
    <aside className={"vertical-padding min-w-96 w-full"}>
      <section
        className={"lg:fixed  flex flex-col h-min justify-between gap-y-12"}
      >
        <header className={"flex flex-col gap-y-5"}>
          <h1>{t("name")}</h1>
          <h2>{t("position")}</h2>
          <TypewriterInfo />
          <Socials />
        </header>

        <Navbar />
      </section>
    </aside>
  );
};

export default Aside;
