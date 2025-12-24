# Delhi47 Website

A simple, fast, and responsive company website for Delhi47 built with Vite, React, and TypeScript. It includes core pages (Home, Products, About, Contact), a navigation bar, footer, and a WhatsApp quick-contact button.

## Features

- Fast dev/build with Vite
- Modern React 19 + TypeScript
- Client-side routing via `react-router-dom`
- Responsive `Navbar` and `Footer`
- WhatsApp contact shortcut

## Tech Stack

- Vite 6
- React 19, React DOM
- TypeScript 5
- `react-router-dom` 6
- `lucide-react` icons

## Project Structure

```
.
├─ App.tsx
├─ index.html
├─ index.tsx
├─ constants.ts
├─ types.ts
├─ vite.config.ts
├─ components/
│  ├─ Navbar.tsx
│  ├─ Footer.tsx
│  └─ WhatsAppBtn.tsx
├─ pages/
│  ├─ Home.tsx
│  ├─ Products.tsx
│  ├─ About.tsx
│  └─ Contact.tsx
├─ public/
│  └─ categories/
└─ docs/ (static build output if used)
```

## Getting Started

Prerequisites: Node.js 18+ installed.

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build for production and preview locally:

```bash
npm run build
npm run preview
```

## Routing

Routes are defined in [App.tsx](App.tsx) using `react-router-dom` and point to page components in [pages/](pages).

## Customization

- Update navigation and links in [components/Navbar.tsx](components/Navbar.tsx).
- Edit footer details in [components/Footer.tsx](components/Footer.tsx).
- Change WhatsApp target or visibility in [components/WhatsAppBtn.tsx](components/WhatsAppBtn.tsx).
- Add or adjust product/category assets under [public/categories/](public/categories/).

## Deployment

This site builds to static assets via Vite and can be deployed to any static host (e.g., Vercel, Netlify, Cloudflare Pages, GitHub Pages). Use `npm run build` and deploy the `dist/` folder.

## Notes

- No external API keys are required.
- The `docs/` folder may contain prebuilt assets if publishing with GitHub Pages.
