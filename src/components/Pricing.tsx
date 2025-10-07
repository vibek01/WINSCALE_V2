import { Check, Sparkles } from 'lucide-react';
import { colors } from '../theme/colors';

const features = [
  'Complete website development & maintenance',
  'Full digital marketing management',
  'SEO & social media handling',
  'Graphic design & video editing',
  '24/7 technical support',
  'Monthly strategy review session',
  'Priority response times'
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4" style={{ backgroundColor: colors.surface }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.text }}>
            Simple, Powerful Pricing
          </h2>
          <p className="text-xl" style={{ color: colors.muted }}>
            One plan. Everything included.
          </p>
        </div>

        <div
          className="backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 shadow-2xl max-w-2xl mx-auto"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: colors.accent
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6" style={{ color: colors.accent }} />
              <span
                className="text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${colors.accent}20`,
                  color: colors.accent
                }}
              >
                Limited Time Offer
              </span>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.text }}>
            All-In-One Growth Pack
          </h3>

          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-6xl md:text-7xl font-bold" style={{ color: colors.primary }}>
                $2,000
              </span>
              <span className="text-3xl font-normal" style={{ color: colors.muted }}>
                /month
              </span>
            </div>
          </div>

          <div className="space-y-4 mb-10">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${colors.accent}20` }}
                >
                  <Check className="w-4 h-4" style={{ color: colors.accent }} />
                </div>
                <span className="text-lg" style={{ color: colors.text }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button
            className="w-full py-5 rounded-xl font-bold text-xl text-white transition-all hover:scale-105 hover:shadow-2xl mb-4"
            style={{ background: colors.grad1 }}
          >
            Start Scaling
          </button>

          <p className="text-center text-sm" style={{ color: colors.muted }}>
            Cancel anytime. No long-term contracts.
          </p>
        </div>
      </div>
    </section>
  );
}
