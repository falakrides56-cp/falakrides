'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export default function VideoSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.madinahMosque}
          alt="Madinah mosque"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-green-900/75" />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h2 className="font-serif text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          Experience the <span className="text-brand-gold-300">Sacred Journey</span>
        </h2>
        <p className="mt-3 max-w-xl text-sm text-white/80 md:text-base">
          Watch how we make every trip a comfortable and blessed experience for our pilgrims
        </p>

        <Link
          href="/booking"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-gold-500 px-6 py-3 text-sm font-bold text-brand-green-900 transition-colors hover:bg-brand-gold-400"
        >
          Book your journey <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
