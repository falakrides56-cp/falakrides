'use client';

import Link from 'next/link';
import { Users, Briefcase, Snowflake, Check, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import BrandButton from '@/components/shared/BrandButton';
import fleet from '@/data/fleet.json';
import { getFleetImage } from '@/lib/images';

export default function FleetPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Our Vehicles"
          title="Choose Your"
          highlight="Ride"
          description="From economy sedans to luxury vehicles and spacious vans — we have the right car for every journey"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((vehicle, i) => (
            <Reveal key={vehicle.id} delay={i * 100}>
              <div className="group h-full overflow-hidden rounded-lg border border-brand-green-100 bg-white transition-colors duration-200 hover:border-brand-gold-400">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-brand-green-50">
                  <img
                    src={getFleetImage(vehicle.image)}
                    alt={vehicle.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute bottom-3 right-3 rounded-md bg-brand-gold-500 px-3 py-1.5 text-xs font-bold text-brand-green-900">
                    From {vehicle.priceFrom} {vehicle.currency}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-brand-green-900">{vehicle.name}</h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5 text-brand-gold-500" />
                      {vehicle.passengers} pax
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3.5 w-3.5 text-brand-gold-500" />
                      {vehicle.luggage} bags
                    </span>
                    <span className="flex items-center gap-1">
                      <Snowflake className="h-3.5 w-3.5 text-brand-gold-500" />
                      AC
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5">
                    {vehicle.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="h-3 w-3 text-brand-green-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/booking"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-brand-green-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-gold-500 hover:text-brand-green-900"
                  >
                    Select
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <BrandButton href="/fleet" variant="outline">
            View Full Fleet <ArrowRight className="ml-2 h-4 w-4" />
          </BrandButton>
        </div>
      </div>
    </section>
  );
}
