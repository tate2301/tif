import React from "react";

type Props = {
  onClick: () => void;
  loading: boolean;
  text: string;
};

function CustomButton({ onClick, loading, text }: Props) {
  return (
    <button
      onClick={loading ? () => console.log("loading...") : onClick}
      className="bg-slate-900 text-white text-center w-full px-4 py-2 rounded-lg"
    >
      {loading ? "Loadding..." : text}
    </button>
  );
}

export default CustomButton;
