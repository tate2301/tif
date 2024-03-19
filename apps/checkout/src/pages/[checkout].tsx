import { GetServerSidePropsContext } from "next";
import {
  DevicePhoneMobileIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import PaymentOptionComponent from "@/components/payment-option-component/PaymentOptionComponent";
import BorderedHeading from "@/components/bordered-heading/BorderedHeading";
import { useState } from "react";
import CustomInput from "@/components/custom-input/CustomInput";
import CustomButton from "@/components/custom-button/CustomButton";
import { useRouter } from "next/router";
import useUrlParams from "@/hooks/useUrlParams";

interface PostData {
  title: string;
  content: string;
  amount: number;
}

interface Props {
  postData: PostData;
}

// Example of fetching data using getServerSideProps
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const slug = params?.slug || "";

  // Fetch data based on slug
  const postData: PostData = {
    title: "tatenda bako",
    content: "the content type",
    amount: 999.99,
  }; // Fetch data based on the slug

  return {
    props: {
      postData,
    },
  };
}

function Checkout({ postData }: Props) {
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { returnUrl } = useUrlParams();
  console.log(returnUrl)

  const handlePaymentProcess = () => {
    try {
      setLoading(true);
      router.replace({
        // @ts-ignore
        pathname: returnUrl,
        query: { status: 'success' },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full py-24 px-4">
      <div className="max-w-sm mx-auto w-full flex flex-col space-y-6 p-2 rounded-lg">
        <p className="text-3xl text-slate-900 font-semibold text-center">
          $1000.00
        </p>
        <div className="bg-slate-900 text-white flex space-x-2 flex-row items-center rounded-xl py-2 px-4">
          <CpuChipIcon height={32} width={32} />
          <div className="flex flex-col space-y-[1px]">
            <p className="text-white font-semibold">Velocity</p>
            <p className="text-slate-300 text-xs">Pay with velocity</p>
          </div>
        </div>
        <div className="border border-slate-200 bg-white  space-y-6 rounded-xl px-4 py-8">
          <BorderedHeading text="select payment option" />
          <div className="grid grid-cols-3 gap-2 items-center justify-between">
            <PaymentOptionComponent
              active={true}
              selected={true}
              name="ecocash"
              Icon={DevicePhoneMobileIcon}
            />
            <PaymentOptionComponent
              active={false}
              selected={false}
              name="debit/credit"
              Icon={CreditCardIcon}
            />
            <PaymentOptionComponent
              active={false}
              selected={false}
              name="virtual"
              Icon={BuildingLibraryIcon}
            />
          </div>
          <BorderedHeading text="enter payment details" />
          <CustomInput
            value={phone_number}
            setValue={setPhoneNumber}
            placeholder="0771000000"
            heading="phone number"
          />
          <CustomInput
            placeholder="email address"
            value={email}
            setValue={setEmail}
            heading="email"
          />

          <CustomButton
            text="Pay Now"
            loading={loading}
            onClick={handlePaymentProcess}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
