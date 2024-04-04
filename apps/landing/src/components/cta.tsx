export default function CTA() {
  return (
    <div className="bg-zinc-100">
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-2 gap-32">
          <div>
            <h2 className="text-3xl mb-4">Ready to transform your payments?</h2>
            <p className="mb-16 max-w-xl">
              Join the revolution with Velocity and revolutionize the way you
              handle transactions. Simplify your payments, streamline your
              processes, and amplify your success.
            </p>
            <a
              href="http://localhost:3002"
              className="px-4 py-1.5 bg-orange-500 text-white rounded-full w-fit"
            >
              Get started -&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
