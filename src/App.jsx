//app.jsx is the main file that arranges the components and determines how they appear in a website
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import GiftsSection from './components/GiftsSection';
import Pillars from './components/Pillars';
import Footer from './components/Footer';
import Bannner from './components/Banner';
import About from './components/About';
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <GiftsSection />
      <Pillars />
      <Bannner />
      <Footer />
    </>
  );
}