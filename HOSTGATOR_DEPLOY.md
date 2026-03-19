# 🌐 Deploy no HostGator - Guia Completo

## ✅ Passo a Passo

### 1️⃣ Preparar o Build

No seu computador, execute:

```bash
npm run build
```

Isso cria a pasta `dist/` com todos os arquivos otimizados.

### 2️⃣ Acessar o cPanel do HostGator

1. Acesse: `https://seudominio.com.br/cpanel` (ou pelo painel do HostGator)
2. Login com suas credenciais
3. Procure o **Gerenciador de Arquivos** (File Manager)

### 3️⃣ Limpar a Pasta public_html

**⚠️ IMPORTANTE: Faça backup antes!**

1. Entre na pasta `public_html/`
2. Selecione todos os arquivos antigos
3. Delete (ou mova para uma pasta de backup)

### 4️⃣ Upload dos Arquivos

**Método 1: Via Gerenciador de Arquivos (Recomendado)**

1. No cPanel, vá em **Gerenciador de Arquivos**
2. Entre na pasta `public_html/`
3. Clique em **Upload** no menu superior
4. Selecione TODOS os arquivos da pasta `dist/` do seu projeto:
   - `index.html`
   - `.htaccess` ← IMPORTANTE!
   - `vite.svg`
   - `_redirects`
   - Pasta `assets/` completa

**Método 2: Via FTP (FileZilla, etc.)**

1. Configure seu cliente FTP:
   - Host: ftp.seudominio.com.br
   - Usuário: (fornecido pelo HostGator)
   - Senha: (fornecido pelo HostGator)
   - Porta: 21
2. Conecte
3. Navegue até `public_html/`
4. Arraste todos os arquivos da pasta `dist/` para lá

### 5️⃣ Verificar o .htaccess

**MUITO IMPORTANTE:** Certifique-se que o arquivo `.htaccess` foi copiado!

No Gerenciador de Arquivos:

1. Vá em **Configurações** (canto superior direito)
2. Marque "Mostrar Arquivos Ocultos" (Show Hidden Files)
3. Verifique se o arquivo `.htaccess` está em `public_html/`

Se não estiver, você pode criar manualmente:

1. Clique em **+ Arquivo** (New File)
2. Nome: `.htaccess`
3. Edite e cole este conteúdo:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### 6️⃣ Testar o Site

Acesse seu domínio e teste TODAS as páginas:

- ✅ `https://seudominio.com.br/`
- ✅ `https://seudominio.com.br/blog`
- ✅ `https://seudominio.com.br/videos`
- ✅ `https://seudominio.com.br/faq`
- ✅ `https://seudominio.com.br/documentacao`
- ✅ `https://seudominio.com.br/privacidade`
- ✅ `https://seudominio.com.br/termos`
- ✅ `https://seudominio.com.br/cookies`

**Importante:** Teste também o **F5 (refresh)** em cada página!

---

## 📋 Checklist de Deploy

- [ ] Build executado (`npm run build`)
- [ ] Pasta `dist/` criada com sucesso
- [ ] Backup dos arquivos antigos feito
- [ ] Pasta `public_html/` limpa
- [ ] Todos os arquivos da `dist/` enviados
- [ ] Arquivo `.htaccess` presente e visível
- [ ] Página inicial carregando
- [ ] Todas as rotas funcionando
- [ ] Refresh (F5) funcionando em todas as páginas
- [ ] Imagens e CSS carregando
- [ ] Formulário de contato funcionando

---

## 🔍 Resolução de Problemas

### Problema: Página em branco

**Solução:**

1. Abra o Console do navegador (F12)
2. Veja se há erros de carregamento de arquivos
3. Verifique se todos os arquivos da pasta `assets/` foram enviados

### Problema: Erro 404 nas rotas internas

**Solução:**

1. Verifique se o arquivo `.htaccess` existe em `public_html/`
2. Ative "Mostrar Arquivos Ocultos" no cPanel
3. Se não aparecer, crie manualmente como mostrado acima

### Problema: CSS não carrega

**Solução:**

1. Verifique se a pasta `assets/` completa foi enviada
2. Limpe o cache do navegador (Ctrl + F5)
3. Verifique permissões dos arquivos (devem ser 644)

### Problema: "Error establishing database connection"

**Solução:**

- Isso significa que ainda há WordPress ou outro CMS instalado
- Certifique-se de limpar completamente a pasta `public_html/`
- Delete também arquivos `.htaccess` antigos antes de subir o novo

---

## ⚙️ Configurações Opcionais

### Ativar Compressão GZIP (Melhor Performance)

Adicione ao final do seu `.htaccess`:

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### Configurar Cache do Navegador

Adicione ao final do seu `.htaccess`:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### SSL (HTTPS)

No cPanel do HostGator:

1. Procure por "SSL/TLS Status"
2. Ative o SSL gratuito (Let's Encrypt)
3. Aguarde alguns minutos para ativação

Para forçar HTTPS, adicione no início do `.htaccess`:

```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 📦 Estrutura Final em public_html/

```
public_html/
├── .htaccess           ← IMPORTANTE!
├── index.html
├── vite.svg
├── _redirects
└── assets/
    ├── index-[hash].css
    ├── index-[hash].js
    └── (outros arquivos)
```

---

## 🔄 Para Atualizar o Site

Quando você fizer alterações no projeto:

1. Execute `npm run build` novamente
2. Delete os arquivos antigos de `public_html/assets/`
3. Faça upload dos novos arquivos da pasta `dist/`
4. **NÃO delete o `.htaccess`** (a menos que vá substituir)

---

## 💡 Dicas Importantes

✅ **Sempre faça backup** antes de qualquer alteração
✅ **Teste todas as páginas** após o deploy
✅ **Limpe o cache** do navegador para ver mudanças
✅ O arquivo `.htaccess` **já está criado** na pasta `public/` do projeto
✅ Ele será copiado automaticamente para `dist/` durante o build

---

## 📞 Suporte HostGator

Se tiver problemas:

- Chat ao vivo: disponível no painel
- Telefone: 0800 878 3616
- Ticket: via painel do cliente

---

**Status:** ✅ Projeto pronto para HostGator
**Última atualização:** 13 de Fevereiro de 2026
