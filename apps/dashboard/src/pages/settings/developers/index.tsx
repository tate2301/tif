import DevelopersNavigation from "@/components/navigation/DevelopersNavigation";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ArrowRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const Developers = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl w-full mx-auto md:p-8 p-4 flex flex-col space-y-8">
        <p className="heading-text text-3xl font-bold">Developers</p>
        <DevelopersNavigation />
        <div className="main-border p-4 flex flex-row items-center rounded-lg justify-between">
          <p className="heading-text font-bold">API Keys</p>
          <div className="flex flex-row items-center cursor-pointer  main-link-text space-x-2 text-sm font-medium">
            <p>learn more about API authentication</p>
            <ArrowRightIcon height={16} width={16} />
          </div>
        </div>
        <div className="main-border  flex flex-col rounded-lg justify-between divide-y-[1px] dark:divide-zinc-800 divide-zinc-200">
          <div className="flex flex-row items-center justify-between p-4">
            <div className="flex flex-col space-y-1 ">
              <p className="heading-text font-bold">Standard Keys</p>
              <p className="text-sm light-text">
                Create a key that unlocks full API access, enabling extensive
                interaction with your account.{" "}
                <span className="font-semibold">Learn more</span>
              </p>
            </div>
            <div className="main-border main-link-text text-sm rounded-lg p-1.5 font-medium flex flex-row items-center space-x-1 cursor-default">
              <PlusIcon height={16} width={16} />
              <p>Create stadard key</p>
            </div>
          </div>
          {/* table heading */}
          <div className="grid grid-cols-5 p-3 text-xs uppercase font-semibold main-text">
            <div className="col-span-1">name</div>
            <div className="col-span-1">token</div>
            <div className="col-span-1">last used</div>
            <div className="col-span-1">created at</div>
          </div>
          {/* table bpdy */}
          <div className="grid grid-cols-5 p-3 text-sm main-text">
            <div className="col-span-1 font-semibold">Publishable key</div>
            <div className="col-span-1 text-xs font-medium">
              pk_test_51JLeUHFjxpMvfIoMyUS9IH8dLitELZoQ1Yo0XJUHEgISRsG8AjoC7UpD84HZkXBZiRoKVtNFlIDJkiOMcUPLVE0100qcw91FMs
            </div>
            <div className="col-span-1 font-medium">-</div>
            <div className="col-span-1 font-medium">7 Aug 2021</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Developers;
