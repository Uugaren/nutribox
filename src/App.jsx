import Hero from "./components/Hero";
import BentoBenefits from "./components/BentoBenefits";
import MenuGallery from "./components/MenuGallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-[100dvh] w-full relative">
      <WhatsAppButton />
      <Hero />
      <BentoBenefits />
      <MenuGallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
