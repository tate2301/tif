export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-4">
          <div>
            <h2 className="mb-4 italic">Velocity</h2>
            <p>&copy; {new Date().getFullYear()} Hurudza Creative</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg">Products</h3>
            <ul className="text-zinc-500 space-y-2">
              <li>
                <p>Checkout</p>
              </li>
              <li>
                <p>Payments</p>
              </li>
              <li>
                <p>Payment Links</p>
              </li>
              <li>
                <p>Charge</p>
              </li>
              <li>
                <p>Product Kit</p>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg">Resources</h3>
            <ul className="text-zinc-500 space-y-2">
              <li>
                <p>Developer documentation</p>
              </li>
              <li>
                <p>Blog</p>
              </li>
              <li>
                <p>Customer stories</p>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg">Support</h3>
            <ul className="text-zinc-500 space-y-2">
              <li>
                <p>Contact sales</p>
              </li>
              <li>
                <p>Support center</p>
              </li>
              <li>
                <p>Privacy policy</p>
              </li>
              <li>
                <p>Call: +263 77 3233 796</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
