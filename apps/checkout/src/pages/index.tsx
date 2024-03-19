import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full content-center justify-center">
      <Link href="/[checkout]" as="/checkout" legacyBehavior>
        <p className="bg-slate-900 text-white px-4 py-2 rounded-lg cursor-pointer">
          Proceed to Checkout
        </p>
      </Link>
    </div>
  );
}
