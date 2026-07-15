export const siteConfig = {
  brand: {
    name: 'Marcos Soares',
    descriptor: 'Engenharia e Refrigeração',
  },
  contact: {
    whatsappNumber: '',
    whatsappLabel: 'Solicitar avaliação técnica',
    email: 'contato@marcossoares.com.br',
    serviceArea: 'Atendimento comercial e industrial sob consulta',
  },
  professional: {
    title: 'Engenheiro de manutenção especializado em refrigeração',
    registration: 'Inclua aqui o CREA e demais registros profissionais',
  },
  legal: {
    companyName: 'Marcos Soares Engenharia e Refrigeração',
  },
};

export function buildWhatsAppUrl(message: string): string | null {
  const digits = siteConfig.contact.whatsappNumber.replace(/\D/g, '');
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
