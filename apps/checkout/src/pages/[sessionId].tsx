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
import { useEffect, useState } from "react";
import Head from "next/head";
import { setLocalStorageItem } from "@/helpers/localStorageMethods";
import { velocityPaymentsAPIKeyClient } from "@/lib/client";
import { ArrowLeftIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import ShippingInfoSection from "@/components/page-sections/ShippingInfoSection";
import AmountInfoSection from "@/components/page-sections/AmountInfoSection";

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
  const [session, setSession] = useState<any>({});

  const router = useRouter();
  const { returnUrl, total, key, sessionId } = useUrlParams();

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

  useEffect(() => {
    if (key) {
      setLocalStorageItem("api_key", { id: key });
    }
  }, []);

  useEffect(() => {
    velocityPaymentsAPIKeyClient
      .get(`/payment_session/${sessionId}`)
      .then((res) => {
        setSession(res.data);
      });
  }, [postData]);

  console.log({ session });

  if (!session.id) return null;

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className="flex min-h-screen w-full bg-zinc-50/50">
        <div className="grid grid-cols-2  max-w-7xl w-full mx-auto p-4 rounded-lg">
          <div className="h-full p-8 flex flex-col space-y-8">
            <div className="flex flex-row text-zinc-500 space-x-2 items-center">
              <ArrowLeftIcon height={16} width={16} />
              <p className="text-zinc-800 font-medium">
                {session.merchant.first_name} {session.merchant.last_name}'s
                Shop
              </p>
              <p className="text-orange-700 bg-orange-200 py-0.5 px-1 font-semibold text-xs rounded uppercase">
                test mode
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-zinc-500">{session.custom_text}</p>
              <p className="text-zinc-800 font-semibold text-4xl">
                {Intl.NumberFormat("en-us", {
                  style: "currency",
                  currency: "USD",
                }).format(session.amount) || 0}
              </p>
            </div>
            {/* product item */}
            <ProductItem
              name={session.products.name}
              price={session.products.price}
              quantity="1"
            />
            <AmountInfoSection price={session.products.price} />
            <div className="flex-1"></div>
            <div className="flex self-center flex-row text-xs items-center text-zinc-500 divide-x-[1px] divide-zinc-400 gap-4">
              <p>
                Powered by <span className="font-bold">Velocity</span>
              </p>
              <div className="flex px-4 space0=-x-4">
                <p>Terms</p>
                <p>Privacy</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <ShippingInfoSection
              sessionId={sessionId as string}
              price={session.amount}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const ProductItem = ({
  name,
  price,
  quantity,
}: {
  name: string;
  price: number;
  quantity: string;
}) => {
  return (
    <div className="flex flex-row items-start space-x-2 max-w-md">
      <img
        src="http://localhost:3002/images/chris.jpeg"
        className="bg-zinc-400 h-16 w-16 rounded-xl object-cover "
      />
      <div className="flex flex-col space-y-1 flex-1">
        <p className="text-zinc-700 font-medium">{name}</p>
        <div className="flex">
          <div className="flex flex-row text-sm p-0.5 bg-zinc-100 rounded items-center">
            <p className="font-semibold text-zinc-400">Quantity: {quantity}</p>
          </div>
        </div>
      </div>
      <p className="text-zinc-600 font-semibold">
        {Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD",
        }).format(price || 0)}
      </p>
    </div>
  );
};

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
