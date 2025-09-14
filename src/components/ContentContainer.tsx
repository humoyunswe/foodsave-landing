import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padded?: boolean;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
}

export function ContentContainer({
  children,
  className = '',
  size = 'lg',
  padded = true,
  as: Tag = 'div',
  ...props
}: ContentContainerProps) {
  const maxWidth = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }[size];

  return (
    <Tag
      className={cn(
        'w-full mx-auto',
        maxWidth,
        { 'px-4 sm:px-6 lg:px-8': padded },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

// Convenience components for different content sections
export function Section({
  children,
  className = '',
  ...props
}: Omit<ContentContainerProps, 'as'>) {
  return (
    <ContentContainer as="section" className={className} {...props}>
      {children}
    </ContentContainer>
  );
}

export function Article({
  children,
  className = '',
  ...props
}: Omit<ContentContainerProps, 'as'>) {
  return (
    <ContentContainer as="article" className={className} {...props}>
      {children}
    </ContentContainer>
  );
}

export function MainContent({
  children,
  className = '',
  ...props
}: Omit<ContentContainerProps, 'as'>) {
  return (
    <ContentContainer as="main" className={cn('py-8 md:py-12', className)} {...props}>
      {children}
    </ContentContainer>
  );
}
