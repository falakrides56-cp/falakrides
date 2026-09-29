'use client';

import { Users, Car, Clock, Star } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';
import stats from '@/data/stats.json';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Car,
  Clock,
  Star,
};

export default function StatsSection() {
  return (
    <section className="bg-brand-green-900 py-16 md:py-20">
      <div className="container-brand px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Impact"
          title="Trusted by"
          highlight="Thousands"
          description="Numbers that reflect our commitment to excellence"
          center
          tone="inverse"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Users;
            return (
              <Reveal key={stat.id} delay={i * 100}>
                <div className="flex h-full flex-col items-center border-t border-white/20 px-3 py-6 text-center">
                  <Icon className="h-5 w-5 text-brand-gold-300" aria-hidden="true" />
                  <span className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-sm text-white/75">{stat.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
