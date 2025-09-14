import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'lead' | 'muted';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: 'primary' | 'secondary' | 'muted' | 'success' | 'error' | 'warning' | 'info';
  noMargin?: boolean;
}

const variantStyles = {
  h1: 'text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl',
  h2: 'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
  h3: 'text-2xl font-bold sm:text-3xl lg:text-4xl',
  h4: 'text-xl font-semibold sm:text-2xl lg:text-3xl',
  h5: 'text-lg font-semibold sm:text-xl lg:text-2xl',
  h6: 'text-base font-semibold sm:text-lg lg:text-xl',
  body: 'text-base leading-relaxed',
  lead: 'text-lg leading-relaxed sm:text-xl',
  small: 'text-sm leading-snug',
  muted: 'text-sm text-muted-foreground',
};

const weightStyles = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const colorStyles = {
  primary: 'text-foreground',
  secondary: 'text-muted-foreground',
  muted: 'text-muted-foreground/70',
  success: 'text-green-600 dark:text-green-400',
  error: 'text-red-600 dark:text-red-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
  info: 'text-blue-600 dark:text-blue-400',
};

export function Typography({
  children,
  className = '',
  as: Component = 'p',
  variant = 'body',
  weight = 'normal',
  align = 'left',
  color = 'primary',
  noMargin = false,
  ...props
}: TypographyProps) {
  // Determine the default component based on variant if not explicitly provided
  if (Component === 'p' && variant.startsWith('h')) {
    Component = variant as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        weightStyles[weight],
        `text-${align}`,
        colorStyles[color],
        { 'mb-0': noMargin },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Convenience components for common typography patterns
export function H1(props: Omit<TypographyProps, 'as' | 'variant'>) {
  return <Typography as="h1" variant="h1" {...props} />;
}

export function H2(props: Omit<TypographyProps, 'as' | 'variant'>) {
  return <Typography as="h2" variant="h2" {...props} />;
}

export function H3(props: Omit<TypographyProps, 'as' | 'variant'>) {
  return <Typography as="h3" variant="h3" {...props} />;
}

export function H4(props: Omit<TypographyProps, 'as' | 'variant'>) {
  return <Typography as="h4" variant="h4" {...props} />;
}

export function H5(props: Omit<TypographyProps, 'as' | 'variant'>) {
  return <Typography as="h5" variant="h5" {...props} />;
}

export function H6(props: Omit<TypographyProps, 'as' | 'variant'>) {
  return <Typography as="h6" variant="h6" {...props} />;
}

export function P(props: Omit<TypographyProps, 'as' | 'variant'>) {
  return <Typography as="p" variant="body" {...props} />;
}

export function Lead(props: Omit<TypographyProps, 'as' | 'variant'>) {
  return <Typography as="p" variant="lead" {...props} />;
}

export function Small(props: Omit<TypographyProps, 'as' | 'variant'>) {
  return <Typography as="small" variant="small" {...props} />;
}

export function Muted(props: Omit<TypographyProps, 'as' | 'variant'>) {
  return <Typography as="p" variant="muted" {...props} />;
}
