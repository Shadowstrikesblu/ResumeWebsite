# 🚀 Guide de Déploiement - Comment Mettre Votre Site en Ligne

## 🎯 **Méthodes de Déploiement Recommandées**

---

## **🔥 Méthode 1: Vercel (Le Plus Facile)**

### Pourquoi Vercel ?
- ✅ Créé par l'équipe Next.js
- ✅ Déploiement automatique depuis GitHub
- ✅ HTTPS gratuit
- ✅ CDN mondial
- ✅ Domaine gratuit (.vercel.app)

### Étapes de déploiement :

#### **Option A: Via le site web (Recommandé)**
1. **Allez sur [vercel.com](https://vercel.com)**
2. **Connectez-vous avec GitHub**
3. **Cliquez sur "Import Project"**
4. **Sélectionnez votre repository "ResumeWebsite"**
5. **Cliquez "Deploy"**
6. **✨ Votre site sera en ligne en 2 minutes !**

#### **Option B: Via la ligne de commande**
```bash
# Dans votre dossier de projet
npx vercel

# Suivez les instructions :
# - Set up and deploy? Y
# - Which scope? (Your account)
# - Link to existing project? N
# - What's your project's name? ResumeWebsite
# - In which directory is your code located? ./
```

### **Votre URL sera :** `https://your-project-name.vercel.app`

---

## **🌐 Méthode 2: Netlify**

### Avantages :
- ✅ Interface simple
- ✅ Déploiement depuis GitHub
- ✅ HTTPS gratuit
- ✅ Formulaires de contact intégrés

### Étapes :
1. **Allez sur [netlify.com](https://netlify.com)**
2. **Connectez-vous avec GitHub**
3. **"New site from Git" → GitHub**
4. **Sélectionnez "ResumeWebsite"**
5. **Build command:** `npm run build`
6. **Publish directory:** `out` ou `.next`
7. **Deploy site**

---

## **☁️ Méthode 3: GitHub Pages**

### Configuration requise :
```bash
npm install --save-dev gh-pages
```

### Ajoutez dans package.json :
```json
{
  "scripts": {
    "export": "next export",
    "deploy": "npm run build && npm run export && gh-pages -d out"
  }
}
```

### Déployez :
```bash
npm run deploy
```

### **Votre URL sera :** `https://username.github.io/ResumeWebsite`

---

## **🔧 Méthode 4: Railway**

### Étapes :
1. **Allez sur [railway.app](https://railway.app)**
2. **Connectez GitHub**
3. **"Deploy from GitHub repo"**
4. **Sélectionnez votre projet**
5. **Railway détecte automatiquement Next.js**

---

## **⚡ Préparation avant déploiement**

### 1. **Vérifiez votre configuration Next.js**

Créez/modifiez `next.config.js` :
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### 2. **Testez votre build localement**
```bash
npm run build
npm start
```

### 3. **Vérifiez vos variables d'environnement**
Si vous avez des variables sensibles, ajoutez-les dans :
- Vercel: Settings → Environment Variables
- Netlify: Site settings → Environment variables

---

## **🎨 Configuration du domaine personnalisé**

### Sur Vercel :
1. **Settings → Domains**
2. **Ajoutez votre domaine**
3. **Configurez les DNS chez votre registrar**

### Sur Netlify :
1. **Domain settings → Add custom domain**
2. **Suivez les instructions DNS**

---

## **📊 Monitoring et Analytics**

### Ajoutez Google Analytics :
```javascript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## **🚨 Checklist avant déploiement**

- [ ] **Tests locaux** : `npm run build` fonctionne
- [ ] **Images optimisées** : Tailles appropriées
- [ ] **Liens fonctionnels** : Tous les liens internes marchent
- [ ] **Responsive design** : Testé sur mobile
- [ ] **Performance** : Temps de chargement acceptable
- [ ] **SEO** : Métadonnées correctes
- [ ] **Favicon** : Icône du site ajoutée

---

## **🎯 Recommandation**

**Pour votre portfolio, je recommande Vercel car :**
1. **Déploiement en 1 clic**
2. **Mises à jour automatiques** depuis GitHub
3. **Performance optimale** pour Next.js
4. **Gratuit** pour projets personnels
5. **Support parfait** de toutes les fonctionnalités Next.js

**Votre site sera accessible à :** `https://resume-website-harvey.vercel.app`

---

## **🔄 Workflow recommandé**

1. **Développement local** → `npm run dev`
2. **Commit sur GitHub** → `git push`
3. **Déploiement automatique** → Vercel redéploie
4. **Site mis à jour** en quelques secondes ! ✨

Voulez-vous que je vous aide à déployer maintenant ? 🚀
