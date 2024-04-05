import PaymentPreview from "@/components/create-payment-components/PaymentPreview";
import CustomCheckbox from "@/components/custom-checkbox/CustomCheckbox";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useState } from "react";

const dropdown_options = [
  { name: "Products or descriptions", _id: "products-or-descriptons" },
  {
    name: "Customer chooses what to pay",
    _id: "customer-chooses-what-to-pay",
  },
];

const CreatePaymentLink = () => {
  const [collect_address, setCollectAddress] = useState<any>();
  const [required_additional_number, setRequireAdditionalNumber] =
    useState<any>();
  const [require_mobile_payment, setRequireMobilePayment] = useState(true);
  const [require_zimswitch, setRequireZimswitch] = useState(true);
  const [require_card, setRequireCard] = useState(true);

  const handleCreatePaymentLink = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const service_name = form.service_name.value;
    const service_price = form.service_price.value;
    const service_description = form.service_description.value;

    // Handle this payment
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-2 flex-1">
        <div className="col-span-1 main-border-r h-full grid py-16 px-8">
          <form
            onSubmit={handleCreatePaymentLink}
            className="flex flex-col space-y-16 max-w-md ml-auto w-full"
          >
            <div>
              <h1 className="font-bold text-2xl mb-1">Create a payment link</h1>
              <p className="text-zinc-500">
                Quickly accept payments for a service you provide, like a
                consultation or a booking.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-lg text-zinc-700">
                Service details
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Title
                  </label>
                  <input
                    type="text"
                    name="service_name"
                    id="service_name"
                    autoComplete="service_name"
                    className="mt-1 block w-full shadow-sm focus:shadow-md border outline-none sm:text-sm border-gray-300 rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Price
                  </label>
                  <div className="flex items-stretch group focus-within:shadow-md rounded-xl">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      $
                    </span>
                    <input
                      type="number"
                      name="service_price"
                      id="service_price"
                      autoComplete="service_price"
                      className="block w-full shadow-sm border outline-none sm:text-sm border-gray-300 p-2"
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      USD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-zinc-700 text-lg">
                  Configure payment page
                </h3>
              </div>
              <p className="font-semibold mb-2 text-zinc-500">
                Payment methods
              </p>
              <CustomCheckbox
                value={require_mobile_payment}
                setValue={setRequireMobilePayment}
                text="Mobile money (Ecocash)"
              />
              <CustomCheckbox
                value={require_zimswitch}
                setValue={setRequireZimswitch}
                text="Zimswitch "
              />
              <CustomCheckbox
                value={require_card}
                setValue={setRequireCard}
                text="Debit/Credit card"
              />
            </div>
            <div className="space-y-4">
              <p className="font-semibold mb-2 text-zinc-500">
                User information
              </p>
              <CustomCheckbox
                value={collect_address}
                description="Make users give your the location of where you they want shipping done"
                setValue={setCollectAddress}
                text="Collect customer's address"
              />
              <CustomCheckbox
                value={required_additional_number}
                setValue={setRequireAdditionalNumber}
                text="Require customer's additional number"
              />
            </div>
            <div>
              <button
                type="submit"
                className="rounded-full bg-blue-500 text-white font-semibold py-2 px-4"
              >
                Create payment link
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1 bg-secondary h-full items-center justify-center content-center">
          <PaymentPreview
            require_mobile_payment={require_mobile_payment}
            require_address={collect_address}
            reqire_zimswitch={require_zimswitch}
            require_card={require_card}
            require_additional_number={required_additional_number}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreatePaymentLink;
