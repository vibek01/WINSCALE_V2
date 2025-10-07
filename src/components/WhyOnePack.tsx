import { Users, DollarSign, Zap } from 'lucide-react';
import { colors } from '../theme/colors';

const benefits = [
  {
    icon: Users,
    title: 'One Team',
    description: 'No more coordinating between multiple vendors'
  },
  {
    icon: DollarSign,
    title: 'One Price',
    description: 'Simple, transparent billing with no hidden fees'
  },
  {
    icon: Zap,
    title: 'Faster Results',
    description: 'Integrated services mean seamless execution'
  }
];

export default function WhyOnePack() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.text }}>
            Why One Pack?
          </h2>
          <p className="text-xl md:text-2xl font-semibold" style={{ color: colors.accent }}>
            Stop juggling agencies. Scale with one partner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center p-8 rounded-2xl transition-all hover:scale-105"
              style={{
                backgroundColor: colors.surface,
                border: `2px solid rgba(10, 42, 107, 0.3)`
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{ background: colors.grad1 }}
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: colors.text }}>
                {benefit.title}
              </h3>
              <p className="text-lg" style={{ color: colors.muted }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
