import { Users, Briefcase, Snowflake, Check, ArrowRight } from 'lucide-react';
import PublicLayout from '@/components/shared/PublicLayout';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import BrandButton from '@/components/shared/BrandButton';
import PageHero from '@/components/shared/PageHero';
import fleet from '@/data/fleet.json';
import { getFleetImage, IMAGES } from '@/lib/images';

export default function FleetPage() {
  return (
    <PublicLayout>
      <PageHero
        eyebrow="Our Vehicles"
        title="Fleet Catalogue"
        description="Choose from our wide range of well-maintained vehicles for every need and group size"
        image={IMAGES.fleet.luxury}
        imageAlt="Our Fleet"
      />

      {/* Fleet grid */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <SectionHeading
            eyebrow="Vehicle Options"
            title="Find Your"
            highlight="Perfect Ride"
            description="All vehicles come with air conditioning, professional drivers, and full insurance"
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.map((vehicle, i) => (
              <Reveal key={vehicle.id} delay={i * 80}>
                <div className="group h-full overflow-hidden rounded-lg border border-brand-green-200 bg-white transition-colors duration-200 hover:border-brand-gold-400">
                  <div className="relative h-52 overflow-hidden bg-brand-green-50">
                    <img
                      src={getFleetImage(vehicle.image)}
                      alt={vehicle.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute right-3 top-3 rounded-md bg-brand-gold-500 px-3 py-1.5 text-xs font-bold text-brand-green-900">
                      From {vehicle.priceFrom} {vehicle.currency}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-brand-green-700">{vehicle.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{vehicle.description}</p>

                    {/* Specs */}
                    <div className="mt-4 flex items-center gap-4 rounded-lg bg-brand-green-50/50 p-3">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-green-700">
                        <Users className="h-4 w-4 text-brand-gold-500" />
                        {vehicle.passengers} seats
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-green-700">
                        <Briefcase className="h-4 w-4 text-brand-gold-500" />
                        {vehicle.luggage} bags
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-green-700">
                        <Snowflake className="h-4 w-4 text-brand-gold-500" />
                        AC
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="mt-4 space-y-1.5">
                      {vehicle.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="h-3.5 w-3.5 text-brand-green-500" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <BrandButton href="/booking" variant="primary" size="sm" className="mt-5 w-full">
                      Select & Book <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </BrandButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
