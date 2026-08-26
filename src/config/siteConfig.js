// ─────────────────────────────────────────────
//  Central site configuration
//  Edit contact details OR route paths here —
//  all components pick them up automatically.
// ─────────────────────────────────────────────

export const SITE_CONFIG = {
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
  activeHome: 'home1',
  routes: {
    register: '/register',   // Change once here — updates Navbar & everywhere else
    login: '/login',
  },
};
