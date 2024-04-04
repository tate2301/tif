import PaymentOptionComponent from "@/components/payment-option-component/PaymentOptionComponent";
import BorderedHeading from "@/components/bordered-heading/BorderedHeading";
import CustomButton from "@/components/custom-button/CustomButton";
import CustomInput from "@/components/custom-input/CustomInput";
import { GetServerSidePropsContext } from "next";
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
      <div className="flex h-screen w-full bg-zinc-50-">
        <div className="grid grid-cols-2 max-w-7xl w-full mx-auto bg-white p-4 rounded-lg">
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
          </div>

          <div className="flex-1 space-y-8">
            <div className="max-w-lg flex-1 mx-auto flex flex-col gap-8 p-8 pt-24 rounded-lg">
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

              <div className="space-y-6 rounded-xl bg-white">
                <CustomInput
                  name="full_name"
                  placeholder="John Doe"
                  heading="Full name"
                />
                <CustomInput
                  name="phone_number"
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                  placeholder="0771000000"
                  heading="Phone number"
                />
                <CustomInput
                  name="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  heading="Email"
                />
              </div>
              <CustomButton
                text={`Pay ZWL$${total}`}
                loading={loading}
                onClick={handlePaymentProcess}
              />

            </div>
            <div className="h-px w-auto bg-zinc-400/30 mx-8" />
            <div className="px-4 mx-8 space-y-2 text-xs">
              <div className="flex justify-between items-baseline">
                <p>
                  {new Date().getFullYear()} &copy; <span className="font-semibold text-zinc-700"> Velocity</span>
                </p>
                <ul className="flex items-center gap-8 text-xs">
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <p className="text-zinc-400 text-xs">
                Velocity is a registered trademark of Hurudza Creative. Made with love in Zimbabwe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const AmountInfoSection = () => {
  return (
    <div className="flex flex-col py-4 border-t border-zinc-200">
      <div className="flex flex-row items-start space-x-2 max-w-md">
        <div className=" h-12 w-12 rounded"></div>
        <div className="flex flex-1 flex-row items-center justify-between text-zinc-600 font-semibold justify-between">
          <p>Sub Total</p>
          <p>$65.00</p>
        </div>
      </div>
      <div className="flex flex-row items-start space-x-2 max-w-md">
        <div className=" h-12 w-12 rounded"></div>
        <div className="flex flex-1 flex-row text-zinc-400 items-center justify-between justify-between">
          <div className="flex flex-col">
            <p>Shipping</p>
            <p className="text-xs font-medium">Free shipping (5-7 business days)</p>
          </div>
          <p>Free</p>
        </div>
      </div>
      <div className="flex flex-row items-start space-x-2 max-w-md">
        <div className=" h-12 w-12 rounded"></div>
        <div className="flex flex-1 flex-row text-zinc-400 items-center justify-between justify-between">
          <p>Sales tax (6.5%)</p>
          <p>$4.23</p>
        </div>
      </div>
      <div className="flex flex-row items-start border-t border-zinc-200 pt-4 space-x-2 max-w-md">
        <div className=" h-12 w-12 rounded"></div>
        <div className="flex flex-1 flex-row items-center justify-between text-zinc-600 font-semibold justify-between">
          <p>Total Due</p>
          <p>$133.23</p>
        </div>
      </div>
    </div>
  )
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
