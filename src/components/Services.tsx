// Services.tsx

import {
  Globe,
  Headphones,
  TrendingUp,
  Palette,
  Video,
  Users,
  Search,
  Briefcase,
  Target,
  Check
} from 'lucide-react';
import { colors } from '../theme/colors';

interface Service {
  icon: any;
  title: string;
  benefit: string;
}

const mainServices: Service[] = [
  {
    icon: Globe,
    title: 'Website Development',
    benefit: 'Custom sites that convert visitors into customers'
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    benefit: '24/7 expert help whenever you need it'
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    benefit: 'Meta Ads, Google Ads & growth campaigns'
  },
  {
    icon: Palette,
    title: 'Graphic Designing',
    benefit: 'Professional visuals that elevate your brand'
  },
  {
    icon: Video,
    title: 'Video Editing',
    benefit: 'Engaging content for social & advertising'
  }
];

const growthServices: Service[] = [
  {
    icon: Users,
    title: 'Social Media Handling',
    benefit: 'Complete management across all platforms'
  },
  {
    icon: Search,
    title: 'SEO',
    benefit: 'Rank higher and attract organic traffic'
  },
  {
    icon: Briefcase,
    title: 'Business Consulting',
    benefit: 'Strategic guidance from industry experts'
  },
  {
    icon: Target,
    title: 'Planning & Strategy',
    benefit: 'Data-driven roadmaps for sustainable growth'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4" style={{ backgroundColor: colors.surface }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.text }}>
            Business Services We Offer
          </h2>
          <p className="text-xl" style={{ color: colors.muted }}>
            Everything your business needs to scale, all in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mainServices.map((service) => (
            <div
              key={service.title}
              className="shadow-xl rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#98999c8c'
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md"
                style={{ background: colors.grad1 }}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>
                {service.title}
              </h3>
              <p className="" style={{ color: colors.muted }}>
                {service.benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl p-8 md:p-12" style={{ background: colors.grad2 }}>
          <div className="text-center mb-8">
            {/* CHANGE HERE: The `text-white` class is removed and an inline style is added to use your theme's main text color. */}
            <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: colors.text }}>
              Growth & Strategy
            </h3>
            {/* CHANGE HERE: The `text-teal-100` class is removed and an inline style is added to use your theme's muted gray color. */}
            <p className="text-lg" style={{ color: colors.muted }}>
              Scale smarter with expert guidance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {growthServices.map((service) => (
              <div
                key={service.title}
                className="backdrop-blur-md rounded-xl p-5 border border-white/20"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    {/* CHANGE HERE: The `text-white` class is removed and an inline style is added for the card's title. */}
                    <h4 className="text-lg font-bold mb-1" style={{ color: colors.textS }}>
                      {service.title}
                    </h4>
                    {/* CHANGE HERE: The `text-teal-100` class is removed and an inline style is added for the card's benefit text. */}
                    <p className="text-sm" style={{ color: colors.muted }}>
                      {service.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20">
              <Check className="w-5 h-5 text-white" />
              {/* CHANGE HERE: The `text-white` class is removed and an inline style is added for the final chip text. */}
              <span className="font-semibold" style={{ color: colors.muted }}>
                …and many more services
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}