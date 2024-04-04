export default function Empowering() {
  return (
    <div className="w-full py-48">
      <div className="container mx-auto space-y-8 min-h-[80vh]">
        <div className="flex flex-col items-start max-w-xl">
          <h2 className="font-bold text-3xl mb-4">
            Empowering businesses, one transaction at a time
          </h2>
          <p className="max-w-2xl text-balance mb-16">
            Velocity empowers businesses of all sizes to thrive in today's
            digital landscape, making it easier than ever for you to accept
            transactions and drive growth. With Velocity, success is just a tap
            away.
          </p>
        </div>
        <div className="grid grid-cols-2 max-w-screen-xl gap-24">
          <div className="rounded-xl hover:shadow shadow-sm bg-white p-2 border border-zinc-400/10">
            <div
              style={{
                backgroundImage: `url('https://images.ctfassets.net/fzn2n1nzq965/7C4ROeiaqUa0HwwBU9EL9l/205ad1141f35c449a79c7dae1811d9b7/atlas_home_rocketrides_English_US.svg?q=100')`,
              }}
              className="h-96 mb-4 bg-zinc-100 rounded-lg border border-zinc-400/20"
            ></div>
            <div className="p-4">
              <h4 className="text-xl mb-4">Shareable payment links</h4>
              <p className="mb-2">
                Test your product idea by launching payments with little to no
                code.
              </p>
              <ul className="mb-8 space-y-2 list-inside list-disc">
                <li>Share links over email or SMS</li>
                <li>
                  Turn your link into a QR code or an embeddable buy button
                </li>
                <li>Configure which payment methods you want to accept</li>
              </ul>
              <a href="#" className="text-blue-600">
                Start accepting Online Payments -&gt;
              </a>
            </div>
          </div>
          <div className="rounded-xl hover:shadow shadow-sm bg-white p-2 border border-zinc-400/10">
            <div
              style={{
                backgroundImage: `url('https://images.ctfassets.net/fzn2n1nzq965/5C5LvT3YZvRTGYn7uabXGj/7da8063dc77c67b7f66a1479f47409c8/build_with_stripe.svg?q=80')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="h-96 mb-4 bg-zinc-100 rounded-lg border border-zinc-400/20"
            ></div>
            <div className="p-4">
              <h4 className="text-xl mb-4">Accept in person payments</h4>
              <p className="mb-2">
                With Velocity Charge, accept payments in person effortlessly
                using just your smartphone or tablet.
              </p>
              <ul className="mb-8 list-disc list-inside">
                <li>Charge your customers from your mobile phone or desktop</li>
                <li>Manage your inventory and get sales analytics</li>
              </ul>
              <a href="#" className="text-blue-600">
                Start with Charge -&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
