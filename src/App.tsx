// App.tsx

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyOnePack from './components/WhyOnePack';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact'; // 1. Import the new component
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
      <Contact /> {/* 2. Add the component here */}
      <Footer />
    </div>
  );
}

export default App;