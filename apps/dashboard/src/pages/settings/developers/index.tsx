import DevelopersNavigation from "@/components/navigation/DevelopersNavigation";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

type Props = {};

const Developers = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl w-full mx-auto md:p-8 p-4 flex flex-col space-y-8">
        <p className="heading-text text-3xl font-bold">Developers</p>
        <DevelopersNavigation />
        <div className="main-border p-4 rounded-lg justify-between">
            <p className="heading-text font-bold">API Keys</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Developers;
