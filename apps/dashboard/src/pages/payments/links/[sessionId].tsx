import { getFromLocalStorage } from "@/helpers/localStorageMethods";
import DashboardLayout from "@/layouts/DashboardLayout";
import { velocityPaymentsAPIKeyClient } from "@/lib/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Link() {
  const router = useRouter();
  const { sessionId } = router.query;

  const [session, setSession] = useState<any>({});

  useEffect(() => {
    if (sessionId) {
      velocityPaymentsAPIKeyClient
        .get("/payment_session/" + sessionId)
        .then((res) => {
          setSession(res.data);
        });
    }
  }, [sessionId]);

  console.log({ session });

  return (
    <DashboardLayout>
      <main className="container mx-auto py-16">
        <p className="font-semibold mb-2 text-sm uppercase text-zinc-400">
          Payment link
        </p>
        <div className="flex items-baseline gap-2 mb-2">
          <h1 className="text-3xl font-semibold">
            {session.custom_text || "Payment link"}
          </h1>
          <p className="text-2xl">
            for{" "}
            {Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
            }).format(session.amount) || 0}
          </p>
        </div>
        <div className="mb-16">
          <p className="mb-2 text-zinc-500">
            Copy and share this link to start accepting payments
          </p>
          <div className="flex gap-8 items-center">
            <p className="font-mono p-2 border border-zinc-400/30 rounded-xl bg-zinc-50 max-w-xl truncate text-ellipsis overflow-hidden">
              {"http://localhost:3001"}/{session.id}
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `${"http://localhost:3001"}/${session.id}?key=${getFromLocalStorage("api_key").id}`
                );
              }}
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full"
            >
              Copy
            </button>
          </div>
        </div>
        <div className="mb-16 max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          {!session.products && (
            <div className="max-w-xl bg-zinc-100 w-full h-32 rounded-xl" />
          )}
          {session.products && (
            <div className="gap-4 pb-4 border-b">
              <div className="flex gap-4 justify-between">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-zinc-200 rounded-xl" />
                  <div>
                    <p className="font-semibold">{session.products.name}</p>
                    <p className="text-zinc-500">
                      {session.products.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-center text-right">
                  <p className="font-semibold text-blue-500">
                    {Intl.NumberFormat("en-us", {
                      style: "currency",
                      currency: "USD",
                    }).format(session.products.price)}
                  </p>
                  <p className="text-zinc-400 font-semibold">Quantity N/A</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Payment link transactions
          </h2>
          <table className="table-fixed w-full max-w-2xl">
            <thead>
              <tr>
                <th className="w-1/2"></th>
                <th className="w-1/2 text-right"></th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr>
                <td>Session ID</td>
                <td className="text-right font-semibold text-zinc-700">
                  {session?.id?.substring(0, 10)}...
                  {session?.id?.substring(session.id.length - 10)}
                </td>
              </tr>
              <tr>
                <td>Amount</td>
                <td className="text-right font-semibold text-zinc-700">
                  {session?.amount}
                </td>
              </tr>
              <tr>
                <td>Payment methods</td>
                <td className="text-right font-semibold text-zinc-700 capitalize">
                  {session?.payment_methods?.join(", ")}
                </td>
              </tr>
              <tr>
                <td>Status</td>
                <td className="text-right font-semibold text-zinc-700 capitalize flex justify-end">
                  <p className="capitalize px-2 py-1 rounded-full border font-semibold w-fit">
                    {session?.status}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </DashboardLayout>
  );
}
