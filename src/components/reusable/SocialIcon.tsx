import React from "react";
import { Props } from "@/types";

type TSocialIcon = { href: string; label: string; title: string };

const SocialIcon = ({
  href,
  label,
  title,
  children,
}: TSocialIcon & Props.Children) => {
  return (
    <a
      href={href}
      aria-label={label}
      title={title}
      className={
        "w-7 h-7 transition-colors fill-accent-5 hover:fill-primary/50 relative object-cover overflow-hidden"
      }
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default SocialIcon;
