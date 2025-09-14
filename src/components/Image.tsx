import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  srcSet?: string;
  sources?: Array<{
    srcSet: string;
    media?: string;
    type?: string;
  }>;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  quality?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  unoptimized?: boolean;
  onLoadingComplete?: (img: HTMLImageElement) => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const Image = ({
  src,
  srcSet,
  sources = [],
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  quality = 75,
  objectFit = 'cover',
  objectPosition = 'center',
  placeholder = 'empty',
  blurDataURL,
  unoptimized = false,
  onLoadingComplete,
  onError,
  ...props
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Handle image load
  const handleLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    if (onLoadingComplete) {
      onLoadingComplete(e.currentTarget);
    }
  }, [onLoadingComplete]);

  // Handle image error
  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsError(true);
    setIsLoading(false);
    if (onError) {
      onError(e);
    }
  }, [onError]);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const img = imgRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '200px', // Start loading when within 200px of viewport
        threshold: 0.01,
      }
    );

    observer.observe(img);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.unobserve(img);
      }
    };
  }, [priority]);

  // Generate srcSet if not provided
  const generateSrcSet = useCallback(() => {
    if (srcSet) return srcSet;
    
    const densities = [1, 2, 3];
    return densities
      .map((density) => {
        const w = Math.round(width * density);
        return `${src}?w=${w}&q=${quality} ${density}x`;
      })
      .join(', ');
  }, [src, srcSet, width, quality]);

  // Generate sizes attribute for responsive images
  const generateSizes = useCallback(() => {
    if (props.sizes) return props.sizes;
    
    // Default sizes based on viewport width
    return `(max-width: 640px) 100vw, (max-width: 768px) 50vw, ${width}px`;
  }, [props.sizes, width]);

  // Handle placeholder
  const renderPlaceholder = () => {
    if (!isLoading || !blurDataURL) return null;
    
    return (
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${blurDataURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          transform: 'scale(1.05)', // Slightly larger to avoid edges
        }}
        aria-hidden="true"
      />
    );
  };

  // Handle error state
  if (isError) {
    return (
      <div 
        className={cn(
          'flex items-center justify-center bg-gray-100 dark:bg-gray-800',
          className
        )}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '100px',
        }}
      >
        <span className="text-gray-400 dark:text-gray-600">
          Failed to load image
        </span>
      </div>
    );
  }

  const imgSrc = isInView ? src : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  
  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        { 'bg-gray-100 dark:bg-gray-800': isLoading },
        className
      )}
      style={{
        width: '100%',
        paddingBottom: `${(height / width) * 100}%`,
      }}
    >
      {renderPlaceholder()}
      
      <picture>
        {/* Additional sources (for WebP, AVIF, etc.) */}
        {sources.map((source, index) => (
          <source
            key={index}
            srcSet={isInView ? source.srcSet : ''}
            media={source.media}
            type={source.type}
          />
        ))}
        
        {/* Main image */}
        <img
          ref={imgRef}
          src={imgSrc}
          srcSet={isInView ? generateSrcSet() : undefined}
          sizes={generateSizes()}
          alt={alt}
          loading={loading}
          width={width}
          height={height}
          className={cn(
            'absolute inset-0 w-full h-full transition-opacity duration-300',
            {
              'opacity-0': isLoading && !isError,
              'opacity-100': !isLoading || isError,
              'object-contain': objectFit === 'contain',
              'object-cover': objectFit === 'cover',
              'object-fill': objectFit === 'fill',
              'object-none': objectFit === 'none',
              'object-scale-down': objectFit === 'scale-down',
            }
          )}
          style={{
            objectPosition,
          }}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
          {...(priority ? { fetchPriority: 'high' } : {})}
          {...(isInView ? { 'data-loaded': 'true' } : {})}
          {...props}
        />
      </picture>
      
      {/* Loading indicator */}
      {isLoading && !blurDataURL && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="h-2 w-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;
