import { useEffect, useRef, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Cpu,
  Droplets,
  Factory,
  FileCheck2,
  Gauge,
  HardHat,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Settings2,
  ShieldCheck,
  Snowflake,
  Store,
  Sun,
  ThermometerSnowflake,
  Wind,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { IndustrialVisual } from './components/IndustrialVisual';
import { ChillerIllustration, HvacIllustration, PmocIllustration } from './components/ServiceIllustrations';
import { buildWhatsAppUrl, siteConfig } from './config/site';

type Theme = 'light' | 'dark';

const services = [
  {
    icon: ThermometerSnowflake,
    number: '01',
    title: 'Climatização comercial',
    text: 'Instalação, adequação e manutenção de sistemas de ar-condicionado para ambientes que dependem de conforto e continuidade.',
    accent: 'blue',
  },
  {
    icon: Factory,
    number: '02',
    title: 'Refrigeração industrial',
    text: 'Diagnóstico técnico e manutenção orientada à estabilidade térmica, confiabilidade e disponibilidade do processo.',
    accent: 'teal',
  },
  {
    icon: Gauge,
    number: '03',
    title: 'Chillers e água gelada',
    text: 'Análise de desempenho, falhas, parâmetros de operação, componentes e condições do circuito térmico.',
    accent: 'violet',
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'PMOC e documentação',
    text: 'Plano, registros, rotinas e evidências para uma gestão organizada e rastreável da climatização.',
    accent: 'warm',
  },
  {
    icon: Wrench,
    number: '05',
    title: 'Manutenção preventiva e corretiva',
    text: 'Intervenções planejadas, investigação de causa e correções com foco na vida útil dos ativos.',
    accent: 'gold',
  },
  {
    icon: Settings2,
    number: '06',
    title: 'Instalações, retrofit e melhorias',
    text: 'Implantação, substituição e adequação de capacidade conforme a necessidade real da operação.',
    accent: 'green',
  },
];

const sectors = [
  { icon: Factory, label: 'Indústrias e plantas produtivas', detail: 'Processo, disponibilidade e criticidade.' },
  { icon: Store, label: 'Comércio, varejo e supermercados', detail: 'Conforto, conservação e continuidade.' },
  { icon: Building2, label: 'Escritórios e edifícios corporativos', detail: 'Ambiente, eficiência e previsibilidade.' },
  { icon: ShieldCheck, label: 'Ambientes com controle e registro', detail: 'Rastreabilidade e rotina documentada.' },
];

const process = [
  {
    number: '01',
    icon: Activity,
    title: 'Levantamento técnico',
    text: 'Leitura do ambiente, equipamentos, sintomas, histórico e criticidade da operação.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Diagnóstico e prioridade',
    text: 'Identificação das causas prováveis, riscos, necessidades documentais e plano recomendado.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Execução controlada',
    text: 'Serviço com critério técnico, organização, segurança e comunicação objetiva.',
  },
  {
    number: '04',
    icon: FileCheck2,
    title: 'Registro e continuidade',
    text: 'Informações relevantes, evidências e orientação para manter o sistema estável.',
  },
];

const faqs = [
  {
    q: 'Vocês atendem equipamentos residenciais?',
    a: 'A atuação principal é comercial e industrial. Demandas residenciais de maior complexidade podem ser avaliadas conforme o equipamento e o escopo.',
  },
  {
    q: 'É possível contratar apenas o PMOC ou a documentação?',
    a: 'Sim. O trabalho pode envolver elaboração, atualização, acompanhamento ou organização de registros, conforme a estrutura existente.',
  },
  {
    q: 'Vocês trabalham com contratos de manutenção?',
    a: 'Sim. O atendimento recorrente pode ser estruturado para reduzir falhas, organizar rotinas e melhorar a previsibilidade da operação.',
  },
  {
    q: 'O atendimento inclui chillers e sistemas centrais?',
    a: 'Sim. O escopo contempla chillers, água gelada, sistemas centrais e outras demandas de maior porte em ambientes comerciais e industriais.',
  },
];

function getInitialTheme(): Theme {
  try {
    const stored = window.localStorage.getItem('ms-theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // A experiência continua funcional mesmo sem armazenamento local.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function scrollToContact() {
  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ContactButton({ compact = false, label }: { compact?: boolean; label?: string }) {
  const url = buildWhatsAppUrl(
    'Olá, Marcos. Gostaria de solicitar uma avaliação técnica para um sistema de climatização ou refrigeração.',
  );
  const text = label ?? siteConfig.contact.whatsappLabel;

  if (url) {
    return (
      <a className={compact ? 'button button--compact' : 'button'} href={url} target="_blank" rel="noreferrer">
        <MessageCircle size={compact ? 17 : 19} />
        <span>{text}</span>
      </a>
    );
  }

  return (
    <button className={compact ? 'button button--compact' : 'button'} type="button" onClick={scrollToContact}>
      <MessageCircle size={compact ? 17 : 19} />
      <span>{text}</span>
    </button>
  );
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0c1110' : '#f5f7f3');
    try {
      window.localStorage.setItem('ms-theme', theme);
    } catch {
      // Preferência não persistida quando o navegador bloqueia o armazenamento.
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  const closeMenu = () => setMenuOpen(false);

  const handleHeroPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty('--tilt-x', `${y * -5}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${x * 7}deg`);
    event.currentTarget.style.setProperty('--spot-x', `${(x + 0.5) * 100}%`);
    event.currentTarget.style.setProperty('--spot-y', `${(y + 0.5) * 100}%`);
  };

  const resetHeroTilt = () => {
    const element = heroVisualRef.current;
    if (!element) return;
    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');
    element.style.setProperty('--spot-x', '50%');
    element.style.setProperty('--spot-y', '50%');
  };

  return (
    <div className="site-shell">
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#topo" className="brand" aria-label="Voltar ao início" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">
              <Snowflake size={22} />
            </span>
            <span className="brand-copy">
              <strong>{siteConfig.brand.name}</strong>
              <small>{siteConfig.brand.descriptor}</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a>
            <a href="#engenharia">Engenharia</a>
            <a href="#pmoc">PMOC</a>
            <a href="#sobre">Sobre</a>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
              title={theme === 'light' ? 'Tema escuro' : 'Tema claro'}
            >
              <span className="theme-toggle__track">
                <Sun className="theme-icon theme-icon--sun" size={16} />
                <Moon className="theme-icon theme-icon--moon" size={16} />
                <span className="theme-toggle__thumb" />
              </span>
            </button>
            <div className="header-contact"><ContactButton compact /></div>
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
          <nav className="container" aria-label="Navegação móvel">
            <a href="#solucoes" onClick={closeMenu}>Soluções <ArrowRight size={17} /></a>
            <a href="#engenharia" onClick={closeMenu}>Engenharia <ArrowRight size={17} /></a>
            <a href="#pmoc" onClick={closeMenu}>PMOC <ArrowRight size={17} /></a>
            <a href="#sobre" onClick={closeMenu}>Sobre <ArrowRight size={17} /></a>
            <ContactButton label="Solicitar avaliação técnica" />
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="topo">
          <div className="hero-mesh" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow"><span className="eyebrow-signal" /><HardHat size={16} /> Engenharia térmica para operações reais</div>
              <h1>
                Sistemas térmicos mais <span>confiáveis.</span><br />Decisões mais <em>seguras.</em>
              </h1>
              <p className="hero-lead">
                Instalação, manutenção, chillers, refrigeração industrial, PMOC e documentação técnica — com visão de engenharia aplicada a ambientes comerciais e industriais.
              </p>
              <div className="hero-actions">
                <ContactButton label="Solicitar avaliação técnica" />
                <a className="button button--secondary" href="#solucoes">
                  Explorar soluções <ArrowRight size={18} />
                </a>
              </div>
              <div className="hero-proof" aria-label="Princípios de trabalho">
                <div><strong>01</strong><span>Diagnóstico antes da intervenção</span></div>
                <div><strong>02</strong><span>Critério para sistemas críticos</span></div>
                <div><strong>03</strong><span>Registro para dar continuidade</span></div>
              </div>
            </div>

            <div
              className="hero-visual"
              aria-label="Painel ilustrativo de engenharia térmica"
              ref={heroVisualRef}
              onPointerMove={handleHeroPointerMove}
              onPointerLeave={resetHeroTilt}
              data-reveal
            >
              <div className="hero-visual__spot" aria-hidden="true" />
              <div className="hero-visual__frame"><IndustrialVisual /></div>
              <div className="visual-chip visual-chip--top">
                <span className="visual-chip__icon visual-chip__icon--teal"><Activity size={17} /></span>
                <span><strong>Operação acompanhada</strong><small>parâmetros e criticidade</small></span>
              </div>
              <div className="visual-chip visual-chip--bottom">
                <span className="visual-chip__icon visual-chip__icon--warm"><FileCheck2 size={17} /></span>
                <span><strong>Manutenção documentada</strong><small>histórico e continuidade</small></span>
              </div>
              <div className="visual-status" aria-hidden="true"><span /> sistema estável</div>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true"><span>Role para explorar</span><i /></div>
        </section>

        <section className="expertise-strip" aria-label="Especialidades">
          <div className="expertise-track">
            {[0, 1].map((group) => (
              <div className="expertise-group" key={group} aria-hidden={group === 1}>
                <span><Wind size={17} /> Ar-condicionado</span>
                <span><Droplets size={17} /> Refrigeração</span>
                <span><Gauge size={17} /> Chillers</span>
                <span><ClipboardCheck size={17} /> PMOC</span>
                <span><Wrench size={17} /> Manutenção</span>
                <span><FileCheck2 size={17} /> Documentação</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section services-section" id="solucoes">
          <div className="container">
            <div className="section-heading section-heading--split" data-reveal>
              <div>
                <span className="section-kicker">Soluções técnicas</span>
                <h2>Do equipamento isolado ao sistema central.</h2>
              </div>
              <p>Um portfólio completo para reduzir improvisos, organizar a manutenção e dar mais segurança às decisões técnicas.</p>
            </div>

            <div className="services-grid">
              {services.map(({ icon: Icon, number, title, text, accent }, index) => (
                <article className={`service-card service-card--${accent}`} key={title} data-reveal style={{ '--delay': `${index * 55}ms` } as React.CSSProperties}>
                  <div className="service-card__top"><span className="service-number">{number}</span><span className="service-icon"><Icon size={24} /></span></div>
                  <div className="service-card__content"><h3>{title}</h3><p>{text}</p></div>
                  <span className="service-arrow" aria-hidden="true"><ArrowRight size={18} /></span>
                  <span className="service-card__glow" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section engineering-section" id="engenharia">
          <div className="container engineering-layout">
            <div className="engineering-copy" data-reveal>
              <span className="section-kicker">Engenharia aplicada ao campo</span>
              <h2>Entender o sistema antes de trocar componentes.</h2>
              <p className="section-intro">
                Uma falha térmica pode envolver capacidade, condição de operação, fluxo, automação, instalação ou manutenção. O serviço começa pela leitura correta do conjunto — não por tentativa e erro.
              </p>
              <div className="engineering-points">
                <div><span><Activity size={18} /></span><p><strong>Diagnóstico estruturado</strong> reduz retrabalho e substituições sem causa comprovada.</p></div>
                <div><span><Clock3 size={18} /></span><p><strong>Criticidade operacional</strong> orienta prioridade, prazo e estratégia de intervenção.</p></div>
                <div><span><Layers3 size={18} /></span><p><strong>Histórico técnico</strong> transforma atendimentos isolados em conhecimento sobre o ativo.</p></div>
              </div>
              <a className="text-link" href="#contato">Apresentar uma necessidade <ArrowRight size={17} /></a>
            </div>

            <div className="engineering-showcase" data-reveal>
              <article className="showcase-card showcase-card--large">
                <div className="showcase-copy"><span>Engenharia térmica</span><h3>Desempenho, capacidade e confiabilidade.</h3><p>Leitura do sistema como um todo para orientar decisões consistentes.</p></div>
                <div className="showcase-illustration"><ChillerIllustration /></div>
              </article>
              <article className="showcase-card">
                <div className="showcase-illustration"><HvacIllustration /></div>
                <div className="showcase-copy"><span>Climatização</span><h3>Conforto e estabilidade para a operação.</h3></div>
              </article>
              <article className="showcase-card showcase-card--accent">
                <div className="showcase-illustration"><PmocIllustration /></div>
                <div className="showcase-copy"><span>Gestão técnica</span><h3>Rotinas e registros que permanecem organizados.</h3></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section sectors-section">
          <div className="container sectors-layout">
            <div className="section-heading" data-reveal>
              <span className="section-kicker">Onde a engenharia faz diferença</span>
              <h2>Cada ambiente tem uma prioridade térmica diferente.</h2>
              <p>O atendimento considera criticidade, ocupação, processo produtivo, continuidade e exigências documentais.</p>
            </div>
            <div className="sectors-grid">
              {sectors.map(({ icon: Icon, label, detail }, index) => (
                <article className="sector-card" key={label} data-reveal style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}>
                  <span className={`sector-icon sector-icon--${index + 1}`}><Icon size={22} /></span>
                  <span><strong>{label}</strong><small>{detail}</small></span>
                  <ArrowRight className="sector-arrow" size={18} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pmoc-section" id="pmoc">
          <div className="container pmoc-grid">
            <div className="pmoc-visual" data-reveal>
              <div className="pmoc-gridlines" aria-hidden="true" />
              <div className="pmoc-orbit pmoc-orbit--one" />
              <div className="pmoc-orbit pmoc-orbit--two" />
              <div className="document-sheet">
                <div className="document-head"><Snowflake size={21} /><span>PMOC</span></div>
                <strong>Plano de Manutenção, Operação e Controle</strong>
                <div className="document-row"><CheckCircle2 size={16} /> Identificação dos sistemas</div>
                <div className="document-row"><CheckCircle2 size={16} /> Rotinas e periodicidades</div>
                <div className="document-row"><CheckCircle2 size={16} /> Registros das intervenções</div>
                <div className="document-row"><CheckCircle2 size={16} /> Responsabilidades e acompanhamento</div>
                <div className="document-stamp">CONTROLE TÉCNICO</div>
              </div>
              <div className="pmoc-note"><ShieldCheck size={17} /><span>Organização, evidência e continuidade.</span></div>
            </div>
            <div data-reveal>
              <span className="section-kicker">PMOC e conformidade</span>
              <h2>Documentação que transforma manutenção em processo controlado.</h2>
              <p>
                O PMOC organiza equipamentos, rotinas, periodicidades, responsáveis e registros. A Lei nº 13.589/2018 dispõe sobre a manutenção de instalações e equipamentos de climatização em ambientes de uso público e coletivo.
              </p>
              <ul className="check-list">
                <li><CheckCircle2 size={18} /> Inventário e identificação dos equipamentos</li>
                <li><CheckCircle2 size={18} /> Planejamento das atividades preventivas</li>
                <li><CheckCircle2 size={18} /> Registro das condições e intervenções</li>
                <li><CheckCircle2 size={18} /> Orientação técnica conforme o escopo da instalação</li>
              </ul>
              <a className="text-link" href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13589.htm" target="_blank" rel="noreferrer">
                Consultar a Lei nº 13.589/2018 <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading section-heading--center" data-reveal>
              <span className="section-kicker">Atendimento organizado</span>
              <h2>Um caminho claro do primeiro contato à continuidade da operação.</h2>
              <p>Menos burocracia para começar. Mais clareza em cada etapa.</p>
            </div>
            <div className="process-grid">
              {process.map(({ number, icon: Icon, title, text }, index) => (
                <article className="process-card" key={number} data-reveal style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}>
                  <div className="process-top"><span>{number}</span><Icon size={21} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <i className="process-line" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="container about-grid">
            <div className="about-portrait" aria-label="Espaço reservado para foto profissional de Marcos Soares" data-reveal>
              <div className="portrait-grid" aria-hidden="true" />
              <div className="portrait-glow" />
              <div className="portrait-initials">MS</div>
              <div className="portrait-badge"><HardHat size={17} /><span>Engenharia de manutenção</span></div>
              <div className="portrait-data portrait-data--one"><Activity size={15} /><span>diagnóstico</span></div>
              <div className="portrait-data portrait-data--two"><ShieldCheck size={15} /><span>confiabilidade</span></div>
              <p>Substitua este painel por uma foto profissional quando estiver disponível.</p>
            </div>
            <div className="about-copy" data-reveal>
              <span className="section-kicker">Experiência aplicada ao campo</span>
              <h2>Marcos Soares</h2>
              <h3 className="about-role">{siteConfig.professional.title}</h3>
              <p>
                Anos de experiência em operações industriais e comerciais de grande porte, acompanhando manutenção, falhas, planejamento, equipes e disponibilidade de sistemas essenciais.
              </p>
              <p>
                A proposta é unir conhecimento de engenharia com comunicação direta: identificar o que realmente afeta o sistema, definir a intervenção adequada e deixar a operação mais organizada depois do atendimento.
              </p>
              <div className="about-values">
                <div><ShieldCheck size={20} /><span><strong>Responsabilidade técnica</strong><small>decisões fundamentadas</small></span></div>
                <div><Activity size={20} /><span><strong>Visão de manutenção</strong><small>foco em confiabilidade</small></span></div>
              </div>
              <div className="credential-box"><ShieldCheck size={21} /><span>{siteConfig.professional.registration}</span></div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="contact-orb contact-orb--one" aria-hidden="true" />
          <div className="contact-orb contact-orb--two" aria-hidden="true" />
          <div className="container contact-grid">
            <div className="contact-copy" data-reveal>
              <span className="section-kicker">Solicite uma avaliação</span>
              <h2>Conte o que está acontecendo com o seu sistema.</h2>
              <p>Envie as informações iniciais. O retorno será direcionado à necessidade técnica, com uma conversa objetiva sobre o cenário.</p>
              <div className="contact-list">
                <div><MapPin size={19} /><span>{siteConfig.contact.serviceArea}</span></div>
                <div><Mail size={19} /><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div>
                <div><Phone size={19} /><span>Telefone e WhatsApp configuráveis em <code>src/config/site.ts</code></span></div>
              </div>
              <div className="contact-trust"><Zap size={17} /><span>Retorno objetivo, direcionado ao cenário técnico.</span></div>
            </div>
            <form className="contact-form" name="avaliacao-tecnica" method="POST" action="/obrigado.html" data-netlify="true" data-netlify-honeypot="bot-field" data-reveal>
              <input type="hidden" name="form-name" value="avaliacao-tecnica" />
              <p className="hidden-field"><label>Não preencha: <input name="bot-field" /></label></p>
              <div className="form-header"><span>Solicitação técnica</span><strong>Descreva o cenário em poucos minutos.</strong></div>
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
              <button className="button form-submit" type="submit">Enviar solicitação <ArrowRight size={18} /></button>
              <small>Seus dados serão usados apenas para retorno sobre esta solicitação.</small>
            </form>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div className="section-heading" data-reveal><span className="section-kicker">Dúvidas frequentes</span><h2>Informação direta antes do primeiro contato.</h2></div>
            <div className="faq-list" data-reveal>
              {faqs.map((faq) => (
                <details key={faq.q}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta__grid" aria-hidden="true" />
          <div className="container final-cta-inner" data-reveal>
            <div><span className="section-kicker">Refrigeração com visão de engenharia</span><h2>Mais segurança técnica para sistemas que não podem parar.</h2></div>
            <ContactButton label="Solicitar avaliação" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="brand brand--footer"><span className="brand-mark"><Snowflake size={20} /></span><span className="brand-copy"><strong>{siteConfig.brand.name}</strong><small>{siteConfig.brand.descriptor}</small></span></div>
          <p>© {new Date().getFullYear()} {siteConfig.legal.companyName}. Todos os direitos reservados.</p>
          <a href="#topo">Voltar ao topo ↑</a>
        </div>
      </footer>
    </div>
  );
}
