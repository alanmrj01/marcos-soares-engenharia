export function ChillerIllustration() {
  return (
    <svg viewBox="0 0 360 230" aria-hidden="true">
      <defs>
        <linearGradient id="chiller-body" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="var(--illustration-surface-1)" />
          <stop offset="1" stopColor="var(--illustration-surface-2)" />
        </linearGradient>
        <linearGradient id="chiller-accent" x1="0" x2="1">
          <stop stopColor="var(--illustration-blue)" />
          <stop offset="1" stopColor="var(--illustration-teal)" />
        </linearGradient>
      </defs>
      <rect x="38" y="29" width="284" height="170" rx="31" fill="url(#chiller-body)" stroke="var(--illustration-line)" />
      <rect x="68" y="55" width="224" height="40" rx="13" fill="var(--illustration-panel)" />
      <circle cx="116" cy="145" r="35" fill="none" stroke="var(--illustration-ring)" strokeWidth="12" />
      <path d="M116 114v62M85 145h62M94 123l44 44M138 123l-44 44" stroke="url(#chiller-accent)" strokeWidth="6" strokeLinecap="round" />
      <rect x="169" y="124" width="91" height="12" rx="6" fill="var(--illustration-ring)" />
      <rect x="169" y="124" width="64" height="12" rx="6" fill="url(#chiller-accent)" />
      <rect x="169" y="154" width="68" height="9" rx="5" fill="var(--illustration-line)" />
    </svg>
  );
}

export function PmocIllustration() {
  return (
    <svg viewBox="0 0 360 230" aria-hidden="true">
      <rect x="83" y="22" width="194" height="184" rx="28" fill="var(--illustration-surface-1)" stroke="var(--illustration-line)" />
      <rect x="116" y="48" width="128" height="18" rx="9" fill="var(--illustration-warm)" opacity=".9" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M114 97l8 8 17-20" stroke="var(--illustration-teal)" strokeWidth="6" />
        <path d="M151 99h78" stroke="var(--illustration-line)" strokeWidth="8" />
        <path d="M114 137l8 8 17-20" stroke="var(--illustration-teal)" strokeWidth="6" />
        <path d="M151 139h78" stroke="var(--illustration-line)" strokeWidth="8" />
        <path d="M114 177l8 8 17-20" stroke="var(--illustration-teal)" strokeWidth="6" />
        <path d="M151 179h57" stroke="var(--illustration-line)" strokeWidth="8" />
      </g>
    </svg>
  );
}

export function HvacIllustration() {
  return (
    <svg viewBox="0 0 360 230" aria-hidden="true">
      <defs>
        <linearGradient id="hvac-air" x1="0" x2="1">
          <stop stopColor="var(--illustration-blue)" />
          <stop offset="1" stopColor="var(--illustration-teal)" />
        </linearGradient>
      </defs>
      <rect x="48" y="54" width="264" height="118" rx="31" fill="var(--illustration-surface-1)" stroke="var(--illustration-line)" />
      <rect x="80" y="79" width="200" height="15" rx="8" fill="var(--illustration-panel)" />
      <path d="M92 133c19-24 38-24 57 0s38 24 57 0 38-24 57 0" fill="none" stroke="url(#hvac-air)" strokeWidth="8" strokeLinecap="round" />
      <path d="M120 183v19M180 183v19M240 183v19" stroke="var(--illustration-blue)" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
