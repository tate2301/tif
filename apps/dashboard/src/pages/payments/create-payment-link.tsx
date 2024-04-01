import PaymentPreview from "@/components/create-payment-components/PaymentPreview";
import CustomCheckbox from "@/components/custom-checkbox/CustomCheckbox";
import CustomHeading from "@/components/custom-heading/CustomHeading";
import CustomDropdown from "@/components/dropdowns/CustomDropdown";
import DashboardLayout from "@/layouts/DashboardLayout";
import React, { useState } from "react";

const CreatePaymentLink = () => {
  const [collect_address, setCollectAddress] = useState();

  const dropdown_options = [
    { name: "Products or descriptions", _id: "products-or-descriptons" },
    {
      name: "Customer chooses what to pay",
      _id: "customer-chooses-what-to-pay",
    },
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-2 flex-1">
        <div className="col-span-1 main-border-r h-full grid pt-16 px-8">
          <div className="flex flex-col space-y-2 max-w-md ml-auto w-full">
            <CustomHeading size="sm" text="Select type" />
            <div className="flex">
              <CustomDropdown
                options={dropdown_options}
                heading="Products or description"
              />
            </div>
            <CustomHeading size="sm" text="Options" />
            <CustomCheckbox
              value={collect_address}
              setValue={setCollectAddress}
              text="collect customer's address"
            />
          </div>
        </div>
        <div className="col-span-1 bg-secondary h-full items-center justify-center content-center">
          <PaymentPreview />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreatePaymentLink;
