import { cn } from '@/lib/utils';
import { Button as UIButton, ButtonProps as UIButtonProps } from '@/components/ui/button';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const brandButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand-green-900 text-white hover:bg-brand-green-800',
        gold: 'bg-brand-gold-500 text-brand-green-900 hover:bg-brand-gold-400',
        outline: 'border border-brand-green-200 bg-white text-brand-green-900 hover:border-brand-green-900 hover:bg-brand-green-50',
        ghost: 'text-brand-green-900 hover:bg-brand-green-50',
        light: 'bg-white text-brand-green-900 hover:bg-brand-green-50',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface BrandButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'>,
    VariantProps<typeof brandButtonVariants> {
  href?: string;
  external?: boolean;
}

export default function BrandButton({
  className,
  variant,
  size,
  href,
  external,
  children,
  ...props
}: BrandButtonProps) {
  const classes = cn(brandButtonVariants({ variant, size, className }));

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
