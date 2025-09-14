/**
 * Breakpoints matching Tailwind's default breakpoints
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

type Breakpoint = keyof typeof breakpoints;

/**
 * Media query helpers for responsive design
 */
export const media = {
  up: (breakpoint: Breakpoint) => `(min-width: ${breakpoints[breakpoint]})`,
  down: (breakpoint: Breakpoint) => {
    const breakpointValue = parseInt(breakpoints[breakpoint]);
    return `(max-width: ${breakpointValue - 0.02}px)`;
  },
  between: (min: Breakpoint, max: Breakpoint) => {
    const minValue = parseInt(breakpoints[min]);
    const maxValue = parseInt(breakpoints[max]);
    return `(min-width: ${minValue}px) and (max-width: ${maxValue - 0.02}px)`;
  },
  only: (breakpoint: Breakpoint) => {
    const breakpointKeys = Object.keys(breakpoints) as Breakpoint[];
    const currentIndex = breakpointKeys.indexOf(breakpoint);
    
    if (currentIndex === 0) {
      return media.down(breakpointKeys[1]);
    }
    
    if (currentIndex === breakpointKeys.length - 1) {
      return media.up(breakpoint);
    }
    
    return media.between(breakpoint, breakpointKeys[currentIndex + 1]);
  },
};

/**
 * Get the current breakpoint based on window width
 */
export const getCurrentBreakpoint = (): Breakpoint => {
  if (typeof window === 'undefined') return 'sm';
  
  const width = window.innerWidth;
  
  if (width < 640) return 'sm';
  if (width < 768) return 'md';
  if (width < 1024) return 'lg';
  if (width < 1280) return 'xl';
  return '2xl';
};

/**
 * Check if the current viewport matches a media query
 */
const checkMediaQuery = (query: string): boolean => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia(query).matches;
};

/**
 * Hook to check if the current viewport is at least the specified breakpoint
 */
export const useMediaQuery = (breakpoint: Breakpoint): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(media.up(breakpoint));
    
    // Set initial value
    setMatches(mediaQuery.matches);
    
    // Create event listener function
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    
    // Add listener for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(listener);
    }
    
    // Clean up
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, [breakpoint]);
  
  return matches;
};

/**
 * Hook to check if the current viewport is smaller than the specified breakpoint
 */
export const useMediaDown = (breakpoint: Breakpoint): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(media.down(breakpoint));
    
    // Set initial value
    setMatches(mediaQuery.matches);
    
    // Create event listener function
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    
    // Add listener for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(listener);
    }
    
    // Clean up
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, [breakpoint]);
  
  return matches;
};

/**
 * Hook to check if the current viewport is between two breakpoints
 */
export const useMediaBetween = (min: Breakpoint, max: Breakpoint): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(media.between(min, max));
    
    // Set initial value
    setMatches(mediaQuery.matches);
    
    // Create event listener function
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    
    // Add listener for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(listener);
    }
    
    // Clean up
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, [min, max]);
  
  return matches;
};

/**
 * Hook to get the current breakpoint
 */
export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getCurrentBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getCurrentBreakpoint());
    };

    // Set initial breakpoint
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return breakpoint;
};

/**
 * Get the appropriate image size based on the current breakpoint
 */
export const getResponsiveImageSize = (
  sizes: Partial<Record<Breakpoint, number>>,
  defaultSize: number
): number => {
  if (typeof window === 'undefined') return defaultSize;
  
  const breakpoint = getCurrentBreakpoint();
  
  // Find the most appropriate size for the current breakpoint
  const breakpointKeys = Object.keys(breakpoints) as Breakpoint[];
  const currentIndex = breakpointKeys.indexOf(breakpoint);
  
  // Check from current breakpoint up to the largest
  for (let i = currentIndex; i >= 0; i--) {
    const bp = breakpointKeys[i];
    if (sizes[bp] !== undefined) {
      return sizes[bp]!;
    }
  }
  
  return defaultSize;
};

/**
 * Generate a responsive background image URL with srcset
 */
export const getResponsiveBackgroundImage = (
  baseUrl: string,
  widths: number[] = [320, 640, 1024, 1280, 1536],
  quality: number = 80
): string => {
  return widths
    .map((width) => {
      const url = new URL(baseUrl);
      url.searchParams.set('w', width.toString());
      url.searchParams.set('q', quality.toString());
      return `url(${url.toString()}) ${width}w`;
    })
    .join(', ');
};

/**
 * Generate a responsive image srcset
 */
export const getResponsiveSrcSet = (
  baseUrl: string,
  widths: number[] = [320, 640, 1024, 1280, 1536],
  quality: number = 80
): string => {
  return widths
    .map((width) => {
      const url = new URL(baseUrl);
      url.searchParams.set('w', width.toString());
      url.searchParams.set('q', quality.toString());
      return `${url.toString()} ${width}w`;
    })
    .join(', ');
};

/**
 * Generate a responsive sizes attribute
 */
export const getResponsiveSizes = (sizes: Partial<Record<Breakpoint, string>>): string => {
  const breakpointKeys = Object.keys(breakpoints) as Breakpoint[];
  
  return breakpointKeys
    .filter((bp) => sizes[bp] !== undefined)
    .map((bp) => {
      if (bp === 'sm') return sizes[bp]!;
      return `(${media.up(bp)}) ${sizes[bp]!}`;
    })
    .join(', ');
};

/**
 * Get the appropriate font size based on the current breakpoint
 */
export const getResponsiveFontSize = (
  sizes: Partial<Record<Breakpoint, string | number>>,
  defaultSize: string | number = '1rem'
): string | number => {
  if (typeof window === 'undefined') return defaultSize;
  
  const breakpoint = getCurrentBreakpoint();
  return sizes[breakpoint] !== undefined ? sizes[breakpoint]! : defaultSize;
};

/**
 * Generate a responsive style object for a container
 */
export const getResponsiveContainerStyle = (config: {
  maxWidth?: Partial<Record<Breakpoint, string | number>>;
  padding?: Partial<Record<Breakpoint, string | number>>;
  margin?: Partial<Record<Breakpoint, string | number>>;
}): Record<string, any> => {
  const breakpoint = getCurrentBreakpoint();
  
  return {
    maxWidth: config.maxWidth?.[breakpoint],
    padding: config.padding?.[breakpoint],
    margin: config.margin?.[breakpoint],
  };
};
