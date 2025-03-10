import React from "react";
import { Props } from "@/types";

type TSection = { id: string };

const Section = ({ id, children }: TSection & Props.Children) => {
  return (
    <section id={id} className={"flex flex-col pt-24"}>
      {children}
    </section>
  );
};

export default Section;

const SectionTitle = ({ children }: Props.Children) => {
  return (
    <h3
      className={
        "lg:hidden max-lg:sticky top-0 w-full bg-accent-1/80 backdrop-blur-xs py-6 text-black"
      }
    >
      {children}
    </h3>
  );
};

Section.Title = SectionTitle;
