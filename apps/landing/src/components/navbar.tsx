export default function Navbar() {
  return (
    <div className="border-b border-dashed border-zinc-400/30">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="pr-4 flex items-baseline gap-16">
          <div className="flex gap-8">
            <a href="#">Products</a>
            <a href="#">Solutions</a>
            <a href="#">Developers</a>
            <a href="#">Pricing</a>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="http://localhost:3002"
            className="px-4 py-2 bg-orange-500 text-white font-semibold flex items-center rounded-full"
          >
            Sign in
          </a>
        </div>
      </nav>
    </div>
  );
}
