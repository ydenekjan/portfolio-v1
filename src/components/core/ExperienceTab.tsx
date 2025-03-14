import React from "react";
import Chip from "@/components/reusable/Chip";

export type TExperienceProps = {
  title: string;
  dateSpan: string;
  description: string;
  skills: string[];
};

const ExperienceTab = ({
  title,
  dateSpan,
  description,
  skills,
}: TExperienceProps) => {
  return (
    <div className={"relative"}>
      <div
        className={`absolute inset-0 -right-7 -left-7 experience-tab group overflow-hidden border border-transparent md:hover:border-accent-4`}
      >
        {/*<div*/}
        {/*  className="bg-gradient hidden md:group-hover:block transition-colors"*/}
        {/*  style={{*/}
        {/*    background: `radial-gradient(512px circle at ${mouseX}% ${mouseY}%, var(--accent-2), transparent`,*/}
        {/*  }}*/}
        {/*/>*/}
        <h4 className={"uppercase z-10"}>{dateSpan}</h4>
        <div className={"flex flex-col gap-y-2 z-10"}>
          <h3 className={"font-light! text-accent-8!"}>{title}</h3>
          <p className={"text-[14px]! tracking-wide!"}>{description}</p>
          <div className={"flex gap-2 flex-wrap"}>
            {skills.map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;
