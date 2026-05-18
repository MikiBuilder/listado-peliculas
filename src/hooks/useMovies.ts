import { useState, useMemo } from 'react'
import { MOVIES } from '../data/movies'
import type { FilterState, Genre, SortKey } from '../types'

const DEFAULT_FILTERS: FilterState = {
  query: '',
  genre: 'All',
  sortKey: 'rating',
  sortOrder: 'desc',
}

export function useMovies() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS)

  const filteredMovies = useMemo(() => {
    return MOVIES
      .filter(movie => {
        const matchesQuery =
          movie.title.toLowerCase().includes(filters.query.toLowerCase()) ||
          movie.director.toLowerCase().includes(filters.query.toLowerCase())
        const matchesGenre = filters.genre === 'All' || movie.genre === filters.genre
        return matchesQuery && matchesGenre
      })
      .sort((a, b) => {
        const key = filters.sortKey
        const order = filters.sortOrder === 'asc' ? 1 : -1
        if (a[key] < b[key]) return -1 * order
        if (a[key] > b[key]) return 1 * order
        return 0
      })
  }, [filters])

  const setQuery = (query: string) => setFilters(f => ({ ...f, query }))
  const setGenre = (genre: Genre | 'All') => setFilters(f => ({ ...f, genre }))
  const setSortKey = (sortKey: SortKey) =>
    setFilters(f => ({
      ...f,
      sortKey,
      sortOrder: f.sortKey === sortKey && f.sortOrder === 'desc' ? 'asc' : 'desc',
    }))
  const reset = () => setFilters(DEFAULT_FILTERS)

  return { movies: filteredMovies, filters, setQuery, setGenre, setSortKey, reset }
}
