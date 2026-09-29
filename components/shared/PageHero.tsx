interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-green-900 text-white">
      {image && (
        <>
          <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-green-900/75" />
        </>
      )}
      <div className="container-brand relative flex min-h-[280px] items-end px-4 pb-12 pt-16 sm:px-6 lg:min-h-[320px] lg:px-8 lg:pb-14">
        <div className="max-w-3xl">
          <span className="mb-3 block text-xs font-bold uppercase text-brand-gold-300">{eyebrow}</span>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}