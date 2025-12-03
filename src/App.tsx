import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
