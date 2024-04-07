import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  isCodeRequired?: boolean;
  actionButtonText: string;
  heading: string;
  description: string;
  location: string;
};

function CreatePaymentItem({
  isCodeRequired,
  actionButtonText,
  heading,
  description,
  location,
}: Props) {
  return (
    <div className="col-span-1  h-fit">
      <div className="h-60 w-full rounded-lg bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative mb-4">
        <div className="h-48 w-1/3 relative  top-50">
          {/* <Image
            alt="display image item"
            layout="fill"
            objectFit="cover"
            src={"/images/create-link-large.png"}
          /> */}
        </div>
      </div>
      <p className="heading-text font-semibold mb-2">{heading}</p>
      <p className="text-zinc-500 mb-4">{description}</p>
      <div className="flex flex-row items-center space-x-1 mb-8">
        {isCodeRequired ? (
          <>
            <div className="flex bg-secondary main-text text-xs p-1 rounded font-medium">
              Code required
            </div>
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
      <div className="flex">
        <Link
          href={location}
          className="flex border border-zinc-400/30 px-4 py-2 hover:shadow cursor-pointer text-sm main-text rounded-xl font-semibold"
        >
          {actionButtonText}
        </Link>
      </div>
    </div>
  );
}

export default CreatePaymentItem;
