'use client';

import { MessageCircle, ArrowRight, MapPin, Calendar } from 'lucide-react';
import BrandButton from '@/components/shared/BrandButton';
import { WHATSAPP_LINK } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container-brand grid min-h-[calc(88vh-4rem)] items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:py-14">
        <div className="max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold-700">
            <span className="h-2 w-2 rounded-full bg-brand-gold-500" />
            Trusted by 10,000+ Pilgrims
          </span>

          <h1 className="font-serif text-4xl font-bold leading-[1.08] text-brand-green-900 sm:text-5xl lg:text-6xl">
            Your Blessed Journey,
            <br />
            <span className="text-gradient-gold">Comfortably Connected</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Premium Umrah, Ziyarat, and airport transport across Saudi Arabia.
            Verified drivers, clean vehicles, and fixed pricing — 24/7.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BrandButton href="/booking" variant="gold" size="lg">
              Book Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </BrandButton>
            <BrandButton href={WHATSAPP_LINK} external variant="outline" size="lg">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </BrandButton>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 divide-x divide-brand-green-100 border-y border-brand-green-100 py-4">
            <div className="flex flex-col gap-1 pr-3">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase text-brand-gold-700">
                <MapPin className="h-3.5 w-3.5" /> From
              </span>
              <span className="text-sm font-semibold text-brand-green-900">Jeddah Airport</span>
            </div>
            <div className="flex flex-col gap-1 px-3">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase text-brand-gold-700">
                <MapPin className="h-3.5 w-3.5" /> To
              </span>
              <span className="text-sm font-semibold text-brand-green-900">Makkah</span>
            </div>
            <div className="flex flex-col gap-1 pl-3">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase text-brand-gold-700">
                <Calendar className="h-3.5 w-3.5" /> Date
              </span>
              <span className="text-sm font-semibold text-brand-green-900">Today</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-xl sm:min-h-[440px] lg:min-h-[600px]">
          <img
            src={IMAGES.heroKaaba}
            alt="Kaaba in Makkah"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
