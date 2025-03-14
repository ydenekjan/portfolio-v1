"use client";

import React from "react";
import SteamIcon from "@/icons/SteamIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import GithubIcon from "@/icons/GithubIcon";
import SocialIcon from "@/components/reusable/SocialIcon";

const Socials = () => {
  return (
    <div className={"flex gap-3"}>
      <SocialIcon
        href={"https://github.com/ydenekjan"}
        title={"Github"}
        label={"Github (Opens in a new tab)"}
      >
        <GithubIcon />
      </SocialIcon>
      <SocialIcon
        href={"https://www.linkedin.com/in/ydenekjan"}
        title={"LinkedIn"}
        label={"LinkedIn (Opens in a new tab)"}
      >
        <LinkedinIcon />
      </SocialIcon>
      <SocialIcon
        href={"https://steamcommunity.com/id/swiftyy_"}
        title={"Steam"}
        label={"Steam (Opens in a new tab)"}
      >
        <SteamIcon />
      </SocialIcon>
    </div>
  );
};

export default Socials;
