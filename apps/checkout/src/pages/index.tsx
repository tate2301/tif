import { useRouter } from "next/router";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const router = useRouter();
  const urlParam = "http://192.168.91.147:3000";
  const total = 1000.0;

  const handleNavigate = () => {
    router.push({
      pathname: "/checkout",
      query: { return_url: urlParam, total },
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full content-center justify-center space-y-6">
      <div className="max-w-sm w-full mx-auto flex flex-col bg-white rounded-2xl p-4 space-y-2">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <button onClick={handleNavigate}>
        <p className="bg-slate-900 text-white font-medium px-4 py-2 rounded-xl cursor-pointer">
          Checkout
        </p>
      </button>
    </div>
  );
}

const CartItem = () => {
  return (
    <div className="flex row items-center space-x-4">
      <div className="w-20 relative h-20 bg-slate-500 rounded-2xl overflow-hidden">
        <Image src={"/cap_item.webp"} alt="cap item" layout="fill" />
      </div>
      <div className="flex flex-col space-y-1 flex-1">
        <p className="text-lg font-medium text-slate-900">Balance cap item</p>
        <p className=" text-slate-500">Balance cap item</p>
      </div>
      <div className="flex flex-row items-center space-x-1">
        <button className="bg-slate-100 rounded-full p-1">
          <MinusIcon height={16} width={16} className="text-slate-900" />
        </button>
        <p className="text-sm text-slate-700">1</p>
        <button className="bg-slate-100 rounded-full p-1">
          <PlusIcon height={16} width={16} className="text-slate-900" />
        </button>
      </div>
    </div>
  );
};
