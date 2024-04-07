export default function PaymentMethods() {
  return (
    <div className="w-full bg-white py-48 pt-24">
      <div className="container mx-auto space-y-8">
        <div className="flex flex-col items-start max-w-xl">
          <h2 className="font-bold text-3xl mb-4">
            Fueling growth through inclusive payments
          </h2>
          <p className="max-w-3xl text-balance mb-16">
            Say yes to every customer, regardless of their preferred payment
            method. From VISA, OneMoney to Ecocash, we've got you covered.
          </p>
          <a
            href="#"
            className="text-white bg-blue-500 px-4 py-1.5 rounded-full mb-16"
          >
            Start with Checkout
          </a>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Supported payment methods</h4>
            <ul className="space-y-2 text-zinc-500 text-sm list-inside list-disc">
              <li>Ecocash, OneMoney, InnBucks, OMari</li>
              <li>ZimSwitch</li>
              <li>VISA & Mastercard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
