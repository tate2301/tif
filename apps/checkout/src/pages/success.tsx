import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();
  const { price } = router.query;
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="w-full max-w-xl text-center gap-8 flex items-center justify-center flex-col">
        <CheckCircleIcon className="w-16 h-16 text-green-500" />

        <div>
          <h1 className="mb-4 text-3xl font-semibold">
            You have paid ${price}
          </h1>
          <p className="w-96 text-balance">
            Your payment has been successfully processed. A receipt has been
            sent to your email.
          </p>
        </div>
      </div>
    </main>
  );
}
