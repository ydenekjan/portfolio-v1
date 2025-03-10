import { getTranslations } from "next-intl/server";
import Section from "@/components/reusable/Section";

const Main = async () => {
  const t = await getTranslations("Main");
  return (
    <main className={"flex flex-col gap-y-16 scroll-smooth lg:col-start-2"}>
      <Section id={t("About.href")}>
        <Section.Title>{t("About.title")}</Section.Title>
        <p>
          {t.rich("About.content", {
            br: () => (
              <>
                <br></br>
                <br></br>
              </>
            ),
          })}
        </p>
      </Section>
      <Section id={t("Experience.href")}>
        <Section.Title>{t("Experience.title")}</Section.Title>
      </Section>
      <Section id={t("Projects.href")}>
        <Section.Title>{t("Projects.title")}</Section.Title>
      </Section>
    </main>
  );
};

export default Main;
