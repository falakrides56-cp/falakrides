'use client';

import { useState, useMemo } from 'react';
import { Star, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import PublicLayout from '@/components/shared/PublicLayout';
import SectionHeading from '@/components/shared/SectionHeading';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';
import StarRating from '@/components/shared/StarRating';
import { IMAGES } from '@/lib/images';
import reviews from '@/data/reviews.json';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 6;
const RATINGS = [5, 4, 3];

export default function ReviewsPage() {
  const [filter, setFilter] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return filter ? reviews.filter((r) => r.rating === filter) : reviews;
  }, [filter]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const current = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilter = (rating: number | null) => {
    setFilter(rating);
    setPage(1);
  };

  return (
    <PublicLayout>
      <PageHero
        eyebrow="Testimonials"
        title="Client Reviews"
        description="Real experiences from pilgrims and travelers who chose Falak Ride"
        image={IMAGES.kaabaPilgrims2}
        imageAlt="Pilgrims"
      />

      {/* Reviews */}
      <section className="section-padding bg-gradient-to-b from-white to-brand-green-50/30">
        <div className="container-brand">
          {/* Filters */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-green-700">
              <Filter className="h-4 w-4 text-brand-gold-500" /> Filter by rating:
            </span>
            <button
              onClick={() => handleFilter(null)}
              className={cn(
                'rounded-md border px-3.5 py-2 text-xs font-semibold transition-colors',
                filter === null
                  ? 'border-brand-green-900 bg-brand-green-900 text-white'
                  : 'border-brand-green-200 bg-white text-brand-green-800 hover:bg-brand-green-50'
              )}
            >
              All
            </button>
            {RATINGS.map((r) => (
              <button
                key={r}
                onClick={() => handleFilter(r)}
                className={cn(
                  'flex items-center gap-1.5 rounded-md border px-3.5 py-2 text-xs font-semibold transition-colors',
                  filter === r
                    ? 'border-brand-green-900 bg-brand-green-900 text-white'
                    : 'border-brand-green-200 bg-white text-brand-green-800 hover:bg-brand-green-50'
                )}
              >
                {r} <Star className="h-3 w-3 fill-current" />
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {current.map((review, i) => (
              <Reveal key={review.id} delay={i * 60}>
                <div className="flex h-full flex-col rounded-lg border border-brand-green-200 bg-white p-6 transition-colors hover:border-brand-gold-400">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-green-900 text-sm font-bold text-white">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-green-700">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} size="sm" className="mt-3" />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-brand-green-50 pt-3">
                    <span className="text-xs font-medium text-brand-gold-600">{review.service}</span>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-green-100 text-brand-green-700 transition-colors hover:bg-brand-green-50 disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition-all',
                    p === page
                      ? 'bg-brand-green-600 text-white'
                      : 'border border-brand-green-100 text-brand-green-700 hover:bg-brand-green-50'
                  )}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-green-100 text-brand-green-700 transition-colors hover:bg-brand-green-50 disabled:opacity-40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
