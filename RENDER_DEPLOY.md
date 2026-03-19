# Deploy no Render - Site Priscila Borges Moraes

## ✅ Problema Resolvido: Página em Branco

O problema da página em branco foi corrigido! Agora o projeto está configurado corretamente para o Render.

## 🔧 Correções Aplicadas

### 1. Arquivo `_redirects` Criado

- **Localização:** `public/_redirects`
- **Função:** Redireciona todas as rotas para `index.html` (necessário para SPAs com React Router)
- **Conteúdo:**

```
/*    /index.html   200
```

### 2. Arquivo `render.yaml` Criado

- **Localização:** `render.yaml` (raiz do projeto)
- **Função:** Configuração automática do Render
- **Configuração:**
  - Tipo: Static Site
  - Build: `npm install && npm run build`
  - Pasta de publicação: `./dist`
  - Rotas: Rewrite de todas as rotas para `/index.html`

## 📝 Como Fazer Deploy no Render

### Opção 1: Deploy Automático (Recomendado)

1. **Commit e Push das Alterações:**

   ```bash
   git add .
   git commit -m "fix: Add Render configuration for SPA routing"
   git push origin main
   ```

2. **No Render Dashboard:**
   - Acesse: https://dashboard.render.com
   - Clique em "New +" → "Static Site"
   - Conecte seu repositório GitHub
   - O Render detectará automaticamente o `render.yaml`
   - Clique em "Create Static Site"

### Opção 2: Deploy Manual no Render

Se você já tem um site criado no Render, configure:

1. **Build Command:**

   ```
   npm install && npm run build
   ```

2. **Publish Directory:**

   ```
   dist
   ```

3. **Rewrite Rules (Importante!):**
   - Source: `/*`
   - Destination: `/index.html`
   - Action: Rewrite

4. **Environment:**
   - Selecione: `Static`

## 🚀 Após o Deploy

Após fazer o deploy com essas configurações:

- ✅ A página inicial carregará corretamente
- ✅ Todas as rotas funcionarão (`/blog`, `/faq`, `/privacidade`, etc.)
- ✅ Refresh da página funcionará em qualquer rota
- ✅ Links diretos para páginas internas funcionarão

## 🔍 Verificação

Depois do deploy, teste:

1. Página inicial: `https://seu-site.onrender.com/`
2. Blog: `https://seu-site.onrender.com/blog`
3. FAQ: `https://seu-site.onrender.com/faq`
4. Refresh em qualquer página (F5)

Todas devem funcionar perfeitamente! ✅

## 📊 Estrutura do Build

```
dist/
├── _redirects          ← Arquivo crucial para SPAs
├── index.html
├── vite.svg
└── assets/
    ├── index-[hash].css
    └── index-[hash].js
```

## ⚠️ Troubleshooting

Se ainda aparecer página em branco:

1. **Verifique o Console do Navegador (F12):**
   - Procure por erros de JavaScript
   - Verifique se os assets estão carregando

2. **Verifique os Logs do Render:**
   - Acesse: Dashboard → Seu Site → Logs
   - Confirme que o build foi bem-sucedido

3. **Limpe o Cache:**
   - No Render: Settings → Clear Build Cache → Deploy

4. **Force um Novo Deploy:**
   - Manual Deploy → Clear build cache & deploy

## 🎯 Notas Importantes

- ✅ O arquivo `_redirects` é copiado automaticamente de `public/` para `dist/` durante o build
- ✅ React Router DOM está configurado com `BrowserRouter` (rotas limpas sem `#`)
- ✅ Todas as páginas estão traduzidas para inglês
- ✅ Build otimizado para produção (gzip ativado)

---

**Status:** ✅ Pronto para Deploy
**Última Atualização:** 13 de Fevereiro de 2026
