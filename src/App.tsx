import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navigation />
      <main>
        <Hero />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <hr className="border-border" />
        </div>
        <Work />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <hr className="border-border" />
        </div>
        <About />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <hr className="border-border" />
        </div>
        <Expertise />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <hr className="border-border" />
        </div>
        <Process />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <hr className="border-border" />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
