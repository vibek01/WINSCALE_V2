import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyOnePack from './components/WhyOnePack';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyOnePack />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
