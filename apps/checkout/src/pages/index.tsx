import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const urlParam = "http://192.168.91.147:3000";

  // Example 1: Using push to navigate with a query parameter
  const handleNavigate = () => {
    router.push({
      pathname: "/checkout",
      query: { return_url: urlParam },
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full content-center justify-center">
      <button onClick={handleNavigate}>
        <p className="bg-slate-900 text-white px-4 py-2 rounded-lg cursor-pointer">
          Proceed to Checkout
        </p>
      </button>
    </div>
  );
}
