import { PaymentOptionProps } from "@/utils/types";
import React from "react";

function PaymentOptionComponent({ name, Icon, selected }: PaymentOptionProps) {
  return (
    <div
      className={`${selected ? "text-slate-500 font-medium border border-slate-400  " : "text-slate-600 bg-slate-100 border border-slate-100 "} col-span-1 flex flex-row items-center content-center justify-center space-x-1 p-2 rounded cursor-pointer`}
    >
      <Icon className="flex-shrink-0" height={12} width={12} />
      <p className="text-xs ">{name}</p>
    </div>
  );
}

export default PaymentOptionComponent;
