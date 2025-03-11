import React from "react";
import { Props } from "@/types";

type TSection = { id: string; ref?: (node?: Element | null) => void };

const Section = ({
  id,
  children,
  className,
  ref,
}: TSection & Props.Children & Props.ClassName) => {
  return (
    <section
      ref={ref}
      id={id}
      className={`flex flex-col lg:pt-24 gap-y-12 md:gap-y-4 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;

const SectionTitle = ({ children }: Props.Children) => {
  return (
    <h3
      className={
        "lg:hidden sticky gap-x-8 gap-y-2 flex-wrap items-baseline flex justify-between top-0 max-md:-top-8 w-full bg-accent-1/80 backdrop-blur-xs py-4 max-md:translate-y-8 z-50"
      }
    >
      {children}
    </h3>
  );
};

Section.Title = SectionTitle;
