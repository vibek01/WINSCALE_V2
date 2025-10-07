import { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { colors } from '../theme/colors';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-xl shadow-lg' : ''
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(10, 42, 107, 0.95)' : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('top')}
              className="flex items-center gap-2 group"
            >
              <Rocket className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold text-white">WinScale</span>
            </button>

            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-white/90 hover:text-white font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-white/90 hover:text-white font-medium transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-6 py-2.5 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: colors.accent }}
              >
                Get Started
              </button>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: 'rgba(10, 42, 107, 0.98)', marginTop: '72px' }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8 px-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-2xl text-white font-semibold"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-2xl text-white font-semibold"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="px-8 py-4 rounded-xl font-bold text-xl text-white transition-all hover:scale-105"
              style={{ backgroundColor: colors.accent }}
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
