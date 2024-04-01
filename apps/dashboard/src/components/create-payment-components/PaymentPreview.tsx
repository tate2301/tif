import React, { useState } from 'react'
import {
    DevicePhoneMobileIcon,
    BuildingLibraryIcon,
    CreditCardIcon,
  } from "@heroicons/react/24/solid";
  import BorderedHeading from "@/components/bordered-hearding/BorderedHeading";
  import PaymentOptionComponent from "@/components/payment-option-component/PaymentOptionComponent";
  import PrimaryButton from "@/components/buttons/PrimaryButton";
  import CustomInput from "@/components/inputs/CustomInput";

type Props = {}

const PaymentPreview = (props: Props) => {
    const [value, setValue] = useState('')

    const handlePaymentProcess = () =>{
        
    }

  return (
    <div className="max-w-sm flex-1 mx-auto flex flex-col gap-8 p-8 pt-24 rounded-lg bg-primary">
            <BorderedHeading text="Pay with" />
            <div className="grid grid-cols-3 gap-2 items-center justify-between">
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

            <div className="space-y-6 rounded-xl bg-primary">
              <CustomInput
                value={value}
                setValue={setValue}
                placeholder="0771000000"
                heading="phone number"
              />
              <CustomInput
                placeholder="Email address"
                value={value}
                setValue={setValue}
                heading="email"
              />
            </div>
            <div className="bg-zinc-900 text-center font-medium dark:bg-white text-white dark:text-zinc-900 p-2 rounded-lg">
              Pay
            </div>
          </div>
  )
}

export default PaymentPreview