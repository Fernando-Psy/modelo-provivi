# Priscila Borges Moraes — Site profissional

Projeto React + TailwindCSS (Vite) para site profissional de psicologia, com páginas institucionais e conteúdo.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool ultra-rápido
- **TailwindCSS** - Framework CSS utility-first
- **PostCSS & Autoprefixer** - Processamento de CSS

## 📋 Pré-requisitos

- Node.js 16+
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório ou navegue até a pasta do projeto:

```bash
cd /mnt/projetos/front_end/offline/modelo-provivi
```

2. Instale as dependências:

```bash
npm install
```

## 💻 Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 🏗️ Build para Produção

Para criar a versão de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 📦 Deploy

### Vercel (Recomendado)

1. Instale a CLI da Vercel:

```bash
npm i -g vercel
```

2. Execute o deploy:

```bash
vercel
```

3. Para deploy em produção:

```bash
vercel --prod
```

### Netlify

1. Instale a CLI do Netlify:

```bash
npm i -g netlify-cli
```

2. Execute o build:

```bash
npm run build
```

3. Deploy:

```bash
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Adicione ao `vite.config.js`:

```javascript
base: "/nome-do-repositorio/";
```

2. Instale gh-pages:

```bash
npm i -D gh-pages
```

3. Adicione ao `package.json`:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. Execute:

```bash
npm run deploy
```

## 📁 Estrutura do Projeto

```
site-priscila-borges-moraes/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Cabeçalho com navegação
│   │   ├── Hero.jsx         # Seção principal/banner
│   │   ├── Features.jsx     # Recursos da plataforma
│   │   ├── About.jsx        # Sobre a empresa
│   │   ├── Contact.jsx      # Formulário de contato
│   │   └── Footer.jsx       # Rodapé
│   ├── pages/
│   │   ├── Blog.jsx         # Página de blog
│   │   ├── Documentation.jsx # Página de documentação
│   │   ├── FAQ.jsx          # Perguntas frequentes
│   │   ├── Privacy.jsx      # Política de privacidade
│   │   ├── Terms.jsx        # Termos de uso
│   │   └── Cookies.jsx      # Política de cookies
│   ├── App.jsx              # Componente principal + rotas
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globais + Tailwind
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
├── vite.config.js           # Configuração do Vite
├── tailwind.config.js       # Configuração do Tailwind
└── postcss.config.js        # Configuração do PostCSS
```

## 🎨 Personalização

### Cores

As cores principais podem ser alteradas em `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Altere aqui
      }
    }
  }
}
```

### Componentes

Todos os componentes estão em `src/components/` e podem ser facilmente personalizados.

## 📝 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Menu hambúrguer para mobile
- ✅ Navegação suave entre seções
- ✅ Sistema de rotas com React Router
- ✅ 6 Páginas institucionais (Blog, Docs, FAQ, Privacidade, Termos, Cookies)
- ✅ Formulário de contato funcional
- ✅ Cards interativos com hover effects
- ✅ FAQ com accordion interativo
- ✅ Animações sutis
- ✅ Otimizado para SEO
- ✅ Performance otimizada

## 🤝 Contato

E-mail: psicologapriscilaborgesmoraes@gmail.com

## 📄 Licença

Este projeto está sob a licença MIT.
