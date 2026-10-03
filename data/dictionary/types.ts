export type Locale = "EN" | "UR";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    shortName: string;
    location: string;
  };
  nav: {
    home: string;
    services: string;
    gallery: string;
    about: string;
    contact: string;
    cta: string;
    menu: string;
    close: string;
    ariaLogo: string;
  };
  hero: {
    eyebrow: string;
    lines: [string, string, string];
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  services: {
    eyebrow: string;
    lines: [string, string];
    items: Array<{
      id: string;
      number: string;
      title: string;
      description: string;
      visual: string;
    }>;
  };
  gallery: {
    eyebrow: string;
    lines: [string, string];
    note: string;
    swipe: string;
    meta: {
      g1: string;
      g2: string;
      g3: string;
      g4: string;
      g5: string;
      g6: string;
      g7: string;
      g8: string;
      g9: string;
      g10: string;
      g11: string;
    };
  };
  testimonials: {
    eyebrow: string;
    items: Array<{
      quote: string;
      name: string;
      vehicle: string;
    }>;
    prev: string;
    next: string;
  };
  about: {
    eyebrow: string;
    lines: [string, string];
    body: string;
  };
  process: {
    eyebrow: string;
    lines: [string, string];
    steps: Array<{
      number: string;
      label: string;
    }>;
  };
  cta: {
    lines: [string, string, string];
    body: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    lines: [string, string, string];
    locationLabel: string;
    locationValue: string;
    servicesLabel: string;
    contactLabel: string;
    contactValue: string;
    formTitle: string;
    vehiclePlaceholder: string;
    submit: string;
    hint: string;
    hintCopied: string;
    hintNoIg: string;
    chips: string[];
  };
  footer: {
    line1: string;
    line2: string;
    location: string;
    instagram: string;
    cta: string;
  };
};
