# 🚀 Guia Rápido de Deploy

## Opções de Deploy Gratuitas

### 1. Vercel (Mais Rápido e Recomendado) ⚡

**Via Dashboard:**

1. Acesse https://vercel.com
2. Faça login com GitHub
3. Clique em "Add New Project"
4. Importe seu repositório
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Clique em "Deploy"

**Via CLI:**

```bash
npm i -g vercel
vercel login
vercel
```

### 2. Netlify 🔷

**Via Dashboard:**

1. Acesse https://netlify.com
2. Faça login
3. "Add new site" → "Import an existing project"
4. Conecte ao GitHub
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

**Via CLI:**

```bash
npm i -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages 📄

1. Atualize `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/modelo-agrotech/", // nome do seu repositório
});
```

2. Instale gh-pages:

```bash
npm i -D gh-pages
```

3. Adicione ao `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:

```bash
npm run deploy
```

5. Configure no GitHub:
   - Settings → Pages → Source: gh-pages branch

### 4. Render 🎨

1. Acesse https://render.com
2. New → Static Site
3. Conecte ao GitHub
4. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Deploy

## ⚙️ Configurações Importantes

### Para Vercel

Crie `vercel.json` na raiz:

```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

### Para Netlify

Crie `netlify.toml` na raiz:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📝 Checklist Antes do Deploy

- [ ] Testar localmente: `npm run dev`
- [ ] Testar build: `npm run build`
- [ ] Verificar preview: `npm run preview`
- [ ] Atualizar informações de contato
- [ ] Personalizar cores e textos
- [ ] Adicionar favicon personalizado
- [ ] Configurar analytics (opcional)
- [ ] Testar formulário de contato

## 🔗 Links Úteis

- **Documentação Vite**: https://vitejs.dev
- **Documentação TailwindCSS**: https://tailwindcss.com
- **Documentação React**: https://react.dev

## 💡 Dicas

1. **Vercel** é melhor para CI/CD automático
2. **Netlify** tem bom suporte para formulários
3. **GitHub Pages** é gratuito e simples
4. Sempre teste o build localmente antes do deploy
5. Use variáveis de ambiente para dados sensíveis

## 🐛 Solução de Problemas

**Build falha:**

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Erro de rotas:**

- Configure redirects/rewrites na plataforma
- Verifique o `base` no vite.config.js

**CSS não carrega:**

- Limpe cache do navegador
- Verifique import do index.css no main.jsx
