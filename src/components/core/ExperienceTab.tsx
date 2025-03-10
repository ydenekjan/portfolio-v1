import React from "react";
import { Props } from "@/types";

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
    <div className="w-full h-auto grid grid-cols-1 relative sm:grid-cols-[192px_1fr] group gap-y-2 gap-x-12 hover:border-accent-5 md:border border-transparent md:p-4 rounded-md transition-colors md:hover:bg-accent-2 cursor-default">
      <h4 className={"uppercase"}>{dateSpan}</h4>
      <div className={"flex flex-col gap-y-2"}>
        <h3 className={"font-light! text-accent-8!"}>{title}</h3>
        <p className={"text-[14px]! tracking-wide!"}>{description}</p>
        <div className={"flex gap-2 flex-wrap"}>
          {skills.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;

const Chip = ({ children }: Props.Children) => {
  return (
    <span
      className={
        "px-3 py-1 md:group-hover:bg-accent-3 bg-accent-2 rounded-full transition-colors"
      }
    >
      <h4>{children}</h4>
    </span>
  );
};
