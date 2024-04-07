/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, ReactElement } from "react";

type Props = {
  text: string;
  dark?: boolean;
  outline?: boolean;
  onClick?: () => void;
  loading?: boolean;
  textStyles?: string;
  type?: "button" | "submit" | "reset";
};

const PrimaryButton: FC<Props> = (props: Props): ReactElement => {
  return (
    <button
      type={props.type}
      disabled={props.loading}
      onClick={props.loading ? () => console.log("loading") : props.onClick}
      className={`${""} bg-zinc-950 hover:bg-zinc-800 dark:bg-white rounded-lg font-semibold text-center p-3 text-white dark:text-zinc-950 text-sm`}
    >
      {props.loading ? (
        <p>Loading...</p>
      ) : (
        <p className={props.textStyles}>{props.text}</p>
      )}
    </button>
  );
};

export default PrimaryButton;
