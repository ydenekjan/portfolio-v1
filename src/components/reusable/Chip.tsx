import React from "react";
import { Props } from "@/types";

const Chip = ({ children }: Props.Children) => {
  return (
    <span className={"px-3 py-1 bg-primary/20 rounded-full"}>
      <h4 className={"text-primary!"}>{children}</h4>
    </span>
  );
};

export default Chip;
