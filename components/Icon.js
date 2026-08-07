const PATHS = {
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-8-8V3h9.6l8.4 8.4a2 2 0 0 1 0 2z" />
      <circle cx="7.5" cy="7.5" r="1" />
    </>
  ),
  cube: (
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.3 7 12 12l8.7-5M12 22V12" />
    </>
  ),
  truck: (
    <>
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  doc: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </>
  ),
  clipboard: (
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" />
    </>
  ),
  handshake: (
    <>
      <path d="M11 17a5 5 0 0 1-5 5H3v-3a5 5 0 0 1 5-5M13 7a5 5 0 0 1 5-5h3v3a5 5 0 0 1-5 5" />
      <path d="m8 16 8-8M14.5 4.5 12 7l5 5 2.5-2.5M4.5 14.5 7 12l5 5-2.5 2.5" />
    </>
  ),
  arrow: <path d="M5 12h14M12 5l7 7-7 7" />,
  chat: (
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </>
  ),
  flame: <path d="M12 2c-2 4-5 6-5 11a5 5 0 0 0 10 0c0-5-3-7-5-11z" />,
  gem: (
    <>
      <path d="M6 3h12l4 6-10 13L2 9l4-6z" />
      <path d="M2 9h20M12 22 8 9l2-6M12 22l4-13-2-6" />
    </>
  ),
  ring: (
    <>
      <circle cx="12" cy="14" r="7" />
      <path d="M9 5.5 12 2l3 3.5" />
    </>
  ),
  jar: (
    <>
      <path d="M5 8h14v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8z" />
      <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </>
  ),
  bottle: (
    <>
      <path d="M9 2h6v3l1 2v13a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7l1-2V2z" />
      <path d="M8 12h8" />
    </>
  ),
  spray: (
    <>
      <path d="M8 8h8v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8z" />
      <path d="M10 8V5h4v3M9 3h6" />
      <path d="M8 13h8" />
    </>
  ),
  cream: (
    <>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 10v3M9 4h6" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  floss: (
    <>
      <path d="M4 20c4-2 6-6 6-10V4M20 20c-4-2-6-6-6-10V4" />
      <path d="M8 4h8" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6" />
      <path d="M3 18h18v2H3zM6 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
    </>
  ),
  pod: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12a4 4 0 0 1 8 0" />
      <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
      <circle cx="14.5" cy="9.5" r=".5" fill="currentColor" />
    </>
  ),
  sheet: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  shorts: (
    <>
      <path d="M4 6h16l-1 5-5 7h-4l-5-7-1-5z" />
      <path d="M4 6l8 5 8-5" />
    </>
  ),
  shaker: (
    <>
      <path d="M8 3h8v4l2 3v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9l2-3V3z" />
      <path d="M6 13h12" />
    </>
  ),
  shakerCheck: (
    <>
      <path d="M8 3h8v4l2 3v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9l2-3V3z" />
      <path d="M9 15l2 2 4-4" />
    </>
  ),
  brain: (
    <path d="M12 2a4 4 0 0 1 4 4c2 0 4 2 4 4a4 4 0 0 1-2 3.5V17a6 6 0 0 1-12 0v-3.5A4 4 0 0 1 4 10c0-2 2-4 4-4a4 4 0 0 1 4-4z" />
  ),
  flameCan: (
    <>
      <path d="M12 2c-3 4-6 6.5-6 11a6 6 0 0 0 12 0c0-4.5-3-7-6-11z" />
      <path d="M12 18a4 4 0 0 1-4-4" />
    </>
  ),
  paw: (
    <>
      <ellipse cx="12" cy="15.5" rx="4.5" ry="3.8" />
      <ellipse cx="5.5" cy="10.5" rx="1.8" ry="2.4" />
      <ellipse cx="9.5" cy="6.5" rx="1.8" ry="2.4" />
      <ellipse cx="14.5" cy="6.5" rx="1.8" ry="2.4" />
      <ellipse cx="18.5" cy="10.5" rx="1.8" ry="2.4" />
    </>
  ),
  box: (
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.3 7 12 12l8.7-5M12 22V12" />
    </>
  ),
};

export default function Icon({ name, size = 22, strokeWidth = 1.8 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
