import React from "react";

type Props = {
  text: string;
  size?: string;
};

const CustomHeading = ({ text, size }: Props) => {
  return (
    <div
      className={`${size === "sm" ? "heading-small " : "heading-text "} flex-shrink-0 font-medium main-text pb-2`}
    >
      {text}
    </div>
  );
};

export default CustomHeading;
