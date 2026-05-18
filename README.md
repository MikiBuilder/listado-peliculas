# 🎬 Listado-Películas — Movie Lister

![CI](https://github.com/tu-usuario/movie-lister/actions/workflows/ci.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vitest](https://img.shields.io/badge/Tested_with-Vitest-6E9F18?logo=vitest&logoColor=white)

A clean, production-grade movie explorer built with **React 18 + TypeScript**. Features real-time filtering, multi-key sorting, and a fully accessible UI — deployed automatically via GitHub Actions.

**[→ Live demo](https://tu-usuario.github.io/movie-lister)**

---

## Features

- 🔍 **Search** by title or director (case-insensitive)
- 🎭 **Filter** by genre with toggle buttons
- ↕️ **Sort** by rating, year, or title (ascending/descending)
- ♿ **Accessible** — ARIA roles, live regions, keyboard navigation
- ✅ **20 tests** covering the hook, components, and integration
- 🚀 **CI/CD** — GitHub Actions runs tests + deploys on every push to `main`

## Tech stack

| Layer | Technology |
|---|---|
| UI | React 18, TypeScript 5 |
| Styling | CSS Modules + Google Fonts |
| State & logic | Custom hook (`useMovies`) + `useMemo` |
| Testing | Vitest, Testing Library, jsdom |
| Build | Vite 5 |
| Deploy | GitHub Pages via GitHub Actions |

## Getting started

```bash
# Clone and install
git clone https://github.com/tu-usuario/movie-lister.git
cd movie-lister
npm install

# Start dev server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Project structure

```
src/
├── components/
│   ├── MovieCard.tsx       # Individual movie card
│   ├── MovieCard.module.css
│   ├── FilterBar.tsx       # Search + genre + sort controls
│   └── FilterBar.module.css
├── data/
│   └── movies.ts           # Typed movie dataset
├── hooks/
│   └── useMovies.ts        # Filtering & sorting logic
├── types/
│   └── index.ts            # TypeScript interfaces
└── __tests__/
    ├── setup.ts
    ├── useMovies.test.ts   # Hook unit tests
    ├── MovieCard.test.tsx  # Component tests
    └── App.test.tsx        # Integration tests
```

## Design decisions

- **CSS Modules** over Tailwind to keep the bundle minimal and styles scoped
- **`useMemo`** for derived filtered/sorted data — avoids unnecessary re-renders
- **Custom hook** (`useMovies`) isolates all business logic and makes it independently testable
- **TypeScript strict mode** — no `any`, all props and state are fully typed
- **Semantic HTML** — `<article>`, `<header>`, `<main>`, `<footer>` for accessibility

## Deploy to GitHub Pages

1. Push to `main` — the CI workflow runs automatically
2. Go to **Settings → Pages** → Source: **GitHub Actions**
3. Your app will be live at `https://tu-usuario.github.io/movie-lister`

---

Made with ☕ and TypeScript · [tu-usuario](https://github.com/tu-usuario)
