# Marcos Soares — Engenharia Térmica & Refrigeração

Landing page/portfólio profissional em React, Vite e TypeScript para serviços de climatização, refrigeração comercial e industrial, chillers, PMOC, documentação e manutenção técnica.

## Destaques da versão 2.0

- Direção visual premium e editorial.
- Tema claro e escuro com preferência persistida.
- Cabeçalho translúcido e menu mobile completo.
- Microinterações de hover, lift, scale, glow e feedback de foco.
- Hero com painel técnico interativo e efeito de profundidade no desktop.
- Cards em estilo bento com hierarquia responsiva.
- Animações de entrada leves e respeitando `prefers-reduced-motion`.
- Formulário preparado para Netlify Forms.
- Página de confirmação e headers de segurança.
- Nenhuma imagem, fonte ou script externo.

## Personalização de dados

Edite apenas:

```text
src/config/site.ts
```

Nesse arquivo ficam nome, descrição, WhatsApp, e-mail, região de atendimento, registro profissional e razão social.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

A pasta final será `dist`.

## Netlify

- Diretório base: vazio
- Comando de build: `npm run build`
- Diretório de publicação: `dist`
- Diretório de funções: vazio

O formulário reconhecido pelo Netlify chama-se `avaliacao-tecnica`.
