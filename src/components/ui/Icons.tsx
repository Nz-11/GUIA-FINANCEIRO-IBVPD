import type { SVGProps } from 'react';
import type { IdeaIcon } from '../../data/guide';

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  viewBox: '0 0 24 24',
  width: 20,
  height: 20,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
});

export const ArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowDown = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);
export const Info = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);
export const Alert = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 4l9 16H3z" />
    <path d="M12 10v4M12 17h.01" />
  </svg>
);
export const Lock = (p: P) => (
  <svg {...base(p)}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 018 0v3" />
  </svg>
);
export const Copy = (p: P) => (
  <svg {...base(p)}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 012-2h9" />
  </svg>
);
export const Check = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);
export const Plus = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const Close = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const Menu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const Printer = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 9V4h10v5M7 17H5a2 2 0 01-2-2v-4a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2h-2" />
    <rect x="7" y="14" width="10" height="6" rx="1" />
  </svg>
);
export const Download = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
);
export const Sheet = (p: P) => (
  <svg {...base(p)}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M4 9h16M4 15h16M10 3v18" />
  </svg>
);

/** Ícones ilustrados para as ideias de renda extra. */
const ideaPaths: Record<IdeaIcon, JSX.Element> = {
  food: (
    <>
      <path d="M4 13h16a8 8 0 01-16 0z" />
      <path d="M2 13h20M9 4c0 1.5 1.5 1.5 1.5 3S9 8.5 9 10M14 4c0 1.5 1.5 1.5 1.5 3S14 8.5 14 10" />
    </>
  ),
  sewing: (
    <>
      <path d="M5 19L17 7" />
      <circle cx="18.5" cy="5.5" r="1.8" />
      <path d="M5 19c-1-3 2-5 4-4s1 4-2 5c-2 .7-4-1-3-3 1.2-2.4 6-3 9-1" />
    </>
  ),
  iron: (
    <>
      <path d="M3 17h15a3 3 0 003-3V9H10a7 7 0 00-7 7z" />
      <path d="M8 9V6h10M7 14h.01M11 14h.01M15 14h.01" />
    </>
  ),
  pet: (
    <>
      <circle cx="6" cy="10" r="1.8" />
      <circle cx="10" cy="6" r="1.8" />
      <circle cx="14" cy="6" r="1.8" />
      <circle cx="18" cy="10" r="1.8" />
      <path d="M12 11c-3 0-5.5 4-5.5 6.5 0 1.5 1.5 2.5 3 2l2.5-.8 2.5.8c1.5.5 3-.5 3-2C17.5 15 15 11 12 11z" />
    </>
  ),
  tools: (
    <>
      <path d="M14.5 6.5a4 4 0 005 5L12 19a2.1 2.1 0 01-3-3z" />
      <path d="M14.5 6.5L17 4l3 3-2.5 2.5" />
      <path d="M4 4l5 5M3 7l4-4" />
    </>
  ),
  class: (
    <>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v6" />
    </>
  ),
  organize: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 12h18M12 4v16M7 8h1M16 8h1M7 16h1M16 16h1" />
    </>
  ),
  beauty: (
    <>
      <circle cx="11" cy="9" r="6" />
      <path d="M11 15v6M8.5 21h5M9 7.5a2.5 2.5 0 012-1.5" />
      <path d="M19 3v3M17.5 4.5h3" />
    </>
  ),
  digital: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4M8 9l-2 1.5L8 12M16 9l2 1.5-2 1.5M13 8l-2 5" />
    </>
  ),
};

export const IdeaGlyph = ({ name }: { name: IdeaIcon }) => (
  <svg {...base({ strokeWidth: 1.4 })}>{ideaPaths[name]}</svg>
);
