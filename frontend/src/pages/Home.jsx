import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import WhyChoose from "../components/WhyChoose";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#0B1120] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <WhyChoose />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;