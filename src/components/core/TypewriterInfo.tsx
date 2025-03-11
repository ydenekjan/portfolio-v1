"use client";

import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const TypewriterInfo = () => {
  const t = useTranslations("Aside");
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    <p className={"max-w-96"}>
      {didMount && (
        <TypeAnimation
          sequence={[t("quote")]}
          wrapper={"span"}
          speed={70}
        ></TypeAnimation>
      )}
    </p>
  );
};

export default TypewriterInfo;
