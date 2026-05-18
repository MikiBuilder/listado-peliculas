import type { FilterState, Genre, SortKey } from '../types'
import { ALL_GENRES } from '../data/movies'
import styles from './FilterBar.module.css'

interface Props {
  filters: FilterState
  onQueryChange: (q: string) => void
  onGenreChange: (g: Genre | 'All') => void
  onSortChange: (key: SortKey) => void
  onReset: () => void
  resultCount: number
}

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'rating', label: 'Rating' },
  { key: 'year', label: 'Year' },
  { key: 'title', label: 'Title' },
]

export function FilterBar({
  filters,
  onQueryChange,
  onGenreChange,
  onSortChange,
  onReset,
  resultCount,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchRow}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon} aria-hidden="true">⌕</span>
          <input
            type="search"
            className={styles.input}
            placeholder="Search by title or director…"
            value={filters.query}
            onChange={e => onQueryChange(e.target.value)}
            aria-label="Search movies"
          />
        </div>
        <span className={styles.count} aria-live="polite">
          {resultCount} {resultCount === 1 ? 'film' : 'films'}
        </span>
      </div>

      <div className={styles.controls}>
        <div className={styles.genreRow} role="group" aria-label="Filter by genre">
          {ALL_GENRES.map(g => (
            <button
              key={g}
              className={`${styles.genreBtn} ${filters.genre === g ? styles.active : ''}`}
              onClick={() => onGenreChange(g as Genre | 'All')}
              aria-pressed={filters.genre === g}
            >
              {g}
            </button>
          ))}
        </div>

        <div className={styles.sortRow} role="group" aria-label="Sort by">
          <span className={styles.sortLabel}>Sort:</span>
          {SORT_OPTIONS.map(opt => (
            <button
              key={opt.key}
              className={`${styles.sortBtn} ${filters.sortKey === opt.key ? styles.active : ''}`}
              onClick={() => onSortChange(opt.key)}
              aria-pressed={filters.sortKey === opt.key}
            >
              {opt.label}
              {filters.sortKey === opt.key && (
                <span aria-hidden="true">{filters.sortOrder === 'desc' ? ' ↓' : ' ↑'}</span>
              )}
            </button>
          ))}
          <button className={styles.resetBtn} onClick={onReset} aria-label="Reset filters">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
