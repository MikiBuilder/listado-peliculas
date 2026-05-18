import { useMovies } from './hooks/useMovies'
import { MovieCard } from './components/MovieCard'
import { FilterBar } from './components/FilterBar'
import './App.css'

export default function App() {
  const { movies, filters, setQuery, setGenre, setSortKey, reset } = useMovies()

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon" aria-hidden="true">🎬</span>
            <span className="logo-text">CineList</span>
          </div>
          <p className="tagline">A curated collection of great cinema</p>
        </div>
      </header>

      <main className="main">
        <FilterBar
          filters={filters}
          onQueryChange={setQuery}
          onGenreChange={setGenre}
          onSortChange={setSortKey}
          onReset={reset}
          resultCount={movies.length}
        />

        {movies.length === 0 ? (
          <div className="empty" role="status">
            <span className="empty-icon" aria-hidden="true">🔍</span>
            <p>No films match your search. <button onClick={reset} className="link-btn">Clear filters</button></p>
          </div>
        ) : (
          <ul className="movie-list" aria-label="Movie results">
            {movies.map(movie => (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="site-footer">
        <span>Built with React + TypeScript · </span>
        <a
          href="https://github.com/tu-usuario/movie-lister"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </footer>
    </div>
  )
}
