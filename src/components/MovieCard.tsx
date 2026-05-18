import type { Movie } from '../types'
import styles from './MovieCard.module.css'

interface Props {
  movie: Movie
}

function StarRating({ rating }: { rating: number }) {
  const stars = Math.round(rating / 2) // 10 → 5 stars
  return (
    <span className={styles.stars} aria-label={`Rating: ${rating} out of 10`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < stars ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      ))}
    </span>
  )
}

export function MovieCard({ movie }: Props) {
  return (
    <article className={styles.card} data-testid="movie-card">
      <div className={styles.poster} aria-hidden="true">
        {movie.poster}
      </div>

      <div className={styles.body}>
        <header className={styles.header}>
          <h2 className={styles.title}>{movie.title}</h2>
          <span className={styles.genre}>{movie.genre}</span>
        </header>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <span className={styles.metaLabel}>Dir.</span> {movie.director}
          </span>
          <span className={styles.metaItem}>
            <span className={styles.metaLabel}>Year</span> {movie.year}
          </span>
          <span className={styles.metaItem}>
            <span className={styles.metaLabel}>Run.</span> {movie.duration} min
          </span>
        </div>

        <p className={styles.synopsis}>{movie.synopsis}</p>

        <footer className={styles.footer}>
          <StarRating rating={movie.rating} />
          <span className={styles.ratingNum}>{movie.rating.toFixed(1)} / 10</span>
        </footer>
      </div>
    </article>
  )
}
