export function IndustrialVisual() {
  return (
    <svg viewBox="0 0 760 620" role="img" aria-label="Sistema industrial de climatização e refrigeração">
      <defs>
        <linearGradient id="panel" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#15354a" />
          <stop offset="1" stopColor="#071923" />
        </linearGradient>
        <linearGradient id="ice" x1="0" x2="1">
          <stop stopColor="#81edff" />
          <stop offset="1" stopColor="#347dff" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="34" y="34" width="692" height="552" rx="46" fill="url(#panel)" stroke="#2e607b" strokeWidth="2" />
      <rect x="70" y="72" width="620" height="82" rx="22" fill="#091e2b" stroke="#25536a" />
      <text x="104" y="111" fill="#7ce7ff" fontSize="18" fontWeight="700">CENTRAL TÉRMICA</text>
      <text x="104" y="137" fill="#a7c7d7" fontSize="14">Monitoramento • operação • manutenção</text>
      <circle cx="620" cy="113" r="20" fill="#0c2c3c" stroke="#51dbff" />
      <circle cx="620" cy="113" r="8" fill="#51dbff" filter="url(#glow)" />

      <g transform="translate(82 190)">
        <rect width="268" height="320" rx="30" fill="#0a1f2c" stroke="#2c5b73" />
        <rect x="30" y="30" width="208" height="54" rx="12" fill="#112f41" />
        <text x="48" y="63" fill="#dff9ff" fontSize="17" fontWeight="700">CHILLER / ÁGUA GELADA</text>
        <circle cx="134" cy="190" r="75" fill="none" stroke="#1f4d65" strokeWidth="21" />
        <circle cx="134" cy="190" r="75" fill="none" stroke="url(#ice)" strokeWidth="16" strokeDasharray="300 180" strokeLinecap="round" transform="rotate(-90 134 190)" />
        <text x="134" y="183" textAnchor="middle" fill="#ffffff" fontSize="34" fontWeight="800">7.2°C</text>
        <text x="134" y="208" textAnchor="middle" fill="#93b9cb" fontSize="14">temperatura de saída</text>
        <rect x="42" y="282" width="184" height="12" rx="6" fill="#173c50" />
        <rect x="42" y="282" width="139" height="12" rx="6" fill="url(#ice)" />
      </g>

      <g transform="translate(386 190)">
        <rect width="290" height="146" rx="26" fill="#0a1f2c" stroke="#2c5b73" />
        <text x="28" y="36" fill="#84e8ff" fontSize="15" fontWeight="700">EFICIÊNCIA DO SISTEMA</text>
        <path d="M30 104 C72 82, 88 95, 122 66 S184 68, 216 46 S252 50, 264 38" fill="none" stroke="url(#ice)" strokeWidth="6" strokeLinecap="round" />
        <path d="M30 112H262" stroke="#23495d" strokeWidth="2" />
        <circle cx="264" cy="38" r="7" fill="#7be8ff" />
      </g>

      <g transform="translate(386 364)">
        <rect width="290" height="146" rx="26" fill="#0a1f2c" stroke="#2c5b73" />
        <text x="28" y="37" fill="#84e8ff" fontSize="15" fontWeight="700">PLANO DE MANUTENÇÃO</text>
        <g fill="#dff8ff" fontSize="14">
          <text x="28" y="72">✓ inspeção técnica</text>
          <text x="28" y="98">✓ registros e documentação</text>
          <text x="28" y="124">✓ rastreabilidade das rotinas</text>
        </g>
      </g>

      <path d="M350 350H386" stroke="#58dfff" strokeWidth="6" strokeDasharray="7 8" />
      <path d="M530 336V364" stroke="#58dfff" strokeWidth="6" strokeDasharray="7 8" />
    </svg>
  );
}
