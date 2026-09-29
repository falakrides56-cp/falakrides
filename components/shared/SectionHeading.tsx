import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
  className?: string;
  tone?: 'default' | 'inverse';
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  center = true,
  className,
  tone = 'default',
}: SectionHeadingProps) {
  const inverse = tone === 'inverse';
  return (
    <div className={cn(center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl', className)}>
      {eyebrow && (
        <span className={cn('mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase before:h-px before:w-7 before:bg-brand-gold-500', inverse ? 'text-brand-gold-300' : 'text-brand-gold-700')}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn('font-serif text-3xl font-bold leading-tight md:text-4xl', inverse ? 'text-white' : 'text-brand-green-900')}>
        {title} {highlight && <span className={inverse ? 'text-brand-gold-300' : 'text-gradient-gold'}>{highlight}</span>}
      </h2>
      {description && (
        <p className={cn('mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg', inverse ? 'text-white/75' : 'text-muted-foreground')}>{description}</p>
      )}
    </div>
  );
}
