import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 20, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconWifiOff = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 8.8a15 15 0 0 1 4.2-2.6M9.6 5.2A15 15 0 0 1 22 8.8" />
    <path d="M5 12.6a10 10 0 0 1 3.4-2M15.2 10.4A10 10 0 0 1 19 12.6" />
    <path d="M8.6 16.2a5 5 0 0 1 6.8 0" />
    <circle cx="12" cy="19.6" r="0.6" fill="currentColor" />
    <path d="M3 3l18 18" />
  </Base>
);

export const IconWifi = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 8.8a15 15 0 0 1 20 0" />
    <path d="M5 12.6a10 10 0 0 1 14 0" />
    <path d="M8.6 16.2a5 5 0 0 1 6.8 0" />
    <circle cx="12" cy="19.6" r="0.6" fill="currentColor" />
  </Base>
);

export const IconPlane = (p: IconProps) => (
  <Base {...p}>
    <path d="M10.2 13.8 3 11.5l1.2-1.6 8 .9 4.6-5.3a2 2 0 0 1 2.9 2.8l-5.3 4.7.9 8-1.6 1.2-2.3-7.2-3.3 3v2.4l-1.2 1-1.4-3.2L2.9 17l1-1.2h2.4z" />
  </Base>
);

export const IconPrinter = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 8V3.5h10V8" />
    <rect x="3" y="8" width="18" height="9" rx="2.5" />
    <path d="M7 14h10v6.5H7z" />
    <path d="M17.5 11h.01" />
  </Base>
);

export const IconInfinity = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 12c-2-2.7-3.6-4-5.5-4a4 4 0 0 0 0 8c1.9 0 3.5-1.3 5.5-4Zm0 0c2 2.7 3.6 4 5.5 4a4 4 0 0 0 0-8c-1.9 0-3.5 1.3-5.5 4Z" />
  </Base>
);

export const IconKhata = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 3h12a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 18 21H6z" />
    <path d="M6 3v18M3.5 7H6M3.5 12H6M3.5 17H6" />
    <path d="M10 8h6M10 12h6M10 16h3.5" />
  </Base>
);

export const IconBox = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 2.8 8.2 4.6v9.2L12 21.2l-8.2-4.6V7.4z" />
    <path d="m3.8 7.4 8.2 4.6 8.2-4.6M12 12v9.2" />
  </Base>
);

export const IconCart = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 4h2.2l2.3 11h10.3l2.2-8H6.3" />
    <circle cx="9" cy="19.5" r="1.3" />
    <circle cx="17" cy="19.5" r="1.3" />
  </Base>
);

export const IconShield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.3 7.5 9.5 4.4-1.2 7.5-4.9 7.5-9.5V6z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </Base>
);

export const IconArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const IconArrowDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Base>
);

export const IconPlus = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M5 12h14" />
  </Base>
);

export const IconMinus = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14" />
  </Base>
);

export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Base>
);

export const IconQr = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="3.5" width="6" height="6" rx="1" />
    <rect x="14.5" y="3.5" width="6" height="6" rx="1" />
    <rect x="3.5" y="14.5" width="6" height="6" rx="1" />
    <path d="M14.5 14.5h2v2h-2zM18.5 18.5h2v2h-2zM18.5 14.5h2M14.5 20.5h2" />
  </Base>
);

export const IconCash = (p: IconProps) => (
  <Base {...p}>
    <rect x="2.5" y="6" width="19" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M6 9.5v.01M18 14.5v.01" />
  </Base>
);

export const IconLanguage = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 5h9M8.5 3v2M6 5c.5 3.5 2.6 6.4 6 8M11 5c-.6 3.6-3 6.8-7 8.5" />
    <path d="m13 21 4-9 4 9M14.4 18h5.2" />
  </Base>
);

export const IconChevronDown = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 9 6 6 6-6" />
  </Base>
);

export const IconRotate = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.6" />
    <path d="M4 4v4.6h4.6" />
  </Base>
);
