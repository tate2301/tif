import PaymentOptionComponent from "@/components/payment-option-component/PaymentOptionComponent";
import BorderedHeading from "@/components/bordered-heading/BorderedHeading";
import CustomButton from "@/components/custom-button/CustomButton";
import CustomInput from "@/components/custom-input/CustomInput";
import useUrlParams from "@/hooks/useUrlParams";
import { useRouter } from "next/router";
import {
  DevicePhoneMobileIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import Head from "next/head";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import AmountInfoSection from "@/components/page-sections/AmountInfoSection";
import ShippingInfoSection from "@/components/page-sections/ShippingInfoSection";


function Checkout() {
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { returnUrl, total } = useUrlParams();

  const handlePaymentProcess = () => {
    try {
      setLoading(true);
      router.replace({
        // @ts-ignore
        pathname: returnUrl,
        query: { status: "success" },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className="flex min-h-screen w-full bg-zinc-50">
        <div className="grid grid-cols-2  max-w-7xl w-full mx-auto p-4 rounded-lg">
          <div className="h-full p-8 flex flex-col space-y-8">
            <div className="flex flex-row text-zinc-500 space-x-2 items-center">
              <ArrowLeftIcon height={16} width={16} />
              <p className="text-zinc-800 font-medium">Tatenda</p>
              <p className="text-orange-700 bg-orange-200 py-0.5 px-1 font-semibold text-xs rounded uppercase">test mode</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-zinc-500">Pay Tatenda</p>
              <p className="text-zinc-800 font-semibold text-4xl">$140.0</p>
            </div>
            {/* product item */}
            <ProductItem />
            <ProductItem />
            {/* total sub info */}
            <AmountInfoSection />
            <div className="flex-1"></div>
            <div className="flex self-center flex-row text-xs items-center text-zinc-500 divide-x-[1px] divide-zinc-400 gap-4">
              <p>Powered by <span className="font-bold">Velocity</span></p>
              <div className="flex px-4 space0=-x-4">
                <p>Terms</p>
                <p>Privacy</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <ShippingInfoSection />

          </div>
        </div>
      </div>
    </>
  );
}

const ProductItem = () => {
  return (
    <div className="flex flex-row items-start space-x-2 max-w-md">
      <div className="bg-blue-200 h-12 w-12 rounded"></div>
      <div className="flex flex-col space-y-1 flex-1">
        <p className="text-sm text-zinc-700 font-medium">The pure set</p>
        <div className="flex">
          <div className="flex flex-row text-xs p-0.5 bg-zinc-200 rounded items-center">
            <p>Qty</p>
            <ChevronDownIcon height={12} width={12} />
          </div>
        </div>
      </div>
      <p className="text-zinc-600 font-semibold">$65.00</p>
    </div>
  )
}

export default Checkout;
