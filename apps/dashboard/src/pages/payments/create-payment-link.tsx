import PaymentPreview from "@/components/create-payment-components/PaymentPreview";
import CustomCheckbox from "@/components/custom-checkbox/CustomCheckbox";
import CustomHeading from "@/components/custom-heading/CustomHeading";
import CustomDropdown from "@/components/dropdowns/CustomDropdown";
import ChooseProductModal from "@/components/modals/ChooseProductModal";
import DashboardLayout from "@/layouts/DashboardLayout";
import React, { useState } from "react";

const dropdown_options = [
  { name: "Products or descriptions", _id: "products-or-descriptons" },
  {
    name: "Customer chooses what to pay",
    _id: "customer-chooses-what-to-pay",
  },
];

const CreatePaymentLink = () => {
  const [collect_address, setCollectAddress] = useState<any>();
  const [required_additional_number, setRequireAdditionalNumber] =
    useState<any>();
  const [require_mobile_payment, setRequireMobilePayment] = useState(true);
  const [require_zimswitch, setRequireZimswitch] = useState(true);
  const [require_card, setRequireCard] = useState(true);

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
            <CustomHeading size="sm" text="Payment options" />
            <CustomCheckbox
              value={require_mobile_payment}
              setValue={setRequireMobilePayment}
              text="Use Ecocash"
            />
            <CustomCheckbox
              value={require_zimswitch}
              setValue={setRequireZimswitch}
              text="Use Zimswitch "
            />
            <CustomCheckbox
              value={require_card}
              setValue={setRequireCard}
              text="Use Debit/Credit card"
            />
            <CustomHeading size="sm" text="Add a product" />
            <div className="flex">
              <ChooseProductModal />
            </div>
            <CustomHeading size="sm" text="User information" />
            <CustomCheckbox
              value={collect_address}
              description="Make users give your the location of where you they want shipping done"
              setValue={setCollectAddress}
              text="Collect customer's address"
            />
            <CustomCheckbox
              value={required_additional_number}
              setValue={setRequireAdditionalNumber}
              text="Require customer's additional number"
            />
          </div>
        </div>
        <div className="col-span-1 bg-secondary h-full items-center justify-center content-center">
          <PaymentPreview
            require_mobile_payment={require_mobile_payment}
            require_address={collect_address}
            reqire_zimswitch={require_zimswitch}
            require_card={require_card}
            require_additional_number={required_additional_number}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreatePaymentLink;
