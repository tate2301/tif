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

interface PostData {
  title: string;
  content: string;
  amount: number;
}

interface Props {
  postData: PostData;
}

function Checkout({ postData }: Props) {
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
    <div className="flex h-screen w-full">
      <div className="w-1/2 h-full bg-gradient-to-b from-blue-500 to-blue-600 p-8">
        <div className="flex justify-between pb-2">
          <p className="inline-flex gap-2 items-center text-white">Velocity</p>
          <p className="text-zinc-900 font-semibold text-center">ZWL {total}</p>
        </div>
      </div>

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
            value={phone_number}
            setValue={setPhoneNumber}
            placeholder="0771000000"
            heading="phone number"
          />
          <CustomInput
            placeholder="Email address"
            value={email}
            setValue={setEmail}
            heading="email"
          />
        </div>
        <CustomButton
          text="Pay"
          loading={loading}
          onClick={handlePaymentProcess}
        />
      </div>
    </div>
  );
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

export default Checkout;
