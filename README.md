# Marcos Soares — Engenharia Térmica & Refrigeração

Landing page/portfólio React + Vite + TypeScript para serviços de climatização e refrigeração comercial e industrial.

## Direção visual

- interface editorial, humana e tecnológica;
- tema claro e escuro;
- preferência inicial baseada no sistema operacional;
- escolha do visitante salva no navegador;
- ilustrações vetoriais locais e responsivas;
- nenhum script, imagem ou fonte externa.

## Executar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

A pasta final será `dist`.

## Publicar no Netlify

- Diretório base: vazio
- Comando de build: `npm run build`
- Diretório de publicação: `dist`
- Diretório de funções: vazio

O formulário utiliza Netlify Forms e será identificado como `avaliacao-tecnica`.

## Dados que precisam ser personalizados

Edite apenas:

```text
src/config/site.ts
```

Preencha:

- número de WhatsApp, somente números e com código do país;
- e-mail;
- região de atendimento;
- registro profissional/CREA;
- nome empresarial, caso exista.

Enquanto o WhatsApp estiver vazio, os botões direcionam ao formulário da página.

## Foto profissional

A seção “Marcos Soares” contém um painel visual pronto para receber uma foto real.

Para inserir a foto:

1. adicione a imagem em `public/marcos-soares.webp`;
2. substitua o conteúdo de `.about-portrait` no componente `src/App.tsx` por uma tag `<img>`;
3. mantenha `width: 100%`, `height: 100%` e `object-fit: cover`.

## Conteúdo e legislação

A seção de PMOC cita a Lei Federal nº 13.589/2018 e contém link para o texto oficial no portal do Planalto. O escopo técnico e documental deve ser confirmado conforme cada instalação.

## Segurança e desempenho

- cabeçalhos de segurança no `netlify.toml`;
- formulário com honeypot;
- nenhuma biblioteca de animação ou imagem externa;
- ilustrações vetoriais locais;
- carregamento sem fontes ou scripts de terceiros;
- cache longo para assets versionados.
