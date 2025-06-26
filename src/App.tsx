import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Features from "@/sections/Features";
import CTA from "@/sections/CTA";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Team from "@/sections/Team";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Team />
      <Features />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
