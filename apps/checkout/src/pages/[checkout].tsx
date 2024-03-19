import { GetServerSidePropsContext } from "next";
import {
  DevicePhoneMobileIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import PaymentOptionComponent from "@/components/payment-option-component/PaymentOptionComponent";

interface PostData {
  title: string;
  content: string;
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
  }; // Fetch data based on the slug

  return {
    props: {
      postData,
    },
  };
}

function Checkout({ postData }: Props) {
  return (
    <div className="flex flex-col w-full py-24">
      <div className="max-w-xs mx-auto w-full flex flex-col space-y-6 bg-white">
        <p className="text-3xl text-slate-900 font-semibold text-center">
          $1000.00
        </p>
        <div className="bg-slate-900 text-white flex space-x-2 flex-row rounded-lg py-2 px-4">
          <div className="flex flex-col space-y-1">
            <p className="text-white font-semibold">Velocity</p>
            <p className="text-slate-300 text-xs">Pay with velocity</p>
          </div>
        </div>
        <div className="border border-slate-200 space-y-6 rounded-lg p-4">
          <div className="flex flex-row items-center space-x-2">
            <div className="border-t border-slate-100 flex-1"></div>
            <p className="text-center text-slate-400 text-xs capitalize">
              Select payment option
            </p>
            <div className="border-t border-slate-100 flex-1"></div>
          </div>
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
          <div className="flex flex-row items-center space-x-2">
            <div className="border-t border-slate-100 flex-1"></div>
            <p className="text-center text-slate-400 text-xs capitalize">
              enter payment details
            </p>
            <div className="border-t border-slate-100 flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Checkout;
