import React from "react";
import { Props } from "@/types";

const Chip = ({ children }: Props.Children) => {
  return (
    <span className={"px-3 py-1 bg-accent-2 rounded-full"}>
      <h4>{children}</h4>
    </span>
  );
};

export default Chip;
