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
    display: '+1 (914) 515-4875',
    href: 'tel:+19145154875',
  },
  phoneHome: {
    display: '+1 (914) 515-4875',
    href: 'tel:+19145154875',
  },
  phoneHome1: {
    display: '+92 344 7990137',
    href: 'tel:+923447990137',
  },
  whatsapp: {
    display: '+92 344 7990137',
    href: 'tel:+923447990137',
  },
  email: {
    display: 'care@tutorsnext.com',
    href: 'mailto:care@tutorsnext.com',
  },
  // Change activeHome to 'home' or 'home-1' to choose which home shows on '/'
  activeHome: 'home',
  routes: {
    register: '/register',   // Change once here — updates Navbar & everywhere else
    login: '/login',
  },
};
