export default function Hero() {
  return (
    <div className="container mx-auto place-content-center grid grid-cols-3 ">
      <div className="pt-24 pb-12 space-y-12 max-w-screen-lg mx-auto flex flex-col">
        <h1 className="text-6xl font-bold tracking-tight text-balance leading-[4.5rem]">
          Supercharged Zimbabwean payments infrastructure.
        </h1>
        <p className="text-balance font-medium max-w-2xl text-xl">
          Embed Checkout into your website, charge customers in-person or direct
          customers to a Velocity-hosted page to easily and securely accept
          one-time payments or subscriptions.
        </p>
        <div className="flex gap-8 items-baseline">
          <a
            href="http://localhost:3002"
            className="px-4 py-2 rounded-full bg-orange-500 text-white"
          >
            Get started -&gt;
          </a>
          <a
            href="http://localhost:3003"
            className="text-orange-500 px-4 py-1.5"
          >
            Try the demo
          </a>
        </div>
      </div>
      <div className="col-span-2 p-24 pb-0 flex items-end">
        <img src="/hero.png" alt="Hero image" className="w-full" />
      </div>
    </div>
  );
}
