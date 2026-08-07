# Work With Eli Co — Portfolio (Next.js)

Portfolio website for **Leopoldo Alcantara Jr.**, Product Sourcing Specialist.

Built with **Next.js 14 (App Router)** + React 18. No extra dependencies.

## Project structure

```
app/
  layout.js        # Root layout, fonts (next/font), SEO metadata
  page.js          # Home page assembling all sections
  globals.css      # Design system (Seafoam → Abyss teal palette)
components/
  Header.js        # Sticky nav + mobile menu (client)
  Hero.js          # Hero + benefits card + wave divider
  Services.js      # 5 services
  Process.js       # 5-step process
  Portfolio.js     # 18 sourced products with category filters (client)
  About.js         # About Leopoldo
  Cta.js           # Contact CTA (email + WhatsApp)
  Footer.js
  Icon.js          # Shared SVG icon set
data/
  products.js      # All 18 products + categories
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy: GitHub → Vercel → GoDaddy domain

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/workwitheli-portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → sign in with GitHub.
2. **Add New → Project** → import `workwitheli-portfolio`.
3. Vercel auto-detects Next.js — keep the defaults and click **Deploy**.
4. You'll get a live `*.vercel.app` URL in about a minute.

### 3. Connect your GoDaddy domain
1. In Vercel: **Project → Settings → Domains → Add** — enter your domain,
   e.g. `workwithelico.net`, and again for `www.workwithelico.net`.
2. In GoDaddy: **My Products → your domain → DNS → Manage DNS**, then add:
   - **A record** — Name: `@` → Value: `76.76.21.21`
   - **CNAME record** — Name: `www` → Value: `cname.vercel-dns.com`

   Delete any conflicting records for `@` and `www` first (including
   GoDaddy's default "Parked" A record and any "Forwarding" setup).
3. Back in Vercel, the domain will verify automatically once DNS propagates
   (minutes to a few hours). SSL is issued automatically.

### Updating the site
Edit any file, then:
```bash
git add -A && git commit -m "Update" && git push
```
Vercel redeploys automatically on every push to `main`.

## Adding product photos

Product cards display real photos from `public/products/`. Drop in JPG files
named exactly after each product's id — the full list is in
`public/products/README.txt` (e.g. `press-on-nails.jpg`, `crystal-nails.jpg`).
Square images around 800x800 look best. Any product without a photo
automatically shows a styled icon tile instead, so nothing breaks.

After adding photos:
```bash
git add . ; git commit -m "Add product photos" ; git push
```

## Editing content

- **Products** — edit `data/products.js` (add/remove entries; each needs
  `id`, `name`, `category`, `icon`, `description`).
- **Colors** — edit CSS variables at the top of `app/globals.css`.
- **Contact details** — appear in `components/Cta.js` and `components/Footer.js`.
