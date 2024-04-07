import { useState } from "react";
import BorderedHeading from "../bordered-heading/BorderedHeading";
import CustomInput from "../custom-input/CustomInput";
import PaymentOptionComponent from "../payment-option-component/PaymentOptionComponent";
import {
  DevicePhoneMobileIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import { velocityPaymentsAPIKeyClient } from "@/lib/client";
import { useRouter } from "next/router";

const ShippingInfoSection = ({
  sessionId,
  price,
}: {
  sessionId: string;
  price: number;
}) => {
  const [value, setValue] = useState<any>("");
  const router = useRouter();
  const payment_method = "ecocash";
  const onSubmitForm = (e: any) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      phone_number: e.target.phone_number.value,
      country: e.target.country.value,
      full_name: e.target.full_name.value,
      address: e.target.address.value,
      city: e.target.city.value,
    };

    velocityPaymentsAPIKeyClient.post(
      `/payment/pay/${sessionId}/${payment_method}`,
      formData
    );

    router.push(`/success?price=${price}`);
  };
  return (
    <form
      className={`"max-w-sm bg-white mx-auto flex flex-col gap-10 p-8 rounded-lg bg-primary transition-transform duration-300 delay-50`}
      onSubmit={onSubmitForm}
    >
      <BorderedHeading text="Pay with" />
      <div className="space-y-4">
        <p className=" font-semibold text-zinc-900 text-lg">Shipping Info</p>
        <div className="space-y-6 rounded-xl bg-primary">
          <input
            name="email"
            placeholder="Email address"
            className="border-zinc-200 border w-full focus:bg-transparent shadow-sm focus:border-zinc-400/30 focus:shadow-sm p-2 outline-none rounded-lg"
          />
          <BillingSectionAddress />
        </div>
      </div>

      <div className="space-y-4">
        <p className=" font-semibold text-zinc-900 text-lg">Payment Method</p>
        <div className="flex flex-row items-center gap-4">
          <PaymentOptionComponent
            active={true}
            selected={true}
            name="Mobile"
            Icon={DevicePhoneMobileIcon}
          />
          <PaymentOptionComponent
            active={false}
            selected={false}
            name="ZIMSWITCH"
            Icon={CreditCardIcon}
          />
          <PaymentOptionComponent
            active={false}
            selected={false}
            name="Debit/Credit"
            Icon={BuildingLibraryIcon}
          />
        </div>
      </div>
      <input
        name="phone_number"
        placeholder="0771000000"
        type="text"
        className="border-zinc-200 border focus:bg-transparent shadow-sm focus:border-zinc-400/30 focus:shadow-sm p-2 outline-none rounded-lg"
      />

      <button
        type="submit"
        className="bg-blue-500 text-center font-medium text-white p-2 rounded-lg"
      >
        Pay
      </button>
    </form>
  );
};

const BillingSectionAddress = () => {
  return (
    <div className="flex flex-col">
      <p className="text-xs font-semibold text-zinc-500 capitalize pb-1">
        Billing Address
      </p>
      <div className="flex flex-col shadow-sm rounded-lg">
        <input
          name="country"
          placeholder={"Zimabwe"}
          className="border border-zinc-200 p-2 outline-none rounded-t-lg"
        />
        <input
          name="full_name"
          placeholder={"Full name"}
          className="border border-zinc-200 p-2 outline-none"
        />
        <textarea
          name="address"
          rows={3}
          placeholder={"Address"}
          className="border border-zinc-200 p-2 outline-none"
        />
        <input
          name="city"
          placeholder={"City"}
          className="border border-zinc-200 p-2 outline-none rounded-b-lg"
        />
      </div>
    </div>
  );
};

export default ShippingInfoSection;
