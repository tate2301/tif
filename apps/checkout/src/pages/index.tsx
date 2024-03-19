import { useRouter } from "next/router";
import { ProductItemProps } from "@/utils/types";
import { data } from "@/utils/data";
import CartItem from "@/components/cart-item/CartItem";
import CustomButton from "@/components/custom-button/CustomButton";

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
      <p className="text-3xl font-semibold text-center pb-8 text-slate-900">Checkout</p>
      <div className="max-w-sm w-full mx-auto flex flex-col bg-white border border-slate-100 rounded-2xl p-4 space-y-2">
        {data.products.map((item: ProductItemProps) => (
          <CartItem
            title={item.title}
            picture={item.picture}
            quantity={item.quantity}
            amount={item.amount}
          />
        ))}
      </div>
      <div className="flex">
        <CustomButton
          onClick={handleNavigate}
          text="Checkout"
          loading={false}
        />
      </div>
    </div>
  );
}
