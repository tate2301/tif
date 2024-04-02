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
    <>
    <Head>
      <title>Checkout</title>
    </Head>
    <div className="flex h-screen w-full">
      <div className="w-1/2 h-full bg-blue-500 p-8">
        <div className="flex justify-between pb-2 border-b">
          <p className="inline-flex gap-2 items-center text-white text-xl font-semibold tracking-loose">velocity</p>
          <p className="font-semibold text-center text-3xl text-white">ZWL ${total}</p>
        </div>
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
        <div className="h-px w-auto bg-zinc-400/30 mx-8"/>
        <div className="px-4 mx-8 space-y-2">
          <div className="flex justify-between items-baseline">
            <p>
              {new Date().getFullYear()} &copy; Velocity
            </p>
            <ul className="flex items-center gap-8">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <p className="text-zinc-400">
            Velocity is a registered trademark of Hurudza Creative. Made with love in Zimbabwe.
          </p>
        </div>
      </div>
    </div>
    </>
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
