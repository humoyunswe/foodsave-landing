import { useState, useEffect } from 'react';

/**
 * Detects if the current device supports touch events
 * @returns {boolean} True if the device supports touch events
 */
export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the browser supports touch events
    const isTouchCapable = 'ontouchstart' in window || 
      (navigator as any).maxTouchPoints > 0 || 
      (navigator as any).msMaxTouchPoints > 0;
    
    // Update state based on touch capability
    setIsTouchDevice(isTouchCapable);

    // Optional: Listen for changes in device capabilities
    const handleTouchStart = () => {
      setIsTouchDevice(true);
      // Remove the event listener after the first touch
      window.removeEventListener('touchstart', handleTouchStart);
    };

    // Add touch event listener for more accurate detection
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return isTouchDevice;
}

/**
 * Hook to detect if the device has a hover capability (not touch-only)
 * @returns {boolean} True if the device supports hover
 */
export function useHoverCapability() {
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    // Check for hover capability using media query
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    
    // Update state based on media query
    const updateHoverCapability = (e: MediaQueryListEvent | MediaQueryList) => {
      setHasHover(e.matches);
    };
    
    // Initial check
    updateHoverCapability(mediaQuery);
    
    // Listen for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateHoverCapability);
      return () => mediaQuery.removeEventListener('change', updateHoverCapability);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(updateHoverCapability);
      return () => mediaQuery.removeListener(updateHoverCapability);
    }
  }, []);

  return hasHover;
}

/**
 * Hook to detect if the device is a mobile device
 * @returns {boolean} True if the device is a mobile device
 */
export function useMobileDevice() {
  const [isMobile, setIsMobile] = useState(false);
  const isTouchDevice = useTouchDevice();

  useEffect(() => {
    // Check if the device is mobile based on screen width and touch capability
    const checkIfMobile = () => {
      const isSmallScreen = window.innerWidth < 768; // Tailwind's 'md' breakpoint
      setIsMobile(isSmallScreen && isTouchDevice);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [isTouchDevice]);

  return isMobile;
}

/**
 * Hook to detect if the device is in portrait or landscape mode
 * @returns {'portrait' | 'landscape'} The current orientation
 */
export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    typeof window !== 'undefined' && window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
  );

  useEffect(() => {
    const handleResize = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return orientation;
}

/**
 * Hook to detect if the device has a small screen (mobile)
 * @param {number} breakpoint - The breakpoint in pixels (default: 768px - Tailwind's 'md' breakpoint)
 * @returns {boolean} True if the screen width is below the breakpoint
 */
export function useSmallScreen(breakpoint = 768) {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < breakpoint);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isSmallScreen;
}
