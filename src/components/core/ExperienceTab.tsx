"use client";

import React, { useState } from "react";
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
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleOnMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = event;

    setMouseX(
      ((event.pageX - currentTarget.offsetLeft) / currentTarget.clientWidth) *
        100,
    );
    setMouseY(
      ((event.pageY - currentTarget.offsetTop) / currentTarget.clientHeight) *
        100,
    );
  };

  return (
    <div
      className={"experience-tab-border"}
      onMouseMove={handleOnMouseMove}
      style={
        {
          // background: `radial-gradient(1024px circle at ${mouseX}% ${mouseY}%, var(--accent-4), transparent`,
        }
      }
    >
      <div
        className={`experience-tab group overflow-hidden border border-transparent hover:border-accent-2`}
      >
        <div
          className="bg-gradient hidden group-hover:block transition-colors"
          style={{
            background: `radial-gradient(512px circle at ${mouseX}% ${mouseY}%, var(--accent-2), transparent`,
          }}
        />
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

const Chip = ({ children }: Props.Children) => {
  return (
    <span
      className={
        "px-3 py-1 md:group-hover:bg-accent-5/20 bg-accent-2 rounded-full transition-colors"
      }
    >
      <h4>{children}</h4>
    </span>
  );
};

export default ExperienceTab;
