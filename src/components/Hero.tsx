// components/Hero.tsx

import { Rocket, Zap, TrendingUp, Shield, Users, Globe } from 'lucide-react';
import { colors } from '../theme/colors';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20"
      // This will now use the new, more impactful indigo-to-blue gradient
      style={{ background: colors.grad1 }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Rocket className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Your Growth Partner</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          All Your Business Services<br />
          {/* --- Updated Text Gradient --- */}
          {/* Changed from orange to a vibrant lime-to-cyan gradient that pops */}
          <span className="bg-gradient-to-r from-lime-300 to-cyan-300 bg-clip-text text-transparent">
            in One Powerful Pack
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
          No need to hire staff — we handle everything for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('pricing')}
            className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              // This now uses the new electric lime accent color
              background: colors.accent,
              // --- Updated text color for better contrast ---
              // Changed from 'white' to the new dark primary color for readability
              color: colors.primary
            }}
          >
            Get a Quote
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 rounded-xl font-semibold text-lg bg-white/10 backdrop-blur-md text-white border-2 border-white/30 transition-all hover:bg-white/20 hover:scale-105"
          >
            See Services
          </button>
        </div>

        <div
          className="max-w-md mx-auto backdrop-blur-xl rounded-2xl p-6 border shadow-2xl"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            // --- Updated border color ---
            // Replaced the hardcoded orange RGBA with one based on the new lime accent
            borderColor: 'rgba(196, 240, 60, 0.3)'
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: colors.accent }}>
              Limited Time Offer
            </span>
            <Zap className="w-5 h-5" style={{ color: colors.accent }} />
          </div>
          <div className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>
            $2,000
            <span className="text-2xl font-normal" style={{ color: colors.muted }}>/month</span>
          </div>
          <p className="text-sm" style={{ color: colors.muted }}>
            All services included. One simple price.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {[
            { icon: Globe, label: 'Web Dev' },
            { icon: TrendingUp, label: 'SEO' },
            { icon: Zap, label: 'Marketing' },
            { icon: Shield, label: 'Support' },
            { icon: Users, label: 'Consulting' }
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
            >
              <Icon className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}