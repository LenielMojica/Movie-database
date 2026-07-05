#  Netflix-Style Movie App

A responsive Netflix-inspired streaming UI built with **React** and the **TMDB API**. Browse trending movies and shows, watch trailers on hover, search the catalog, save titles to your list, and open a full detail modal — all with a Netflix-like look and feel.

> The application lives in the [`mi-app/`](mi-app) directory.

##  Features

- **Dynamic hero banner** — a random trending title with an autoplaying trailer on hover and an ambient background color sampled from the artwork (`fast-average-color`).
- **Category rows** — horizontally scrollable carousels generated per category (Popular, Trending, Top Rated, etc.).
- **Card hover preview** — trailer playback plus a quick-actions panel (Play, add to My List, Like, more info).
- **URL-driven detail modal** — opens on `?item=<id>&type=<movie|tv>`, so it overlays any page and is shareable/refreshable. Shows trailer, cast, genres, runtime/seasons, and rating. Closes with the ✕, backdrop click, or `Escape`, with background scroll locked and a smooth open animation.
- **Search** — live multi-search (movies + shows) with a results grid and genre banner.
- **My List** — add/remove titles, with a dedicated empty state.
- **Loading skeletons** — composed from a reusable `SkeletonBox` (grid / row / hero / modal variants).
- **Responsive navbar** — collapsible menus, animated search input, and a Netflix-style dark theme throughout.

##  Tech Stack

| Area | Tools |
|------|-------|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| Data | [TMDB API](https://developer.themoviedb.org/) |
| Media | react-player |
| Icons | lucide-react, react-icons |

# Netflix-Style Movie App

 **[Live Demo](https://movie-database-black-eight.vercel.app/)** · Built with React + TMDB

##  Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Setup

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd "Movie database/mi-app"

# 2. Install dependencies
npm install

# 3. Add your TMDB key (see below), then start the dev server
npm run dev
```

### Environment variables

Create a `.env` file inside `mi-app/`:

```env
VITE_API_KEY=your_tmdb_api_key_here
```



##  Available Scripts

Run from inside `mi-app/`:

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |


##  License

This project is for educational and portfolio purposes. Movie data and images are provided by [TMDB](https://www.themoviedb.org/); this product uses the TMDB API but is not endorsed or certified by TMDB.
