const AmountInfoSection = ({ price }: { price: number }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-start space-x-2 max-w-md border-t border-zinc-200 pt-4">
        <div className=" h-12 w-12 rounded"></div>
        <div className="flex flex-1 flex-row items-center text-zinc-600 font-semibold justify-between">
          <p>Sub Total</p>
          <p>
            {Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
            }).format(price || 0)}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start space-x-2 max-w-md mb-4">
        <div className=" h-12 w-12 rounded"></div>
        <div className="flex flex-1 flex-row text-zinc-400 items-center  justify-between">
          <div className="flex flex-col">
            <p>Shipping</p>
            <p className="text-xs font-medium">
              Free shipping (5-7 business days)
            </p>
          </div>
          <p>Free</p>
        </div>
      </div>

      <div className="flex flex-row items-start border-t border-zinc-200 pt-4 space-x-2 max-w-md">
        <div className=" h-12 w-12 rounded"></div>
        <div className="flex flex-1 flex-row items-center text-zinc-600 font-semibold justify-between">
          <p>Total Due</p>
          <p>
            {Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
            }).format(price || 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmountInfoSection;
