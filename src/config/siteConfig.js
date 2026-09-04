// ─────────────────────────────────────────────
//  Central site configuration
//  Edit contact details OR route paths here —
//  all components pick them up automatically.
// ─────────────────────────────────────────────

export const SITE_CONFIG = {
  logo: {
    alt: 'TutorsNext',
    header: {
      src: '/images/tutorsnext-logo.png',
      className: 'h-7 w-auto sm:h-7',
    },
    footer: {
      src: '/images/TutorsNext White.png',
      className: 'h-10 w-auto',
    },
    favicon: '/images/Favicon TutorsNext.png',
  },
  phone: {
    display: '+1 (406) 820 5727',
    href: 'tel:+14068205727',
  },
  phoneHome: {
    display: '+1 (406) 820 5727',
    href: 'tel:+14068205727',
  },
  phoneHome1: {
    display: '+1 (406) 820-5727',
    href: 'tel:+14068205727',
  },
  whatsapp: {
    display: '+1 (406) 820-5727',
    href: 'tel:+14068205727',
  },
  email: {
    display: 'care@tutorsnext.com',
    href: 'mailto:care@tutorsnext.com',
  },
  // Change activeHome to 'home' or 'home-1' to choose which home shows on '/'
  activeHome: 'home1',
  routes: {
    register: '/register',   // Change once here — updates Navbar & everywhere else
    login: '/login',
  },
};

// Re-export centralized home & SEO helpers for backward compatibility
export { HOME_1_SEO_ROUTES, checkIsHome1Path as isHome1Route } from './homeConfig';


