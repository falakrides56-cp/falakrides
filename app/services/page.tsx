import { Plane, Moon, Route, MapPin, UserRound, Car, Check, ArrowRight } from 'lucide-react';
import PublicLayout from '@/components/shared/PublicLayout';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import BrandButton from '@/components/shared/BrandButton';
import PageHero from '@/components/shared/PageHero';
import services from '@/data/services.json';
import { IMAGES } from '@/lib/images';

const iconMap: Record<string, React.ElementType> = {
  Plane, Moon, Route, MapPin, UserRound, Car,
};

export default function ServicesPage() {
  return (
    <PublicLayout>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        description="Comprehensive transport solutions designed for pilgrims and travelers across Saudi Arabia"
        image={IMAGES.kaabaPilgrims}
        imageAlt="Makkah"
      />

      {/* Services list */}
      <section className="section-padding bg-white">
        <div className="container-brand space-y-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Car;
            const isReversed = i % 2 === 1;
            return (
              <Reveal key={service.id}>
                <div className={`grid grid-cols-1 items-center gap-6 lg:grid-cols-2 ${isReversed ? 'lg:[direction:rtl]' : ''}`}>
                  {/* Image/visual */}
                  <div className={`relative overflow-hidden rounded-2xl shadow-green ${isReversed ? 'lg:[direction:ltr]' : ''}`}>
                    <div className="flex h-56 items-center justify-center bg-gradient-to-br from-brand-green-600 to-brand-green-500 p-8 lg:h-72">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-4 ring-brand-gold-300/30">
                        <Icon className="h-12 w-12 text-brand-gold-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isReversed ? 'lg:[direction:ltr]' : ''}>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-600">
                      Service {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-2 font-serif text-xl font-bold text-brand-green-700 md:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-brand-green-700">
                          <Check className="h-4 w-4 text-brand-gold-500" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5">
                      <BrandButton href="/booking" variant="primary" size="sm">
                        Book This Service <ArrowRight className="ml-2 h-3.5 w-3.5" />
                      </BrandButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </PublicLayout>
  );
}
