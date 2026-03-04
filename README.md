# SparrowBridge

**Leading Through Complexity to Build What Lasts**

SparrowBridge is an organization development and leadership advisory firm. This repository contains the official website, built as a modern, high-performance React application.

## 🚀 The ARC Framework™

Our work is centered around a proprietary diagnostic and implementation methodology:
1. **Diagnose:** Identifying hidden dynamics and performance bottlenecks.
2. **Co-design:** Creating human-centered transformation roadmaps.
3. **Implement:** Providing coaching and change facilitation.
4. **Assess:** Embedding sustainable practices for lasting impact.

## 💻 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v3)
- **Language:** TypeScript
- **Routing:** React Router 7

## 📂 Project Structure

The core application is located in the `/sparrowbridge` directory:

- `src/components/`: Modular UI components organized by domain (layout, patterns, typography, etc.).
- `src/pages/`: Main page components (Home, About, Solutions, Insights, Contact, Careers).
- `src/assets/`: Brand assets including logos and icons.

## 🚦 Getting Started

To run the application locally:

```bash
cd sparrowbridge
npm install
npm run dev
```

## 🌐 Deploying to Netlify

1. **Connect the repo** to Netlify (Git provider or manual deploy). Build command and publish directory are in `netlify.toml` (`npm run build`, `dist`).

2. **Enable Netlify Forms** (free tier: 100 submissions/month). In Netlify: **Site settings → Forms → Form detection → Enable form detection**. The contact and careers forms submit to Netlify Forms; no environment variables or third-party services needed.

3. **SPA routing** is handled by `public/_redirects` (all routes serve `index.html`). No extra config needed.

4. View submissions in **Site dashboard → Forms** and optionally set up email or Slack notifications.

---
*Built with purpose, guided by integrity and care.*
