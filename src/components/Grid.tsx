import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;
  gapX?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;
  gapY?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  fullWidth?: boolean;
}

export function Grid({
  children,
  className = '',
  cols = 1,
  gap = 4,
  gapX,
  gapY,
  sm,
  md,
  lg,
  xl,
  align = 'stretch',
  justify = 'start',
  fullWidth = false,
}: GridProps) {
  const gridCols = `grid-cols-${cols}`;
  const gridGap = gap ? `gap-${gap}` : '';
  const gridGapX = gapX ? `gap-x-${gapX}` : '';
  const gridGapY = gapY ? `gap-y-${gapY}` : '';
  
  const responsiveCols = [
    sm ? `sm:grid-cols-${sm}` : '',
    md ? `md:grid-cols-${md}` : '',
    lg ? `lg:grid-cols-${lg}` : '',
    xl ? `xl:grid-cols-${xl}` : '',
  ].filter(Boolean).join(' ');

  const alignment = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  const justification = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  return (
    <div 
      className={cn(
        'grid',
        gridCols,
        gridGap,
        gridGapX,
        gridGapY,
        responsiveCols,
        alignment[align],
        justification[justify],
        { 'w-full': fullWidth },
        className
      )}
    >
      {children}
    </div>
  );
}

interface GridItemProps {
  children: ReactNode;
  className?: string;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  start?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  end?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'stretch';
}

export function GridItem({
  children,
  className = '',
  span,
  sm,
  md,
  lg,
  xl,
  start,
  end,
  align = 'stretch',
  justify = 'start',
}: GridItemProps) {
  const spanClass = span ? `col-span-${span}` : '';
  const startClass = start ? `col-start-${start}` : '';
  const endClass = end ? `col-end-${end}` : '';
  
  const responsiveSpan = [
    sm ? `sm:col-span-${sm}` : '',
    md ? `md:col-span-${md}` : '',
    lg ? `lg:col-span-${lg}` : '',
    xl ? `xl:col-span-${xl}` : '',
  ].filter(Boolean).join(' ');

  const alignment = {
    start: 'self-start',
    center: 'self-center',
    end: 'self-end',
    stretch: 'self-stretch',
    baseline: 'self-baseline',
  };

  const justification = {
    start: 'justify-self-start',
    center: 'justify-self-center',
    end: 'justify-self-end',
    stretch: 'justify-self-stretch',
  };

  return (
    <div 
      className={cn(
        spanClass,
        startClass,
        endClass,
        responsiveSpan,
        alignment[align],
        justification[justify],
        className
      )}
    >
      {children}
    </div>
  );
}
