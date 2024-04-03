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
        <p className="text-start font-bold heading-text text-2xl ">
          Choose how to start collecting payments
        </p>
        <p className="text-start main-text text-lg font-medium max-w-2xl">
          Get started fast with a no-code option or explore customisable UIs
          that integrate with our APIs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-2 gap-7 max-w-4xl">
        <CreatePaymentItem
          location="/payments/create-payment-link"
          heading="Share a link to a checkout page"
          description="Sell a product or subscription or accept a donation by sharing a link to a payment page."
          actionButtonText="Create payment link"
        />
        <CreatePaymentItem
          location="/payments/create-payment-link"
          heading="Manually charge a customer"
          description="Create a payment from the Dashboard by manually entering a customer’s card information."
          actionButtonText="Charge a customer"
        />
      </div>
    </OverviewLayout>
  );
};

export default Payments;
