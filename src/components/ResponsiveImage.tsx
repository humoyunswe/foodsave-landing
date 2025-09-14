import { ImgHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onError'> {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
  className?: string;
  fallbackSrc?: string;
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  srcSet,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
  className = '',
  fallbackSrc = '/placeholder.svg',
  ...props
}: ResponsiveImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        isLoading ? 'bg-gray-100 animate-pulse' : '',
        className
      )}
      style={{
        aspectRatio: `${width} / ${height}`,
        maxWidth: '100%',
      }}
    >
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        srcSet={srcSet}
        sizes={sizes}
        loading="lazy"
        decoding="async"
        onError={handleError}
        onLoad={() => setIsLoading(false)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        {...props}
      />
    </div>
  );
}
