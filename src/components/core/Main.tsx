"use client";

import Section from "@/components/reusable/Section";
import ExperienceTab, {
  TExperienceProps,
} from "@/components/core/ExperienceTab";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";
import { useNavContext } from "@/components/context/NavContext";
import Link from "next/link";

const Main = () => {
  const t = useTranslations("Main");
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.5,
  });
  const [experienceRef, experienceInView] = useInView({
    threshold: 0.5,
  });
  const [projectsRef, projectsInView] = useInView({
    threshold: 0.5,
  });

  const { setExperienceInView, setAboutInView, setProjectsInView } =
    useNavContext();

  useEffect(() => {
    setExperienceInView(experienceInView);
    setAboutInView(aboutInView);
    setProjectsInView(projectsInView);
  }, [aboutInView, experienceInView, projectsInView]);

  return (
    <main
      className={
        "flex flex-col gap-y-16 scroll-smooth lg:col-start-2 vertical-padding pt-0!"
      }
    >
      <Section ref={aboutRef} id={t("About.href")}>
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
      <Section ref={experienceRef} id={t("Experience.href")}>
        <Section.Title>
          {t("Experience.title")}
          <Link href={t("Experience.link.href")}>
            <h3
              className={
                "w-fit text-[14px]! font-medium! hover:text-accent-8! transition-colors text-accent-6 relative after:content-['_↗'] gap-2 items-center flex after:translate-y-[1px]"
              }
            >
              <span>{t("Experience.link.title")}</span>
            </h3>
          </Link>
        </Section.Title>
        {t
          .raw("Experience.tabs")
          ?.map(
            (
              { title, dateSpan, description, skills }: TExperienceProps,
              index: number,
            ) => (
              <ExperienceTab
                key={index}
                title={title}
                dateSpan={dateSpan}
                description={description}
                skills={skills}
              />
            ),
          )}
        <Link className={"max-md:hidden"} href={t("Experience.link.href")}>
          <h3
            className={
              "w-fit text-[14px]! font-medium! hover:text-accent-8! transition-colors text-accent-6 relative after:content-['_↗'] gap-2 items-center flex after:translate-y-[1px]"
            }
          >
            <span>{t("Experience.link.title")}</span>
          </h3>
        </Link>
      </Section>
      <Section className={"hidden"} ref={projectsRef} id={t("Projects.href")}>
        <Section.Title>{t("Projects.title")}</Section.Title>
      </Section>
    </main>
  );
};

export default Main;
