import CTA from "./components/cta";
import Empowering from "./components/empowering";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import PaymentMethods from "./components/payment_methods";
import POS from "./components/point-of-sale";
import Products from "./components/products";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <main className="bg-white min-h-screen">
        <header className="border-b border-zinc-300">
          <Navbar />
          <Hero />
        </header>
        <div className="bg-zinc-50">
          <PaymentMethods />
          <Products />
          <POS />
        </div>
        <Empowering />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
