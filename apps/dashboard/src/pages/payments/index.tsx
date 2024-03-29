import OverviewLayout from "@/layouts/OverviewLayout";
import React from "react";

type Props = {};

const Payments = (props: Props) => {
  return (
    <OverviewLayout heading="Payments">
      <div className="flex flex-col space-y-1">
        <p className="text-center font-bold heading-text text-2xl ">
          Choose how to start collecting payments
        </p>
        <p className="text-center main-text text-lg font-medium max-w-2xl mx-auto w-full">
          Get started fast with a no-code option or explore customisable UIs
          that integrate with our APIs.
        </p>
      </div>
    </OverviewLayout>
  );
};

export default Payments;
