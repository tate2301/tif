import { PaymentOptionProps } from "@/utils/types";
import clsx from "clsx";
import React from "react";

function PaymentOptionComponent({ name, Icon, selected }: PaymentOptionProps) {
  return (
    <div
      className={clsx(
        `col-span-1 border flex flex-row items-center content-center justify-center space-x-2 p-2 rounded-lg cursor-pointer`,
        selected && "bg-zinc-900 text-white border-zinc-950"
      )}
    >
      <Icon className="flex-shrink-0 w-5 h-5" />
      <p className="font-semibold">{name}</p>
    </div>
  );
}

export default PaymentOptionComponent;
