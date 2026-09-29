'use client';

import Link from 'next/link';
import { Plane, Moon, Route, MapPin, UserRound, Car, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import services from '@/data/services.json';

const iconMap: Record<string, React.ElementType> = {
  Plane,
  Moon,
  Route,
  MapPin,
  UserRound,
  Car,
};

export default function ServicesIconsRow() {
  return (
    <section className="section-padding bg-white">
      <div className="container-brand">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our"
          highlight="Services"
          description="Comprehensive transport solutions for every need across Saudi Arabia"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Car;
            return (
              <Reveal key={service.id} delay={i * 80}>
                <Link
                  href="/services"
                  className="group flex flex-col items-center gap-4 rounded-lg border border-brand-green-100 bg-white p-5 text-center transition-colors duration-200 hover:border-brand-gold-400"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold-100">
                    <Icon className="h-6 w-6 text-brand-gold-700" />
                  </div>
                  <span className="text-sm font-semibold text-brand-green-900">
                    {service.title}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-green-900 transition-colors hover:text-brand-gold-700"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
