import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'light';
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('h-10 w-10', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Kaaba */}
      <rect x="22" y="26" width="20" height="22" rx="1" fill="#171717" />
      <rect x="22" y="26" width="20" height="3" fill="#F97316" />
      <rect x="24" y="34" width="16" height="1.5" fill="#F97316" opacity="0.6" />
      <rect x="24" y="40" width="16" height="1.5" fill="#F97316" opacity="0.6" />

      {/* Crescent moon */}
      <path
        d="M42 14C36 14 32 18 32 24C32 28 34 31 37 33C33 33 30 29 30 24C30 18 34 14 42 14Z"
        fill="#F97316"
      />

      {/* Minaret left */}
      <rect x="14" y="20" width="3" height="28" rx="1" fill="#171717" />
      <circle cx="15.5" cy="18" r="2.5" fill="#F97316" />
      <path d="M15.5 14L14 16H17L15.5 14Z" fill="#F97316" />

      {/* Minaret right */}
      <rect x="47" y="20" width="3" height="28" rx="1" fill="#171717" />
      <circle cx="48.5" cy="18" r="2.5" fill="#F97316" />
      <path d="M48.5 14L47 16H50L48.5 14Z" fill="#F97316" />

      {/* Base */}
      <rect x="10" y="48" width="44" height="4" rx="1" fill="#171717" />
      <rect x="10" y="48" width="44" height="1.5" rx="0.5" fill="#F97316" />
    </svg>
  );
}

export default function Logo({ className, showText = true, variant = 'default' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-green-700';
  const subColor = variant === 'light' ? 'text-brand-gold-300' : 'text-brand-gold-600';

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 shadow-green ring-1 ring-brand-gold-200/50">
        <LogoIcon className="h-9 w-9" />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn('font-serif text-xl font-bold tracking-wide', textColor)}>
            FALAK RIDE
          </span>
          <span className={cn('text-[0.65rem] font-medium uppercase tracking-[0.2em]', subColor)}>
            Umrah Transport
          </span>
        </div>
      )}
    </div>
  );
}
