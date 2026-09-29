'use client';

import Link from 'next/link';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import routes from '@/data/routes.json';
import { getRouteImage } from '@/lib/images';

export default function PopularRoutes() {
  return (
    <section className="section-padding bg-white">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Popular Destinations"
          title="Popular"
          highlight="Routes"
          description="Our most booked routes with transparent, fixed pricing"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, i) => (
            <Reveal key={route.id} delay={i * 80}>
              <Link
                href="/booking"
                className="group relative block overflow-hidden rounded-lg border border-brand-green-100 bg-white transition-colors duration-200 hover:border-brand-gold-400"
              >
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <img
                    src={getRouteImage(route.image)}
                    alt={`${route.from} to ${route.to}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-700/80 to-transparent" />
                  {route.popular && (
                    <span className="absolute right-3 top-3 rounded-md bg-brand-gold-500 px-3 py-1.5 text-xs font-bold text-brand-green-900">
                      Popular
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <span>{route.from}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-brand-gold-300" />
                      <span>{route.to}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-brand-gold-500" />
                      {route.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-brand-gold-500" />
                      {route.distance}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-brand-green-700">
                    From <span className="text-brand-gold-600">{route.priceFrom} SAR</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
