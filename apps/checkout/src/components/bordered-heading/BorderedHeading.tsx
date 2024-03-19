import React from "react";

type Props = {
  text: string;
};

const BorderedHeading = ({ text }: Props) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <div className="border-t border-slate-100 flex-1"></div>
      <p className="text-center text-slate-500 text-xs capitalize">
        {text}
      </p>
      <div className="border-t border-slate-100 flex-1"></div>
    </div>
  );
};

export default BorderedHeading;
