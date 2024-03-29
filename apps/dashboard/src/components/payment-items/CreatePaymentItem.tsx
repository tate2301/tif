import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  isCodeRequired?: boolean;
  actionButtonText: string
  heading: string
  description: string
  location: string
};

function CreatePaymentItem({ isCodeRequired, actionButtonText, heading, description, location }: Props) {
  return (
    <div className="col-span-1 flex flex-col space-y-2">
      <div className="h-60 rounded-xl bg-secondary"></div>
      <p className="heading-text text-sm font-semibold">
        {heading}
      </p>
      <p className="main-text text-xs font-medium">
        {description}
      </p>
      <div className="flex flex-row items-center space-x-1">
        {isCodeRequired ? (
          <>
            <div className="flex bg-secondary main-text text-xs p-1 rounded font-medium">Code required</div>
          </>
        ) : (
          <>
            <div className="flex bg-green-200 dark:bg-green-700 dark:text-green-200 text-green-900 rounded p-1 font-medium flex-row items-center space-x-1">
              <ClockIcon height={12} width={12} />
              <p className="text-xs">Set up in 1 minute</p>
            </div>
            <p className="flex bg-blue-200 dark:bg-blue-700 dark:text-blue-200 text-blue-900 text-xs rounded p-1 font-medium">
              No code required
            </p>
          </>
        )}
      </div>
      <div className="flex pt-2">
        <Link href={location} className="flex main-border p-2 shadow cursor-pointer text-sm font-medium main-text rounded-xl">
          {actionButtonText}
        </Link>
      </div>
    </div>
  );
}

export default CreatePaymentItem;
