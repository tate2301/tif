import { useRouter } from "next/router";
import { ProductItemProps } from "@/utils/types";
import { data } from "@/utils/data";
import CartItem from "@/components/cart-item/CartItem";
import CustomButton from "@/components/custom-button/CustomButton";

export default function Home() {
  const router = useRouter();
  const urlParam = "http://localhost:3000";
  const total = 1000.0;

  const handleNavigate = () => {
    router.push({
      pathname: "/pay",
      query: { return_url: urlParam, total },
    });
  };

  return (
    <div className="grid grid-cols-2 gap-1666 items-center min-h-screen w-full content-center justify-center">
      <div className="col-span-1 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
      <div className="col-span-1">
        <p className="text-xl font-semibold text-center pb-4 text-slate-900">
          Confirm Order
        </p>
        <div className="max-w-sm w-full mx-auto flex flex-col bg-white border border-slate-100 rounded-2xl p-4 space-y-2">
          {data.products.map((item: ProductItemProps) => (
            <CartItem
              title={item.title}
              _id={item._id}
              key={item._id}
              picture={item.picture}
              quantity={item.quantity}
              amount={item.amount}
            />
          ))}
        </div>
        <div className="flex">
          <CustomButton
            onClick={handleNavigate}
            text="Proceed"
            loading={false}
          />
        </div>
      </div>
    </div>
  );
}
