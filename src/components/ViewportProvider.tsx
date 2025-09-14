import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { breakpoints, Breakpoint } from '@/lib/responsive';

type ViewportContextType = {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isPortrait: boolean;
  isLandscape: boolean;
  breakpoint: Breakpoint;
  isTouchDevice: boolean;
  isHoverAvailable: boolean;
  prefersReducedMotion: boolean;
  prefersDarkMode: boolean;
  isOnline: boolean;
  isLowEndDevice: boolean;
  isLowResolution: boolean;
  pixelRatio: number;
};

const defaultState: ViewportContextType = {
  width: 0,
  height: 0,
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isPortrait: true,
  isLandscape: false,
  breakpoint: 'md',
  isTouchDevice: false,
  isHoverAvailable: true,
  prefersReducedMotion: false,
  prefersDarkMode: false,
  isOnline: true,
  isLowEndDevice: false,
  isLowResolution: false,
  pixelRatio: 1,
};

const ViewportContext = createContext<ViewportContextType>(defaultState);

export const ViewportProvider = ({ children }: { children: ReactNode }) => {
  const [viewport, setViewport] = useState<ViewportContextType>(defaultState);

  useEffect(() => {
    // Set initial values
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Determine breakpoint
      let breakpoint: Breakpoint = 'md';
      if (width < 640) breakpoint = 'sm';
      else if (width < 768) breakpoint = 'md';
      else if (width < 1024) breakpoint = 'lg';
      else if (width < 1280) breakpoint = 'xl';
      else breakpoint = '2xl';
      
      // Check device capabilities
      const isTouchDevice = 'ontouchstart' in window || 
        (navigator as any).maxTouchPoints > 0 || 
        (navigator as any).msMaxTouchPoints > 0;
      
      const mediaQueryHover = window.matchMedia('(hover: hover) and (pointer: fine)');
      const isHoverAvailable = mediaQueryHover.matches;
      
      const mediaQueryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const prefersReducedMotion = mediaQueryReducedMotion.matches;
      
      const mediaQueryDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
      const prefersDarkMode = mediaQueryDarkMode.matches;
      
      const pixelRatio = window.devicePixelRatio || 1;
      
      // Check for low-end device (heuristic based on hardware concurrency and device memory)
      const hardwareConcurrency = (navigator as any).hardwareConcurrency || 4;
      const deviceMemory = (navigator as any).deviceMemory || 4; // in GB
      const isLowEndDevice = hardwareConcurrency <= 2 || deviceMemory <= 1;
      
      // Check for low resolution
      const isLowResolution = pixelRatio < 1.5;
      
      setViewport({
        width,
        height,
        isMobile: width < 768, // md breakpoint
        isTablet: width >= 768 && width < 1024, // md to lg
        isDesktop: width >= 1024, // lg and up
        isPortrait: height > width,
        isLandscape: width > height,
        breakpoint,
        isTouchDevice,
        isHoverAvailable,
        prefersReducedMotion,
        prefersDarkMode,
        isOnline: navigator.onLine,
        isLowEndDevice,
        isLowResolution,
        pixelRatio,
      });
    };
    
    // Set initial values
    updateViewport();
    
    // Add event listeners
    window.addEventListener('resize', updateViewport, { passive: true });
    window.addEventListener('orientationchange', updateViewport, { passive: true });
    
    // Add media query listeners
    const mediaQueryHover = window.matchMedia('(hover: hover) and (pointer: fine)');
    const mediaQueryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mediaQueryDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleHoverChange = (e: MediaQueryListEvent) => {
      setViewport(prev => ({
        ...prev,
        isHoverAvailable: e.matches,
      }));
    };
    
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setViewport(prev => ({
        ...prev,
        prefersReducedMotion: e.matches,
      }));
    };
    
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setViewport(prev => ({
        ...prev,
        prefersDarkMode: e.matches,
      }));
    };
    
    const handleOnlineStatusChange = () => {
      setViewport(prev => ({
        ...prev,
        isOnline: navigator.onLine,
      }));
    };
    
    // Add media query listeners
    if (mediaQueryHover.addEventListener) {
      mediaQueryHover.addEventListener('change', handleHoverChange);
      mediaQueryReducedMotion.addEventListener('change', handleReducedMotionChange);
      mediaQueryDarkMode.addEventListener('change', handleDarkModeChange);
    } else {
      // Fallback for older browsers
      mediaQueryHover.addListener(handleHoverChange);
      mediaQueryReducedMotion.addListener(handleReducedMotionChange);
      mediaQueryDarkMode.addListener(handleDarkModeChange);
    }
    
    // Add online/offline event listeners
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
      
      if (mediaQueryHover.removeEventListener) {
        mediaQueryHover.removeEventListener('change', handleHoverChange);
        mediaQueryReducedMotion.removeEventListener('change', handleReducedMotionChange);
        mediaQueryDarkMode.removeEventListener('change', handleDarkModeChange);
      } else {
        mediaQueryHover.removeListener(handleHoverChange);
        mediaQueryReducedMotion.removeListener(handleReducedMotionChange);
        mediaQueryDarkMode.removeListener(handleDarkModeChange);
      }
      
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);
  
  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (context === undefined) {
    throw new Error('useViewport must be used within a ViewportProvider');
  }
  return context;
};

// Higher-order component for class components
export const withViewport = (Component: React.ComponentType<any>) => {
  return function WrappedComponent(props: any) {
    const viewport = useViewport();
    return <Component {...props} viewport={viewport} />;
  };
};

// Responsive component that only renders on specific breakpoints
type ResponsiveProps = {
  children: ReactNode;
  breakpoint?: Breakpoint | 'mobile' | 'tablet' | 'desktop';
  min?: Breakpoint;
  max?: Breakpoint;
  only?: Breakpoint | Breakpoint[];
  not?: Breakpoint | Breakpoint[];
};

export const Responsive = ({
  children,
  breakpoint,
  min,
  max,
  only,
  not,
  ...props
}: ResponsiveProps) => {
  const viewport = useViewport();
  
  let shouldRender = true;
  
  // Handle breakpoint prop (shorthand for min)
  if (breakpoint) {
    if (breakpoint === 'mobile') {
      shouldRender = viewport.isMobile;
    } else if (breakpoint === 'tablet') {
      shouldRender = viewport.isTablet;
    } else if (breakpoint === 'desktop') {
      shouldRender = viewport.isDesktop;
    } else {
      const breakpointIndex = Object.keys(breakpoints).indexOf(breakpoint);
      const currentIndex = Object.keys(breakpoints).indexOf(viewport.breakpoint);
      shouldRender = currentIndex >= breakpointIndex;
    }
  }
  
  // Handle min and max breakpoints
  if (min) {
    const minIndex = Object.keys(breakpoints).indexOf(min);
    const currentIndex = Object.keys(breakpoints).indexOf(viewport.breakpoint);
    shouldRender = shouldRender && currentIndex >= minIndex;
  }
  
  if (max) {
    const maxIndex = Object.keys(breakpoints).indexOf(max);
    const currentIndex = Object.keys(breakpoints).indexOf(viewport.breakpoint);
    shouldRender = shouldRender && currentIndex <= maxIndex;
  }
  
  // Handle only prop (render only on specific breakpoints)
  if (only) {
    const onlyBreakpoints = Array.isArray(only) ? only : [only];
    shouldRender = shouldRender && onlyBreakpoints.includes(viewport.breakpoint);
  }
  
  // Handle not prop (don't render on specific breakpoints)
  if (not) {
    const notBreakpoints = Array.isArray(not) ? not : [not];
    shouldRender = shouldRender && !notBreakpoints.includes(viewport.breakpoint);
  }
  
  if (!shouldRender) return null;
  
  return <>{children}</>;
};
