import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Gauge,
  HardHat,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Settings2,
  ShieldCheck,
  Snowflake,
  Store,
  ThermometerSnowflake,
  Wrench,
  Zap,
} from 'lucide-react';
import { IndustrialVisual } from './components/IndustrialVisual';
import { ChillerIllustration, HvacIllustration, PmocIllustration } from './components/ServiceIllustrations';
import { buildWhatsAppUrl, siteConfig } from './config/site';

const services = [
  {
    icon: ThermometerSnowflake,
    title: 'Climatização comercial',
    text: 'Instalação, adequação e manutenção de sistemas de ar-condicionado para operações que não podem parar.',
  },
  {
    icon: Factory,
    title: 'Refrigeração industrial',
    text: 'Diagnóstico técnico e manutenção orientada à disponibilidade, estabilidade térmica e continuidade operacional.',
  },
  {
    icon: Gauge,
    title: 'Chillers e água gelada',
    text: 'Análise de desempenho, falhas, parâmetros de operação, componentes e condições do circuito térmico.',
  },
  {
    icon: ClipboardCheck,
    title: 'PMOC e documentação',
    text: 'Plano, registros, rotinas, evidências e acompanhamento técnico para uma gestão organizada da climatização.',
  },
  {
    icon: Wrench,
    title: 'Manutenção preventiva e corretiva',
    text: 'Intervenções planejadas, diagnóstico de causa e correções com foco em confiabilidade e vida útil dos ativos.',
  },
  {
    icon: Settings2,
    title: 'Instalações e melhorias',
    text: 'Projetos de implantação, substituição, retrofit e ajustes de capacidade conforme a necessidade da operação.',
  },
];

const sectors = [
  { icon: Factory, label: 'Indústrias e plantas produtivas' },
  { icon: Store, label: 'Comércio, varejo e supermercados' },
  { icon: Building2, label: 'Escritórios e edifícios corporativos' },
  { icon: ShieldCheck, label: 'Ambientes com exigência de controle e registro' },
];

const process = [
  {
    number: '01',
    title: 'Levantamento técnico',
    text: 'Entendimento da operação, equipamentos, sintomas, histórico e criticidade do ambiente.',
  },
  {
    number: '02',
    title: 'Diagnóstico e prioridade',
    text: 'Identificação dos riscos, causas prováveis, necessidades documentais e plano de ação recomendado.',
  },
  {
    number: '03',
    title: 'Execução controlada',
    text: 'Serviço realizado com critérios técnicos, organização, segurança e comunicação objetiva.',
  },
  {
    number: '04',
    title: 'Registro e continuidade',
    text: 'Entrega das informações relevantes e orientação para manter o sistema estável ao longo do tempo.',
  },
];

const faqs = [
  {
    q: 'Vocês atendem equipamentos residenciais?',
    a: 'A proposta principal é atender demandas comerciais e industriais. Casos residenciais de maior complexidade podem ser avaliados sob consulta.',
  },
  {
    q: 'É possível solicitar apenas o PMOC ou a documentação?',
    a: 'Sim. A necessidade é avaliada conforme o sistema, o ambiente e o escopo técnico. O serviço pode envolver elaboração, atualização, acompanhamento ou organização dos registros.',
  },
  {
    q: 'Vocês trabalham com contratos de manutenção?',
    a: 'Sim. Podem ser estruturados atendimentos recorrentes para reduzir falhas, organizar rotinas e melhorar a previsibilidade da operação.',
  },
  {
    q: 'O atendimento inclui chillers e sistemas centrais?',
    a: 'Sim. A página foi posicionada justamente para demandas comerciais e industriais, incluindo chillers, água gelada e sistemas de maior porte.',
  },
];

function scrollToContact() {
  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ContactButton({ compact = false }: { compact?: boolean }) {
  const url = buildWhatsAppUrl(
    'Olá, Marcos. Gostaria de solicitar uma avaliação técnica para um sistema de climatização ou refrigeração.',
  );

  if (url) {
    return (
      <a className={compact ? 'button button--compact' : 'button'} href={url} target="_blank" rel="noreferrer">
        <MessageCircle size={compact ? 18 : 20} />
        {siteConfig.contact.whatsappLabel}
      </a>
    );
  }

  return (
    <button className={compact ? 'button button--compact' : 'button'} type="button" onClick={scrollToContact}>
      <MessageCircle size={compact ? 18 : 20} />
      {siteConfig.contact.whatsappLabel}
    </button>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#topo" className="brand" aria-label="Voltar ao início">
            <span className="brand-mark" aria-hidden="true">
              <Snowflake size={25} />
            </span>
            <span>
              <strong>{siteConfig.brand.name}</strong>
              <small>{siteConfig.brand.descriptor}</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a>
            <a href="#engenharia">Diferenciais</a>
            <a href="#pmoc">PMOC</a>
            <a href="#sobre">Sobre</a>
          </nav>
          <ContactButton compact />
        </div>
      </header>

      <main>
        <section className="hero" id="topo">
          <div className="hero-orb hero-orb--one" />
          <div className="hero-orb hero-orb--two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><HardHat size={17} /> Engenharia aplicada à operação</div>
              <h1>
                Climatização e refrigeração com <span>diagnóstico, execução e responsabilidade técnica.</span>
              </h1>
              <p className="hero-lead">
                Soluções comerciais e industriais em ar-condicionado, refrigeração, chillers, manutenção, PMOC e documentação — conduzidas por um engenheiro de manutenção com experiência em ambientes de grande porte.
              </p>
              <div className="hero-actions">
                <ContactButton />
                <a className="button button--ghost" href="#solucoes">
                  Ver soluções <ArrowRight size={19} />
                </a>
              </div>
              <div className="hero-proof" aria-label="Principais diferenciais">
                <div><CheckCircle2 size={18} /><span>Visão de engenharia</span></div>
                <div><CheckCircle2 size={18} /><span>Atuação comercial e industrial</span></div>
                <div><CheckCircle2 size={18} /><span>Documentação e rastreabilidade</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-status"><span /> Sistema monitorado</div>
              <IndustrialVisual />
              <div className="floating-card floating-card--top">
                <Zap size={19} />
                <span><strong>Eficiência operacional</strong><small>decisões orientadas por dados</small></span>
              </div>
              <div className="floating-card floating-card--bottom">
                <FileCheck2 size={19} />
                <span><strong>Controle documentado</strong><small>rotinas, evidências e histórico</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-band" aria-label="Especialidades">
          <div className="container trust-grid">
            <span>Ar-condicionado</span>
            <span>Refrigeração</span>
            <span>Chillers</span>
            <span>PMOC</span>
            <span>Manutenção</span>
            <span>Documentação</span>
          </div>
        </section>

        <section className="section" id="solucoes">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-kicker">Soluções completas</span>
              <h2>Do equipamento isolado ao sistema central.</h2>
              <p>Atendimento pensado para reduzir improviso, organizar a manutenção e dar mais segurança às decisões técnicas.</p>
            </div>
            <div className="services-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="service-card" key={title}>
                  <div className="service-icon"><Icon size={25} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="card-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark" id="engenharia">
          <div className="container engineering-grid">
            <div>
              <span className="section-kicker">Mais do que executar uma ordem</span>
              <h2>Engenharia para entender o problema antes de trocar componentes.</h2>
              <p className="section-intro">
                Uma falha térmica pode envolver capacidade inadequada, condição de operação, sujeira, vazamento, automação, fluxo, instalação ou manutenção deficiente. O serviço começa pela leitura correta do sistema.
              </p>
              <div className="engineering-points">
                <div><span>01</span><p><strong>Diagnóstico estruturado</strong> para reduzir tentativas, retrabalho e substituições sem causa comprovada.</p></div>
                <div><span>02</span><p><strong>Criticidade operacional</strong> considerada na definição de prioridade, prazo e estratégia de intervenção.</p></div>
                <div><span>03</span><p><strong>Manutenção com histórico</strong> para transformar atendimentos isolados em conhecimento sobre o ativo.</p></div>
              </div>
            </div>
            <div className="engineering-stack">
              <article className="technical-card technical-card--featured">
                <ChillerIllustration />
                <div><span>Engenharia térmica</span><h3>Desempenho, capacidade e confiabilidade</h3></div>
              </article>
              <article className="technical-card"><HvacIllustration /><div><span>Climatização</span><h3>Conforto e estabilidade para a operação</h3></div></article>
              <article className="technical-card"><PmocIllustration /><div><span>Gestão técnica</span><h3>Rotinas e registros que permanecem organizados</h3></div></article>
            </div>
          </div>
        </section>

        <section className="section sectors-section">
          <div className="container sectors-layout">
            <div className="section-heading">
              <span className="section-kicker">Aplicações</span>
              <h2>Soluções adaptadas ao risco e à rotina de cada ambiente.</h2>
              <p>O atendimento considera criticidade, ocupação, processo produtivo, necessidade de continuidade e exigências documentais.</p>
            </div>
            <div className="sectors-grid">
              {sectors.map(({ icon: Icon, label }) => (
                <div className="sector-card" key={label}><Icon size={24} /><span>{label}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pmoc-section" id="pmoc">
          <div className="container pmoc-grid">
            <div className="pmoc-visual">
              <div className="document-sheet">
                <div className="document-head"><Snowflake size={22} /><span>PMOC</span></div>
                <strong>Plano de Manutenção, Operação e Controle</strong>
                <div className="document-row"><CheckCircle2 size={17} /> Identificação dos sistemas</div>
                <div className="document-row"><CheckCircle2 size={17} /> Rotinas e periodicidades</div>
                <div className="document-row"><CheckCircle2 size={17} /> Registros das intervenções</div>
                <div className="document-row"><CheckCircle2 size={17} /> Responsabilidades e acompanhamento</div>
                <div className="document-stamp">CONTROLE TÉCNICO</div>
              </div>
            </div>
            <div>
              <span className="section-kicker">PMOC e conformidade</span>
              <h2>Documentação que transforma manutenção em processo controlado.</h2>
              <p>
                O PMOC organiza equipamentos, rotinas, periodicidades, responsáveis e registros da climatização. A Lei nº 13.589/2018 dispõe sobre a manutenção de instalações e equipamentos de sistemas de climatização em ambientes de uso público e coletivo.
              </p>
              <ul className="check-list">
                <li><CheckCircle2 size={19} /> Inventário e identificação dos equipamentos</li>
                <li><CheckCircle2 size={19} /> Planejamento das atividades preventivas</li>
                <li><CheckCircle2 size={19} /> Registro das condições e intervenções</li>
                <li><CheckCircle2 size={19} /> Orientação técnica conforme o escopo da instalação</li>
              </ul>
              <a className="text-link" href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13589.htm" target="_blank" rel="noreferrer">
                Consultar a Lei nº 13.589/2018 <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-kicker">Atendimento organizado</span>
              <h2>Um caminho claro do primeiro contato à continuidade da operação.</h2>
            </div>
            <div className="process-grid">
              {process.map((item) => (
                <article className="process-card" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="container about-grid">
            <div className="about-portrait" aria-label="Espaço reservado para foto profissional de Marcos Soares">
              <div className="portrait-initials">MS</div>
              <div className="portrait-lines"><span /><span /><span /></div>
              <p>Adicione aqui uma foto profissional sem alterar o layout</p>
            </div>
            <div>
              <span className="section-kicker">Experiência aplicada ao campo</span>
              <h2>Marcos Soares</h2>
              <h3 className="about-role">{siteConfig.professional.title}</h3>
              <p>
                Experiência construída em operações industriais e comerciais de grande porte, acompanhando manutenção, falhas, planejamento, equipes e disponibilidade de sistemas essenciais.
              </p>
              <p>
                A proposta é unir conhecimento de engenharia com comunicação direta: identificar o que realmente afeta o sistema, definir a intervenção adequada e deixar a operação mais organizada depois do atendimento.
              </p>
              <div className="credential-box"><ShieldCheck size={22} /><span>{siteConfig.professional.registration}</span></div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker">Solicite uma avaliação</span>
              <h2>Conte o que está acontecendo com o seu sistema.</h2>
              <p>Envie as informações iniciais. O contato seguinte será direcionado ao diagnóstico da necessidade, sem transformar a conversa em um roteiro comercial genérico.</p>
              <div className="contact-list">
                <div><MapPin size={20} /><span>{siteConfig.contact.serviceArea}</span></div>
                <div><Mail size={20} /><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div>
                <div><Phone size={20} /><span>Telefone e WhatsApp configuráveis em <code>src/config/site.ts</code></span></div>
              </div>
            </div>
            <form className="contact-form" name="avaliacao-tecnica" method="POST" action="/obrigado.html" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="avaliacao-tecnica" />
              <p className="hidden-field"><label>Não preencha: <input name="bot-field" /></label></p>
              <div className="form-row">
                <label>Nome<input required name="nome" type="text" autoComplete="name" maxLength={80} placeholder="Seu nome" /></label>
                <label>Empresa<input name="empresa" type="text" autoComplete="organization" maxLength={100} placeholder="Nome da empresa" /></label>
              </div>
              <div className="form-row">
                <label>Telefone / WhatsApp<input required name="telefone" type="tel" autoComplete="tel" maxLength={24} placeholder="(00) 00000-0000" /></label>
                <label>E-mail<input name="email" type="email" autoComplete="email" maxLength={120} placeholder="voce@empresa.com.br" /></label>
              </div>
              <label>Qual é a necessidade?
                <select required name="necessidade" defaultValue="">
                  <option value="" disabled>Selecione uma opção</option>
                  <option>Instalação ou substituição de ar-condicionado</option>
                  <option>Manutenção preventiva ou corretiva</option>
                  <option>Refrigeração industrial</option>
                  <option>Chiller ou sistema de água gelada</option>
                  <option>PMOC e documentação</option>
                  <option>Avaliação técnica geral</option>
                </select>
              </label>
              <label>Conte brevemente o cenário<textarea required name="mensagem" rows={5} maxLength={1200} placeholder="Equipamentos envolvidos, sintomas, local e urgência..." /></label>
              <button className="button form-submit" type="submit">Enviar solicitação <ArrowRight size={19} /></button>
              <small>Seus dados serão usados apenas para retorno sobre esta solicitação.</small>
            </form>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div className="section-heading"><span className="section-kicker">Dúvidas frequentes</span><h2>Informação direta antes do primeiro contato.</h2></div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.q}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <div><span className="section-kicker">Refrigeração com visão de engenharia</span><h2>Mais segurança técnica para sistemas que não podem parar.</h2></div>
            <ContactButton />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="brand brand--footer"><span className="brand-mark"><Snowflake size={23} /></span><span><strong>{siteConfig.brand.name}</strong><small>{siteConfig.brand.descriptor}</small></span></div>
          <p>© {new Date().getFullYear()} {siteConfig.legal.companyName}. Todos os direitos reservados.</p>
          <a href="#topo">Voltar ao topo ↑</a>
        </div>
      </footer>
    </div>
  );
}
