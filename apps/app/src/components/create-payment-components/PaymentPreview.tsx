import React, { useState } from "react";
import {
  DevicePhoneMobileIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import BorderedHeading from "@/components/bordered-hearding/BorderedHeading";
import PaymentOptionComponent from "@/components/payment-option-component/PaymentOptionComponent";
import CustomInput from "@/components/inputs/CustomInput";

type Props = {
  require_address: boolean;
  require_additional_number: boolean;
  require_mobile_payment: boolean;
  reqire_zimswitch: boolean;
  require_card: boolean;
};

const PaymentPreview = ({
  require_address,
  require_additional_number,
  require_mobile_payment,
  reqire_zimswitch,
  require_card,
}: Props) => {
  const [value, setValue] = useState("");

  return (
    <div
      className={`${require_address ? "max-w-md " : "max-w-sm "}  mx-auto flex flex-col gap-8 p-8 rounded-lg bg-primary transition-transform duration-300 delay-50`}
    >
      <BorderedHeading text="Pay with" />
      {reqire_zimswitch || require_card || require_mobile_payment ? (
        <>
          <div className="flex flex-row gap-2 items-center justify-between">
            {require_mobile_payment && (
              <PaymentOptionComponent
                active={true}
                selected={true}
                name="Mobile"
                Icon={DevicePhoneMobileIcon}
              />
            )}
            {reqire_zimswitch && (
              <PaymentOptionComponent
                active={false}
                selected={false}
                name="ZIMSWITCH"
                Icon={CreditCardIcon}
              />
            )}
            {require_card && (
              <PaymentOptionComponent
                active={false}
                selected={false}
                name="Debit/Credit"
                Icon={BuildingLibraryIcon}
              />
            )}
          </div>

          <div className="space-y-6 rounded-xl bg-primary">
            <CustomInput
              value={value}
              setValue={setValue}
              placeholder="0771000000"
              heading="phone number"
            />
            {require_additional_number && (
              <CustomInput
                value={value}
                setValue={setValue}
                placeholder="0772111111"
                heading="Additional phone number"
              />
            )}
            <CustomInput
              placeholder="Email address"
              value={value}
              setValue={setValue}
              heading="email"
            />
            {require_address && <BillingSectionAddress />}
          </div>
        </>
      ) : (
        <div className="flex font-medium main-text text-center mx-auto">You should select atleast one payment option</div>
      )}
      <div className="bg-zinc-900 text-center font-medium dark:bg-white text-white dark:text-zinc-900 p-2 rounded-lg">
        Pay
      </div>
    </div>
  );
};

const BillingSectionAddress = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col">
      <p className="text-sm text-zinc-500 capitalize pb-1">Billing Address</p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={"Zimabwe"}
        className=" bg-primary main-border shadow-sm p-2 outline-none rounded-t-lg"
      />
      <textarea
        rows={3}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={"Address"}
        className=" bg-secondary main-border shadow-sm p-2 outline-none"
      />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={"City"}
        className=" bg-primary  main-border dark:border-t border-zinc-100 shadow-sm p-2 outline-none rounded-b-lg"
      />
    </div>
  );
};

export default PaymentPreview;
