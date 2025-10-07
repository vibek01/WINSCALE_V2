import { Mail, MessageCircle, Rocket } from 'lucide-react';
import { colors } from '../theme/colors';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4" style={{ backgroundColor: colors.primary }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">WinScale</span>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Your all-in-one growth partner. We handle everything so you can focus on what matters most — growing your business.
            </p>
            <p className="text-sm text-blue-300">
              Make WinScale Your Growth Partner.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@winscale.com"
                className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@winscale.com</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} WinScale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
