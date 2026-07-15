export function IndustrialVisual() {
  return (
    <svg viewBox="0 0 760 620" role="img" aria-label="Painel ilustrativo de um sistema de climatização e refrigeração">
      <defs>
        <linearGradient id="thermal-card" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="var(--visual-surface-1)" />
          <stop offset="1" stopColor="var(--visual-surface-2)" />
        </linearGradient>
        <linearGradient id="thermal-blue" x1="0" x2="1">
          <stop stopColor="var(--visual-blue-1)" />
          <stop offset="1" stopColor="var(--visual-blue-2)" />
        </linearGradient>
        <linearGradient id="thermal-warm" x1="0" x2="1">
          <stop stopColor="var(--visual-warm-1)" />
          <stop offset="1" stopColor="var(--visual-warm-2)" />
        </linearGradient>
        <filter id="thermal-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="20" stdDeviation="24" floodColor="var(--visual-shadow)" floodOpacity=".24" />
        </filter>
      </defs>

      <rect x="42" y="30" width="676" height="556" rx="54" fill="url(#thermal-card)" stroke="var(--visual-line)" strokeWidth="2" filter="url(#thermal-shadow)" />
      <circle cx="628" cy="104" r="54" fill="var(--visual-bubble-blue)" />
      <circle cx="113" cy="502" r="82" fill="var(--visual-bubble-warm)" />

      <rect x="82" y="72" width="596" height="74" rx="23" fill="var(--visual-panel)" stroke="var(--visual-line)" />
      <text x="110" y="106" fill="var(--visual-title)" fontSize="18" fontWeight="800">CENTRAL TÉRMICA</text>
      <text x="110" y="130" fill="var(--visual-muted)" fontSize="13">Operação • manutenção • documentação</text>
      <rect x="579" y="93" width="70" height="32" rx="16" fill="var(--visual-status-bg)" />
      <circle cx="599" cy="109" r="6" fill="var(--visual-teal)" />
      <text x="614" y="114" fill="var(--visual-status-text)" fontSize="11" fontWeight="700">online</text>

      <g transform="translate(82 178)">
        <rect width="282" height="326" rx="34" fill="var(--visual-panel)" stroke="var(--visual-line)" />
        <text x="28" y="39" fill="var(--visual-kicker)" fontSize="13" fontWeight="800">CHILLER / ÁGUA GELADA</text>
        <circle cx="141" cy="166" r="78" fill="none" stroke="var(--visual-ring)" strokeWidth="22" />
        <circle cx="141" cy="166" r="78" fill="none" stroke="url(#thermal-blue)" strokeWidth="15" strokeDasharray="316 174" strokeLinecap="round" transform="rotate(-90 141 166)" />
        <text x="141" y="158" textAnchor="middle" fill="var(--visual-title)" fontSize="37" fontWeight="850">7.2°C</text>
        <text x="141" y="184" textAnchor="middle" fill="var(--visual-muted)" fontSize="13">temperatura de saída</text>
        <rect x="36" y="270" width="210" height="13" rx="7" fill="var(--visual-progress-bg)" />
        <rect x="36" y="270" width="155" height="13" rx="7" fill="url(#thermal-blue)" />
        <text x="36" y="305" fill="var(--visual-muted)" fontSize="12">Estabilidade térmica</text>
        <text x="232" y="305" textAnchor="end" fill="var(--visual-title)" fontSize="12" fontWeight="800">74%</text>
      </g>

      <g transform="translate(394 178)">
        <rect width="284" height="148" rx="28" fill="var(--visual-panel)" stroke="var(--visual-line)" />
        <text x="26" y="36" fill="var(--visual-kicker)" fontSize="13" fontWeight="800">EFICIÊNCIA DO SISTEMA</text>
        <path d="M28 109 C62 94, 88 100, 118 74 S174 78, 205 55 S247 58, 258 43" fill="none" stroke="url(#thermal-blue)" strokeWidth="6" strokeLinecap="round" />
        <path d="M28 118H258" stroke="var(--visual-grid)" strokeWidth="2" />
        <circle cx="258" cy="43" r="8" fill="var(--visual-blue-1)" />
        <rect x="190" y="93" width="68" height="22" rx="11" fill="var(--visual-status-bg)" />
        <text x="224" y="108" textAnchor="middle" fill="var(--visual-status-text)" fontSize="10" fontWeight="800">estável</text>
      </g>

      <g transform="translate(394 356)">
        <rect width="284" height="148" rx="28" fill="var(--visual-panel)" stroke="var(--visual-line)" />
        <text x="26" y="36" fill="var(--visual-kicker)" fontSize="13" fontWeight="800">PLANO DE MANUTENÇÃO</text>
        <circle cx="39" cy="69" r="11" fill="var(--visual-check-bg)" />
        <path d="M34 69l4 4 7-9" fill="none" stroke="var(--visual-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="60" y="74" fill="var(--visual-body)" fontSize="13">Inspeção técnica</text>
        <circle cx="39" cy="101" r="11" fill="var(--visual-check-bg)" />
        <path d="M34 101l4 4 7-9" fill="none" stroke="var(--visual-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="60" y="106" fill="var(--visual-body)" fontSize="13">Registros e documentação</text>
        <circle cx="39" cy="133" r="11" fill="var(--visual-check-bg)" />
        <path d="M34 133l4 4 7-9" fill="none" stroke="var(--visual-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="60" y="138" fill="var(--visual-body)" fontSize="13">Rastreabilidade das rotinas</text>
      </g>

      <path d="M364 341H394" stroke="url(#thermal-warm)" strokeWidth="6" strokeDasharray="6 8" strokeLinecap="round" />
      <path d="M536 326V356" stroke="url(#thermal-warm)" strokeWidth="6" strokeDasharray="6 8" strokeLinecap="round" />
    </svg>
  );
}
