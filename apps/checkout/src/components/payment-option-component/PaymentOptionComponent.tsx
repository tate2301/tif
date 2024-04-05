import { PaymentOptionProps } from "@/utils/types";
import clsx from "clsx";
import React from "react";

function PaymentOptionComponent({ name, Icon, selected }: PaymentOptionProps) {
  return (
    <div className={`${selected ? " border-zinc-900 shadow " : " border-zinc-200 " } flex flex-col space-y-2 border w-28 p-2 rounded-lg`} >
      <Icon className="flex-shrink-0 w-4 h-4" />
      <p className="font-medium text-zinc-500 font-semibold text-xs">{name}</p>
    </div>
  );
}

export default PaymentOptionComponent;
