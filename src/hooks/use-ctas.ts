export type CtaHandlers = {
  openAppStore: () => void;
  openGooglePlay: () => void;
  openAppGallery: () => void;
  openBusinessRegistration: () => void;
  openExternal: (url: string) => void;
  scrollToId: (id: string) => void;
  scrollToTop: () => void;
};

// Simple feature-detection for reduced motion
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !('matchMedia' in window)) return false;
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

function openInNewTab(url: string) {
  try {
    window.open(url, '_blank', 'noopener,noreferrer');
  } catch {
    // noop
  }
}

export function useCTAs(): CtaHandlers {
  // Store links
  const APP_STORE = 'https://foodsave.uz/';
  const GOOGLE_PLAY = 'https://foodsave.uz/';
  const APP_GALLERY = 'https://foodsave.uz/';
  const BIZ_MAILTO = 'mailto:partners@foodsave.uz?subject=%D0%A0%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0';

  const openExternal = (url: string) => openInNewTab(url);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    } catch {
      el.scrollIntoView();
    }
  };

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return {
    openAppStore: () => openExternal(APP_STORE),
    openGooglePlay: () => openExternal(GOOGLE_PLAY),
    openAppGallery: () => openExternal(APP_GALLERY),
    openBusinessRegistration: () => openExternal(BIZ_MAILTO),
    openExternal,
    scrollToId,
    scrollToTop,
  };
} 