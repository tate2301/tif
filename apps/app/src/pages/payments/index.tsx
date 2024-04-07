import CreatePaymentItem from "@/components/payment-items/CreatePaymentItem";
import { Store } from "@/context/Store";
import OverviewLayout from "@/layouts/OverviewLayout";
import { velocityPaymentsAPIClient } from "@/lib/client";
import React, { useContext, useEffect } from "react";

type Props = {};

const Payments = (props: Props) => {
  const { state } = useContext<any>(Store);
  const { access_token } = state;

  console.log("user Info: ----- ", access_token);

  return (
    <OverviewLayout heading="Payments">
      <div className="flex flex-col space-y-1">
        <p className="text-start font-bold heading-text text-xl ">
          Choose how to start collecting payments
        </p>
        <p className="text-start main-text text-lg text-zinc-500 max-w-2xl">
          Get started fast with a no-code option or explore customisable UIs
          that integrate with our APIs.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7">
        <CreatePaymentItem
          location="/payments/sell-a-service"
          heading="Sell a service"
          description="Create a payment link for a service you provide, like a consultation or a booking."
          actionButtonText="Create payment link"
        />
        <CreatePaymentItem
          location="/payments/sell-a-product"
          heading="Sell a product"
          description="Create a payment link for a product you sell, like a t-shirt or a digital download."
          actionButtonText="Create payment link"
        />
        <CreatePaymentItem
          location="/payments/create-payment-link"
          heading="Manually charge a customer"
          description="Create a payment from the Dashboard by manually entering a customer’s payment information."
          actionButtonText="Charge a customer"
        />
      </div>
    </OverviewLayout>
  );
};

export default Payments;
