# Landing Page Template

A minimal, production-ready **React + Vite landing page template** for fast setup and easy customization. Ideal for prototypes, client demos, or starting any single-page landing project.

---

## Features

- **Minimal, clean structure:** Navbar, Hero, Footer
- **Base CSS system:** Layout reset, root variables, typography, spacing, and buttons
- **Fully responsive** out of the box
- **Placeholder content** ready for your brand
- **Lightweight:** No unnecessary dependencies, no router, no frameworks

---

## Folder Structure

```

landing-page-template/
├── node_modules/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/
│   │       └── Hero.jsx
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173] in your browser.

### 3. Build for Production

```bash
npm run build
npm run preview
```

---

## Usage

- Update root CSS variables in `src/styles/main.css` to match your brand.
- Replace placeholder content in `Hero.jsx` and `Navbar.jsx`.
- Add new sections in `src/components/sections` as needed.
- Structure and order sections in `App.jsx`.

---
