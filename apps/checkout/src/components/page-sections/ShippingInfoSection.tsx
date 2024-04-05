import { useState } from "react";
import BorderedHeading from "../bordered-heading/BorderedHeading";
import CustomInput from "../custom-input/CustomInput";
import PaymentOptionComponent from "../payment-option-component/PaymentOptionComponent"
import {
    DevicePhoneMobileIcon,
    BuildingLibraryIcon,
    CreditCardIcon,
} from "@heroicons/react/24/solid";

const ShippingInfoSection = () => {
    const [value, setValue] = useState<any>("")
    return (
        <div
            className={`"max-w-sm bg-white rounded-lg mx-auto flex flex-col gap-8 p-8 rounded-lg bg-primary transition-transform duration-300 delay-50`}
        >
            <BorderedHeading text="Pay with" />
            <p className=" font-semibold text-zinc-900 text-lg">Shipping Info</p>
            <div className="space-y-6 rounded-xl bg-primary">

                <CustomInput
                    placeholder="Email address"
                    value={value}
                    setValue={setValue}
                    heading="email"
                />
                <BillingSectionAddress />
            </div>

            <p className=" font-semibold text-zinc-900 text-lg">Payment Method</p>
            <div className="flex flex-row gap-2 items-center gap-4">
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
            <CustomInput
                value={value}
                setValue={setValue}
                placeholder="0771000000"
                heading="phone number"
            />

            <div className="bg-zinc-900 text-center font-medium text-white p-2 rounded-lg">
                Pay
            </div>
           
        </div>
    )
}

const BillingSectionAddress = () => {
    const [value, setValue] = useState("");

    return (
        <div className="flex flex-col">
            <p className="text-xs font-semibold text-zinc-500 capitalize pb-1">Billing Address</p>
            <div className="flex flex-col shadow-sm rounded-lg">
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={"Zimabwe"}
                    className="border border-zinc-200 p-2 outline-none rounded-t-lg"
                />
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={"Full name"}
                    className="border border-zinc-200 p-2 outline-none"
                />
                <textarea
                    rows={3}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={"Address"}
                    className="border border-zinc-200 p-2 outline-none"
                />
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={"City"}
                    className="border border-zinc-200 p-2 outline-none rounded-b-lg"
                />
            </div>
        </div>
    );
};


export default ShippingInfoSection