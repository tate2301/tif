import { PaymentOptionProps } from "@/utils/types";
import clsx from "clsx";
import React from "react";

function PaymentOptionComponent({ name, Icon, selected }: PaymentOptionProps) {
  return (
    <div
      className={clsx(
        `col-span-1 border flex flex-row items-center content-center justify-center space-x-1 p-2 rounded-lg cursor-pointer main-border flex-1 `,
        selected ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-950 " :" text-zinc-950 dark:text-white"
      )}
    >
      <Icon className="flex-shrink-0 w-4 h-4" />
      <p className="font-semibold text-xs">{name}</p>
    </div>
  );
}

export default PaymentOptionComponent;