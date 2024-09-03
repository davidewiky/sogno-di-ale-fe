import React, { useMemo } from "react";

const colorM = "#00b2ee";
const colorF = "#ffccff";
const colorI = "#ddfad2";

interface GenderLabelProps {
  gender?: string;
}

export function GenderLabel({ gender }: GenderLabelProps) {
  const color = useMemo(() => {
    if (gender === "M") {
      return colorM;
    }
    if (gender === "F") {
      return colorF;
    }
    return colorI;
  }, [gender]);

  return (
    <span
      data-testid="gender-label"
      style={{
        backgroundColor: color,
        borderRadius: "0.25em",
        border: "solid 1px #90a4ae",
        padding: "0.1em 0.3em",
      }}
    >
      {gender}
    </span>
  );
}
